/* ============================================================
   FoodLover - Random Picker (Slot Machine + Simple Dice)
   ============================================================ */

const RandomPicker = {
  isSpinning: false,
  currentMode: 'slot', // 'slot' or 'dice'
  selectedCategory: 'all',
  result: null,
  reelItems: [],

  init() {
    this.bindModeToggle();
    this.bindCategoryFilter();
    this.bindSpinButton();
    this.buildReel();
  },

  /* ========== MODE TOGGLE ========== */
  bindModeToggle() {
    const buttons = document.querySelectorAll('.mode-toggle__btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('mode-toggle__btn--active'));
        btn.classList.add('mode-toggle__btn--active');
        this.currentMode = btn.dataset.mode;
        this.updateModeView();
      });
    });
  },

  updateModeView() {
    const slotView = document.querySelector('.slot-machine');
    const diceView = document.querySelector('.dice-container');
    if (this.currentMode === 'slot') {
      if (slotView) slotView.style.display = 'block';
      if (diceView) diceView.style.display = 'none';
    } else {
      if (slotView) slotView.style.display = 'none';
      if (diceView) diceView.style.display = 'flex';
    }
  },

  /* ========== CATEGORY FILTER ========== */
  bindCategoryFilter() {
    const chips = document.querySelectorAll('.random-filter__chip');
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('random-filter__chip--active'));
        chip.classList.add('random-filter__chip--active');
        this.selectedCategory = chip.dataset.category;
        this.buildReel();
      });
    });
  },

  /* ========== SPIN BUTTON ========== */
  bindSpinButton() {
    const spinBtn = document.getElementById('spin-btn');
    if (spinBtn) {
      spinBtn.addEventListener('click', () => {
        if (this.isSpinning) return;
        if (this.currentMode === 'slot') {
          this.spinSlot();
        } else {
          this.rollDice();
        }
      });
    }

    // "Don't like, spin again" button
    const rerollBtn = document.getElementById('reroll-btn');
    if (rerollBtn) {
      rerollBtn.addEventListener('click', () => {
        if (this.isSpinning) return;
        this.hideResult();
        setTimeout(() => {
          if (this.currentMode === 'slot') {
            this.spinSlot();
          } else {
            this.rollDice();
          }
        }, 300);
      });
    }
  },

  /* ========== BUILD REEL ========== */
  buildReel() {
    const reel = document.querySelector('.slot-machine__reel');
    if (!reel) return;

    const foods = getFoodsByCategory(this.selectedCategory);
    // Duplicate list multiple times for continuous scroll effect
    this.reelItems = [];
    for (let i = 0; i < 5; i++) {
      // Shuffle each batch
      const shuffled = [...foods].sort(() => Math.random() - 0.5);
      this.reelItems.push(...shuffled);
    }

    reel.innerHTML = this.reelItems.map(food => `
      <div class="slot-machine__item">
        <span class="slot-machine__item-emoji">${food.emoji}</span>
        <span class="slot-machine__item-name">${food.name}</span>
      </div>
    `).join('');
  },

  /* ========== SLOT MACHINE SPIN ========== */
  spinSlot() {
    if (this.isSpinning) return;
    this.isSpinning = true;
    this.hideResult();

    const reel = document.querySelector('.slot-machine__reel');
    const spinBtn = document.getElementById('spin-btn');
    const viewport = document.querySelector('.slot-machine__viewport');
    const itemHeight = viewport ? viewport.offsetHeight : 120;

    if (!reel) return;

    spinBtn?.classList.add('spin-btn--spinning');
    spinBtn.textContent = '🎰';

    // Pick random result
    const foods = getFoodsByCategory(this.selectedCategory);
    const resultFood = foods[Math.floor(Math.random() * foods.length)];
    this.result = resultFood;

    // Find the index of this food in the reel (use one in the middle of the reel for better visual)
    let targetIndex = -1;
    for (let i = Math.floor(this.reelItems.length / 2); i < this.reelItems.length; i++) {
      if (this.reelItems[i].id === resultFood.id) {
        targetIndex = i;
        break;
      }
    }
    if (targetIndex === -1) {
      // Fallback: just pick a random position
      targetIndex = Math.floor(this.reelItems.length * 0.7);
    }

    const targetY = -(targetIndex * itemHeight);

    // Reset reel position
    reel.style.transition = 'none';
    reel.style.transform = 'translateY(0)';

    // Force reflow
    void reel.offsetHeight;

    // Animate with GSAP if available, otherwise CSS
    if (typeof gsap !== 'undefined') {
      gsap.to(reel, {
        y: targetY,
        duration: 3 + Math.random(),
        ease: 'power2.inOut',
        onComplete: () => {
          this.onSpinComplete(resultFood);
        }
      });
    } else {
      reel.style.transition = `transform ${3 + Math.random()}s cubic-bezier(0.25, 0.1, 0.25, 1)`;
      reel.style.transform = `translateY(${targetY}px)`;

      const onEnd = () => {
        reel.removeEventListener('transitionend', onEnd);
        this.onSpinComplete(resultFood);
      };
      reel.addEventListener('transitionend', onEnd);
    }

    // Play tick sounds via subtle animation on viewport
    const tickInterval = setInterval(() => {
      if (viewport) {
        viewport.style.borderColor = 'var(--coral)';
        setTimeout(() => {
          viewport.style.borderColor = 'var(--pink-primary)';
        }, 50);
      }
    }, 100);

    setTimeout(() => clearInterval(tickInterval), 3500);
  },

  onSpinComplete(food) {
    this.isSpinning = false;
    const spinBtn = document.getElementById('spin-btn');
    spinBtn?.classList.remove('spin-btn--spinning');
    spinBtn.textContent = 'Quay!';

    // Show result
    this.showResult(food);

    // Fire confetti!
    AnimationController.fireConfetti();
  },

  /* ========== DICE ROLL ========== */
  rollDice() {
    if (this.isSpinning) return;
    this.isSpinning = true;
    this.hideResult();

    const dice = document.querySelector('.dice');
    const spinBtn = document.getElementById('spin-btn');
    spinBtn?.classList.add('spin-btn--spinning');
    spinBtn.textContent = '🎲';

    if (dice) {
      // Remove previous animation
      dice.style.animation = 'none';
      void dice.offsetHeight;

      // Random rotation
      const rotX = 720 + Math.floor(Math.random() * 720);
      const rotY = 720 + Math.floor(Math.random() * 720);

      dice.style.animation = 'none';
      dice.style.transition = 'transform 2s cubic-bezier(0.25, 0.1, 0.25, 1)';
      dice.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    }

    setTimeout(() => {
      // Pick random food
      const foods = getFoodsByCategory(this.selectedCategory);
      const resultFood = foods[Math.floor(Math.random() * foods.length)];
      this.result = resultFood;

      this.isSpinning = false;
      spinBtn?.classList.remove('spin-btn--spinning');
      spinBtn.textContent = 'Quay!';

      this.showResult(resultFood);
      AnimationController.fireConfetti();
    }, 2200);
  },

  /* ========== RESULT DISPLAY ========== */
  showResult(food) {
    const display = document.querySelector('.result-display');
    if (!display) return;

    const emoji = display.querySelector('.result-card__emoji');
    const name = display.querySelector('.result-card__name');
    const desc = display.querySelector('.result-card__desc');

    if (emoji) emoji.textContent = food.emoji;
    if (name) name.textContent = food.name;
    if (desc) desc.textContent = food.desc;

    display.classList.add('result-display--visible');

    // Scroll into view
    display.scrollIntoView({ behavior: 'smooth', block: 'center' });
  },

  hideResult() {
    const display = document.querySelector('.result-display');
    if (display) {
      display.classList.remove('result-display--visible');
    }
  },

  getResult() {
    return this.result;
  },
};

/* ============================================================
   FoodLover - Main Application
   ============================================================ */

const App = {
  selectedFoods: [],
  currentCategory: 'all',
  searchQuery: '',
  currentPage: 1,
  itemsPerPage: 20,

  init() {
    // Initialize modules
    AnimationController.init();
    RandomPicker.init();
    Notifier.init();

    // Bind events
    this.bindNavigation();
    this.bindSearch();
    this.bindCategories();
    this.renderFoodGrid();
    this.bindConfirmSection();
    this.bindScrollIndicator();
    this.bindWelcomeCTA();

    console.log('🍜 FoodLover initialized! Ready for Bé Yêu~');
  },

  /* ========== NAVIGATION ========== */
  bindNavigation() {
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        const target = link.dataset.section;
        AnimationController.scrollToSection(target);

        // Update active state
        navLinks.forEach(l => l.classList.remove('nav__link--active'));
        link.classList.add('nav__link--active');
      });
    });

    // Update active nav on scroll
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(l => l.classList.remove('nav__link--active'));
          const activeLink = document.querySelector(`.nav__link[data-section="${entry.target.id}"]`);
          activeLink?.classList.add('nav__link--active');
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));
  },

  /* ========== WELCOME CTA ========== */
  bindWelcomeCTA() {
    const ctaBrowse = document.getElementById('cta-browse');
    const ctaRandom = document.getElementById('cta-random');

    if (ctaBrowse) {
      ctaBrowse.addEventListener('click', () => {
        AnimationController.scrollToSection('menu');
      });
    }

    if (ctaRandom) {
      ctaRandom.addEventListener('click', () => {
        AnimationController.scrollToSection('random');
      });
    }
  },

  /* ========== SCROLL INDICATOR ========== */
  bindScrollIndicator() {
    const indicator = document.querySelector('.scroll-indicator');
    if (indicator) {
      indicator.addEventListener('click', () => {
        AnimationController.scrollToSection('menu');
      });
    }
  },

  /* ========== SEARCH ========== */
  bindSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;

    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        this.searchQuery = e.target.value;
        this.currentPage = 1; // Reset to page 1 on search
        this.renderFoodGrid();
      }, 200);
    });
  },

  /* ========== CATEGORIES ========== */
  bindCategories() {
    const tabs = document.querySelectorAll('#menu .category-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('category-tab--active'));
        tab.classList.add('category-tab--active');
        this.currentCategory = tab.dataset.category;
        this.searchQuery = '';
        this.currentPage = 1; // Reset to page 1
        const searchInput = document.getElementById('search-input');
        if (searchInput) searchInput.value = '';
        this.renderFoodGrid();
      });
    });
  },

  /* ========== FOOD GRID ========== */
  renderFoodGrid() {
    const grid = document.getElementById('food-grid');
    if (!grid) return;

    let foods;
    if (this.searchQuery) {
      foods = searchFoods(this.searchQuery);
      // Also filter by category if not 'all'
      if (this.currentCategory !== 'all') {
        foods = foods.filter(f => f.category === this.currentCategory);
      }
    } else {
      foods = getFoodsByCategory(this.currentCategory);
    }

    if (foods.length === 0) {
      grid.innerHTML = `
        <div class="no-results">
          <span class="no-results__emoji">😿</span>
          <p class="no-results__text">Không tìm thấy món nào... Thử tìm kiếm khác nha!</p>
        </div>
      `;
      this.renderPagination(0);
      return;
    }

    // Pagination slice
    const totalItems = foods.length;
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const paginatedFoods = foods.slice(startIndex, endIndex);

    grid.innerHTML = paginatedFoods.map(food => {
      const isSelected = this.selectedFoods.some(f => f.id === food.id);
      const badgeClass = CATEGORY_BADGE_MAP[food.category] || 'badge';
      return `
        <div class="food-card visible ${isSelected ? 'food-card--selected' : ''}"
             data-food-id="${food.id}"
             id="food-card-${food.id}">
          <span class="food-card__emoji">${food.emoji}</span>
          <h4 class="food-card__name">${food.name}</h4>
          <p class="food-card__desc">${food.desc}</p>
          <div class="food-card__footer">
            <span class="${badgeClass}">${getCategoryEmoji(food.category)} ${getCategoryName(food.category)}</span>
            <button class="food-card__heart"
                    data-food-id="${food.id}"
                    aria-label="${isSelected ? 'Bỏ chọn' : 'Chọn'} ${food.name}"
                    id="heart-${food.id}">
              ${isSelected ? '💖' : '🤍'}
            </button>
          </div>
        </div>
      `;
    }).join('');

    // Bind card clicks
    this.bindFoodCards();

    // Render pagination
    this.renderPagination(totalItems);
  },

  /* ========== PAGINATION ========== */
  renderPagination(totalItems) {
    const container = document.getElementById('pagination-controls');
    if (!container) return;

    const totalPages = Math.ceil(totalItems / this.itemsPerPage);
    
    if (totalPages <= 1) {
      container.innerHTML = '';
      return;
    }

    let html = '';
    
    // Prev button
    html += `<button class="pagination__btn" data-page="${this.currentPage - 1}" ${this.currentPage === 1 ? 'disabled' : ''}>&laquo;</button>`;

    // Page buttons
    for (let i = 1; i <= totalPages; i++) {
      // Simple logic to not show too many buttons if there are many pages
      if (
        i === 1 || 
        i === totalPages || 
        (i >= this.currentPage - 1 && i <= this.currentPage + 1)
      ) {
        html += `<button class="pagination__btn ${i === this.currentPage ? 'pagination__btn--active' : ''}" data-page="${i}">${i}</button>`;
      } else if (
        i === this.currentPage - 2 || 
        i === this.currentPage + 2
      ) {
        html += `<span class="pagination__dots">...</span>`;
      }
    }

    // Next button
    html += `<button class="pagination__btn" data-page="${this.currentPage + 1}" ${this.currentPage === totalPages ? 'disabled' : ''}>&raquo;</button>`;

    container.innerHTML = html;

    // Bind events
    const btns = container.querySelectorAll('.pagination__btn:not(:disabled)');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const page = parseInt(btn.dataset.page);
        if (page && page !== this.currentPage) {
          this.currentPage = page;
          this.renderFoodGrid();
        }
      });
    });
  },

  /* ========== FOOD CARD INTERACTIONS ========== */
  bindFoodCards() {
    // Card click -> toggle selection
    const cards = document.querySelectorAll('.food-card');
    cards.forEach(card => {
      card.addEventListener('click', (e) => {
        // Don't trigger if clicking heart button
        if (e.target.closest('.food-card__heart')) return;

        const foodId = parseInt(card.dataset.foodId);
        this.toggleFood(foodId);
      });
    });

    // Heart button click
    const hearts = document.querySelectorAll('.food-card__heart');
    hearts.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const foodId = parseInt(btn.dataset.foodId);
        AnimationController.wobble(btn);
        this.toggleFood(foodId);
      });
    });
  },

  /* ========== TOGGLE FOOD SELECTION ========== */
  toggleFood(foodId) {
    const food = getFoodById(foodId);
    if (!food) return;

    const index = this.selectedFoods.findIndex(f => f.id === foodId);
    if (index > -1) {
      this.selectedFoods.splice(index, 1);
    } else {
      this.selectedFoods.push(food);
    }

    // Update card visual
    const card = document.querySelector(`[data-food-id="${foodId}"]`);
    const heart = document.getElementById(`heart-${foodId}`);

    if (card) {
      card.classList.toggle('food-card--selected', index === -1);
    }
    if (heart) {
      heart.textContent = index === -1 ? '🤍' : '💖';
      // Swap: if it was not selected (index === -1), now it IS selected
      heart.textContent = this.selectedFoods.some(f => f.id === foodId) ? '💖' : '🤍';
    }

    // Update selected bar
    this.updateSelectedBar();

    // Update confirm section
    this.updateConfirmSection();

    // Show toast
    if (this.selectedFoods.some(f => f.id === foodId)) {
      this.showToast(`💖 Đã chọn ${food.name}!`);
    } else {
      this.showToast(`Đã bỏ ${food.name}`);
    }
  },

  /* ========== SELECTED BAR ========== */
  updateSelectedBar() {
    const bar = document.querySelector('.selected-bar');
    const countEl = document.querySelector('.selected-bar__count');
    const itemsEl = document.querySelector('.selected-bar__items');

    if (!bar) return;

    if (this.selectedFoods.length > 0) {
      bar.classList.add('selected-bar--visible');
      document.body.classList.add('has-selected-bar');
      if (countEl) countEl.textContent = `${this.selectedFoods.length} món đã chọn`;
      if (itemsEl) {
        itemsEl.innerHTML = this.selectedFoods.map(f =>
          `<span class="selected-bar__item">${f.emoji} ${f.name}</span>`
        ).join('');
      }
    } else {
      bar.classList.remove('selected-bar--visible');
      document.body.classList.remove('has-selected-bar');
    }
  },

  /* ========== CONFIRM SECTION ========== */
  bindConfirmSection() {
    // "Choose this" button from random result
    document.addEventListener('click', (e) => {
      if (e.target.id === 'choose-random-result' || e.target.closest('#choose-random-result')) {
        const result = RandomPicker.getResult();
        if (result) {
          // Add to selection if not already
          if (!this.selectedFoods.some(f => f.id === result.id)) {
            this.selectedFoods.push(result);
          }
          this.updateSelectedBar();
          this.updateConfirmSection();
          AnimationController.scrollToSection('confirm');
          this.showToast(`💖 Đã chọn ${result.name}!`);
        }
      }

      // Remove item from summary
      if (e.target.closest('.summary-card__item-remove')) {
        const foodId = parseInt(e.target.closest('.summary-card__item-remove').dataset.foodId);
        this.selectedFoods = this.selectedFoods.filter(f => f.id !== foodId);
        this.updateSelectedBar();
        this.updateConfirmSection();
        this.renderFoodGrid(); // Re-render to update heart icons
      }
    });

    // Send button
    const sendBtn = document.getElementById('send-btn');
    if (sendBtn) {
      sendBtn.addEventListener('click', () => {
        this.handleSend();
      });
    }

    // Go to confirm from selected bar
    const goConfirmBtn = document.getElementById('go-confirm');
    if (goConfirmBtn) {
      goConfirmBtn.addEventListener('click', () => {
        this.updateConfirmSection();
        AnimationController.scrollToSection('confirm');
      });
    }

    // Clear all selections
    const clearBtn = document.getElementById('clear-all');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        this.selectedFoods = [];
        this.updateSelectedBar();
        this.updateConfirmSection();
        this.renderFoodGrid();
        this.showToast('Đã xóa tất cả lựa chọn');
      });
    }
  },

  updateConfirmSection() {
    const list = document.getElementById('selected-list');
    const emptyState = document.getElementById('confirm-empty');
    const summaryCard = document.querySelector('.summary-card');
    const sendBtn = document.getElementById('send-btn');
    const noteInput = document.querySelector('.note-input');

    if (this.selectedFoods.length === 0) {
      if (list) list.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
      if (summaryCard) summaryCard.style.display = 'none';
      if (sendBtn) sendBtn.style.display = 'none';
      if (noteInput) noteInput.style.display = 'none';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';
    if (summaryCard) summaryCard.style.display = 'block';
    if (sendBtn) sendBtn.style.display = 'inline-flex';
    if (noteInput) noteInput.style.display = 'block';

    if (list) {
      list.innerHTML = this.selectedFoods.map(food => `
        <li class="summary-card__item">
          <span class="summary-card__item-emoji">${food.emoji}</span>
          <div class="summary-card__item-info">
            <div class="summary-card__item-name">${food.name}</div>
            <div class="summary-card__item-desc">${food.desc}</div>
          </div>
          <button class="summary-card__item-remove" data-food-id="${food.id}" aria-label="Xóa ${food.name}">✕</button>
        </li>
      `).join('');
    }
  },

  /* ========== SEND NOTIFICATION ========== */
  async handleSend() {
    if (this.selectedFoods.length === 0) {
      this.showToast('Chưa chọn món nào mà! 😅');
      return;
    }

    const sendBtn = document.getElementById('send-btn');
    const noteTextarea = document.getElementById('note-textarea');
    const note = noteTextarea ? noteTextarea.value : '';

    // Disable button and show loading
    if (sendBtn) {
      sendBtn.disabled = true;
      sendBtn.innerHTML = '<span class="loader" style="width:24px;height:24px;border-width:3px;"></span> Đang gửi...';
    }

    const success = await Notifier.send({
      foods: this.selectedFoods,
      note: note,
    });

    if (sendBtn) {
      sendBtn.disabled = false;
      sendBtn.innerHTML = '💌 Gửi Cho Anh!';
    }

    if (success) {
      this.showSuccess();
    } else {
      this.showToast('Gửi thất bại rồi 😢 Thử lại nha!');
    }
  },

  /* ========== SUCCESS SCREEN ========== */
  showSuccess() {
    const overlay = document.querySelector('.success-overlay');
    if (overlay) {
      overlay.classList.add('success-overlay--visible');
    }

    // Fire celebrations
    AnimationController.fireCelebration();
    AnimationController.floatHearts(document.body);

    // Close button
    const closeBtn = document.getElementById('success-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        overlay.classList.remove('success-overlay--visible');
        // Reset
        this.selectedFoods = [];
        this.updateSelectedBar();
        this.updateConfirmSection();
        this.renderFoodGrid();
        AnimationController.scrollToSection('welcome');
      }, { once: true });
    }
  },

  /* ========== TOAST ========== */
  showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add('toast--visible');

    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => {
      toast.classList.remove('toast--visible');
    }, 2500);
  },
};

/* ========== INIT ON DOM READY ========== */
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

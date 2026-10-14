// UrbanNest - Interactive Room Rental Application Engine
import { ROOMS_DATA, CATEGORIES, CITIES, CURRENCY_RATES } from './data.js';

// Application State
const state = {
  listings: [...ROOMS_DATA],
  activeCategory: 'all',
  searchQuery: '',
  cityFilter: 'All Localities (Pune)',
  roomTypeFilter: 'all',
  guestsFilter: 1,
  maxPriceFilter: 500,
  sortBy: 'recommended',
  wishlist: new Set(JSON.parse(localStorage.getItem('urbannest_wishlist') || '[]')),
  theme: localStorage.getItem('urbannest_theme') || 'light',
  currency: localStorage.getItem('urbannest_currency') || 'INR',
  selectedRoomForDetail: null,
  activeWizardStep: 1,
  newListingData: {
    amenities: []
  }
};

// --- Currency Formatter Utility ---
function formatPrice(amountUSD) {
  const current = CURRENCY_RATES[state.currency] || CURRENCY_RATES.USD;
  const converted = Math.round(amountUSD * current.rate);
  return `${current.symbol}${converted.toLocaleString()}`;
}

// --- Confetti Particle System ---
function triggerConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ['#4f46e5', '#7c3aed', '#ec4899', '#f43f5e', '#10b981', '#f59e0b', '#06b6d4'];

  for (let i = 0; i < 110; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2 - 50,
      radius: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 18,
      vy: (Math.random() - 0.8) * 16,
      gravity: 0.35,
      rotation: Math.random() * 360,
      vRotation: (Math.random() - 0.5) * 10,
      opacity: 1
    });
  }

  let animationFrame;
  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let activeCount = 0;

    particles.forEach(p => {
      p.x += p.vx;
      p.vy += p.gravity;
      p.y += p.vy;
      p.rotation += p.vRotation;
      p.opacity -= 0.007;

      if (p.opacity > 0) {
        activeCount++;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(p.opacity, 0);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.radius, -p.radius, p.radius * 2, p.radius * 2);
        ctx.restore();
      }
    });

    if (activeCount > 0) {
      animationFrame = requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame);
    }
  }

  render();
}

// --- Toast Notification System ---
export function showToast(message, icon = '✨') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span class="toast-message">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'all 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// --- Theme Management ---
function initTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.innerHTML = state.theme === 'dark' ? getMoonIcon() : getSunIcon();
    themeToggle.addEventListener('click', toggleTheme);
  }
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', state.theme);
  localStorage.setItem('urbannest_theme', state.theme);
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.innerHTML = state.theme === 'dark' ? getMoonIcon() : getSunIcon();
  }
  showToast(`Switched to ${state.theme} mode`, state.theme === 'dark' ? '🌙' : '☀️');
}

// --- SVG Icons Helpers ---
function getSunIcon() {
  return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
}

function getMoonIcon() {
  return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
}

function getHeartIcon(filled = false) {
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="${filled ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
}

function getStarIcon() {
  return `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
}

function getChevronIcon(direction = 'right') {
  if (direction === 'left') {
    return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>`;
  }
  return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>`;
}

// --- Category Carousel Setup ---
function renderCategories() {
  const track = document.getElementById('category-track');
  if (!track) return;

  track.innerHTML = CATEGORIES.map(cat => `
    <button class="category-pill ${cat.id === state.activeCategory ? 'active' : ''}" data-cat="${cat.id}">
      <span>${getCategoryEmoji(cat.id)}</span>
      <span>${cat.name}</span>
    </button>
  `).join('');

  track.querySelectorAll('.category-pill').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const cat = e.currentTarget.dataset.cat;
      state.activeCategory = cat;
      renderCategories();
      applyFiltersAndRender();
    });
  });
}

function getCategoryEmoji(catId) {
  const map = {
    all: '✨',
    studio: '🛋️',
    'private-room': '🚪',
    shared: '👥',
    beachfront: '🏖️',
    villa: '🌴',
    penthouse: '🏙️'
  };
  return map[catId] || '🏡';
}

// --- Filter and Search Engine ---
function getFilteredListings() {
  return state.listings.filter(room => {
    // Category match
    if (state.activeCategory !== 'all' && room.category !== state.activeCategory) {
      return false;
    }
    // Locality match
    if (state.cityFilter !== 'All Localities (Pune)' && state.cityFilter !== 'All Cities' && room.city.toLowerCase() !== state.cityFilter.toLowerCase()) {
      return false;
    }
    // Room Type
    if (state.roomTypeFilter !== 'all' && !room.roomType.toLowerCase().includes(state.roomTypeFilter.toLowerCase())) {
      return false;
    }
    // Guests capacity
    if (room.guests < state.guestsFilter) {
      return false;
    }
    // Max Price
    if (room.priceUSD > state.maxPriceFilter) {
      return false;
    }
    // Search query match
    if (state.searchQuery.trim()) {
      const query = state.searchQuery.toLowerCase();
      const match = room.title.toLowerCase().includes(query) ||
                    room.city.toLowerCase().includes(query) ||
                    (room.area && room.area.toLowerCase().includes(query)) ||
                    room.country.toLowerCase().includes(query) ||
                    room.address.toLowerCase().includes(query) ||
                    room.tagline.toLowerCase().includes(query);
      if (!match) return false;
    }
    return true;
  }).sort((a, b) => {
    if (state.sortBy === 'price-low') return a.priceUSD - b.priceUSD;
    if (state.sortBy === 'price-high') return b.priceUSD - a.priceUSD;
    if (state.sortBy === 'rating') return b.rating - a.rating;
    return 0; // recommended
  });
}

// --- Render Listings Grid ---
function applyFiltersAndRender() {
  const filtered = getFilteredListings();
  const countEl = document.getElementById('results-count');
  if (countEl) {
    countEl.innerHTML = `Showing <span>${filtered.length}</span> stunning rooms`;
  }

  const grid = document.getElementById('rooms-grid');
  if (!grid) return;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3 class="empty-title">No rooms found matching your search</h3>
        <p class="empty-desc">Try resetting your filters, expanding your price range, or searching a different city.</p>
        <button class="btn-primary-gradient" id="reset-filters-btn">Reset All Filters</button>
      </div>
    `;
    const resetBtn = document.getElementById('reset-filters-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', resetFilters);
    }
    return;
  }

  grid.innerHTML = filtered.map(room => createRoomCardHTML(room)).join('');
  attachRoomCardListeners(grid);
}

function resetFilters() {
  state.activeCategory = 'all';
  state.cityFilter = 'All Localities (Pune)';
  state.roomTypeFilter = 'all';
  state.guestsFilter = 1;
  state.maxPriceFilter = 500;
  state.searchQuery = '';
  state.sortBy = 'recommended';

  // update DOM inputs
  const cityInput = document.getElementById('search-city');
  if (cityInput) cityInput.value = 'All Localities (Pune)';
  const typeInput = document.getElementById('search-type');
  if (typeInput) typeInput.value = 'all';
  const guestsInput = document.getElementById('search-guests');
  if (guestsInput) guestsInput.value = '1';
  const priceSlider = document.getElementById('price-range-slider');
  if (priceSlider) priceSlider.value = '500';
  const navInput = document.getElementById('nav-search-input');
  if (navInput) navInput.value = '';

  renderCategories();
  applyFiltersAndRender();
  showToast('Filters reset to default', '🔄');
}

// --- Room Card Template ---
function createRoomCardHTML(room) {
  const isWishlisted = state.wishlist.has(room.id);
  const images = room.images && room.images.length > 0 ? room.images : [
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80'
  ];

  return `
    <article class="room-card" data-room-id="${room.id}">
      <div class="card-media">
        <div class="slider-container" data-current-index="0">
          ${images.map(img => `
            <img src="${img}" alt="${room.title}" class="slider-img" loading="lazy" />
          `).join('')}
        </div>
        
        ${images.length > 1 ? `
          <button class="slider-arrow slider-arrow-prev" aria-label="Previous photo">
            ${getChevronIcon('left')}
          </button>
          <button class="slider-arrow slider-arrow-next" aria-label="Next photo">
            ${getChevronIcon('right')}
          </button>
          <div class="slider-dots">
            ${images.map((_, i) => `<span class="slider-dot ${i === 0 ? 'active' : ''}"></span>`).join('')}
          </div>
        ` : ''}

        <div class="card-badges-top">
          ${room.isSuperhost ? `
            <span class="card-badge badge-superhost">
              👑 Superhost
            </span>
          ` : ''}
          ${room.isInstantBook ? `
            <span class="card-badge badge-instant">
              ⚡ Instant Book
            </span>
          ` : ''}
        </div>

        <button class="btn-wishlist ${isWishlisted ? 'active' : ''}" data-room-id="${room.id}" aria-label="Add to wishlist">
          ${getHeartIcon(isWishlisted)}
        </button>
      </div>

      <div class="card-body">
        <div class="card-location-row">
          <span class="card-city">${room.city}, ${room.country}</span>
          <span class="card-rating">
            ${getStarIcon()} ${room.rating.toFixed(2)} (${room.reviewCount})
          </span>
        </div>

        <h3 class="card-title">${room.title}</h3>
        <p class="card-tagline">${room.tagline}</p>

        <div class="card-meta-chips">
          <span class="meta-chip">👥 ${room.guests} ${room.guests === 1 ? 'Guest' : 'Guests'}</span>
          <span class="meta-chip">🛏️ ${room.bedrooms} ${room.bedrooms === 1 ? 'Bed' : 'Beds'}</span>
          <span class="meta-chip">🚿 ${room.baths} Bath</span>
          <span class="meta-chip">📐 ${room.sqft} sqft</span>
        </div>

        <div class="card-footer">
          <div class="card-price-box">
            <span class="card-price-amount">${formatPrice(room.priceUSD)}</span>
            <span class="card-price-period">/ night</span>
          </div>
          <button class="card-cta-btn">View Details</button>
        </div>
      </div>
    </article>
  `;
}

// --- Attach Card Listeners (Slider, Wishlist, Tilt, Modal) ---
function attachRoomCardListeners(container) {
  const cards = container.querySelectorAll('.room-card');

  cards.forEach(card => {
    const roomId = card.dataset.roomId;
    const room = state.listings.find(r => r.id === roomId);

    // 3D Card Hover Tilt Micro-Interaction
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xPercent = (x / rect.width - 0.5) * 8;
      const yPercent = (y / rect.height - 0.5) * -8;
      card.style.transform = `perspective(1000px) rotateX(${yPercent}deg) rotateY(${xPercent}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });

    // Wishlist Toggle
    const wishlistBtn = card.querySelector('.btn-wishlist');
    if (wishlistBtn) {
      wishlistBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleWishlist(roomId, wishlistBtn);
      });
    }

    // Image Slider Buttons
    const sliderContainer = card.querySelector('.slider-container');
    const prevBtn = card.querySelector('.slider-arrow-prev');
    const nextBtn = card.querySelector('.slider-arrow-next');
    const dots = card.querySelectorAll('.slider-dot');
    const imagesCount = room.images ? room.images.length : 1;

    if (sliderContainer && imagesCount > 1) {
      if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          let idx = parseInt(sliderContainer.dataset.currentIndex || '0', 10);
          idx = idx > 0 ? idx - 1 : imagesCount - 1;
          updateSlider(sliderContainer, dots, idx);
        });
      }
      if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          let idx = parseInt(sliderContainer.dataset.currentIndex || '0', 10);
          idx = idx < imagesCount - 1 ? idx + 1 : 0;
          updateSlider(sliderContainer, dots, idx);
        });
      }
    }

    // Open Detailed Modal
    card.addEventListener('click', () => {
      openRoomDetailModal(room);
    });
  });
}

function updateSlider(sliderContainer, dots, newIdx) {
  sliderContainer.dataset.currentIndex = newIdx;
  sliderContainer.style.transform = `translateX(-${newIdx * 100}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === newIdx);
  });
}

// --- Wishlist Management ---
function toggleWishlist(roomId, btnElement) {
  const room = state.listings.find(r => r.id === roomId);
  const wasActive = state.wishlist.has(roomId);

  if (wasActive) {
    state.wishlist.delete(roomId);
    if (btnElement) {
      btnElement.classList.remove('active');
      btnElement.innerHTML = getHeartIcon(false);
    }
    showToast(`Removed "${room.title.slice(0, 24)}..." from wishlist`, '💔');
  } else {
    state.wishlist.add(roomId);
    if (btnElement) {
      btnElement.classList.add('active');
      btnElement.innerHTML = getHeartIcon(true);
    }
    showToast(`Added to your wishlist ❤️`, '❤️');
  }

  localStorage.setItem('urbannest_wishlist', JSON.stringify([...state.wishlist]));
  updateWishlistCountBadge();
  renderWishlistDrawer();
}

function updateWishlistCountBadge() {
  const badge = document.getElementById('wishlist-badge');
  if (badge) {
    badge.textContent = state.wishlist.size;
    badge.style.transform = 'scale(1.4)';
    setTimeout(() => {
      badge.style.transform = 'scale(1)';
    }, 250);
  }
}

// --- Wishlist Slide-Over Drawer ---
function initWishlistDrawer() {
  const openBtn = document.getElementById('open-wishlist-btn');
  const overlay = document.getElementById('wishlist-drawer-overlay');
  const closeBtn = document.getElementById('close-wishlist-btn');

  if (openBtn && overlay) {
    openBtn.addEventListener('click', () => {
      renderWishlistDrawer();
      overlay.classList.add('active');
    });
  }

  if (closeBtn && overlay) {
    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('active');
    });
  }

  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });
  }
}

function renderWishlistDrawer() {
  const container = document.getElementById('wishlist-items-container');
  if (!container) return;

  const wishlistedRooms = state.listings.filter(r => state.wishlist.has(r.id));

  if (wishlistedRooms.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <div style="font-size: 2.5rem; margin-bottom: 0.75rem;">🤍</div>
        <p style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.25rem;">Your wishlist is empty</p>
        <p style="font-size: 0.88rem;">Click the heart icon on any room card to save your favorites!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = wishlistedRooms.map(room => `
    <div class="wishlist-item-card" data-room-id="${room.id}">
      <img src="${room.images[0]}" alt="${room.title}" class="wishlist-thumb" />
      <div class="wishlist-info">
        <div>
          <h4 class="wishlist-item-title">${room.title}</h4>
          <span style="font-size: 0.8rem; color: var(--primary); font-weight: 600;">${room.city}</span>
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 0.5rem;">
          <strong style="color: var(--text-primary);">${formatPrice(room.priceUSD)} <span style="font-size: 0.75rem; font-weight: normal; color: var(--text-muted);">/ night</span></strong>
          <div style="display: flex; gap: 0.5rem;">
            <button class="wishlist-book-btn" style="padding: 0.3rem 0.7rem; background: var(--primary); color: white; border-radius: var(--radius-sm); font-size: 0.78rem; font-weight: 700;">Book</button>
            <button class="wishlist-remove-btn" title="Remove">${getHeartIcon(true)}</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.wishlist-item-card').forEach(card => {
    const roomId = card.dataset.roomId;
    const room = state.listings.find(r => r.id === roomId);

    card.querySelector('.wishlist-book-btn').addEventListener('click', () => {
      document.getElementById('wishlist-drawer-overlay').classList.remove('active');
      openRoomDetailModal(room);
    });

    card.querySelector('.wishlist-remove-btn').addEventListener('click', () => {
      toggleWishlist(roomId);
    });
  });
}

// --- Room Detail Modal Engine ---
function openRoomDetailModal(room) {
  state.selectedRoomForDetail = room;
  const overlay = document.getElementById('detail-modal-overlay');
  if (!overlay) return;

  const content = document.getElementById('detail-modal-body');
  if (!content) return;

  const images = room.images || [];
  const mainImg = images[0] || '';
  const subImg1 = images[1] || images[0];
  const subImg2 = images[2] || images[0];

  content.innerHTML = `
    <div class="modal-gallery">
      <div class="modal-gallery-main">
        <img src="${mainImg}" id="modal-active-img" alt="${room.title}" />
      </div>
      <div class="modal-gallery-sub">
        <img src="${subImg1}" class="gallery-thumb" alt="${room.title} 2" />
      </div>
      <div class="modal-gallery-sub">
        <img src="${subImg2}" class="gallery-thumb" alt="${room.title} 3" />
      </div>
    </div>

    <div class="modal-main-body">
      <div class="modal-left">
        <div>
          <div class="modal-header-meta">
            <span class="card-city">${room.roomType} • ${room.city}, ${room.country}</span>
            <span class="card-rating">${getStarIcon()} ${room.rating.toFixed(2)} (${room.reviewCount} verified reviews)</span>
          </div>
          <h2 class="modal-title">${room.title}</h2>
          <p class="modal-address">📍 ${room.address}</p>
        </div>

        <div class="modal-specs-grid">
          <div class="modal-spec-item">
            <div class="num">${room.guests}</div>
            <div class="label">Guests</div>
          </div>
          <div class="modal-spec-item">
            <div class="num">${room.bedrooms}</div>
            <div class="label">Bedroom</div>
          </div>
          <div class="modal-spec-item">
            <div class="num">${room.baths}</div>
            <div class="label">Bath</div>
          </div>
          <div class="modal-spec-item">
            <div class="num">${room.sqft}</div>
            <div class="label">Sq Ft</div>
          </div>
        </div>

        <!-- Host Box -->
        <div class="host-box">
          <img src="${room.host.avatar}" class="host-avatar" alt="${room.host.name}" />
          <div>
            <div class="host-name">Hosted by ${room.host.name} ${room.host.isSuperhost ? '👑' : ''}</div>
            <div class="host-stats">Member since ${room.host.joinedYear} • ${room.host.responseRate} response rate (${room.host.responseTime})</div>
          </div>
        </div>

        <!-- Description -->
        <div>
          <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem;">About this room</h4>
          <p style="color: var(--text-secondary); line-height: 1.6;">${room.description}</p>
        </div>

        <!-- Amenities -->
        <div class="amenities-section">
          <h4>What this place offers</h4>
          <div class="amenities-grid">
            ${room.amenities.map(item => `
              <div class="amenity-chip">
                <span>✨</span>
                <span>${item}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Reviews Highlight -->
        <div>
          <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.75rem;">Guest Experiences</h4>
          ${room.reviews && room.reviews.length > 0 ? room.reviews.map(rev => `
            <div style="background: var(--bg-secondary); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 0.75rem;">
              <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
                <img src="${rev.avatar}" style="width: 38px; height: 38px; border-radius: 50%;" alt="${rev.author}" />
                <div>
                  <div style="font-weight: 700; font-size: 0.95rem; color: var(--text-primary);">${rev.author}</div>
                  <div style="font-size: 0.78rem; color: var(--text-muted);">${rev.date}</div>
                </div>
              </div>
              <p style="font-size: 0.9rem; color: var(--text-secondary); font-style: italic;">"${rev.comment}"</p>
            </div>
          `).join('') : '<p style="color: var(--text-muted);">No reviews yet.</p>'}
        </div>
      </div>

      <!-- Right Column: Sticky Booking Card -->
      <div class="modal-right">
        <div class="booking-card-widget">
          <div class="booking-widget-header">
            <div>
              <span class="booking-widget-price">${formatPrice(room.priceUSD)}</span>
              <span style="font-size: 0.88rem; color: var(--text-muted);">/ night</span>
            </div>
            <span class="card-rating">${getStarIcon()} ${room.rating.toFixed(2)}</span>
          </div>

          <div class="booking-inputs-box">
            <div class="booking-row">
              <div class="booking-input-cell">
                <label>Check-in</label>
                <input type="date" id="modal-checkin" value="${new Date().toISOString().split('T')[0]}" />
              </div>
              <div class="booking-input-cell">
                <label>Checkout</label>
                <input type="date" id="modal-checkout" value="${new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0]}" />
              </div>
            </div>
            <div class="booking-input-cell">
              <label>Guests</label>
              <select id="modal-guests">
                ${Array.from({ length: room.guests }, (_, i) => i + 1).map(n => `
                  <option value="${n}">${n} ${n === 1 ? 'Guest' : 'Guests'}</option>
                `).join('')}
              </select>
            </div>
          </div>

          <!-- Dynamic Pricing Breakdown -->
          <div class="price-breakdown" id="modal-price-breakdown">
            <!-- Calculated dynamically via JS -->
          </div>

          <button class="btn-book-action" id="modal-reserve-btn">
            ⚡ Reserve Room
          </button>
          <p style="text-align: center; font-size: 0.78rem; color: var(--text-muted); margin-top: 0.75rem;">
            You won't be charged yet • Instant Free Cancellation
          </p>
        </div>
      </div>
    </div>
  `;

  // Gallery interactive thumbnail hover/click
  const mainImgEl = content.querySelector('#modal-active-img');
  content.querySelectorAll('.gallery-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      mainImgEl.src = thumb.src;
    });
  });

  // Calculate pricing breakdown
  const checkinInput = content.querySelector('#modal-checkin');
  const checkoutInput = content.querySelector('#modal-checkout');
  const breakdownEl = content.querySelector('#modal-price-breakdown');

  function calculateTotals() {
    const d1 = new Date(checkinInput.value);
    const d2 = new Date(checkoutInput.value);
    let diffDays = Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
    if (isNaN(diffDays) || diffDays < 1) diffDays = 1;

    const baseCostUSD = room.priceUSD * diffDays;
    const cleaningFeeUSD = 35;
    const serviceFeeUSD = Math.round(baseCostUSD * 0.12);
    const totalUSD = baseCostUSD + cleaningFeeUSD + serviceFeeUSD;

    breakdownEl.innerHTML = `
      <div class="price-breakdown-row">
        <span>${formatPrice(room.priceUSD)} × ${diffDays} ${diffDays === 1 ? 'night' : 'nights'}</span>
        <span>${formatPrice(baseCostUSD)}</span>
      </div>
      <div class="price-breakdown-row">
        <span>Cleaning & Sanitization fee</span>
        <span>${formatPrice(cleaningFeeUSD)}</span>
      </div>
      <div class="price-breakdown-row">
        <span>UrbanNest Service fee (12%)</span>
        <span>${formatPrice(serviceFeeUSD)}</span>
      </div>
      <div class="price-total-row">
        <span>Total (${state.currency})</span>
        <span style="color: var(--primary);">${formatPrice(totalUSD)}</span>
      </div>
    `;
  }

  calculateTotals();
  checkinInput.addEventListener('change', calculateTotals);
  checkoutInput.addEventListener('change', calculateTotals);

  // Reserve Button Click
  const reserveBtn = content.querySelector('#modal-reserve-btn');
  reserveBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
    triggerBookingConfirmation(room, checkinInput.value, checkoutInput.value);
  });

  overlay.classList.add('active');
}

// --- Booking Confirmation Celebration ---
function triggerBookingConfirmation(room, checkIn, checkOut) {
  const successModal = document.getElementById('success-modal-overlay');
  const summaryEl = document.getElementById('success-booking-summary');
  if (!successModal || !summaryEl) return;

  const reservationCode = 'UN-' + Math.floor(100000 + Math.random() * 900000);

  summaryEl.innerHTML = `
    <div style="background: var(--bg-secondary); border-radius: var(--radius-md); padding: 1rem; text-align: left; margin: 1.5rem 0;">
      <div style="display: flex; gap: 0.75rem; align-items: center; margin-bottom: 0.75rem;">
        <img src="${room.images[0]}" style="width: 60px; height: 60px; border-radius: var(--radius-sm); object-fit: cover;" alt="${room.title}" />
        <div>
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary);">${room.title}</h4>
          <span style="font-size: 0.8rem; color: var(--primary); font-weight: 600;">📍 ${room.city}, ${room.country}</span>
        </div>
      </div>
      <div style="border-top: 1px dashed var(--border-color); padding-top: 0.75rem; font-size: 0.85rem; display: flex; flex-direction: column; gap: 0.35rem;">
        <div><strong>Reservation Code:</strong> <span style="color: var(--primary); font-family: monospace;">${reservationCode}</span></div>
        <div><strong>Dates:</strong> ${checkIn} to ${checkOut}</div>
        <div><strong>Host:</strong> ${room.host.name} (Contact sent to your email)</div>
      </div>
    </div>
  `;

  successModal.classList.add('active');
  triggerConfetti();
  showToast('Booking successfully confirmed! 🎉', '🎉');
}

// --- "List Your Room" Multi-Step Modal Engine ---
function initListRoomModal() {
  const openBtn = document.getElementById('open-list-modal-btn');
  const overlay = document.getElementById('list-room-modal-overlay');
  const closeBtn = document.getElementById('close-list-modal-btn');
  const prevBtn = document.getElementById('wizard-prev-btn');
  const nextBtn = document.getElementById('wizard-next-btn');

  if (openBtn && overlay) {
    openBtn.addEventListener('click', () => {
      state.activeWizardStep = 1;
      updateWizardUI();
      overlay.classList.add('active');
    });
  }

  if (closeBtn && overlay) {
    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('active');
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (state.activeWizardStep > 1) {
        state.activeWizardStep--;
        updateWizardUI();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (state.activeWizardStep < 4) {
        state.activeWizardStep++;
        updateWizardUI();
      } else {
        // Final Publish
        publishNewRoom();
      }
    });
  }

  // Amenities chip toggles in wizard
  const amenityToggles = document.querySelectorAll('.amenity-toggle-item');
  amenityToggles.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('checked');
    });
  });

  // Image preview in step 4
  const imgInput = document.getElementById('wizard-image-url');
  const imgPreview = document.getElementById('wizard-image-preview');
  if (imgInput && imgPreview) {
    imgInput.addEventListener('input', () => {
      if (imgInput.value.trim()) {
        imgPreview.src = imgInput.value.trim();
        imgPreview.style.display = 'block';
      }
    });
  }
}

function updateWizardUI() {
  // Update step indicators
  for (let i = 1; i <= 4; i++) {
    const dot = document.getElementById(`wizard-dot-${i}`);
    if (dot) dot.classList.toggle('active', i <= state.activeWizardStep);

    const stepContainer = document.getElementById(`wizard-step-${i}`);
    if (stepContainer) {
      stepContainer.style.display = i === state.activeWizardStep ? 'block' : 'none';
    }
  }

  const prevBtn = document.getElementById('wizard-prev-btn');
  const nextBtn = document.getElementById('wizard-next-btn');

  if (prevBtn) {
    prevBtn.style.visibility = state.activeWizardStep === 1 ? 'hidden' : 'visible';
  }
  if (nextBtn) {
    nextBtn.textContent = state.activeWizardStep === 4 ? '🚀 Publish Listing' : 'Next Step →';
  }
}

function publishNewRoom() {
  const title = document.getElementById('wizard-title').value.trim() || 'Modern Designer Room';
  const city = document.getElementById('wizard-city').value.trim() || 'New York';
  const address = document.getElementById('wizard-address').value.trim() || `${city} Center`;
  const category = document.getElementById('wizard-category').value;
  const priceUSD = parseFloat(document.getElementById('wizard-price').value) || 95;
  const guests = parseInt(document.getElementById('wizard-guests').value, 10) || 2;
  const bedrooms = parseInt(document.getElementById('wizard-bedrooms').value, 10) || 1;
  const baths = parseFloat(document.getElementById('wizard-baths').value) || 1;
  const sqft = parseInt(document.getElementById('wizard-sqft').value, 10) || 400;
  const imgUrl = document.getElementById('wizard-image-url').value.trim() ||
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80';

  const selectedAmenities = [];
  document.querySelectorAll('.amenity-toggle-item.checked').forEach(el => {
    selectedAmenities.push(el.dataset.amenity);
  });

  const newRoom = {
    id: 'room-' + Date.now(),
    title,
    tagline: `Newly listed gorgeous ${category} in ${city}`,
    category,
    roomType: category === 'studio' ? 'Entire Studio' : 'Private Room',
    city,
    country: 'Global',
    address,
    priceUSD,
    rating: 5.0,
    reviewCount: 1,
    isSuperhost: true,
    isFeatured: true,
    isInstantBook: true,
    guests,
    bedrooms,
    beds: bedrooms,
    baths,
    sqft,
    images: [imgUrl],
    amenities: selectedAmenities.length > 0 ? selectedAmenities : ['High-speed WiFi', 'Air Conditioning', 'Kitchen'],
    description: `A beautiful and newly listed room located conveniently in ${city}. Equipped with modern furnishings, fast internet, and comfortable bedding.`,
    host: {
      name: 'You (Host)',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      joinedYear: '2026',
      rating: 5.0,
      reviews: 1,
      responseRate: '100%',
      responseTime: 'instant',
      isSuperhost: true
    },
    reviews: []
  };

  state.listings.unshift(newRoom);
  applyFiltersAndRender();

  document.getElementById('list-room-modal-overlay').classList.remove('active');
  triggerConfetti();
  showToast('Congratulations! Your room has been published 🎉', '🏡');
}

// --- Currency Selector ---
function initCurrencySelect() {
  const select = document.getElementById('currency-select');
  if (!select) return;

  select.value = state.currency;
  select.addEventListener('change', (e) => {
    state.currency = e.target.value;
    localStorage.setItem('urbannest_currency', state.currency);
    applyFiltersAndRender();
    renderWishlistDrawer();
    showToast(`Currency changed to ${state.currency}`, '💱');
  });
}

// --- Search Bar Interactivity ---
function initSearchBar() {
  const citySelect = document.getElementById('search-city');
  const typeSelect = document.getElementById('search-type');
  const guestsSelect = document.getElementById('search-guests');
  const searchBtn = document.getElementById('main-search-btn');
  const navSearchInput = document.getElementById('nav-search-input');
  const navSearchBtn = document.getElementById('nav-search-btn');
  const sortSelect = document.getElementById('sort-select');
  const priceSlider = document.getElementById('price-range-slider');
  const priceValueLabel = document.getElementById('price-range-val');

  // Populate city dropdown
  if (citySelect) {
    citySelect.innerHTML = CITIES.map(c => `<option value="${c}">${c}</option>`).join('');
  }

  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      if (citySelect) state.cityFilter = citySelect.value;
      if (typeSelect) state.roomTypeFilter = typeSelect.value;
      if (guestsSelect) state.guestsFilter = parseInt(guestsSelect.value, 10);
      applyFiltersAndRender();
      showToast('Search filters applied', '🔍');
    });
  }

  if (navSearchInput) {
    navSearchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      applyFiltersAndRender();
    });
  }

  if (navSearchBtn && navSearchInput) {
    navSearchBtn.addEventListener('click', () => {
      state.searchQuery = navSearchInput.value;
      applyFiltersAndRender();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      applyFiltersAndRender();
    });
  }

  if (priceSlider && priceValueLabel) {
    priceSlider.addEventListener('input', (e) => {
      state.maxPriceFilter = parseInt(e.target.value, 10);
      priceValueLabel.textContent = formatPrice(state.maxPriceFilter);
      applyFiltersAndRender();
    });
  }
}

// --- FAQ Accordion ---
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    }
  });
}

// --- Newsletter Subscription Form ---
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input');
    if (input && input.value) {
      showToast('Thank you for subscribing to UrbanNest! 💌', '📬');
      input.value = '';
    }
  });
}

// --- Modal Close Button Setup ---
function initModalCloseHandlers() {
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });

    const closeBtn = overlay.querySelector('.modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        overlay.classList.remove('active');
      });
    }
  });

  const successCloseBtn = document.getElementById('success-modal-close-btn');
  if (successCloseBtn) {
    successCloseBtn.addEventListener('click', () => {
      document.getElementById('success-modal-overlay').classList.remove('active');
    });
  }
}

// --- DOM Ready Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initCurrencySelect();
  renderCategories();
  initSearchBar();
  applyFiltersAndRender();
  updateWishlistCountBadge();
  initWishlistDrawer();
  initListRoomModal();
  initModalCloseHandlers();
  initFAQ();
  initNewsletter();
});

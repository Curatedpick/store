// Products Page JavaScript

// Product data (same as main site)
let products = JSON.parse(localStorage.getItem('admin_products')) || [
  {
    id: 1,
    name: 'Sony WH-1000XM5 Wireless Headphones',
    category: 'Audio',
    desc: 'Industry-leading noise cancellation with exceptional sound quality and 30-hour battery life. Perfect for travel and work.',
    price: 278,
    oldPrice: 399,
    rating: 4.8,
    reviews: 12453,
    badge: 'best',
    img: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop',
    url: '#',
    features: ['30-hour battery life', 'Industry-leading ANC', 'Multipoint connection', 'Speak-to-chat technology'],
    stock: 'in-stock',
    priceHistory: [399, 379, 349, 329, 299, 278],
    pros: ['Exceptional noise cancellation', 'Comfortable for long wear', 'Excellent sound quality', 'Long battery life'],
    cons: ['Expensive', 'No aptX support', 'Touch controls can be finicky'],
    tags: ['best-seller', 'premium', 'travel-essential'],
    brand: 'Sony'
  },
  {
    id: 2,
    name: 'Apple MacBook Air M3 15"',
    category: 'Tech',
    desc: 'Strikingly thin design with the power of M3 chip. Up to 18 hours of battery life and a stunning Liquid Retina display.',
    price: 1099,
    oldPrice: 1299,
    rating: 4.9,
    reviews: 8721,
    badge: 'best',
    img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
    url: '#',
    features: ['Apple M3 chip', '18-hour battery', '15.3" Liquid Retina', '1080p FaceTime camera'],
    stock: 'in-stock',
    priceHistory: [1299, 1249, 1199, 1149, 1099],
    pros: ['Incredible performance', 'Amazing battery life', 'Beautiful display', 'Silent operation'],
    cons: ['Limited ports', 'Expensive upgrades', 'No touchscreen'],
    tags: ['best-seller', 'premium', 'student-pick'],
    brand: 'Apple'
  },
  {
    id: 3,
    name: 'Dyson V15 Detect Absolute',
    category: 'Home',
    desc: 'Laser reveals hidden dust. Piezo sensor counts and sizes particles for deep cleaning with scientific proof.',
    price: 549,
    oldPrice: 749,
    rating: 4.7,
    reviews: 5632,
    badge: 'deal',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop',
    url: '#',
    features: ['Laser dust detection', 'Piezo sensor', '60-min runtime', 'HEPA filtration'],
    stock: 'low-stock',
    priceHistory: [749, 699, 649, 599, 549],
    pros: ['Powerful suction', 'Laser shows hidden dust', 'Great filtration', 'Multiple attachments'],
    cons: ['Heavy', 'Expensive', 'Battery life could be better'],
    tags: ['eco-friendly', 'premium', 'allergy-friendly'],
    brand: 'Dyson'
  },
  {
    id: 4,
    name: 'Kindle Scribe (2024)',
    category: 'Tech',
    desc: 'The best Kindle for reading and writing. Beautiful 10.2" glare-free display with adjustable front light.',
    price: 289,
    oldPrice: 389,
    rating: 4.6,
    reviews: 3421,
    badge: 'deal',
    img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop',
    url: '#',
    features: ['10.2" glare-free display', 'Premium pen included', 'Weeks of battery', 'Adjustable warm light'],
    stock: 'in-stock',
    priceHistory: [389, 359, 329, 299, 289],
    pros: ['Large display', 'Great for note-taking', 'Weeks of battery', 'Adjustable warm light'],
    cons: ['No color display', 'Limited app support', 'Pen sold separately for basic model'],
    tags: ['best-seller', 'student-pick', 'productivity'],
    brand: 'Amazon'
  },
  {
    id: 5,
    name: 'Herman Miller Aeron Chair',
    category: 'Office',
    desc: 'The gold standard of ergonomic office chairs. PostureFit SL back support and 8Z Pellicle suspension.',
    price: 1395,
    oldPrice: null,
    rating: 4.9,
    reviews: 9876,
    badge: 'best',
    img: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400&h=400&fit=crop',
    url: '#',
    features: ['PostureFit SL support', '8Z Pellicle mesh', '12-year warranty', 'Fully adjustable'],
    stock: 'in-stock',
    priceHistory: [1395, 1395, 1395, 1395, 1395],
    pros: ['Exceptional ergonomics', '12-year warranty', 'Highly adjustable', 'Breathable mesh'],
    cons: ['Very expensive', 'No headrest included', 'Takes time to adjust'],
    tags: ['premium', 'ergonomic', 'work-from-home'],
    brand: 'Herman Miller'
  },
  {
    id: 6,
    name: 'Samsung Galaxy Watch 6 Classic',
    category: 'Wearables',
    desc: 'Classic rotating bezel returns. Advanced health monitoring with BioActive sensor and sleep coaching.',
    price: 299,
    oldPrice: 399,
    rating: 4.5,
    reviews: 4532,
    badge: 'new',
    img: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop',
    url: '#',
    features: ['Rotating bezel', 'BioActive sensor', 'Sleep coaching', 'Sapphire crystal'],
    stock: 'in-stock',
    priceHistory: [399, 379, 349, 329, 299],
    pros: ['Classic design', 'Comprehensive health tracking', 'Great display', 'Rotating bezel'],
    cons: ['Battery life could be better', 'Limited app selection', 'Requires Samsung phone for full features'],
    tags: ['new-release', 'fitness', 'smart-home'],
    brand: 'Samsung'
  },
  {
    id: 7,
    name: 'Breville Barista Express Impress',
    category: 'Kitchen',
    desc: 'Bean to cup in under a minute. Assisted tamping for the perfect dose every time. Professional results at home.',
    price: 649,
    oldPrice: 799,
    rating: 4.7,
    reviews: 6234,
    badge: 'deal',
    img: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=400&fit=crop',
    url: '#',
    features: ['Assisted tamping', 'Built-in grinder', 'Digital temp control', 'Steam wand'],
    stock: 'low-stock',
    priceHistory: [799, 749, 699, 679, 649],
    pros: ['Professional quality', 'Easy to use', 'Built-in grinder', 'Great milk frothing'],
    cons: ['Expensive', 'Requires regular cleaning', 'Takes up counter space'],
    tags: ['premium', 'coffee-lover', 'best-seller'],
    brand: 'Breville'
  },
  {
    id: 8,
    name: 'Sony A7 IV Mirrorless Camera',
    category: 'Photography',
    desc: 'Full-frame 33MP sensor with real-time Eye AF. 4K 60p video recording and 10fps continuous shooting.',
    price: 1998,
    oldPrice: 2499,
    rating: 4.8,
    reviews: 3214,
    badge: 'best',
    img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop',
    url: '#',
    features: ['33MP full-frame', 'Real-time Eye AF', '4K 60p video', '10fps shooting'],
    stock: 'in-stock',
    priceHistory: [2499, 2399, 2299, 2199, 1998],
    pros: ['Excellent image quality', 'Great autofocus', '4K video', 'Versatile for photo/video'],
    cons: ['Expensive', 'Complex menu system', 'Heavy with lens'],
    tags: ['premium', 'professional', 'content-creator'],
    brand: 'Sony'
  }
];

// State
let filteredProducts = [...products];
let currentView = 'grid';
let itemsPerPage = 12;
let currentPage = 1;
let activeFilters = {
  search: '',
  categories: [],
  priceMin: 0,
  priceMax: 2500,
  ratings: [],
  brands: [],
  badges: [],
  stocks: []
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initializeFilters();
  initializeEventListeners();
  applyFilters();
  updateResultsCount();
});

// Initialize filter options
function initializeFilters() {
  // Get unique categories
  const categories = [...new Set(products.map(p => p.category))].sort();
  const categoryFilters = document.getElementById('categoryFilters');
  categoryFilters.innerHTML = categories.map(cat => `
    <label class="filter-checkbox">
      <input type="checkbox" name="category" value="${cat}">
      <span class="filter-label">${cat}</span>
      <span class="filter-count">(${products.filter(p => p.category === cat).length})</span>
    </label>
  `).join('');

  // Get unique brands
  const brands = [...new Set(products.map(p => p.brand).filter(Boolean))].sort();
  const brandFilters = document.getElementById('brandFilters');
  brandFilters.innerHTML = brands.map(brand => `
    <label class="filter-checkbox">
      <input type="checkbox" name="brand" value="${brand}">
      <span class="filter-label">${brand}</span>
      <span class="filter-count">(${products.filter(p => p.brand === brand).length})</span>
    </label>
  `).join('');
}

// Initialize event listeners
function initializeEventListeners() {
  // Search input
  const searchInput = document.getElementById('productsSearchInput');
  const searchClear = document.getElementById('searchClear');
  
  searchInput.addEventListener('input', (e) => {
    activeFilters.search = e.target.value.toLowerCase();
    searchClear.style.display = e.target.value ? 'flex' : 'none';
    currentPage = 1;
    applyFilters();
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    activeFilters.search = '';
    searchClear.style.display = 'none';
    currentPage = 1;
    applyFilters();
  });

  // Category filters
  document.getElementById('categoryFilters').addEventListener('change', (e) => {
    if (e.target.type === 'checkbox') {
      updateArrayFilter('categories', e.target.value, e.target.checked);
      currentPage = 1;
      applyFilters();
    }
  });

  // Price range
  const priceMin = document.getElementById('priceMin');
  const priceMax = document.getElementById('priceMax');
  const priceRange = document.getElementById('priceRange');
  const priceRangeValue = document.getElementById('priceRangeValue');

  priceMin.addEventListener('input', (e) => {
    activeFilters.priceMin = parseInt(e.target.value) || 0;
    currentPage = 1;
    applyFilters();
  });

  priceMax.addEventListener('input', (e) => {
    activeFilters.priceMax = parseInt(e.target.value) || 2500;
    currentPage = 1;
    applyFilters();
  });

  priceRange.addEventListener('input', (e) => {
    const value = parseInt(e.target.value);
    priceRangeValue.textContent = value;
    activeFilters.priceMax = value;
    priceMax.value = value;
    currentPage = 1;
    applyFilters();
  });

  // Rating filters
  document.getElementById('ratingFilters').addEventListener('change', (e) => {
    if (e.target.type === 'checkbox') {
      updateArrayFilter('ratings', parseFloat(e.target.value), e.target.checked);
      currentPage = 1;
      applyFilters();
    }
  });

  // Brand filters
  document.getElementById('brandFilters').addEventListener('change', (e) => {
    if (e.target.type === 'checkbox') {
      updateArrayFilter('brands', e.target.value, e.target.checked);
      currentPage = 1;
      applyFilters();
    }
  });

  // Badge filters
  document.getElementById('badgeFilters').addEventListener('change', (e) => {
    if (e.target.type === 'checkbox') {
      updateArrayFilter('badges', e.target.value, e.target.checked);
      currentPage = 1;
      applyFilters();
    }
  });

  // Stock filters
  document.getElementById('stockFilters').addEventListener('change', (e) => {
    if (e.target.type === 'checkbox') {
      updateArrayFilter('stocks', e.target.value, e.target.checked);
      currentPage = 1;
      applyFilters();
    }
  });

  // Sort
  document.getElementById('productsSort').addEventListener('change', (e) => {
    applyFilters();
  });

  // View toggle
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentView = btn.dataset.view;
      const grid = document.getElementById('productsGrid');
      grid.classList.remove('grid-view', 'list-view');
      grid.classList.add(`${currentView}-view`);
    });
  });

  // Clear all filters
  document.getElementById('clearAllFilters').addEventListener('click', clearAllFilters);
  document.getElementById('clearSearchBtn').addEventListener('click', clearAllFilters);

  // Load more
  document.getElementById('loadMoreBtn').addEventListener('click', () => {
    currentPage++;
    renderProducts();
  });

  // Filter toggle (mobile)
  document.getElementById('filterToggle').addEventListener('click', () => {
    document.getElementById('filtersSidebar').classList.add('open');
  });

  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  themeToggle?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  // User dropdown
  const userBtn = document.getElementById('userBtn');
  const userDropdown = document.getElementById('userDropdown');
  
  userBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    userDropdown.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!userBtn?.contains(e.target)) {
      userDropdown?.classList.remove('open');
    }
  });

  // Update user dropdown based on login status
  updateUserDropdown();

  // Modal
  document.getElementById('modalClose')?.addEventListener('click', closeModal);
  document.getElementById('modalOverlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'modalOverlay') closeModal();
  });

  // Back to top
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('show', window.scrollY > 500);
  });
  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Update array filter
function updateArrayFilter(filterName, value, isChecked) {
  if (isChecked) {
    if (!activeFilters[filterName].includes(value)) {
      activeFilters[filterName].push(value);
    }
  } else {
    activeFilters[filterName] = activeFilters[filterName].filter(v => v !== value);
  }
}

// Apply filters
function applyFilters() {
  filteredProducts = products.filter(product => {
    // Search filter
    if (activeFilters.search) {
      const searchLower = activeFilters.search;
      const matchesSearch = 
        product.name.toLowerCase().includes(searchLower) ||
        product.desc.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower) ||
        (product.brand && product.brand.toLowerCase().includes(searchLower)) ||
        (product.tags && product.tags.some(tag => tag.toLowerCase().includes(searchLower)));
      
      if (!matchesSearch) return false;
    }

    // Category filter
    if (activeFilters.categories.length > 0) {
      if (!activeFilters.categories.includes(product.category)) return false;
    }

    // Price filter
    if (product.price < activeFilters.priceMin || product.price > activeFilters.priceMax) {
      return false;
    }

    // Rating filter
    if (activeFilters.ratings.length > 0) {
      const minRating = Math.min(...activeFilters.ratings);
      if (product.rating < minRating) return false;
    }

    // Brand filter
    if (activeFilters.brands.length > 0) {
      if (!product.brand || !activeFilters.brands.includes(product.brand)) return false;
    }

    // Badge filter
    if (activeFilters.badges.length > 0) {
      if (!activeFilters.badges.includes(product.badge)) return false;
    }

    // Stock filter
    if (activeFilters.stocks.length > 0) {
      if (!activeFilters.stocks.includes(product.stock)) return false;
    }

    return true;
  });

  // Sort products
  sortProducts();

  // Render
  renderProducts();
  updateActiveFilters();
  updateResultsCount();
}

// Sort products
function sortProducts() {
  const sortBy = document.getElementById('productsSort').value;

  switch (sortBy) {
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    case 'newest':
      filteredProducts.sort((a, b) => b.id - a.id);
      break;
    case 'discount':
      filteredProducts.sort((a, b) => {
        const discountA = a.oldPrice ? ((a.oldPrice - a.price) / a.oldPrice) : 0;
        const discountB = b.oldPrice ? ((b.oldPrice - b.price) / b.oldPrice) : 0;
        return discountB - discountA;
      });
      break;
    case 'name-az':
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-za':
      filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default: // featured
      filteredProducts.sort((a, b) => {
        if (a.badge === 'best' && b.badge !== 'best') return -1;
        if (b.badge === 'best' && a.badge !== 'best') return 1;
        return b.rating - a.rating;
      });
  }
}

// Render products
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const emptyState = document.getElementById('productsEmpty');
  const loadMoreWrap = document.getElementById('loadMoreWrap');

  if (filteredProducts.length === 0) {
    grid.innerHTML = '';
    emptyState.style.display = 'block';
    loadMoreWrap.style.display = 'none';
    return;
  }

  emptyState.style.display = 'none';

  // Pagination
  const endIndex = currentPage * itemsPerPage;
  const productsToShow = filteredProducts.slice(0, endIndex);

  grid.innerHTML = productsToShow.map((p, i) => {
    const badgeClass = p.badge === 'best' ? 'badge-best' : p.badge === 'deal' ? 'badge-deal' : 'badge-new';
    const badgeText = p.badge === 'best' ? 'Top Pick' : p.badge === 'deal' ? 'Great Deal' : 'New';
    const stars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '½' : '');
    
    const stockClass = p.stock === 'in-stock' ? 'stock-in' : p.stock === 'low-stock' ? 'stock-low' : 'stock-out';
    const stockText = p.stock === 'in-stock' ? 'In Stock' : p.stock === 'low-stock' ? 'Low Stock' : 'Out of Stock';
    
    const priceTrend = p.priceHistory && p.priceHistory.length > 1 
      ? (p.priceHistory[p.priceHistory.length - 1] < p.priceHistory[0] ? 'down' : 'up')
      : 'neutral';
    const trendIcon = priceTrend === 'down' ? '↓' : priceTrend === 'up' ? '↑' : '→';
    const trendClass = priceTrend === 'down' ? 'trend-down' : priceTrend === 'up' ? 'trend-up' : 'trend-neutral';
    
    const discount = p.oldPrice ? Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100) : 0;

    return `
      <div class="product-card" style="animation-delay:${i * 0.05}s" data-id="${p.id}">
        <div class="product-img-wrap">
          <span class="product-badge ${badgeClass}">${badgeText}</span>
          ${discount > 0 ? `<span class="product-discount">-${discount}%</span>` : ''}
          <img class="product-img" src="${p.img}" alt="${p.name}" loading="lazy">
          <div class="product-stock ${stockClass}">${stockText}</div>
        </div>
        <div class="product-info">
          <div class="product-category">${p.category}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-desc">${p.desc}</div>
          <div class="product-meta">
            <div class="product-price">
              $${p.price}
              ${p.oldPrice ? `<span class="product-price-old">$${p.oldPrice}</span>` : ''}
              ${priceTrend !== 'neutral' ? `<span class="product-trend ${trendClass}">${trendIcon}</span>` : ''}
            </div>
            <div class="product-rating">
              ${stars} <span>(${p.reviews.toLocaleString()})</span>
            </div>
          </div>
        </div>
        <div class="product-actions">
          <a href="${p.url}" class="product-cta" target="_blank" rel="noopener">View on Amazon</a>
          <button class="product-quickview" data-id="${p.id}" aria-label="Quick view">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
        </div>
      </div>
    `;
  }).join('');

  // Attach quick view listeners
  document.querySelectorAll('.product-quickview').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      openQuickView(id);
    });
  });

  // Show/hide load more button
  if (endIndex < filteredProducts.length) {
    loadMoreWrap.style.display = 'block';
    document.getElementById('showingCount').textContent = productsToShow.length;
    document.getElementById('totalCount').textContent = filteredProducts.length;
  } else {
    loadMoreWrap.style.display = 'none';
  }
}

// Update active filters display
function updateActiveFilters() {
  const container = document.getElementById('activeFilters');
  const tags = [];

  if (activeFilters.search) {
    tags.push({ label: `Search: "${activeFilters.search}"`, filter: 'search' });
  }

  activeFilters.categories.forEach(cat => {
    tags.push({ label: cat, filter: 'categories', value: cat });
  });

  if (activeFilters.priceMin > 0 || activeFilters.priceMax < 2500) {
    tags.push({ label: `$${activeFilters.priceMin} - $${activeFilters.priceMax}`, filter: 'price' });
  }

  activeFilters.ratings.forEach(rating => {
    tags.push({ label: `${rating}+ stars`, filter: 'ratings', value: rating });
  });

  activeFilters.brands.forEach(brand => {
    tags.push({ label: brand, filter: 'brands', value: brand });
  });

  activeFilters.badges.forEach(badge => {
    const badgeLabel = badge === 'best' ? 'Top Pick' : badge === 'deal' ? 'Best Deal' : 'New';
    tags.push({ label: badgeLabel, filter: 'badges', value: badge });
  });

  activeFilters.stocks.forEach(stock => {
    const stockLabel = stock === 'in-stock' ? 'In Stock' : stock === 'low-stock' ? 'Low Stock' : 'Out of Stock';
    tags.push({ label: stockLabel, filter: 'stocks', value: stock });
  });

  container.innerHTML = tags.map(tag => `
    <div class="active-filter-tag">
      ${tag.label}
      <button data-filter="${tag.filter}" data-value="${tag.value || ''}">&times;</button>
    </div>
  `).join('');

  // Attach remove listeners
  container.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      const value = btn.dataset.value;
      removeFilter(filter, value);
    });
  });
}

// Remove filter
function removeFilter(filter, value) {
  if (filter === 'search') {
    activeFilters.search = '';
    document.getElementById('productsSearchInput').value = '';
    document.getElementById('searchClear').style.display = 'none';
  } else if (filter === 'price') {
    activeFilters.priceMin = 0;
    activeFilters.priceMax = 2500;
    document.getElementById('priceMin').value = '';
    document.getElementById('priceMax').value = '';
    document.getElementById('priceRange').value = 2500;
    document.getElementById('priceRangeValue').textContent = '2500';
  } else {
    activeFilters[filter] = activeFilters[filter].filter(v => v.toString() !== value);
    
    // Uncheck checkbox
    const checkbox = document.querySelector(`input[name="${filter.slice(0, -1)}"][value="${value}"]`);
    if (checkbox) checkbox.checked = false;
  }

  currentPage = 1;
  applyFilters();
}

// Clear all filters
function clearAllFilters() {
  activeFilters = {
    search: '',
    categories: [],
    priceMin: 0,
    priceMax: 2500,
    ratings: [],
    brands: [],
    badges: [],
    stocks: []
  };

  // Reset UI
  document.getElementById('productsSearchInput').value = '';
  document.getElementById('searchClear').style.display = 'none';
  document.getElementById('priceMin').value = '';
  document.getElementById('priceMax').value = '';
  document.getElementById('priceRange').value = 2500;
  document.getElementById('priceRangeValue').textContent = '2500';
  document.getElementById('productsSort').value = 'featured';

  // Uncheck all checkboxes
  document.querySelectorAll('.filter-checkbox input').forEach(cb => {
    cb.checked = false;
  });

  currentPage = 1;
  applyFilters();
}

// Update results count
function updateResultsCount() {
  document.getElementById('resultsCount').textContent = filteredProducts.length;
}

// Open quick view modal
function openQuickView(id) {
  const p = products.find(prod => prod.id === id);
  if (!p) return;

  const modal = document.getElementById('modalOverlay');
  const content = document.getElementById('modalContent');
  const stars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '½' : '');

  content.innerHTML = `
    <div class="modal-img-wrap">
      <img class="modal-img" src="${p.img}" alt="${p.name}">
    </div>
    <div class="modal-info">
      <div class="modal-category">${p.category}</div>
      <h2 class="modal-name">${p.name}</h2>
      <div class="modal-rating">
        ${stars} <span>(${p.reviews.toLocaleString()} reviews)</span>
      </div>
      <div class="modal-price">
        $${p.price}
        ${p.oldPrice ? `<span class="modal-price-old">$${p.oldPrice}</span>` : ''}
      </div>
      <p class="modal-desc">${p.desc}</p>
      <ul class="modal-features">
        ${p.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
      <div class="modal-actions">
        <a href="${p.url}" class="btn btn-primary" target="_blank" rel="noopener">View on Amazon</a>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
  const modal = document.getElementById('modalOverlay');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// Update user dropdown
function updateUserDropdown() {
  const userDropdownName = document.getElementById('userDropdownName');
  const userDropdownEmail = document.getElementById('userDropdownEmail');
  const loginLink = document.getElementById('loginLink');
  const registerLink = document.getElementById('registerLink');
  const adminPanelLink = document.getElementById('adminPanelLink');
  const logoutBtn = document.getElementById('logoutBtn');
  const userDropdownDivider = document.getElementById('userDropdownDivider');
  const logoutDivider = document.getElementById('logoutDivider');

  const currentUser = typeof getCurrentUser === 'function' ? getCurrentUser() : null;

  if (currentUser) {
    userDropdownName.textContent = currentUser.name || 'User';
    userDropdownEmail.textContent = currentUser.email || '';
    loginLink.style.display = 'none';
    registerLink.style.display = 'none';
    
    if (currentUser.role === 'admin') {
      adminPanelLink.style.display = 'flex';
      logoutDivider.style.display = 'block';
    }
    
    logoutBtn.style.display = 'flex';
  } else {
    userDropdownName.textContent = 'Guest';
    userDropdownEmail.textContent = 'Not logged in';
    loginLink.style.display = 'flex';
    registerLink.style.display = 'flex';
    adminPanelLink.style.display = 'none';
    logoutBtn.style.display = 'none';
    userDropdownDivider.style.display = 'none';
    logoutDivider.style.display = 'none';
  }
}

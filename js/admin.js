// ============================================
// ADMIN PANEL JAVASCRIPT
// ============================================

// Default credentials
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin123';

// Initialize data from localStorage or use defaults
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
    url: 'https://amazon.com/dp/B09XS7JWHH',
    features: ['30-hour battery life', 'Industry-leading ANC', 'Multipoint connection', 'Speak-to-chat technology']
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
    url: 'https://amazon.com/dp/B0CHX3QBKX',
    features: ['Apple M3 chip', '18-hour battery', '15.3" Liquid Retina', '1080p FaceTime camera']
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
    url: 'https://amazon.com/dp/B09Z4YB3CZ',
    features: ['Laser dust detection', 'Piezo sensor', '60-min runtime', 'HEPA filtration']
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
    url: 'https://amazon.com/dp/B0BHK3KPQZ',
    features: ['10.2" glare-free display', 'Premium pen included', 'Weeks of battery', 'Adjustable warm light']
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
    url: 'https://amazon.com/dp/B000FFRQDQ',
    features: ['PostureFit SL support', '8Z Pellicle mesh', '12-year warranty', 'Fully adjustable']
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
    url: 'https://amazon.com/dp/B0C7FCYR9F',
    features: ['Rotating bezel', 'BioActive sensor', 'Sleep coaching', 'Sapphire crystal']
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
    url: 'https://amazon.com/dp/B0B5YRQZQZ',
    features: ['Assisted tamping', 'Built-in grinder', 'Digital temp control', 'Steam wand']
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
    url: 'https://amazon.com/dp/B09QDN3KQZ',
    features: ['33MP full-frame', 'Real-time Eye AF', '4K 60p video', '10fps shooting']
  }
];

let categories = JSON.parse(localStorage.getItem('admin_categories')) || [
  { icon: '🎧', name: 'Audio', count: 48 },
  { icon: '💻', name: 'Tech', count: 72 },
  { icon: '🏠', name: 'Home', count: 56 },
  { icon: '⌚', name: 'Wearables', count: 34 },
  { icon: '📷', name: 'Photography', count: 29 },
  { icon: '🏋️', name: 'Fitness', count: 41 },
  { icon: '📚', name: 'Office', count: 38 },
  { icon: '🎮', name: 'Gaming', count: 53 },
  { icon: '🍳', name: 'Kitchen', count: 45 },
  { icon: '✈️', name: 'Travel', count: 27 },
  { icon: '🧴', name: 'Self Care', count: 33 },
  { icon: '🔧', name: 'Tools', count: 22 }
];

let editingProductId = null;
let currentSection = 'products';

// ============================================
// AUTHENTICATION
// ============================================

function checkAuth() {
  const isLoggedIn = sessionStorage.getItem('admin_logged_in') === 'true';
  if (isLoggedIn) {
    showDashboard();
  } else {
    showLogin();
  }
}

function showLogin() {
  document.getElementById('loginScreen').style.display = 'flex';
  document.getElementById('adminDashboard').style.display = 'none';
}

function showDashboard() {
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('adminDashboard').style.display = 'flex';
  renderAll();
}

function login(username, password) {
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    sessionStorage.setItem('admin_logged_in', 'true');
    showDashboard();
    showToast('Welcome back, Admin!', 'success');
  } else {
    showToast('Invalid credentials', 'error');
  }
}

function logout() {
  sessionStorage.removeItem('admin_logged_in');
  showLogin();
  showToast('Logged out successfully', 'success');
}

// ============================================
// NAVIGATION
// ============================================

function switchSection(section) {
  currentSection = section;
  
  // Update sidebar links
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.section === section) {
      link.classList.add('active');
    }
  });
  
  // Update page title
  const titles = {
    products: { title: 'Products', subtitle: 'Manage your product catalog' },
    categories: { title: 'Categories', subtitle: 'Organize your products' },
    analytics: { title: 'Analytics', subtitle: 'Track performance metrics' },
    settings: { title: 'Settings', subtitle: 'Configure your site' }
  };
  
  document.getElementById('pageTitle').textContent = titles[section].title;
  document.getElementById('pageSubtitle').textContent = titles[section].subtitle;
  
  // Show/hide sections
  document.querySelectorAll('.content-section').forEach(sec => {
    sec.style.display = 'none';
  });
  document.getElementById(`${section}Section`).style.display = 'block';
  
  // Show/hide add button
  const addBtn = document.getElementById('addProductBtn');
  if (section === 'products') {
    addBtn.style.display = 'flex';
  } else {
    addBtn.style.display = 'none';
  }
}

// ============================================
// RENDERING
// ============================================

function renderAll() {
  renderProductsTable();
  renderCategories();
  updateStats();
  populateCategoryFilter();
  populateCategorySelect();
}

function renderProductsTable() {
  const tbody = document.getElementById('productsTableBody');
  const searchTerm = document.getElementById('productSearch').value.toLowerCase();
  const badgeFilter = document.getElementById('filterBadge').value;
  const categoryFilter = document.getElementById('filterCategory').value;
  
  let filtered = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm) || 
                         p.category.toLowerCase().includes(searchTerm);
    const matchesBadge = badgeFilter === 'all' || p.badge === badgeFilter;
    const matchesCategory = categoryFilter === 'all' || p.category === categoryFilter;
    return matchesSearch && matchesBadge && matchesCategory;
  });
  
  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 40px; color: var(--text-muted);">
          No products found
        </td>
      </tr>
    `;
    return;
  }
  
  tbody.innerHTML = filtered.map(p => `
    <tr>
      <td>
        <div class="product-cell">
          <img src="${p.img}" alt="${p.name}" class="product-image">
          <div class="product-info">
            <div class="product-name">${p.name}</div>
            <div class="product-category">${p.category}</div>
          </div>
        </div>
      </td>
      <td>${p.category}</td>
      <td>
        <span class="price-cell">
          $${p.price}
          ${p.oldPrice ? `<span class="price-old">$${p.oldPrice}</span>` : ''}
        </span>
      </td>
      <td>
        <div class="rating-cell">
          <span class="rating-stars">★ ${p.rating}</span>
          <span class="rating-count">(${p.reviews.toLocaleString()})</span>
        </div>
      </td>
      <td>
        <span class="badge-cell badge-${p.badge}">
          ${p.badge === 'best' ? 'Top Pick' : p.badge === 'deal' ? 'Best Deal' : 'New'}
        </span>
      </td>
      <td>
        <div class="actions-cell">
          <button class="action-btn" onclick="editProduct(${p.id})" title="Edit">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
            </svg>
          </button>
          <button class="action-btn delete" onclick="deleteProduct(${p.id})" title="Delete">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"/>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
            </svg>
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

function renderCategories() {
  const grid = document.getElementById('categoriesGrid');
  grid.innerHTML = categories.map((cat, idx) => `
    <div class="category-card">
      <div class="category-icon">${cat.icon}</div>
      <div class="category-info">
        <div class="category-name">${cat.name}</div>
        <div class="category-count">${cat.count} products</div>
      </div>
      <button class="action-btn delete" onclick="deleteCategory(${idx})" title="Delete">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
  `).join('');
}

function updateStats() {
  document.getElementById('totalProducts').textContent = products.length;
  document.getElementById('topPicks').textContent = products.filter(p => p.badge === 'best').length;
  
  const avgPrice = products.length > 0 
    ? (products.reduce((sum, p) => sum + p.price, 0) / products.length).toFixed(0)
    : 0;
  document.getElementById('avgPrice').textContent = `$${avgPrice}`;
  
  const avgRating = products.length > 0
    ? (products.reduce((sum, p) => sum + p.rating, 0) / products.length).toFixed(1)
    : 0;
  document.getElementById('avgRating').textContent = avgRating;
}

function populateCategoryFilter() {
  const select = document.getElementById('filterCategory');
  const currentValue = select.value;
  select.innerHTML = '<option value="all">All Categories</option>' +
    categories.map(c => `<option value="${c.name}">${c.name}</option>`).join('');
  select.value = currentValue;
}

function populateCategorySelect() {
  const select = document.getElementById('productCategory');
  select.innerHTML = categories.map(c => 
    `<option value="${c.name}">${c.name}</option>`
  ).join('');
}

// ============================================
// PRODUCT CRUD
// ============================================

function openProductModal(product = null) {
  const modal = document.getElementById('productModal');
  const title = document.getElementById('modalTitle');
  const form = document.getElementById('productForm');
  
  if (product) {
    editingProductId = product.id;
    title.textContent = 'Edit Product';
    document.getElementById('productName').value = product.name;
    document.getElementById('productCategory').value = product.category;
    document.getElementById('productDesc').value = product.desc;
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productOldPrice').value = product.oldPrice || '';
    document.getElementById('productRating').value = product.rating;
    document.getElementById('productReviews').value = product.reviews;
    document.getElementById('productImg').value = product.img;
    document.getElementById('productUrl').value = product.url;
    document.getElementById('productBadge').value = product.badge;
    document.getElementById('productFeatures').value = product.features.join('\n');
  } else {
    editingProductId = null;
    title.textContent = 'Add Product';
    form.reset();
  }
  
  modal.classList.add('active');
}

function closeProductModal() {
  document.getElementById('productModal').classList.remove('active');
  editingProductId = null;
}

function saveProduct(e) {
  e.preventDefault();
  
  const product = {
    id: editingProductId || Date.now(),
    name: document.getElementById('productName').value,
    category: document.getElementById('productCategory').value,
    desc: document.getElementById('productDesc').value,
    price: parseFloat(document.getElementById('productPrice').value),
    oldPrice: parseFloat(document.getElementById('productOldPrice').value) || null,
    rating: parseFloat(document.getElementById('productRating').value),
    reviews: parseInt(document.getElementById('productReviews').value),
    img: document.getElementById('productImg').value,
    url: document.getElementById('productUrl').value,
    badge: document.getElementById('productBadge').value,
    features: document.getElementById('productFeatures').value.split('\n').filter(f => f.trim())
  };
  
  if (editingProductId) {
    const index = products.findIndex(p => p.id === editingProductId);
    products[index] = product;
    showToast('Product updated successfully', 'success');
  } else {
    products.push(product);
    showToast('Product added successfully', 'success');
  }
  
  saveData();
  renderAll();
  closeProductModal();
}

function editProduct(id) {
  const product = products.find(p => p.id === id);
  if (product) {
    openProductModal(product);
  }
}

function deleteProduct(id) {
  if (confirm('Are you sure you want to delete this product?')) {
    products = products.filter(p => p.id !== id);
    saveData();
    renderAll();
    showToast('Product deleted', 'success');
  }
}

// ============================================
// CATEGORY CRUD
// ============================================

function openCategoryModal() {
  document.getElementById('categoryModal').classList.add('active');
  document.getElementById('categoryForm').reset();
}

function closeCategoryModal() {
  document.getElementById('categoryModal').classList.remove('active');
}

function saveCategory(e) {
  e.preventDefault();
  
  const category = {
    icon: document.getElementById('categoryIcon').value,
    name: document.getElementById('categoryName').value,
    count: 0
  };
  
  categories.push(category);
  saveData();
  renderAll();
  closeCategoryModal();
  showToast('Category added successfully', 'success');
}

function deleteCategory(index) {
  if (confirm('Are you sure you want to delete this category?')) {
    categories.splice(index, 1);
    saveData();
    renderAll();
    showToast('Category deleted', 'success');
  }
}

// ============================================
// DATA PERSISTENCE
// ============================================

function saveData() {
  localStorage.setItem('admin_products', JSON.stringify(products));
  localStorage.setItem('admin_categories', JSON.stringify(categories));
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================

function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  const icon = type === 'success' 
    ? '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>'
    : '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>';
  
  toast.innerHTML = `
    ${icon}
    <div class="toast-message">${message}</div>
  `;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideIn 0.3s ease-out reverse';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  checkAuth();
  
  // Login form
  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    login(username, password);
  });
  
  // Logout
  document.getElementById('logoutBtn').addEventListener('click', logout);
  
  // Navigation
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      switchSection(link.dataset.section);
    });
  });
  
  // Product modal
  document.getElementById('addProductBtn').addEventListener('click', () => openProductModal());
  document.getElementById('modalClose').addEventListener('click', closeProductModal);
  document.getElementById('cancelBtn').addEventListener('click', closeProductModal);
  document.getElementById('productForm').addEventListener('submit', saveProduct);
  
  // Category modal
  document.getElementById('addCategoryBtn').addEventListener('click', openCategoryModal);
  document.getElementById('categoryModalClose').addEventListener('click', closeCategoryModal);
  document.getElementById('categoryCancelBtn').addEventListener('click', closeCategoryModal);
  document.getElementById('categoryForm').addEventListener('submit', saveCategory);
  
  // Search and filters
  document.getElementById('productSearch').addEventListener('input', renderProductsTable);
  document.getElementById('filterBadge').addEventListener('change', renderProductsTable);
  document.getElementById('filterCategory').addEventListener('change', renderProductsTable);
  
  // Close modals on overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });
  });
});

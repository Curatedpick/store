// Authentication utilities

// Toast notification function
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <div class="toast-icon">${type === 'success' ? '✓' : '✗'}</div>
    <div class="toast-message">${message}</div>
  `;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Get current user
function getCurrentUser() {
  const user = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
  return user ? JSON.parse(user) : null;
}

// Logout user
function logout() {
  localStorage.removeItem('currentUser');
  sessionStorage.removeItem('currentUser');
  showToast('Logged out successfully', 'success');
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1000);
}

// Check if user is admin
function isAdmin() {
  const user = getCurrentUser();
  return user && user.role === 'admin';
}

// Update user data
function updateUser(userId, updates) {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const userIndex = users.findIndex(u => u.id === userId);
  
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...updates };
    localStorage.setItem('users', JSON.stringify(users));
    
    // Update current session if it's the same user
    const currentUser = getCurrentUser();
    if (currentUser && currentUser.userId === userId) {
      const updatedSession = { ...currentUser, ...updates };
      if (localStorage.getItem('currentUser')) {
        localStorage.setItem('currentUser', JSON.stringify(updatedSession));
      } else {
        sessionStorage.setItem('currentUser', JSON.stringify(updatedSession));
      }
    }
    
    return true;
  }
  return false;
}

// Add to user's wishlist
function addToUserWishlist(userId, productId) {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(u => u.id === userId);
  
  if (user) {
    if (!user.wishlist) user.wishlist = [];
    if (!user.wishlist.includes(productId)) {
      user.wishlist.push(productId);
      localStorage.setItem('users', JSON.stringify(users));
      return true;
    }
  }
  return false;
}

// Remove from user's wishlist
function removeFromUserWishlist(userId, productId) {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(u => u.id === userId);
  
  if (user && user.wishlist) {
    user.wishlist = user.wishlist.filter(id => id !== productId);
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }
  return false;
}

// Get user's wishlist
function getUserWishlist(userId) {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(u => u.id === userId);
  return user && user.wishlist ? user.wishlist : [];
}

// Add price alert
function addPriceAlert(userId, productId, targetPrice) {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(u => u.id === userId);
  
  if (user) {
    if (!user.priceAlerts) user.priceAlerts = [];
    user.priceAlerts.push({
      productId,
      targetPrice,
      createdAt: Date.now()
    });
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }
  return false;
}

// Initialize default admin user if not exists
function initializeAdminUser() {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  
  if (!users.find(u => u.email === 'admin@curatedpicks.com')) {
    const adminUser = {
      id: 1,
      firstName: 'Admin',
      lastName: 'User',
      name: 'Admin User',
      email: 'admin@curatedpicks.com',
      password: 'admin123',
      role: 'admin',
      createdAt: Date.now(),
      wishlist: [],
      priceAlerts: []
    };
    
    users.push(adminUser);
    localStorage.setItem('users', JSON.stringify(users));
    console.log('Default admin user created: admin@curatedpicks.com / admin123');
  }
}

// Run on page load
if (typeof window !== 'undefined') {
  initializeAdminUser();
}

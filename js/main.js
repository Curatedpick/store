/* ============================================
   CURATED PICKS — Main JavaScript
   Features: Theme toggle, toasts, countdown, recently viewed, FAQ, cookies
   ============================================ */

// --- PRODUCT DATA ---
// Load from localStorage if available (synced with admin panel), otherwise use defaults
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
  { icon: '🔧', name: 'Tools', count: 22 },
];

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
    videoUrl: 'https://youtube.com/watch?v=example1',
    relatedProducts: [2, 3, 4],
    brand: 'Sony',
    variants: [
      {
        id: '1-black',
        name: 'Black',
        color: '#000000',
        price: 278,
        oldPrice: 399,
        img: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop',
        stock: 'in-stock'
      },
      {
        id: '1-silver',
        name: 'Silver',
        color: '#C0C0C0',
        price: 278,
        oldPrice: 399,
        img: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop',
        stock: 'in-stock'
      },
      {
        id: '1-midnight',
        name: 'Midnight Blue',
        color: '#191970',
        price: 289,
        oldPrice: 409,
        img: 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=400&h=400&fit=crop',
        stock: 'low-stock'
      }
    ]
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
    videoUrl: 'https://youtube.com/watch?v=example2',
    relatedProducts: [1, 5, 6],
    brand: 'Apple',
    variants: [
      {
        id: '2-8-256',
        name: '8GB RAM / 256GB SSD',
        price: 1099,
        oldPrice: 1299,
        stock: 'in-stock'
      },
      {
        id: '2-8-512',
        name: '8GB RAM / 512GB SSD',
        price: 1299,
        oldPrice: 1499,
        stock: 'in-stock'
      },
      {
        id: '2-16-512',
        name: '16GB RAM / 512GB SSD',
        price: 1499,
        oldPrice: 1699,
        stock: 'in-stock'
      },
      {
        id: '2-24-1tb',
        name: '24GB RAM / 1TB SSD',
        price: 1899,
        oldPrice: 2099,
        stock: 'low-stock'
      }
    ]
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
    videoUrl: 'https://youtube.com/watch?v=example3',
    relatedProducts: [1, 2, 7],
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
    videoUrl: 'https://youtube.com/watch?v=example4',
    relatedProducts: [2, 5, 8],
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
    videoUrl: 'https://youtube.com/watch?v=example5',
    relatedProducts: [2, 4, 6],
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
    videoUrl: 'https://youtube.com/watch?v=example6',
    relatedProducts: [2, 7, 8],
    brand: 'Samsung',
    variants: [
      {
        id: '6-43mm',
        name: '43mm',
        price: 299,
        oldPrice: 399,
        stock: 'in-stock'
      },
      {
        id: '6-47mm',
        name: '47mm',
        price: 329,
        oldPrice: 429,
        stock: 'in-stock'
      }
    ]
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
    videoUrl: 'https://youtube.com/watch?v=example7',
    relatedProducts: [3, 4, 8],
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
    videoUrl: 'https://youtube.com/watch?v=example8',
    relatedProducts: [1, 5, 6],
    brand: 'Sony'
  }
];

const trending = [
  { name: 'Anker 737 Power Bank', price: '$129', meta: 'Portable Power' },
  { name: 'LG C3 65" OLED TV', price: '$1,296', meta: 'Home Theater' },
  { name: 'Theragun PRO Plus', price: '$499', meta: 'Recovery' },
  { name: 'Apple AirPods Pro 2', price: '$189', meta: 'Audio' },
  { name: 'Nintendo Switch OLED', price: '$319', meta: 'Gaming' },
  { name: 'iRobot Roomba j7+', price: '$399', meta: 'Smart Home' },
  { name: 'Garmin Fenix 7X', price: '$699', meta: 'Fitness' },
  { name: 'Logitech MX Master 3S', price: '$89', meta: 'Peripherals' },
];

const testimonials = [
  {
    text: "Curated Picks helped me find the perfect laptop. The detailed comparisons saved me hours of research. Ended up with a MacBook Air and couldn't be happier!",
    name: 'Sarah Chen',
    role: 'Software Developer',
    rating: 5,
  },
  {
    text: "I've been following their recommendations for over a year now. Every purchase has been spot-on. The honesty in their reviews is refreshing.",
    name: 'Marcus Johnson',
    role: 'Photographer',
    rating: 5,
  },
  {
    text: "The deals section alone has saved me hundreds of dollars. Found an amazing deal on Sony headphones that I wouldn't have discovered otherwise.",
    name: 'Emily Rodriguez',
    role: 'Marketing Manager',
    rating: 5,
  },
  {
    text: "Finally, a review site that actually tests products instead of just regurgitating specs. Their kitchen appliance reviews are incredibly thorough.",
    name: 'David Kim',
    role: 'Home Chef',
    rating: 5,
  },
  {
    text: "The comparison feature is a game-changer. Being able to see specs side-by-side made my decision so much easier. Highly recommend!",
    name: 'Jessica Taylor',
    role: 'Product Designer',
    rating: 5,
  },
  {
    text: "Love the weekly newsletter. It's like having a knowledgeable friend who happens to be an expert on everything. Never miss an issue.",
    name: 'Alex Thompson',
    role: 'Entrepreneur',
    rating: 5,
  },
];

const faqs = [
  {
    q: 'How do you make money?',
    a: 'We earn commissions from Amazon and other retailers when you purchase products through our links. This doesn\'t affect our recommendations - we only suggest products we genuinely believe in.',
  },
  {
    q: 'Do you accept free products from brands?',
    a: 'We occasionally accept product loans for review purposes, but these are always returned after testing. We never accept free products in exchange for positive reviews. All our recommendations are independent.',
  },
  {
    q: 'How often do you update your recommendations?',
    a: 'We review and update our recommendations monthly, or more frequently if new products are released or prices change significantly. Our deals section is updated hourly.',
  },
  {
    q: 'Can I suggest a product for review?',
    a: 'Absolutely! We love hearing from our readers. Use our contact form to suggest products you\'d like us to test. We prioritize suggestions that multiple readers request.',
  },
  {
    q: 'How do I know your reviews are unbiased?',
    a: 'We follow strict editorial guidelines. Our writers and editors don\'t know which products will perform best in testing. We buy most products ourselves and return loans after review. Our affiliate relationships don\'t influence rankings.',
  },
  {
    q: 'Do you test products internationally?',
    a: 'Currently, we primarily test products available in the US market. We\'re expanding to other regions soon. Prices and availability may vary by location.',
  },
];

const blogArticles = [
  {
    id: 1,
    title: 'Best Wireless Headphones for 2026: Complete Buyer\'s Guide',
    excerpt: 'We tested 25+ wireless headphones to find the best options for every budget and use case. Here\'s what we found.',
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop',
    category: 'Audio',
    date: '2026-01-15',
    readTime: '8 min read',
    url: '#'
  },
  {
    id: 2,
    title: 'MacBook Air vs MacBook Pro: Which One Should You Buy?',
    excerpt: 'A detailed comparison to help you choose between Apple\'s most popular laptops based on your needs and budget.',
    img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop',
    category: 'Tech',
    date: '2026-01-12',
    readTime: '12 min read',
    url: '#'
  },
  {
    id: 3,
    title: '10 Essential Home Office Upgrades for Productivity',
    excerpt: 'Transform your workspace with these proven productivity boosters, from ergonomic chairs to smart lighting.',
    img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=400&fit=crop',
    category: 'Office',
    date: '2026-01-10',
    readTime: '6 min read',
    url: '#'
  },
  {
    id: 4,
    title: 'The Ultimate Coffee Setup: From Beans to Cup',
    excerpt: 'Everything you need to know about building the perfect home coffee setup, whether you\'re a beginner or enthusiast.',
    img: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=600&h=400&fit=crop',
    category: 'Kitchen',
    date: '2026-01-08',
    readTime: '10 min read',
    url: '#'
  },
  {
    id: 5,
    title: 'Smartwatch Buying Guide: Features That Actually Matter',
    excerpt: 'Cut through the marketing hype and learn which smartwatch features are worth paying for.',
    img: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&h=400&fit=crop',
    category: 'Wearables',
    date: '2026-01-05',
    readTime: '7 min read',
    url: '#'
  },
  {
    id: 6,
    title: 'Mirrorless vs DSLR: The Definitive Guide for 2026',
    excerpt: 'We break down the key differences to help you decide which camera system is right for your photography needs.',
    img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop',
    category: 'Photography',
    date: '2026-01-03',
    readTime: '15 min read',
    url: '#'
  }
];

// --- STATE ---
let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
let recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
let currentFilter = 'all';
let currentSort = 'featured';

// --- RENDER FUNCTIONS ---
function renderCategories() {
  const grid = document.getElementById('catGrid');
  if (!grid) return;
  grid.innerHTML = categories.map((c, i) => `
    <div class="cat-card reveal" style="transition-delay:${i * 0.05}s">
      <span class="cat-icon">${c.icon}</span>
      <div class="cat-name">${c.name}</div>
      <div class="cat-count">${c.count} products</div>
    </div>
  `).join('');
}

function getFilteredProducts() {
  let filtered = [...products];
  
  // Basic filter (badge)
  if (currentFilter !== 'all') {
    if (currentFilter === 'in-stock') {
      filtered = filtered.filter(p => p.stock === 'in-stock' || p.stock === 'low-stock');
    } else {
      filtered = filtered.filter(p => p.badge === currentFilter);
    }
  }
  
  // Sorting
  switch (currentSort) {
    case 'price-low':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case 'newest':
      filtered.sort((a, b) => b.id - a.id);
      break;
    case 'discount':
      filtered.sort((a, b) => {
        const discountA = a.oldPrice ? ((a.oldPrice - a.price) / a.oldPrice) : 0;
        const discountB = b.oldPrice ? ((b.oldPrice - b.price) / b.oldPrice) : 0;
        return discountB - discountA;
      });
      break;
  }
  
  return filtered;
}

function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;
  
  const filtered = getFilteredProducts();
  
  grid.innerHTML = filtered.map((p, i) => {
    const badgeClass = p.badge === 'best' ? 'badge-best' : p.badge === 'deal' ? 'badge-deal' : 'badge-new';
    const badgeText = p.badge === 'best' ? 'Top Pick' : p.badge === 'deal' ? 'Great Deal' : 'New';
    const stars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '½' : '');
    const inWishlist = wishlist.includes(p.id);
    
    // Stock status
    const stockClass = p.stock === 'in-stock' ? 'stock-in' : p.stock === 'low-stock' ? 'stock-low' : 'stock-out';
    const stockText = p.stock === 'in-stock' ? 'In Stock' : p.stock === 'low-stock' ? 'Low Stock' : 'Out of Stock';
    
    // Price trend
    const priceTrend = p.priceHistory && p.priceHistory.length > 1 
      ? (p.priceHistory[p.priceHistory.length - 1] < p.priceHistory[0] ? 'down' : 'up')
      : 'neutral';
    const trendIcon = priceTrend === 'down' ? '↓' : priceTrend === 'up' ? '↑' : '→';
    const trendClass = priceTrend === 'down' ? 'trend-down' : priceTrend === 'up' ? 'trend-up' : 'trend-neutral';
    
    // Tags
    const tags = p.tags ? p.tags.slice(0, 3).map(tag => 
      `<span class="product-tag">${tag.replace('-', ' ')}</span>`
    ).join('') : '';
    
    // Discount percentage
    const discount = p.oldPrice ? Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100) : 0;
    
    // Variants
    const hasVariants = p.variants && p.variants.length > 0;
    const variantSelector = hasVariants ? `
      <div class="product-variants">
        <div class="variant-label">Options:</div>
        <div class="variant-options">
          ${p.variants.map((v, idx) => {
            if (v.color) {
              // Color variant - show color swatch
              return `<button class="variant-swatch ${idx === 0 ? 'active' : ''}" 
                data-variant-id="${v.id}" 
                data-variant-price="${v.price}"
                data-variant-old-price="${v.oldPrice || ''}"
                data-variant-img="${v.img || p.img}"
                data-variant-stock="${v.stock}"
                title="${v.name}"
                style="background-color: ${v.color}"></button>`;
            } else {
              // Text variant - show button
              return `<button class="variant-btn ${idx === 0 ? 'active' : ''}" 
                data-variant-id="${v.id}"
                data-variant-price="${v.price}"
                data-variant-old-price="${v.oldPrice || ''}"
                data-variant-stock="${v.stock}">${v.name}</button>`;
            }
          }).join('')}
        </div>
      </div>
    ` : '';
    
    return `
      <div class="product-card" style="animation-delay:${i * 0.1}s" data-id="${p.id}">
        <div class="product-img-wrap">
          <span class="product-badge ${badgeClass}">${badgeText}</span>
          ${discount > 0 ? `<span class="product-discount">-${discount}%</span>` : ''}
          <button class="product-wishlist-btn ${inWishlist ? 'active' : ''}" data-id="${p.id}" aria-label="Add to wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
          <img class="product-img" src="${p.img}" alt="${p.name}" loading="lazy">
          <div class="product-stock ${stockClass}">${stockText}</div>
        </div>
        <div class="product-info">
          <div class="product-category">${p.category}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-desc">${p.desc}</div>
          
          ${tags ? `<div class="product-tags">${tags}</div>` : ''}
          
          ${variantSelector}
          
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
          
          ${p.pros && p.cons ? `
            <div class="product-pros-cons">
              <div class="pros-list">
                <span class="pros-label">✓ Pros</span>
                <ul>${p.pros.slice(0, 2).map(pro => `<li>${pro}</li>`).join('')}</ul>
              </div>
            </div>
          ` : ''}
        </div>
        <div class="product-actions">
          <a href="${p.url}" class="product-cta" target="_blank" rel="noopener" data-id="${p.id}">View on Amazon</a>
          <button class="product-quickview" data-id="${p.id}" aria-label="Quick view">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
        </div>
      </div>
    `;
  }).join('');
  
  attachProductListeners();
}

function renderTrending() {
  const grid = document.getElementById('trendingGrid');
  if (!grid) return;
  grid.innerHTML = trending.map((t, i) => `
    <div class="trending-card reveal" style="transition-delay:${i * 0.06}s">
      <div class="trending-rank">${String(i + 1).padStart(2, '0')}</div>
      <div class="trending-info">
        <div class="trending-name">${t.name}</div>
        <div class="trending-meta">${t.meta}</div>
        <div class="trending-price">${t.price}</div>
      </div>
    </div>
  `).join('');
}

function renderTestimonials() {
  const grid = document.getElementById('testimonialsGrid');
  if (!grid) return;
  grid.innerHTML = testimonials.map((t, i) => `
    <div class="testimonial-card reveal" style="transition-delay:${i * 0.08}s">
      <div class="testimonial-stars">${'★'.repeat(t.rating)}</div>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${t.name.charAt(0)}</div>
        <div>
          <div class="testimonial-name">${t.name}</div>
          <div class="testimonial-role">${t.role}</div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderFAQ() {
  const list = document.getElementById('faqList');
  if (!list) return;
  list.innerHTML = faqs.map((faq, i) => `
    <div class="faq-item reveal" style="transition-delay:${i * 0.05}s">
      <div class="faq-question">
        <span>${faq.q}</span>
        <div class="faq-icon">+</div>
      </div>
      <div class="faq-answer">
        <div class="faq-answer-content">${faq.a}</div>
      </div>
    </div>
  `).join('');
  
  // Attach listeners
  list.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      const wasActive = item.classList.contains('active');
      list.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!wasActive) item.classList.add('active');
    });
  });
}

function renderBlog() {
  const grid = document.getElementById('blogGrid');
  if (!grid) return;
  grid.innerHTML = blogArticles.map((article, i) => `
    <div class="blog-card reveal" style="transition-delay:${i * 0.08}s">
      <div class="blog-img-wrap">
        <img class="blog-img" src="${article.img}" alt="${article.title}" loading="lazy">
        <span class="blog-category">${article.category}</span>
      </div>
      <div class="blog-info">
        <div class="blog-meta">
          <span class="blog-date">${new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          <span class="blog-read-time">${article.readTime}</span>
        </div>
        <h3 class="blog-title">${article.title}</h3>
        <p class="blog-excerpt">${article.excerpt}</p>
        <a href="${article.url}" class="blog-link">Read More →</a>
      </div>
    </div>
  `).join('');
}

function renderRecentlyViewed() {
  const grid = document.getElementById('recentlyGrid');
  if (!grid) return;
  
  if (recentlyViewed.length === 0) {
    grid.innerHTML = '<div class="recently-empty"><p>No recently viewed products yet. Start exploring!</p></div>';
    return;
  }
  
  const recentProducts = recentlyViewed.map(id => products.find(p => p.id === id)).filter(Boolean);
  
  grid.innerHTML = recentProducts.map(p => `
    <div class="recently-card" data-id="${p.id}">
      <img src="${p.img}" alt="${p.name}">
      <div class="recently-name">${p.name}</div>
      <div class="recently-price">$${p.price}</div>
    </div>
  `).join('');
  
  // Attach listeners
  grid.querySelectorAll('.recently-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.dataset.id);
      openQuickView(id);
    });
  });
}

// --- WISHLIST ---
function renderWishlist() {
  const items = document.getElementById('wishlistItems');
  const count = document.getElementById('wishlistCount');
  
  if (wishlist.length === 0) {
    items.innerHTML = `
      <div class="wishlist-empty">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        <p>Your wishlist is empty</p>
      </div>
    `;
    count.classList.remove('show');
  } else {
    count.textContent = wishlist.length;
    count.classList.add('show');
    
    items.innerHTML = wishlist.map(id => {
      const p = products.find(prod => prod.id === id);
      return `
        <div class="wishlist-item">
          <img src="${p.img}" alt="${p.name}">
          <div class="wishlist-item-info">
            <div class="wishlist-item-name">${p.name}</div>
            <div class="wishlist-item-price">$${p.price}</div>
          </div>
          <button class="wishlist-item-remove" data-id="${p.id}">&times;</button>
        </div>
      `;
    }).join('');
    
    items.querySelectorAll('.wishlist-item-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        wishlist = wishlist.filter(wid => wid !== id);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        renderWishlist();
        renderProducts();
        showToast('Removed from wishlist', 'success');
      });
    });
  }
}

function toggleWishlist(id) {
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(wid => wid !== id);
    showToast('Removed from wishlist', 'success');
  } else {
    wishlist.push(id);
    showToast('Added to wishlist', 'success');
  }
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  renderWishlist();
  renderProducts();
}

// --- RECENTLY VIEWED ---
function addToRecentlyViewed(id) {
  recentlyViewed = recentlyViewed.filter(rid => rid !== id);
  recentlyViewed.unshift(id);
  if (recentlyViewed.length > 8) recentlyViewed = recentlyViewed.slice(0, 8);
  localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
  renderRecentlyViewed();
}

// --- TOAST NOTIFICATIONS ---
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  const icon = type === 'success' ? '✓' : '✗';
  
  toast.innerHTML = `
    <div class="toast-icon">${icon}</div>
    <div class="toast-message">${message}</div>
  `;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// --- QUICK VIEW MODAL ---
function openQuickView(id) {
  const p = products.find(prod => prod.id === id);
  if (!p) return;
  
  addToRecentlyViewed(id);
  
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
        <button class="btn btn-secondary" onclick="toggleWishlist(${p.id}); closeModal();">
          ${wishlist.includes(p.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
        </button>
      </div>
      <div class="modal-share">
        <span class="modal-share-label">Share:</span>
        <button class="modal-share-btn" onclick="shareProduct('twitter', ${p.id})" aria-label="Share on Twitter">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
        </button>
        <button class="modal-share-btn" onclick="shareProduct('facebook', ${p.id})" aria-label="Share on Facebook">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        </button>
        <button class="modal-share-btn" onclick="shareProduct('email', ${p.id})" aria-label="Share via Email">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        </button>
      </div>
    </div>
  `;
  
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function shareProduct(platform, id) {
  const p = products.find(prod => prod.id === id);
  if (!p) return;
  
  const text = `Check out ${p.name} - $${p.price}`;
  const url = window.location.href;
  
  let shareUrl = '';
  switch (platform) {
    case 'twitter':
      shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
      break;
    case 'facebook':
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
      break;
    case 'email':
      shareUrl = `mailto:?subject=${encodeURIComponent(p.name)}&body=${encodeURIComponent(text + ' ' + url)}`;
      break;
  }
  
  if (shareUrl) {
    window.open(shareUrl, '_blank');
    showToast('Opening share dialog...', 'success');
  }
}

function closeModal() {
  const modal = document.getElementById('modalOverlay');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// --- EVENT LISTENERS ---
function attachProductListeners() {
  document.querySelectorAll('.product-wishlist-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      toggleWishlist(id);
    });
  });
  
  document.querySelectorAll('.product-quickview').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      openQuickView(id);
    });
  });
  
  // Track clicks on "View on Amazon"
  document.querySelectorAll('.product-cta').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = parseInt(link.dataset.id);
      addToRecentlyViewed(id);
    });
  });
  
  // Variant selection
  document.querySelectorAll('.variant-swatch, .variant-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const card = btn.closest('.product-card');
      const productId = parseInt(card.dataset.id);
      const product = products.find(p => p.id === productId);
      
      if (!product) return;
      
      // Remove active class from all variants in this product
      card.querySelectorAll('.variant-swatch, .variant-btn').forEach(b => {
        b.classList.remove('active');
      });
      
      // Add active class to clicked variant
      btn.classList.add('active');
      
      // Get variant data
      const variantId = btn.dataset.variantId;
      const variant = product.variants.find(v => v.id === variantId);
      
      if (variant) {
        // Update price
        const priceElement = card.querySelector('.product-price');
        if (priceElement) {
          let priceHTML = `$${variant.price}`;
          if (variant.oldPrice) {
            priceHTML += ` <span class="product-price-old">$${variant.oldPrice}</span>`;
          }
          priceElement.innerHTML = priceHTML;
        }
        
        // Update image if variant has custom image
        if (variant.img) {
          const imgElement = card.querySelector('.product-img');
          if (imgElement) {
            imgElement.src = variant.img;
          }
        }
        
        // Update stock status
        const stockElement = card.querySelector('.product-stock');
        if (stockElement) {
          const stockClass = variant.stock === 'in-stock' ? 'stock-in' : 
                           variant.stock === 'low-stock' ? 'stock-low' : 'stock-out';
          const stockText = variant.stock === 'in-stock' ? 'In Stock' : 
                          variant.stock === 'low-stock' ? 'Low Stock' : 'Out of Stock';
          stockElement.className = `product-stock ${stockClass}`;
          stockElement.textContent = stockText;
        }
        
        // Update discount badge
        const discountElement = card.querySelector('.product-discount');
        if (discountElement && variant.oldPrice) {
          const discount = Math.round(((variant.oldPrice - variant.price) / variant.oldPrice) * 100);
          discountElement.textContent = `-${discount}%`;
        }
        
        // Show toast notification
        showToast(`Selected: ${variant.name}`, 'success');
      }
    });
  });
}

function initFilters() {
  // Basic filters only (advanced filters moved to products.html)
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderProducts();
    });
  });
}

function initSort() {
  const select = document.getElementById('productSort');
  if (!select) return;
  select.addEventListener('change', () => {
    currentSort = select.value;
    renderProducts();
  });
}

// --- THEME TOGGLE ---
function initThemeToggle() {
  const toggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  toggle?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    showToast(`Switched to ${next} mode`, 'success');
  });
}

// --- SCROLL PROGRESS ---
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    bar.style.width = progress + '%';
  });
}

// --- COUNTDOWN TIMER ---
function initCountdown() {
  // Set countdown to end of current day
  const now = new Date();
  const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
  
  function updateCountdown() {
    const now = new Date();
    const diff = endOfDay - now;
    
    if (diff <= 0) {
      // Reset for next day
      endOfDay.setDate(endOfDay.getDate() + 1);
      return;
    }
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('countdownHours').textContent = String(hours).padStart(2, '0');
    document.getElementById('countdownMinutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('countdownSeconds').textContent = String(seconds).padStart(2, '0');
  }
  
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// --- NAVIGATION ---
function initNav() {
  const nav = document.getElementById('nav');
  const searchToggle = document.getElementById('searchToggle');
  const searchBar = document.getElementById('searchBar');
  const wishlistToggle = document.getElementById('wishlistToggle');
  const wishlistSidebar = document.getElementById('wishlistSidebar');
  const wishlistClose = document.getElementById('wishlistClose');
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const mobileMenuClose = document.getElementById('mobileMenuClose');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });

  searchToggle?.addEventListener('click', () => {
    searchBar.classList.toggle('open');
    if (searchBar.classList.contains('open')) {
      document.getElementById('searchInput')?.focus();
    }
  });
  
  wishlistToggle?.addEventListener('click', () => {
    wishlistSidebar.classList.add('open');
  });
  
  wishlistClose?.addEventListener('click', () => {
    wishlistSidebar.classList.remove('open');
  });

  // Mobile menu toggle
  menuToggle?.addEventListener('click', () => {
    mobileMenu?.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  mobileMenuClose?.addEventListener('click', () => {
    mobileMenu?.classList.remove('open');
    document.body.style.overflow = '';
  });

  mobileMenuOverlay?.addEventListener('click', () => {
    mobileMenu?.classList.remove('open');
    document.body.style.overflow = '';
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll('.mobile-menu-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu?.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// --- SCROLL REVEAL ---
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// --- COUNTER ANIMATION ---
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        const duration = 2000;
        const start = performance.now();

        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(eased * target).toLocaleString();
          if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

// --- SMOOTH SCROLL ---
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// --- NEWSLETTER ---
function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.btn');
    const input = form.querySelector('input');
    btn.textContent = 'Subscribed ✓';
    btn.style.background = '#10b981';
    input.value = '';
    showToast('Successfully subscribed!', 'success');
    setTimeout(() => {
      btn.textContent = 'Subscribe';
      btn.style.background = '';
    }, 3000);
  });
}

// --- BACK TO TOP ---
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 500);
  });
  btn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// --- MODAL ---
function initModal() {
  const overlay = document.getElementById('modalOverlay');
  const close = document.getElementById('modalClose');
  
  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  
  close?.addEventListener('click', closeModal);
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

// --- COMPARISON TOOL ---
// --- DEAL ALERTS ---
function initDealAlerts() {
  const form = document.getElementById('dealAlertsForm');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input');
    const email = input.value;
    
    // In a real app, this would send to a backend
    showToast('Deal alerts activated! You\'ll be notified of great deals.', 'success');
    input.value = '';
  });
}

// --- SEARCH ---
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchSuggestions = document.querySelectorAll('.suggestion-tag');
  const searchBar = document.getElementById('searchBar');
  
  // Create search results container
  let searchResults = document.getElementById('searchResults');
  if (!searchResults && searchBar) {
    searchResults = document.createElement('div');
    searchResults.id = 'searchResults';
    searchResults.className = 'search-results';
    searchBar.appendChild(searchResults);
  }
  
  searchInput?.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    
    if (query.length === 0) {
      if (searchResults) {
        searchResults.style.display = 'none';
        searchResults.innerHTML = '';
      }
      return;
    }
    
    // Filter products based on search
    const filtered = products.filter(p => 
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.desc.toLowerCase().includes(query) ||
      (p.brand && p.brand.toLowerCase().includes(query))
    );
    
    // Display search results
    if (searchResults) {
      if (filtered.length === 0) {
        searchResults.innerHTML = '<div class="search-no-results">No products found</div>';
      } else {
        searchResults.innerHTML = filtered.slice(0, 5).map(p => `
          <div class="search-result-item" data-id="${p.id}">
            <img src="${p.img}" alt="${p.name}" class="search-result-img">
            <div class="search-result-info">
              <div class="search-result-name">${p.name}</div>
              <div class="search-result-category">${p.category}</div>
              <div class="search-result-price">$${p.price}</div>
            </div>
          </div>
        `).join('');
        
        // Add click handlers to search results
        searchResults.querySelectorAll('.search-result-item').forEach(item => {
          item.addEventListener('click', () => {
            const productId = parseInt(item.dataset.id);
            openQuickView(productId);
            searchInput.value = '';
            searchResults.style.display = 'none';
            searchBar.classList.remove('open');
          });
        });
      }
      searchResults.style.display = 'block';
    }
  });
  
  // Close search results when clicking outside
  document.addEventListener('click', (e) => {
    if (!searchBar.contains(e.target)) {
      if (searchResults) {
        searchResults.style.display = 'none';
      }
    }
  });
  
  searchSuggestions.forEach(tag => {
    tag.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = tag.textContent;
        searchInput.dispatchEvent(new Event('input'));
      }
    });
  });
}

// --- VIEW TOGGLE ---
function initViewToggle() {
  const viewBtns = document.querySelectorAll('.view-btn');
  const productGrid = document.getElementById('productGrid');
  
  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      viewBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const view = btn.dataset.view;
      if (productGrid) {
        productGrid.classList.remove('grid-view', 'list-view');
        productGrid.classList.add(`${view}-view`);
      }
    });
  });
}

// --- USER DROPDOWN ---
function initUserDropdown() {
  const userBtn = document.getElementById('userBtn');
  const userDropdown = document.getElementById('userDropdown');
  const userDropdownName = document.getElementById('userDropdownName');
  const userDropdownEmail = document.getElementById('userDropdownEmail');
  const loginLink = document.getElementById('loginLink');
  const registerLink = document.getElementById('registerLink');
  const myWishlistLink = document.getElementById('myWishlistLink');
  const myOrdersLink = document.getElementById('myOrdersLink');
  const adminPanelLink = document.getElementById('adminPanelLink');
  const logoutBtn = document.getElementById('logoutBtn');
  const userDropdownDivider = document.getElementById('userDropdownDivider');
  const logoutDivider = document.getElementById('logoutDivider');
  
  if (!userBtn || !userDropdown) return;
  
  // Check if user is logged in
  const currentUser = getCurrentUser();
  
  if (currentUser) {
    // User is logged in
    userDropdownName.textContent = currentUser.name || 'User';
    userDropdownEmail.textContent = currentUser.email || '';
    
    // Hide login/register links
    loginLink.style.display = 'none';
    registerLink.style.display = 'none';
    
    // Show user-specific links
    myWishlistLink.style.display = 'flex';
    myOrdersLink.style.display = 'flex';
    userDropdownDivider.style.display = 'block';
    
    // Show admin link if user is admin
    if (currentUser.role === 'admin') {
      adminPanelLink.style.display = 'flex';
      logoutDivider.style.display = 'block';
    }
    
    logoutBtn.style.display = 'flex';
  } else {
    // User is not logged in
    userDropdownName.textContent = 'Guest';
    userDropdownEmail.textContent = 'Not logged in';
    
    // Show login/register links
    loginLink.style.display = 'flex';
    registerLink.style.display = 'flex';
    
    // Hide user-specific links
    myWishlistLink.style.display = 'none';
    myOrdersLink.style.display = 'none';
    adminPanelLink.style.display = 'none';
    logoutBtn.style.display = 'none';
    userDropdownDivider.style.display = 'none';
    logoutDivider.style.display = 'none';
  }
  
  // Toggle dropdown
  userBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    userDropdown.classList.toggle('open');
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!userBtn.contains(e.target)) {
      userDropdown.classList.remove('open');
    }
  });
  
  // Logout handler
  logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    logout();
  });
}

// --- COOKIE CONSENT ---
function initCookieConsent() {
  const banner = document.getElementById('cookieBanner');
  const accept = document.getElementById('cookieAccept');
  const decline = document.getElementById('cookieDecline');
  
  const consent = localStorage.getItem('cookieConsent');
  
  if (!consent) {
    setTimeout(() => {
      banner.classList.add('show');
    }, 2000);
  }
  
  accept?.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    banner.classList.remove('show');
    showToast('Cookie preferences saved', 'success');
  });
  
  decline?.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'declined');
    banner.classList.remove('show');
    showToast('Cookie preferences saved', 'success');
  });
}

// --- LOADER ---
function initLoader() {
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 1500);
  });
}

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderProducts();
  renderTrending();
  renderTestimonials();
  renderFAQ();
  renderBlog();
  renderRecentlyViewed();
  renderWishlist();
  initNav();
  initFilters();
  initSort();
  initReveal();
  initCounters();
  initSmoothScroll();
  initNewsletter();
  initBackToTop();
  initModal();
  initLoader();
  initThemeToggle();
  initScrollProgress();
  initCountdown();
  initCookieConsent();
  initDealAlerts();
  initSearch();
  initViewToggle();
  initUserDropdown();
});

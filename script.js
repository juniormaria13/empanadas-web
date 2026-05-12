document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile Menu Toggle ---
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // --- Cart Logic (UI only) ---
  const cartCounts = document.querySelectorAll('.cart-count');
  let itemsInCart = 0;

  function updateCartUI() {
    cartCounts.forEach(el => el.textContent = itemsInCart);
  }

  window.addToCart = function() {
    itemsInCart++;
    updateCartUI();
    // Simple visual feedback
    const btn = event.currentTarget;
    const originalText = btn.innerHTML;
    btn.innerHTML = 'Added! ✓';
    btn.style.backgroundColor = 'var(--success)';
    btn.style.color = 'white';
    btn.style.borderColor = 'var(--success)';
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style = '';
    }, 1500);
  };

  // --- Open/Closed Logic based on CST ---
  const statusIndicator = document.getElementById('status-indicator');
  if (statusIndicator) {
    // Current time in CST (Missouri)
    const options = { timeZone: 'America/Chicago', hour: 'numeric', minute: 'numeric', hour12: false, weekday: 'long' };
    const formatter = new Intl.DateTimeFormat([], options);
    const date = new Date();
    
    // Parse it manually to get hour and day
    const dayFormatter = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Chicago', weekday: 'long' });
    const hourFormatter = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Chicago', hour: 'numeric', hour12: false });
    
    const currentDay = dayFormatter.format(date);
    const currentHour = parseInt(hourFormatter.format(date));
    
    let isOpen = false;
    
    if (currentDay !== 'Monday') {
      // Tue-Sun: 11 AM to 8 PM
      if (currentHour >= 11 && currentHour < 20) {
        isOpen = true;
      }
    }
    
    if (isOpen) {
      statusIndicator.textContent = 'OPEN NOW';
      statusIndicator.className = 'status-indicator status-open';
    } else {
      statusIndicator.textContent = 'CLOSED';
      statusIndicator.className = 'status-indicator status-closed';
    }
  }

  // --- Smooth Scrolling for Menu ---
  const menuLinks = document.querySelectorAll('.menu-nav-link');
  if (menuLinks.length > 0) {
    menuLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
          
          // Update active class
          menuLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      });
    });

    // Highlight menu nav on scroll
    window.addEventListener('scroll', () => {
      let current = '';
      const sections = document.querySelectorAll('.menu-section');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
          current = section.getAttribute('id');
        }
      });

      menuLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
          link.classList.add('active');
        }
      });
    });
  }

  // --- Render Products ---
  function renderBadge(badges) {
    if (!badges) return '';
    let html = '';
    badges.forEach(badge => {
      if (badge === 'hot') html += '<span class="badge badge-hot">🔥 HOT</span>';
      if (badge === 'veg') html += '<span class="badge badge-veg">🌱 VEG</span>';
      if (badge === 'spicy') html += '<span class="badge badge-spicy">🌶️ SPICY</span>';
    });
    return html;
  }

  // Map product names to their image filenames in img/
  const productImageMap = {
    'beef':            'img/beef.jpg',
    'soft beef':       'img/soft_beef.jpg',
    'spicy beef':      'img/spicy_beef.jpg',
    'sweet beef':      'img/sweet_beef.jpg',
    'signature steak': 'img/signature_steak.jpg',
    'chorizo':         'img/chorizo.jpg',
    'pork bbq':        'img/pork_bbq.jpg',
    'cuban':           'img/cuban.jpg',
    'carnitas':        'img/carnitas.jpg',
    'chicken':         'img/chicken.jpg',
    'spicy chicken':   'img/spicy_chicken.jpg',
    'chicken bbq':     'img/chicken_bbq.jpg',
    'buffalo chicken': 'img/buffalo_chicken.jpg',
    'cashew chicken':  'img/cashew_chicken.jpg',
    'cheeseburger':    'img/cheeseburger.jpg',
    'taco':            'img/taco.jpg',
    'quesadilla':      'img/quesadilla.jpg',
    'mac & cheese':    'img/mac__cheese.jpg',
    'onion & cheese':  'img/onion__cheese.jpg',
    'spinach':         'img/spinach.jpg',
    'ham & cheese':    'img/ham__cheese.jpg',
    'hawaiian':        'img/hawaiian.jpg',
    'palm heart':      'img/palm_heart.jpg',
    'caprese':         'img/caprese.jpg',
    'mushroom':        'img/mushroom.jpg',
    'sweet corn':      'img/sweet_corn.jpg',
    'pepperoni':       'img/pepperoni.jpg',
    'dulce de leche':  'img/dulce_de_leche.jpg',
    'nutella':         'img/nutella.jpg',
    'apple pie':       'img/apple_pie.jpg',
    'banana split':    'img/banana_split.jpg',
    'guava':           'img/guava.jpg',
    // Sauces
    'chimichurri':     'img/Chimichurri.png',
    'salsa roja':      'img/SALSA ROJA.png',
    'salsa verde':     'img/Salsa-Verde.png',
    'criolla':         'img/Pico-de-Gallo.png',
    'garlic':          'img/Crema-Blanca.png',
    'crema blanca':    'img/Crema-Blanca.png',
    'pico de gallo':   'img/Pico-de-Gallo.png',
    // Desserts
    'chocolate cake':  'img/chocolate_cake.png',
    'tres leches':     'img/tres_leches.png',
    'coco alfajor':    'img/coco_alfajor.png',
    // Drinks
    'canned soda':     'img/canned_soda.png',
    'bottled drink':   'img/bottled_drink.png',
  };

  function getProductImage(name) {
    return productImageMap[name.toLowerCase()] || null;
  }

  function renderProductCard(item) {
    const imgSrc = getProductImage(item.name);
    const imageHtml = imgSrc
      ? `<img src="${imgSrc}" alt="${item.name}" class="product-img">`
      : `<div class="product-img-placeholder">🥟</div>`;

    return `
      <div class="product-card">
        <div class="product-img-wrapper">
          ${imageHtml}
          <div class="product-badge">${renderBadge(item.badges)}</div>
        </div>
        <div class="product-content">
          <h3 class="product-title">${item.name}</h3>
          <p class="product-desc">${item.desc}</p>
          <div class="product-footer">
            <span class="product-price">$${item.price.toFixed(2)}</span>
            <button class="btn btn-outline" onclick="addToCart()" style="padding: 0.5rem 1rem; font-size: 0.9rem;">Add</button>
          </div>
        </div>
      </div>
    `;
  }

  function renderComboCard(combo) {
    return `
      <div class="combo-card">
        <div class="combo-info">
          <h4>${combo.name}</h4>
          <p>${combo.desc}</p>
          ${combo.save ? `<span class="save-badge">${combo.save}</span>` : ''}
        </div>
        <div class="combo-action">
          <span style="font-weight: 800; color: var(--primary); font-size: 1.2rem; display: block; margin-bottom: 0.5rem; text-align: right;">$${combo.price.toFixed(2)}</span>
          <button class="btn btn-primary" onclick="addToCart()">Select</button>
        </div>
      </div>
    `;
  }

  // Render Homepage Popular Items
  const popularContainer = document.getElementById('popular-grid');
  if (popularContainer && typeof popularItems !== 'undefined') {
    popularContainer.innerHTML = popularItems.map(renderProductCard).join('');
  }

  // Render Homepage Combos
  const combosContainer = document.getElementById('home-combos-grid');
  if (combosContainer && typeof menuData !== 'undefined') {
    combosContainer.innerHTML = menuData.combos.map(renderComboCard).join('');
  }

  // Render Full Menu Sections
  if (typeof menuData !== 'undefined') {
    const categories = ['meat', 'cheese', 'sweet', 'kids', 'combos', 'drinks', 'sauces', 'desserts'];
    
    categories.forEach(cat => {
      const container = document.getElementById(`grid-${cat}`);
      if (container && menuData[cat]) {
        if (cat === 'combos') {
          container.className = 'combos-list';
          container.innerHTML = menuData[cat].map(renderComboCard).join('');
        } else {
          container.innerHTML = menuData[cat].map(renderProductCard).join('');
        }
      }
    });
  }

});

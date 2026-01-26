/* ========================================
   ANATOLIAN NILE - Main Script
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initSmoothScroll();
  initAnimations();
  initLanguageToggle();
});

/* ----------------------------------------
   Animations
   ---------------------------------------- */
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.section, .hero, .process-step, .service-card, .stat-box').forEach(el => {
    observer.observe(el);
  });
}

/* ----------------------------------------
   Navbar Scroll Effect
   ---------------------------------------- */
function initNavbar() {
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ----------------------------------------
   Mobile Menu
   ---------------------------------------- */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');

  if (!menuBtn || !navMenu) return;

  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuBtn.classList.toggle('active');
  });

  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      menuBtn.classList.remove('active');
    });
  });

  document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('active');
      menuBtn.classList.remove('active');
    }
  });
}

/* ----------------------------------------
   Smooth Scroll
   ---------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navHeight = document.getElementById('navbar').offsetHeight;
        const targetPos = target.offsetTop - navHeight - 20;

        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ----------------------------------------
   Language Toggle
   ---------------------------------------- */

// Translation data
const translations = {
  en: {
    // Navigation
    services: 'Services',
    network: 'Global Network',
    about: 'About',
    contact: 'Contact',
    getQuote: 'Get a Quote',

    // Hero
    heroTitle: 'Seamless Global Trade,<br>Bridging Continents',
    heroSubtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    exploreServices: 'Explore Services',

    // Services Section
    servicesTag: 'What We Offer',
    servicesTitle: 'Services',
    servicesSubtitle: 'Comprehensive logistics and trade solutions tailored to your business needs.',
    airFreight: 'Air Freight',
    seaFreight: 'Sea Freight',
    landTransport: 'Land Transport',
    customsClearance: 'Customs Clearance',
    serviceDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    readMore: 'Read More',

    // Process Section
    processTag: 'How It Works',
    processTitle: 'Process',
    processSubtitle: 'Simple, transparent, and efficient shipping workflow.',
    booking: 'Booking',
    collection: 'Collection',
    customs: 'Customs',
    shipping: 'Shipping',
    delivery: 'Delivery',

    // Global Reach
    reachTag: 'Our Footprint',
    reachTitle: 'Global Reach',
    reachDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    countriesServed: 'Countries Served',
    tonsMoved: 'Tons Moved',
    happyClients: 'Happy Clients',

    // About Section
    aboutTag: 'Why Choose Us',
    aboutTitle: 'The Anatolian Nile Advantage',
    aboutSubtitle: 'Decades of experience and an unwavering commitment to your success.',
    reliability: 'Reliability',
    reliabilityDesc: 'On-time delivery guarantee with real-time tracking. Your cargo is always in safe hands.',
    globalNetwork: 'Global Network',
    globalNetworkDesc: 'Strategic partnerships in 50+ countries ensure seamless logistics across borders.',
    efficiency: 'Efficiency',
    efficiencyDesc: 'Streamlined processes and smart routing reduce transit times and costs.',
    expertise: 'Expertise',
    expertiseDesc: '15+ years of industry experience navigating complex international trade.',

    // CTA Section
    ctaTag: 'Get Started',
    ctaTitle: 'Ready to Ship Globally?',
    ctaSubtitle: 'Partner with Anatolian Nile for reliable, efficient logistics solutions.',
    requestQuote: 'Request a Quote',
    callUs: 'Call Us Now',

    // Footer
    footerDesc: 'Your trusted partner for global logistics and international trade solutions.',
    servicesFooter: 'Services',
    freightForwarding: 'Freight Forwarding',
    internationalTrade: 'International Trade',
    supplyChain: 'Supply Chain',
    company: 'Company',
    aboutUs: 'About Us',
    careers: 'Careers',
    support: 'Support',
    trackShipment: 'Track Shipment',
    documentation: 'Documentation',
    faq: 'FAQ',
    copyright: '© 2024 Anatolian Nile. All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    terms: 'Terms of Service'
  },
  ar: {
    // Navigation
    services: 'الخدمات',
    network: 'الشبكة العالمية',
    about: 'عن الشركة',
    contact: 'اتصل بنا',
    getQuote: 'احصل على عرض',

    // Hero
    heroTitle: 'تجارة عالمية سلسة،<br>نربط القارات',
    heroSubtitle: 'حلول لوجستية شاملة تربط الأعمال حول العالم. نقدم خدمات الشحن والنقل وإدارة سلسلة التوريد والتخليص الجمركي.',
    exploreServices: 'استكشف الخدمات',

    // Services Section
    servicesTag: 'ما نقدمه',
    servicesTitle: 'خدماتنا',
    servicesSubtitle: 'حلول لوجستية وتجارية شاملة مصممة خصيصاً لاحتياجات عملك.',
    airFreight: 'الشحن الجوي',
    seaFreight: 'الشحن البحري',
    landTransport: 'النقل البري',
    customsClearance: 'التخليص الجمركي',
    serviceDesc: 'حلول شحن سريعة وموثوقة لجميع احتياجات عملك اللوجستية.',
    readMore: 'اقرأ المزيد',

    // Process Section
    processTag: 'كيف نعمل',
    processTitle: 'عمليتنا',
    processSubtitle: 'سير عمل شحن بسيط وشفاف وفعال.',
    booking: 'الحجز',
    collection: 'التجميع',
    customs: 'الجمارك',
    shipping: 'الشحن',
    delivery: 'التسليم',

    // Global Reach
    reachTag: 'بصمتنا العالمية',
    reachTitle: 'الوصول العالمي',
    reachDesc: 'شبكة عالمية تمتد عبر القارات، نربط الأعمال بالأسواق العالمية بكفاءة وموثوقية.',
    countriesServed: 'دولة نخدمها',
    tonsMoved: 'طن تم نقله',
    happyClients: 'عميل راضٍ',

    // About Section
    aboutTag: 'لماذا نحن',
    aboutTitle: 'ميزة الأناضول النيل',
    aboutSubtitle: 'عقود من الخبرة والتزام لا يتزعزع بنجاحك.',
    reliability: 'الموثوقية',
    reliabilityDesc: 'ضمان التسليم في الوقت المحدد مع التتبع في الوقت الفعلي. شحنتك دائماً في أيدٍ أمينة.',
    globalNetwork: 'شبكة عالمية',
    globalNetworkDesc: 'شراكات استراتيجية في أكثر من 50 دولة تضمن لوجستيات سلسة عبر الحدود.',
    efficiency: 'الكفاءة',
    efficiencyDesc: 'عمليات مبسطة وتوجيه ذكي يقلل من أوقات النقل والتكاليف.',
    expertise: 'الخبرة',
    expertiseDesc: 'أكثر من 15 عاماً من الخبرة في التجارة الدولية المعقدة.',

    // CTA Section
    ctaTag: 'ابدأ الآن',
    ctaTitle: 'هل أنت مستعد للشحن عالمياً؟',
    ctaSubtitle: 'كن شريكاً مع الأناضول النيل للحصول على حلول لوجستية موثوقة وفعالة.',
    requestQuote: 'اطلب عرض سعر',
    callUs: 'اتصل بنا الآن',

    // Footer
    footerDesc: 'شريكك الموثوق لحلول الخدمات اللوجستية والتجارة الدولية.',
    servicesFooter: 'الخدمات',
    freightForwarding: 'الشحن',
    internationalTrade: 'التجارة الدولية',
    supplyChain: 'سلسلة التوريد',
    company: 'الشركة',
    aboutUs: 'عن الشركة',
    careers: 'الوظائف',
    support: 'الدعم',
    trackShipment: 'تتبع الشحنة',
    documentation: 'المستندات',
    faq: 'الأسئلة الشائعة',
    copyright: '© 2024 الأناضول النيل. جميع الحقوق محفوظة.',
    privacyPolicy: 'سياسة الخصوصية',
    terms: 'شروط الخدمة'
  },
  tr: {
    // Navigation
    services: 'Hizmetler',
    network: 'Küresel Ağ',
    about: 'Hakkımızda',
    contact: 'İletişim',
    getQuote: 'Teklif Al',

    // Hero
    heroTitle: 'Kusursuz Küresel Ticaret,<br>Kıtaları Birleştiriyoruz',
    heroSubtitle: 'Dünya çapında işletmeleri birbirine bağlayan kapsamlı lojistik çözümler. Navlun, tedarik zinciri yönetimi ve gümrük işlemleri hizmetleri.',
    exploreServices: 'Hizmetleri Keşfedin',

    // Services Section
    servicesTag: 'Neler Sunuyoruz',
    servicesTitle: 'Hizmetlerimiz',
    servicesSubtitle: 'İşletmenizin ihtiyaçlarına özel kapsamlı lojistik ve ticaret çözümleri.',
    airFreight: 'Hava Kargo',
    seaFreight: 'Deniz Kargo',
    landTransport: 'Kara Taşımacılığı',
    customsClearance: 'Gümrük İşlemleri',
    serviceDesc: 'Tüm lojistik ihtiyaçlarınız için hızlı ve güvenilir nakliye çözümleri.',
    readMore: 'Devamını Oku',

    // Process Section
    processTag: 'Nasıl Çalışıyoruz',
    processTitle: 'Sürecimiz',
    processSubtitle: 'Basit, şeffaf ve verimli nakliye iş akışı.',
    booking: 'Rezervasyon',
    collection: 'Toplama',
    customs: 'Gümrük',
    shipping: 'Nakliye',
    delivery: 'Teslimat',

    // Global Reach
    reachTag: 'Küresel Ayak İzimiz',
    reachTitle: 'Küresel Erişim',
    reachDesc: 'Kıtalara yayılan küresel bir ağ, işletmeleri dünya pazarlarına verimli ve güvenilir bir şekilde bağlar.',
    countriesServed: 'Hizmet Verilen Ülke',
    tonsMoved: 'Taşınan Ton',
    happyClients: 'Mutlu Müşteri',

    // About Section
    aboutTag: 'Neden Biz',
    aboutTitle: 'Anadolu Nil Avantajı',
    aboutSubtitle: 'Onlarca yıllık deneyim ve başarınıza olan sarsılmaz bağlılık.',
    reliability: 'Güvenilirlik',
    reliabilityDesc: 'Gerçek zamanlı takip ile zamanında teslimat garantisi. Yükünüz her zaman güvenli ellerde.',
    globalNetwork: 'Küresel Ağ',
    globalNetworkDesc: '50+ ülkedeki stratejik ortaklıklar, sınırlar ötesi kusursuz lojistik sağlar.',
    efficiency: 'Verimlilik',
    efficiencyDesc: 'Akıcı süreçler ve akıllı yönlendirme, transit sürelerini ve maliyetleri azaltır.',
    expertise: 'Uzmanlık',
    expertiseDesc: 'Karmaşık uluslararası ticarette 15+ yıllık sektör deneyimi.',

    // CTA Section
    ctaTag: 'Başlayın',
    ctaTitle: 'Küresel Sevkiyata Hazır mısınız?',
    ctaSubtitle: 'Güvenilir ve verimli lojistik çözümleri için Anadolu Nil ile ortaklık kurun.',
    requestQuote: 'Teklif İsteyin',
    callUs: 'Hemen Arayın',

    // Footer
    footerDesc: 'Küresel lojistik ve uluslararası ticaret çözümleri için güvenilir ortağınız.',
    servicesFooter: 'Hizmetler',
    freightForwarding: 'Navlun',
    internationalTrade: 'Uluslararası Ticaret',
    supplyChain: 'Tedarik Zinciri',
    company: 'Şirket',
    aboutUs: 'Hakkımızda',
    careers: 'Kariyer',
    support: 'Destek',
    trackShipment: 'Gönderi Takibi',
    documentation: 'Dokümantasyon',
    faq: 'SSS',
    copyright: '© 2024 Anadolu Nil. Tüm hakları saklıdır.',
    privacyPolicy: 'Gizlilik Politikası',
    terms: 'Hizmet Şartları'
  }
};

function initLanguageToggle() {
  const languageToggle = document.getElementById('languageToggle');
  const languageBtn = document.getElementById('languageBtn');
  const languageDropdown = document.getElementById('languageDropdown');
  const langOptions = document.querySelectorAll('.lang-option');
  const langText = document.querySelector('.lang-text');

  if (!languageToggle || !languageBtn) return;

  // Get saved language or default to English
  let currentLang = localStorage.getItem('selectedLanguage') || 'en';
  applyLanguage(currentLang);

  // Toggle dropdown
  languageBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    languageToggle.classList.toggle('active');
  });

  // Handle language selection
  langOptions.forEach(option => {
    option.addEventListener('click', (e) => {
      e.preventDefault();
      const selectedLang = option.getAttribute('data-lang');

      // Update active state
      langOptions.forEach(opt => opt.classList.remove('active'));
      option.classList.add('active');

      // Close dropdown
      languageToggle.classList.remove('active');

      // Apply language
      applyLanguage(selectedLang);

      // Save preference
      localStorage.setItem('selectedLanguage', selectedLang);
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!languageToggle.contains(e.target)) {
      languageToggle.classList.remove('active');
    }
  });
}

function applyLanguage(lang) {
  const langMap = {
    'en': 'EN',
    'ar': 'AR',
    'tr': 'TR'
  };

  // Update button text
  const langText = document.querySelector('.lang-text');
  if (langText) {
    langText.textContent = langMap[lang];
  }

  // Update active state in dropdown
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
  });

  // Get translations
  const t = translations[lang];

  // Apply RTL for Arabic
  if (lang === 'ar') {
    document.body.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
  } else {
    document.body.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', lang);
  }

  // Update all text content
  updateTextContent(t);
}

function updateTextContent(t) {
  // Navigation
  safeUpdate('[href="#services"]:not(.footer-links a)', t.services);
  safeUpdate('[href="#network"]:not(.footer-links a)', t.network);
  safeUpdate('[href="#about"]:not(.footer-links a)', t.about);
  safeUpdate('[href="#contact"]:not(.footer-links a)', t.contact);
  safeUpdate('.btn-nav', t.getQuote);

  // Hero
  safeUpdate('.hero h1', t.heroTitle, true);
  safeUpdate('.hero-content > p', t.heroSubtitle);
  safeUpdate('.hero .btn-primary', t.getQuote);
  safeUpdate('.hero .btn-secondary', t.exploreServices);

  // Services Section
  safeUpdate('.services .section-tag', t.servicesTag);
  safeUpdate('.services h2', t.servicesTitle + ' ', false);
  safeUpdate('.services .section-header > p', t.servicesSubtitle);

  const serviceCards = document.querySelectorAll('.service-card');
  const serviceTitles = [t.airFreight, t.seaFreight, t.landTransport, t.customsClearance];
  serviceCards.forEach((card, index) => {
    const title = card.querySelector('h3');
    const desc = card.querySelector('p');
    const link = card.querySelector('.btn-text');
    if (title) title.textContent = serviceTitles[index];
    if (desc) desc.textContent = t.serviceDesc;
    if (link) link.textContent = t.readMore;
  });

  // Process Section
  safeUpdate('.process .section-tag', t.processTag);
  safeUpdate('.process h2', t.processTitle + ' ', false);
  safeUpdate('.process .section-header > p', t.processSubtitle);

  const processSteps = document.querySelectorAll('.process-step h4');
  const processTitles = [t.booking, t.collection, t.customs, t.shipping, t.delivery];
  processSteps.forEach((step, index) => {
    if (step) step.textContent = processTitles[index];
  });

  // Global Reach
  safeUpdate('.global-reach .section-tag', t.reachTag);
  safeUpdate('.global-reach h2', t.reachTitle + ' ', false);
  safeUpdate('.reach-content > p', t.reachDesc);

  const statBoxes = document.querySelectorAll('.stat-box span');
  const statLabels = [t.countriesServed, t.tonsMoved, t.happyClients];
  statBoxes.forEach((span, index) => {
    if (span) span.textContent = statLabels[index];
  });

  // About Section
  safeUpdate('.about .section-tag', t.aboutTag);
  safeUpdate('.about h2', t.aboutTitle + ' ', false);
  safeUpdate('.about .section-header > p', t.aboutSubtitle);

  const aboutCards = document.querySelectorAll('.about-card');
  const aboutData = [
    { title: t.reliability, desc: t.reliabilityDesc },
    { title: t.globalNetwork, desc: t.globalNetworkDesc },
    { title: t.efficiency, desc: t.efficiencyDesc },
    { title: t.expertise, desc: t.expertiseDesc }
  ];
  aboutCards.forEach((card, index) => {
    const title = card.querySelector('h3');
    const desc = card.querySelector('p');
    if (title) title.textContent = aboutData[index].title;
    if (desc) desc.textContent = aboutData[index].desc;
  });

  // CTA Section
  safeUpdate('.cta-section .section-tag', t.ctaTag);
  safeUpdate('.cta-content h2', t.ctaTitle + ' ', false);
  safeUpdate('.cta-content > p', t.ctaSubtitle);
  safeUpdate('.cta-buttons .btn-primary', t.requestQuote + ' ', false);
  safeUpdate('.cta-buttons .btn-secondary', t.callUs);

  // Footer
  safeUpdate('.footer-brand > p:first-of-type', t.footerDesc);

  const footerColumns = document.querySelectorAll('.footer-column');
  if (footerColumns[0]) {
    const h4 = footerColumns[0].querySelector('h4');
    if (h4) h4.textContent = t.servicesFooter;
    const links = footerColumns[0].querySelectorAll('.footer-links a');
    [t.freightForwarding, t.internationalTrade, t.supplyChain, t.customsClearance].forEach((text, i) => {
      if (links[i]) links[i].textContent = text;
    });
  }

  if (footerColumns[1]) {
    const h4 = footerColumns[1].querySelector('h4');
    if (h4) h4.textContent = t.company;
    const links = footerColumns[1].querySelectorAll('.footer-links a');
    [t.aboutUs, t.network, t.careers, t.contact].forEach((text, i) => {
      if (links[i]) links[i].textContent = text;
    });
  }

  if (footerColumns[2]) {
    const h4 = footerColumns[2].querySelector('h4');
    if (h4) h4.textContent = t.support;
    const links = footerColumns[2].querySelectorAll('.footer-links a');
    [t.trackShipment, t.documentation, t.faq, t.getQuote].forEach((text, i) => {
      if (links[i]) links[i].textContent = text;
    });
  }

  safeUpdate('.footer-bottom > p', t.copyright);
  const footerBottomLinks = document.querySelectorAll('.footer-bottom-links a');
  if (footerBottomLinks[0]) footerBottomLinks[0].textContent = t.privacyPolicy;
  if (footerBottomLinks[1]) footerBottomLinks[1].textContent = t.terms;
}

function safeUpdate(selector, content, isHTML = false) {
  const elements = document.querySelectorAll(selector);
  elements.forEach(el => {
    if (el) {
      if (isHTML) {
        el.innerHTML = content;
      } else {
        // Keep gradient spans intact
        const gradientSpan = el.querySelector('.text-gradient');
        if (gradientSpan) {
          const parts = content.split(' ');
          const lastWord = parts.pop();
          el.childNodes[0].textContent = parts.join(' ') + ' ';
          gradientSpan.textContent = lastWord;
        } else {
          el.textContent = content;
        }
      }
    }
  });
}
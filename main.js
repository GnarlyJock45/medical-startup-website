document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
        });
      });
    });
  
    // Home section animation
    const homeContent = document.getElementById('homeContent');
    if (homeContent) {
      setTimeout(() => {
        homeContent.classList.remove('translate-y-12', 'opacity-0');
      }, 300);
  
      window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        homeContent.style.transform = `translateY(${scrollPosition * 0.3}px)`;
      });
    }
  
    // Intersection Observer for fade-in animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-12', 'translate-x-12');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    // About Us section
    const aboutElements = [
      document.getElementById('aboutHeader'),
      document.getElementById('missionCard'),
      document.getElementById('valuesCard'),
      document.getElementById('technologyCard')
    ];
  
    aboutElements.forEach(el => {
      if (el) observer.observe(el);
    });
  
    // Technology section
    const techElements = [
      document.getElementById('technologyHeader'),
      document.getElementById('technologyImage'),
      ...document.querySelectorAll('#technologyFeatures > div')
    ];
  
    techElements.forEach(el => {
      if (el) observer.observe(el);
    });
  
    // Footer animation
    const footer = document.querySelector('footer');
    if (footer) {
      observer.observe(footer);
    }
  });
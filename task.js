// Toggle Mobile Menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  }
  
  // Smooth Scroll Active Link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop - 60, // Adjust for sticky navbar
        behavior: 'smooth',
      });
    });
  });
  
  // Pricing Toggle
  function togglePricing(period) {
    const monthlyPrices = { basic: '$10/month', pro: '$20/month', enterprise: '$50/month' };
    const annualPrices = { basic: '$100/year', pro: '$200/year', enterprise: '$500/year' };
  
    const prices = period === 'monthly' ? monthlyPrices : annualPrices;
    document.getElementById('basic-price').textContent = prices.basic;
    document.getElementById('pro-price').textContent = prices.pro;
    document.getElementById('enterprise-price').textContent = prices.enterprise;
  
    document.getElementById('monthly').classList.toggle('active', period === 'monthly');
    document.getElementById('annual').classList.toggle('active', period === 'annual');
  }
  
  // Simulate Loading State on CTA Button
  function simulateLoading() {
    const button = document.getElementById('cta-button');
    button.textContent = 'Loading...';
    button.disabled = true;
    setTimeout(() => {
      button.textContent = 'Get Started';
      button.disabled = false;
    }, 2000);

   // 
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate-fade-in, .animate-slide-in-left, .animate-slide-in-right');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.1 });            

    elements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
});

  }
  
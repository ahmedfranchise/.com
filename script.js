document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animated-element');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });
  
    elements.forEach(el => {
      observer.observe(el);
    });
  });
  
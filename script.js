 // header hamburger
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');

    hamburger.addEventListener('click', ()=>{
      mobileMenu.style.display = 'block';
      mobileMenu.setAttribute('aria-hidden','false');
    });
    closeMenu.addEventListener('click', ()=>{
      mobileMenu.style.display = 'none';
      mobileMenu.setAttribute('aria-hidden','true');
    });

    // smooth scrolling
    function scrollToSection(sel){
      document.querySelector(sel).scrollIntoView({behavior:'smooth',block:'start'});
    }

    // show current year
    document.getElementById('year').textContent = new Date().getFullYear();

    // keyboard accessible close
    document.addEventListener('keydown', (e)=>{
      if(e.key === 'Escape'){
        mobileMenu.style.display = 'none';
        mobileMenu.setAttribute('aria-hidden','true');
      }
    });

    // reduce motion respect
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if(prefersReduced.matches){
      // disable smooth scroll if user prefers reduced motion
      window.scrollTo = function(){};
    }
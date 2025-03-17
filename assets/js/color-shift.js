window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY / document.body.scrollHeight;
    document.documentElement.style.setProperty('--gradient-shift', `${scrollPos * 100}%`);
  });

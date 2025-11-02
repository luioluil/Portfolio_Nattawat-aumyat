document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll that accounts for sticky navbar height
document.querySelectorAll('#topNav .nav-link').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href');
    if(!id || !id.startsWith('#')) return;
    const el = document.querySelector(id);
    if(!el) return;
    e.preventDefault();
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

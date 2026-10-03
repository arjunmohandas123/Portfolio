// Vercel Analytics
window.va = window.va || function(){(window.vaq=window.vaq||[]).push(arguments)};

// Mobile menu
function toggleMenu(){document.getElementById('mobileMenu').classList.toggle('open')}
function closeMenu(){document.getElementById('mobileMenu').classList.remove('open')}
document.addEventListener('click',e=>{
  if(!e.target.closest('nav')&&!e.target.closest('#mobileMenu'))closeMenu()
})

// Mark active nav link
(function(){
  const page = location.pathname.split('/').pop() || 'index.html'
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a=>{
    const href = a.getAttribute('href')
    if(href===page||(page===''&&href==='index.html')) a.classList.add('active')
  })
})()

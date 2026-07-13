
const btn=document.querySelector('.hamb');
const menu=document.querySelector('.mobile-menu');
if(btn&&menu){btn.addEventListener('click',()=>menu.classList.toggle('open'))}
const year=document.querySelectorAll('[data-year]');year.forEach(e=>e.textContent=new Date().getFullYear());

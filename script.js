const menu=document.getElementById('menu'),links=document.getElementById('links');
menu.addEventListener('click',()=>links.classList.toggle('open'));
document.querySelectorAll('#links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('form').addEventListener('submit',e=>{e.preventDefault();document.getElementById('msg').textContent='Mensagem preparada. Ligue o formulário a um serviço de email para receber mensagens.';e.target.reset()});

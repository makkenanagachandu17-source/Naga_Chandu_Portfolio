const navItems=[
    ['Home','index.html'],
    ['About','about.html'],
    ['Skills','skills.html'],
    ['Projects','projects.html'],
    ['Experience','experience.html'],
    ['Learning','certifications.html'],
    ['Resume','resume.html'],
    ['Contact','contact.html']
];
const currentPage=location.pathname.split('/').pop()||'index.html';
const header=document.getElementById('site-header');
if(header){
    header.innerHTML=`
    <header class="site-header">
        <div class="container nav-wrap">
        <a class="brand" href="index.html">Naga Chandu Makkena<span>.</span></a><button class="menu-toggle" aria-label="Toggle navigation" aria-expanded="false">☰</button><nav class="nav-links" aria-label="Main navigation">${navItems.map(([label,url])=>`<a href="${url}" class="${currentPage===url?'active':''}" ${currentPage===url?'aria-current="page"':''}>${label}</a>`).join('')}</nav></div></header>`;
const toggle=header.querySelector('.menu-toggle');
const nav=header.querySelector('.nav-links');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded',String(open));
    toggle.textContent=open?'×':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');
        toggle.setAttribute('aria-expanded','false');
        toggle.textContent='☰'}));}
const footer=document.getElementById('site-footer');
if(footer){footer.innerHTML=`<footer class="site-footer"><div class="container footer-wrap"><span class="footer-brand">Naga Chandu Makkena<span>.</span></span><span>Designed with curiosity · Built with care</span><span>© ${new Date().getFullYear()} Naga Chandu Makkena</span></div></footer>`;}
const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');
    revealObserver.unobserve(entry.target)}}),{threshold:.12});
    document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

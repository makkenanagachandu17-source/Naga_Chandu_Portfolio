document.documentElement.dataset.page='contact';
const contactForm=document.getElementById('contactForm');
if(contactForm){contactForm.addEventListener('submit',event=>{event.preventDefault();
    const data=new FormData(contactForm);
    const name=String(data.get('name')).trim();
    const email=String(data.get('email')).trim();
    const subject=String(data.get('subject')).trim();
    const message=String(data.get('message')).trim();
    const body=`Name: ${name}\nEmail: ${email}\n\n${message}`;
    const url=`mailto:makkenanagachandu17@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    document.getElementById('formNote').textContent='Opening your email application…';
    window.location.href=url;
});
}

let Menubtn = document.getElementById('Menubtn')
Menubtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})
let typed = new Typed('.auto-input',{
    strings:['Front End Developer' , 'Freelancer','UI Designer',],
    typedSpeed : 100,
    backSpeed:100,
    backdelay:2000,
    loop:true
})
let navlinks = document.querySelectorAll('nav,ul ,li , a')
let sections = document.querySelectorAll('section')
window.addEventListener('scroll',function(){
    const scrollpos=window.scrollY + 20
    sections.forEach(section=> {
        if(scrollpos>section.offsetTop && scrollpos < (section.offsetTop + section.offsetHeight)){
            navlinks.forEach(link=>{
                link.classList.remove('active');
                if(section.getAttribute('id')===link.getAttribute('href').substring(1))
                    link.classList.add('active')
            })
        }
    })
})
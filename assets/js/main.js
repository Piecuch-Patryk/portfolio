
function changeSection(){
    if(this.classList.contains('link-active')) return;

    const destination = this.getAttribute('href').split('#');
    const sectionToFadeIn = document.getElementById(destination[1]);
    const sectionToFadeOut = document.querySelector('.active');

    document.querySelector('.link-active').classList.remove('link-active');
    this.classList.add('link-active');
    sectionToFadeIn.classList.add('active');
    sectionToFadeOut.classList.remove('active');
}
function pageNav(){
    const links = document.querySelectorAll('.nav-link');
    links.forEach((el, i) => el.addEventListener('click', changeSection));
}






document.addEventListener('DOMContentLoaded', function(){
    pageNav();
});
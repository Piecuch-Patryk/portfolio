function togglePreventClick(){
    if(el = document.querySelector('.prevent-click')){
        el.classList.remove('prevent-click');
    }else {
        document.querySelector('.nav-list').classList.add('prevent-click');
    }
}
function fadeOut(){
    document.querySelector('.active').classList.remove('active');
    document.querySelector('.link-active').classList.remove('link-active');
}

function fadeIn(str, linkEl){
    document.getElementById(str).classList.add('active');
    linkEl.classList.add('link-active');
    togglePreventClick();
    setContainerHeight();
}

function changeSection(e){
    e.preventDefault();
    const name = this.getAttribute('href').split('#').pop();
    // Prevent action when current one clicked.
    if(this.classList.contains('link-active')) return;

    togglePreventClick();
    fadeOut();
    setTimeout(() => fadeIn(name, this), 500);
}
function toggleNav(){
    const links = document.querySelectorAll('.nav-link');
    links.forEach((el, i) => el.addEventListener('click', changeSection));
}

// Set section height to the main container.
function setContainerHeight(){
    const id = document.querySelector('.active').getAttribute('id');
    const el = document.getElementById(id);
    const style = window.getComputedStyle(el);
    const height = style.getPropertyValue('height');
    const container = document.getElementById('container');
    container.style.height = height;
}


document.addEventListener('DOMContentLoaded', function(){
    setContainerHeight();
    toggleNav();
});
window.addEventListener('resize', setContainerHeight);
const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');
const preloader = document.querySelector('.preloader');

window.addEventListener('load', loading)
btn.addEventListener('click', switchBtn);

function loading(){
    preloader.classList.toggle('hide-preloader');
}

function switchBtn(){
    if(!btn.classList.contains('slide')){
        video.pause();
        btn.classList.add('slide');
    } else {
        video.play();
        btn.classList.remove('slide');
    }
}


window.onload = () =>{
    // alert('Plz, Do open in laptop, some of the real time stop watch updates are cannot been seen in mobile version');
}

if(window.innerWidth > 700){
    const para = document.querySelector('.img-start');

    const parallax = () => {
        const pageY = window.pageYOffset;
        para.style.backgroundPositionY = -pageY*0.6 +'px';
    }
    
    window.addEventListener('scroll', parallax);
}

const navToggle = document.querySelector('.nav-head');
navToggle.addEventListener('click', (e) =>{
    const list = document.querySelector('.nav-list');
    list.classList.toggle('magic');
    list.classList.toggle('unmagic');
});

const timeList = document.querySelectorAll('.time-box');
const heeadingTime = document.querySelector('#time')
const time = new Date(2020, 03, 22, 0, 0, 0);

const timeHandler = () => {
    let d = new Date();
    const diff = (time - d)/1000;
    if(diff < 0){
        time.textContent = 'Exodia be live';
        return;
    }
    const arr = [ parseInt(diff % 60) ];
    arr.push(parseInt(diff / 60 %60)) ;
    arr.push(parseInt(diff/ 3600 %24));
    arr.push(parseInt(diff/86400 %30));
    for( ind of timeList){
        ind.querySelectorAll('p')[0].textContent = arr.pop();
    }
}

setInterval(timeHandler, 1000);

const galh = document.getElementById('gal');
const galp = document.getElementById('gallery');

window.addEventListener('scroll',() => {
    if(galh.offsetTop <= window.pageYOffset+300){
        galp.classList.add('visible');
    }
    
});

const arr = Array.from(document.querySelectorAll('.ev'));
const arrp = Array.from(document.querySelectorAll('.event'));

window.addEventListener('scroll',() => {
    for( i = 0; i<arr.length ;i++ ){
        if(arr[i].offsetTop <= window.pageYOffset+450){
            arrp[i].classList.add('visible');
        }
    }
});

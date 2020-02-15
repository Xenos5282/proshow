var slider_array;
var active;
var next;
var prev;
var index = 1;
var limit;
var btn;

var timer;

function resetTimer(){
    clearInterval(timer);
    timer = setInterval(CallNext,5000);
}

function CallNext(){
    index++;

    active.style.left = "-100vw";
    next.style.left = "0vw";
    btn.style.background = next.getAttribute('data-theme');

    next.classList.add('active');
    active.classList.add('prev');
    slider_array[(index+1)%limit].classList.add('next');
    
    active.classList.remove('active');
    prev.classList.remove('prev');
    next.classList.remove('next');

    prev = active;
    active = next;
    next = slider_array[(index+1)%limit];   
    resetTimer();
}

function CallPrev(){
    index--;
    if(index<0){
        index+=limit;
    }

    active.style.left = "100vw";
    prev.style.left = "0vw";
    btn.style.background = prev.getAttribute('data-theme');

    prev.classList.add('active');
    active.classList.add('next');
    slider_array[(index-1+limit)%limit].classList.add('prev');
    
    active.classList.remove('active');
    prev.classList.remove('prev');
    next.classList.remove('next');

    next = active;
    active = prev;
    prev = slider_array[(index-1+limit)%limit];  
    resetTimer();
}

window.addEventListener('DOMContentLoaded',function(){
    slider_array = document.querySelectorAll('.slider-cont');
    limit = slider_array.length;
    btn = document.querySelector('#get-passes');
    active = document.querySelector('.active');
    prev = document.querySelector('.prev');
    next = document.querySelector('.next');

    timer = setInterval(CallNext,5000);

    document.querySelector('img[alt="left"]').addEventListener('click',CallNext);
    document.querySelector('img[alt="right"]').addEventListener('click',CallPrev);

    
})
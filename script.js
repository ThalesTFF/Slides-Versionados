//Elements
const track = document.querySelector('.slider-track');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

//Events
let timer = setInterval(nextSlide, 6000);

next.addEventListener('click', () =>{
    resetTimer();
    nextSlide();
})
prev.addEventListener('click', () =>{
    resetTimer();
    prevSlide();
})


//Functions
function resetTimer(){
    clearInterval(timer);
    timer = setInterval(nextSlide, 6000);
}

function nextSlide(){
    let firstSlide = track.firstElementChild;
    let firstSlideWidth = firstSlide.offsetWidth;  

    track.style.marginLeft  = `-${firstSlideWidth}px`;
 
    let moveSlide = setTimeout(() =>{
        track.append(firstSlide);

        track.style.transition = 'none';
        track.style.marginLeft = '0px';

        void track.offsetWidth; // Força o reflow

        track.style.transition = 'all linear 0.5s';
    }, 500);

}

function prevSlide(){
    let lastSlide = track.lastElementChild;
    let lastSlideWidth = lastSlide.offsetWidth;

    track.prepend(lastSlide);

    track.style.transition = "none";    
    track.style.marginLeft = `-${lastSlideWidth}px`;
    void track.offsetWidth; // reflow

    track.style.transition = 'all linear 0.5s';
    track.style.marginLeft = `0px`;
}
    
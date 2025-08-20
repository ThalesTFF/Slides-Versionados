//Elements
const track = document.querySelector('.slider-track');


//Events
setInterval(nextSlide, 3000);

//Functions
function nextSlide(){
    let firstSlide = track.firstElementChild;
    let firstSlideWidth = firstSlide.offsetWidth;  

    track.style.marginLeft  = `-${firstSlideWidth}px`;
 
    setTimeout(() =>{
        track.append(firstSlide);

        track.style.transition = 'none';
        track.style.marginLeft = '0px';

        void track.offsetWidth; // Força o reflow

        track.style.transition = 'all linear 0.5s';
    }, 500);
}
    
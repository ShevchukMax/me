const slider = document.querySelector('.slider-cars')
const rightSlider = document.querySelector('.right-slide')
const leftSlider = document.querySelector('.left-slide')
const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const slidesLenght = rightSlider.querySelectorAll('div').length
const sliderHeight = slider.clientHeight

let active = 0

leftSlider.style.top = `-${(slidesLenght - 1) * 100}vh`

upBtn.addEventListener('click', () => changesSlide('up'))
downBtn.addEventListener('click', () => changesSlide('down'))

function changesSlide(direction) {

    if(direction === 'up') {
        active++
        if(active > slidesLenght - 1) {
            active = 0
        }
    } else if(direction === 'down') {
        active--
        if(active < 0) {
            active = slidesLenght - 1
        }
    }

    rightSlider.style.transform = `translateY(-${active * sliderHeight}px)`
    leftSlider.style.transform = `translateY(${active * sliderHeight}px)`
}
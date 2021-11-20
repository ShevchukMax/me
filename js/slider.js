const series = document.querySelector('.series')
const slides = document.querySelectorAll('.slide')
const left = document.querySelector('.left')
const right = document.querySelector('.right')

let activeSlide = 0

a()

function a() {
    series.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function b() {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })

    slides[activeSlide].classList.add('active')
}

right.addEventListener('click', function() {
    activeSlide++
    if(activeSlide > slides.length - 1) {
        activeSlide = 0
    }
    a()
    b()
})

left.addEventListener('click', function() {
    activeSlide--
    if(activeSlide < 0) {
        activeSlide = slides.length - 1
    }
    a()
    b()
})


document.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowRight') {
        activeSlide++
        if(activeSlide > slides.length - 1) {
            activeSlide = 0
        }
        a()
        b()
    }
});

document.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowLeft') {
        activeSlide--
        if(activeSlide < 0) {
            activeSlide = slides.length - 1
        }
        a()
        b()
    }
});
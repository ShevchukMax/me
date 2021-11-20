let head = document.querySelector('h1')
let burger = document.querySelector('.burger')
let move = 80

function text() {
    if(move < -170 || move > 75 && move < 80) {
        head.classList.add('hidden')
    } else {
        head.classList.remove('hidden')
    }
    if(move < -175) {
        move = 80
    } 
    move = move - 1
    head.style.transform = `translate(${move}%, 0%) translate3d(0px, 0px, 0px)`
}

setInterval(() => text(), 40)

burger.addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active')
    document.querySelector('nav').style.transform = `transform: translateX(220%)`
})

$(document).ready(function() {
	$('#pagepiling').pagepiling({
        keyboardScrolling: false,
        scrollingSpeed: 100,
        anchors: ['', 'series', 'cars', 'projects'],
        menu: '#myMenu'
    });
});


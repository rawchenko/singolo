// document.addEventListener('scroll', onScroll);

// function onScroll(event) {
//     const curPos = window.scrollY;
//     const divs =  document.querySelectorAll('section');
//     const links = document.querySelectorAll('.navigation ul a');
//     divs.forEach((el) => {
//         if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos ) {
//             links.forEach((a) => {
//                 a.classList.remove('active');
//                 if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
//                     a.classList.add('active');
//                 }
//             })
//         }

//     })
// }


let slides = document.querySelectorAll('.slide-single');
console.log(slides);
let slider = [];
for (let i = 0; i < slides.length; i++) {
    slider[i] = slides[i].src;
    slides[i].remove();
}
console.log(slider);

let step = 0;
let offset = 0; 

function draw() {
    let img = document.createElement('img');
    img.src = slider[step];
    img.classList.add('slide-single');
    img.style.left = offset*940 + 'px';
    document.querySelector('.content').appendChild(img);
    if (step + 1 == slider.length) {
        step = 0;
    } else {
        step++;
    }
    offset = 1;

}

function left() {
    document.onclick = null;
    slides2 = document.querySelectorAll('.slide-single');
    let offset2 = 0;
    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.left = offset2 * 940 - 940 + 'px';
        offset2++;
    }
    setTimeout(function(){
        slides2[0].remove()
        draw();
        document.querySelector('.right__button').onclick = left;
    }, 1000);
}

function right() {
    document.onclick = null;
    slides2 = document.querySelectorAll('.slide-single');
    let offset2 = 0;
    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.left = offset2 * 940 + 940 + 'px';
        offset2++;
    }
    setTimeout(function(){
        slides2[0].remove()
        draw();
        document.querySelector('.left__button').onclick = right;
    }, 1000);
}

draw(); draw();
document.querySelector('.left__button').onclick = right;
document.querySelector('.right__button').onclick = left;



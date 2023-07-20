let ttop = document.querySelector('.top');
let scroll = document.querySelector('.main .con1 .inner span');
let con2 = document.querySelector('.con2');
let ty = 0;

ttop.addEventListener('click', e => {
    ty = 0;            
    window.scrollTo({ top: ty , behavior:'smooth'});
})

scroll.addEventListener ('click', e => {
    ty = con2.offsetTop;
    window.scrollTo({ top: ty , behavior:'smooth'});
})
const burger = document.querySelector('#burger');
const closeNav = document.querySelector('#close-nav');
const navigation = document.querySelector('.navigation-left');
const courcesCard = document.querySelectorAll('.courcesCard');
const courcebox = document.querySelector('.courcebox');
const courceboxback = document.querySelector('.courceboxback');
// const nav = document.querySelector('#main-nav');

burger.addEventListener('click', () => {
    navigation.classList.toggle('h-left');
});
closeNav.addEventListener('click', () => {
    navigation.classList.toggle('h-left');
});
// courcesCard.forEach(cource => {
//     cource.addEventListener('click', () => {
//         cource.classList.add('gofull');
//     });
// });
courcesCard.forEach(cource => {
    cource.addEventListener('click', () => {
        courcebox.classList.add('go_up');
    });
});
courceboxback.addEventListener('click', () => {
    courcebox.classList.remove('go_up');
});
const burger = document.querySelector('#burger');
const closeNav = document.querySelector('#close-nav');
const navigation = document.querySelector('.navigation-left');
const courcesCard = document.querySelectorAll('.courcesCard');
const courcebox = document.querySelector('.courcebox');
const courceboxback = document.querySelector('.courceboxback');
const useremail = document.querySelector('#useremail');
const password = document.querySelector('#password');
const loginbtn = document.querySelector('#loginbtn');
const loginpage = document.querySelector('#loginpage');
const aboutus = document.querySelector('#aboutus');
const aboutbox = document.querySelector('.aboutbox');
const closeBottomBtn = document.querySelector('#close-bottom-btn');
const profileBtn = document.querySelector('#profilebtn');
const profilebox = document.querySelector('.profilebox');
const profileboxback = document.querySelector('.profileboxback');
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

loginbtn.addEventListener('click', () => {
    if (useremail.value == '' || password.value == '') {
        alert('Please fill all the fields');
    } else if (useremail.value == 'tester@gmail.com' || password.value == 'tester') {
        // loginpage.classList.add('d-none');
        loginpage.classList.add('logincontainer_up');

    } else {
        alert('Please enter correct credentials');
    }
});

aboutus.addEventListener('click', () => {
    navigation.classList.toggle('h-left');
    aboutbox.classList.toggle('aboutboxhide');
});

closeBottomBtn.addEventListener('click', () => {
    aboutbox.classList.toggle('aboutboxhide');
});

profileBtn.addEventListener('click', () => {
    profilebox.classList.toggle('profileboxhide');
});

profileboxback.addEventListener('click', () => {
    profilebox.classList.toggle('profileboxhide');
});
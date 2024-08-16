const burger = document.querySelector('#burger');
const closeNav = document.querySelector('#close-nav');
const navigation = document.querySelector('.navigation-left');
const courcesCard = document.querySelectorAll('.courcesCard');
const courcebox = document.querySelector('.courcebox');
const courceboxback = document.querySelector('.courceboxback');
const useremail = document.querySelector('#useremail');
const password = document.querySelector('#password');
const loginbtn = document.querySelector('#loginbtn');
const guestbtn = document.querySelector('#guestbtn');
const loginpage = document.querySelector('#loginpage');
const aboutus = document.querySelector('#aboutus');
const contactus = document.querySelector('#contactus');
const aboutcontent = document.querySelector('.aboutcontent');
const contactcontent = document.querySelector('.contactcontent');
const aboutbox = document.querySelector('.aboutbox');
const closeBottomBtn = document.querySelector('#close-bottom-btn');
const profileBtn = document.querySelector('#profilebtn');
const profilebox = document.querySelector('.profilebox');
const profileboxback = document.querySelector('.profileboxback');
// const Gloginbtn = document.querySelector('.Gloginbtn');
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
    aboutcontent.classList.toggle('d-none');
});
contactus.addEventListener('click', () => {
    navigation.classList.toggle('h-left');
    aboutbox.classList.toggle('aboutboxhide');
    contactcontent.classList.toggle('d-none');
});

closeBottomBtn.addEventListener('click', () => {
    aboutbox.classList.toggle('aboutboxhide');
    aboutcontent.classList.add('d-none');
    contactcontent.classList.add('d-none');
});

profileBtn.addEventListener('click', () => {
    profilebox.classList.toggle('profileboxhide');
});

profileboxback.addEventListener('click', () => {
    profilebox.classList.toggle('profileboxhide');
});


// firebase
const firebaseConfig = {
    apiKey: "AIzaSyD4LfPyfr7HLxStAST6Qy5_tyAn4T-NT1E",
    authDomain: "syntaxerror-5189d.firebaseapp.com",
    projectId: "syntaxerror-5189d",
    storageBucket: "syntaxerror-5189d.appspot.com",
    messagingSenderId: "56198039823",
    appId: "1:56198039823:web:9d72bb8717418dac5f167a",
    measurementId: "G-CTJ63WLTF8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


const puser = document.querySelector('#pusername');
const pmail = document.querySelector('#pemail');
const page = document.querySelector('#page');
const pclass = document.querySelector('#pclass');
const pSchool = document.querySelector('#pSchool');
const pfsub = document.querySelector('#pfsub');
const p5th = document.querySelector('#p5th');
const p10th = document.querySelector('#p10th');
const pprogress = document.querySelector('#pprogress');
const pgrowth = document.querySelector('#pgrowth');


//   firebase.analytics();
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        var user = firebase.auth().currentUser;

        if (user != null) {
            var id_name = user.displayName;
            var email_id = user.email;
            var email_verified = user.emailVerified;

            // if (email_verified) {
            //     document.getElementById("verified").style.display = "inline";
            //     document.getElementById("verify_btn").style.display = "none";
            // } else {
            //     document.getElementById("verified").style.display = "none";
            // }
            // document.getElementById("user_name").innerHTML = "hi there : " + id_name;

            document.getElementById("user_name").innerHTML = id_name;
            puser.innerHTML = id_name;
            pmail.innerHTML = email_id;
            loginpage.classList.add('logincontainer_up');
            showdatamy(email_id);
            // document.getElementById("user_email").innerHTML = email_id;
            // document.getElementById("pop_user_email").innerHTML = email_id;

        }
    } else {
        // No user is signed in.
        document.getElementById("user_name").innerHTML = "user_name";
        console.log("logout");
        // window.open("index.html", "_self");
    }
});

const psave = document.querySelector('#psave');
psave.addEventListener('click', () => {
    savedt(pmail.innerHTML);

});

function savedt(user) {
    const writeData = db.collection('user').doc(user);
    writeData.set({
        Age: page.value,
        Class: pclass.value,
        SchoolName: pSchool.value,
        FavSub: pfsub.value,
        Score5th: p5th.value,
        Score10th: p10th.value,
        Progress: pprogress.innerHTML,
        CGR: pgrowth.innerHTML
    });
}

function showdatamy(user) {
    const readData = db.collection('user').doc(user);

    readData.get()
        .then((doc) => {
            if (doc.exists) {
                // console.log("Document data:", doc.data());
                page.value = doc.data().Age;
                pclass.value = doc.data().Class;
                pSchool.value = doc.data().SchoolName;
                pfsub.value = doc.data().FavSub;
                p5th.value = doc.data().Score5th;
                p10th.value = doc.data().Score10th;
                pprogress.innerHTML = doc.data().Progress;
                pgrowth.innerHTML = doc.data().CGR;
            } else {
                // Document doesn't exist
                console.log("No such document!");
            }
        })
        .catch((error) => {
            console.log("Error getting document:", error);
        });
}

// const p = document.querySelector('#profilebtn');
function googleSignup() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        loginpage.classList.add('logincontainer_up');

        // ...
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(errorMessage);
        // ...
    });
}

guestbtn.addEventListener('click', () => {
    loginpage.classList.add('logincontainer_up');
});

function logout() {
    firebase.auth().signOut();
    window.open("index.html", "_self");
}
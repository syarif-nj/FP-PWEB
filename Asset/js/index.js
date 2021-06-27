
var firebaseConfig = {
  apiKey: "AIzaSyCesZiGOF0V00Yvm4giVuqp3SAxeDdISJ4",
  authDomain: "pweb-8ff2d.firebaseapp.com",
  databaseURL: "https://pweb-8ff2d-default-rtdb.firebaseio.com",
  projectId: "pweb-8ff2d",
  storageBucket: "pweb-8ff2d.appspot.com",
  messagingSenderId: "1061898947540",
  appId: "1:1061898947540:web:9614d75d25a4c6fc7fe441",
  measurementId: "G-JN3WKHM6P5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let nama = '';
let alamat = '';
let notlp ='';

function send(nama, uid, alamat, notlp,){
  let newform = firebase.database().ref(user).push();
  newform.set({nama : nama, uid : uid, alamat:alamat, notlp:notlp});
}

function login(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    alert('welcome')
    window.location.href='./dashboard.html';
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    alert('Email dan password salah.');
  });
}

function regis(){
  var email=document.getElementById('email').value;
  var password=document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    alert('berhasil registrasi, ');
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorcode);
    // ..
  });
}


function logout() {

  firebase.auth().signOut().then(() => {
    //sign-out successful.
    window.localStorage.clear();
    window.location.href ='./login.html';
  }).catch((error) => {
    // ada error.
  })
}

function prosesmasuk(){ window.location.href='./login.html';}
function prosesdaftar(){ window.location.href='./register.html';}
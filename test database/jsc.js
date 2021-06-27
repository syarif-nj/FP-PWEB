
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


function login(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    alert(email)

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    alert('welcome')
    window.location.href='../dashboard.html';
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode)
    alert(code);
  });
}
  
function regis(){
  var email=document.getElementById('email').value;
  var password=document.getElementById('password').value;
  alert(email);
  
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    alert('berhasil regis');
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    alert(errorCode);
      if ((errorCode = 'auth/user-not-found')) {
        alert('Email dan Password anda salah');
      }
    // ..
  });
}
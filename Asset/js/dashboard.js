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
/*
firebase.auth().onAuthStateChanged(function (user) {

  //function tampil(){
  var uid = firebase.auth().currentUser.uid;
  var db = firebase.database();
  //alert(uid);

  db.ref('users/'+uid).on('value', hasuccess, haerror);
  function hasuccess(items){
    console.log(items.val().nama);
    var user=items.val();
    document.getElementById('isihai').innerHTML=user.nama;
    document.getElementById('isinama').innerHTML=user.nama;
    document.getElementById('isialamat').innerHTML=user.alamat;
    document.getElementById('isinotlp').innerHTML=user.notlp;
    document.getElementById('isiemail').innerHTML=user.email;
  }
  function haerror(error){
    console.log(error)
  }
  });

function taampil(){
  var uid = firebase.auth().currentUser.uid;
  alert(uid);
  var db = firebase.database();
  var usersref = db.ref('users/'+uid).on('value', hasuccess, haerror);
  function hasuccess(items){
    console.log(items.val().nama);
    var user=items.val();
    document.getElementById('isihai').innerHTML=users.nama;
    document.getElementById('isinama').innerHTML=users.nama;
    document.getElementById('isialamat').innerHTML=users.alamat;
    document.getElementById('isinotlp').innerHTML=users.notlp;
    document.getElementById('isiemail').innerHTML=users.email;
  }
  function haerror(error){
    console.log(error);
  }
}

*/

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

var database = firebase.database();
var key = 0;

database.ref("produk").orderByKey().limitToLast(1).on('child_added',function(data) {
  key = parseInt(data.key, 10);
  key = key + 1;
});

function posting(){
    if(key == 0){
    key = 1;
    }

  var kategori = document.getElementById('kategori').value;
  //var uid = user.uid;
  //var email = user.email;
  database.ref('produk/' + key).set({
    //uid : uid,
    nama  : $('#nama').val(),
    kategori   : kategori,
    stok : $('#notlp').val(),
    harga : $('#alamat').val(),
    deskripsi : $('#deskripsi').val()
  });

  alert("Data Berhasil ditambah");
  /*}else if($('#exampleModalLabel').text() == "Ubah Data"){
  database.ref('users/' + $('#id').val()).update({
    username: $('#nama').val(),
    email   : $('#email').val(),
    address : $('#alamat').val()
   });
   alert("Data Berhasil diupdate");
  }*/
}

function tampil(){
  var pilih = document.getElementById('kategori');
  var kategori = pilih.options[pilih.selectedIndex].value;

  var kategori2 = document.getElementById('kategori').value;
  alert(kategori2);
}
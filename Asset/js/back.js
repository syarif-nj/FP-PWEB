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
  
  
  /*database.ref("users").orderByKey().limitToLast(1).on('child_added',function(data) {
    key = parseInt(data.key, 10);
    key = key + 1;
  });*/
  function regis(){
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var data = userCredential.user;
      if(key == 0){
        key = 1;
      }
      var user = firebase.auth().currentUser;
      var uid = user.id;
  
      database.ref('users/' + key).set({
        nama: $('#nama').val(),
        email   : $('#email').val(),
        alamat : $('#alamat').val(),
        notlp : $('notlp').val(),
        uid : uid
      });
  
      alert('berhasil registrasi');
      window.location.herf='./login.html';
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      if ((errorCode = 'auth/user-not-found')) {
        alert('Email dan Password anda salah');
      }
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
  
  function prosesmasuk() { window.location.href='./login.html';}
  function prosesdaftar() { window.location.href='./register.html';}
  
  var database = firebase.database();
  var key = 0;
  
  /*database.ref("produk").orderByKey().limitToLast(1).on('child_added',function(data) {
    key = parseInt(data.key, 10);
    key = key + 1;
  });*/
  
  function posting(){
      if(key == 0){
      key = 1;
      }
  
    var kategori = document.getElementById('kategori').value;
    var user = firebase.auth().currentUser;
    var uid = user.uid;
    var gambarloc = 'produk/'+key+'.jpg';
  
    //var email = user.email;
    database.ref('produk/' + key).set({
      uid : uid,
      nama  : $('#nama').val(),
      kategori   : kategori,
      stok : $('#stok').val(),
      harga : $('#harga').val(),
      deskripsi : $('#deskripsi').val(),
      gambar : gambarloc
    });
  
    var storage = firebase.storage();
    var file = document.querySelector('#file').files[0];
    var storageRef = storage.ref('produk/' + key + '.jpg');
    storageRef.put(file);
  
    alert("Produk Berhasil ditambah");
  }
  
  
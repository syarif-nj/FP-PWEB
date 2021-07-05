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

firebase.auth().onAuthStateChanged(function (user) {

var uid = firebase.auth().currentUser.uid;
//var uid='2dwNXlDoL2URt02tRxXg8Qdw2Ms2';
var db = firebase.database();
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


firebase.auth().onAuthStateChanged(function (user) {
  var uid = firebase.auth().currentUser.uid;

  database.ref("produkuser/"+uid).orderByKey().limitToLast(1).on('child_added',function(data) {
    key = parseInt(data.key, 10);
    key = key + 1;
   });
 
   database.ref('produkuser/'+uid).on('value', function(snapshot) {
    var count = 0;
    console.log(snapshot.val());
    if(snapshot.exists()){
     $("#tbl-list").remove();
     var content = '<tbody>';
     snapshot.forEach(function(data) {
      count+=1;
      var val = data.val()
      console.log(val);
      document.getElementById('namap'+count).innerHTML=val.nama;
      document.getElementById('harga'+count).innerHTML=val.harga;
                content +='<tr>';
                content += '<td>' + count + '</t>';
                content += '<td>' + val.nama + '</td>';
                content += '<td>' + val.kategori + '</td>';
                content += '<td> Rp. ' + val.harga + '</td>';
                content += '<td> <button class="btn btn-danger" onclick="hapusData(' + data.key + ')"> Hapus</button> </td>';
                content +='</tr>';
                key = 0;
      key = parseInt(data.key, 10);
      key = key + 1;
     });
     
     content += '</tbody>';
     $('#tbl_list').append(content);
    }else{
     $("#tbl_list").remove();
    }
   });
});

function tampil(x){
  var storageRef = storage.ref(x);
      alert(x);
      storageRef.getDownloadURL().then((imgUrl) => {
      document.getElementById('imgp' + count).src = imgUrl;});
      alert(imgUrl);
}

function login(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    alert('selamat datang')
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
  var nama1=document.getElementById('nama').value;
  var alamat1=document.getElementById('alamat').value;
  var notlp1=document.getElementById('notlp').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var data = userCredential.user;
    var user = firebase.auth().currentUser;
    var uid = user.uid;

    firebase.database().ref('users/' + uid).set({
      nama:nama1,
      email   : email,
      alamat : alamat1,
      notlp : notlp1
    });

    alert('berhasil registrasi');
    window.location.href='./dashboard.html';
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

database.ref("produk").orderByKey().limitToLast(1).on('child_added',function(data) {
  key = parseInt(data.key, 10);
  key = key + 1;
});


function posting(){
    if(key == 0){ key = 1;}

  var kategori = document.getElementById('kategori').value;
  var user = firebase.auth().currentUser;
  var uid = user.uid;
  var gambarloc = 'produk/'+key+'.jpg';

  //var email = user.email;
  database.ref('produk/' + key).set({
    uid : uid,
    nama  : $('#nama').val(),
    kategori   : kategori,
    harga : $('#harga').val(),
    deskripsi : $('#deskripsi').val(),
    gambar : gambarloc
  });
  var key2=key-1;
  database.ref('produkuser/' + uid+'/'+key2).set({
    nama  : $('#nama').val(),
    kategori   : kategori,
    harga : $('#harga').val(),
    deskripsi : $('#deskripsi').val(),
    gambar : gambarloc
  });


  var storage = firebase.storage();
  var file = document.querySelector('#file').files[0];
  var storageRef = storage.ref('produk/' + (key - 1) + '.jpg');
  storageRef.put(file);

  alert("Produk Berhasil ditambahkan");
  cleardata();
}


function cleardata(){
  $('#nama').val("");
  $('#kategori').val("");
  $('#stok').val("");
  $('#harga').val("");
  $('#deskripsi').val("");
  $('#file').val("");
}



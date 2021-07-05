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


            var database = firebase.database();
            var key = 0;

            database.ref("partner").orderByKey().limitToLast(1).on('child_added',function(data) {
            key = parseInt(data.key, 10);
            key = key + 1;
            });

            function daftar(){
                if(key == 0){ key = 1;}

            //var email = user.email;
            database.ref('partner/' + key).set({
                nama  : $('#nama').val(),
                email : $('#email').val(),
                alamat : $('#alamat').val(),
                notelpon : $('#no-telpon').val(),
                deskripsi : $('#deskripsi').val(),
            });
             
            alert('berhasil regis');
            
            cleardata();
            }

                function cleardata(){
                    $('#nama').val("");
                    $('#email').val("");
                    $('#alamat').val("");
                    $('#no-telpon').val("");
                    $('#deskripsi').val("");
                }
            


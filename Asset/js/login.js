
$(function(){
    $('#showPass').click(function(){
        if($('#showPass').is(':checked')){
            $('#password').attr('type','text')
        }
        else{
            $('#password').attr('type','password')
        }
    })
    /*$('form').submit(function(){
        let username=$('#username').val()
        let password=$('#password').val()

        if((username=='')||(password=='')){
            alert('silahkan isi username atau password terlebih dahulu')
        }
        else if((username=='admin')&&(password=='admin')){
            window.location.href='dashboard.html'
            return false
        }
        else{
            alert('username atau password salah')
        }
    })*/
})
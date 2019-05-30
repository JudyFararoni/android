function registrar() {
    var email = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;
    var user = document.getElementById("inputUser").value;

    console.log(email)
    console.log(password)

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log("Error1 "+errorCode)
        console.log("Error2 "+errorMessage)
        // ...
    });
}

function resetPass() {
    var auth = firebase.auth();
    var emailAddress = document.getElementById("inputEmail").value;

    auth.sendPasswordResetEmail(emailAddress).then(function() {
        // Email sent.
        alert("Se ha enviado un correo, checa tu bandeja para restabler tu contraseña.");
    }).catch(function(error) {
        // An error happened.
        alert("Ha ocurrido un error.");
    });
}

function guardarPhp(){
    // var email = document.getElementById("inputEmail").value;
    // var username = document.getElementById("inputUser").value;

    var email = $("#inputEmail").val();
    var username = $("#inputUser").val();

    console.log(email)
    console.log(username)

    $.post({
        url:"usuarios.php",
        type:"POST",
        data:{'email':email, 'username':username},
        dataType:"json",
        success:function(data, textStatus, jqXHR){
            alert("Se ha registrado el usuario");
        },
        error:function(jqXHR, textStatus, errorThrown){
            alert("Ha ocurrido un error.");
        }
    });
}


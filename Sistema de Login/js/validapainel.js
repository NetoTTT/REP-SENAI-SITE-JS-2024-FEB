function validar_campos_login(){
    var email = document.getElementsById("email");
    var senha = document.getElementsById("senha");
    var tel = document.getElementsById("tel");
    var nome = document.getElementsById("nome");

    if(email.value == ""){
        alert("E-mail não fornecido");
        email.focus();
    }else if(senha.value == ""){
        alert("Senha não fornecida");
        senha.focus();

    }else if(nome.value == ""){
        alert("Nome não fornecido");
        nome.focus();

    }else if(tel.value == ""){
        alert("Telefone não fornecido");
        tel.focus();

    }

}
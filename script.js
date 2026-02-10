function entrar() {
    let cargo = document.getElementById("tipoUsuario").value;
    let senha = document.getElementById("inpSenha").value;
    let mensagem = document.getElementById("pMensagem");


    mensagem.innerHTML = "";

    if (cargo === "0") {
        mensagem.innerHTML = "Por favor, selecione um cargo.";
        return;
    }


    if (cargo === "vendedor" && senha === "123") {
        alert("Acesso Vendedor autorizado!");
        window.location.href = "vendas.html";
    } 

    else if (cargo === "estoquista" && senha === "456") {
        alert("Acesso Estoque autorizado!");
        window.location.href = "estoque.html";
    }

    else if (cargo === "administrativo" && senha === "789") {
        alert("Acesso Admin autorizado!");
        window.location.href = "admin.html";
    }

    else {
        mensagem.innerHTML = "Senha incorreta para o cargo selecionado!";
        document.getElementById("inpSenha").value = "";
    }
}
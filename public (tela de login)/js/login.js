function entrar() {
    var nomeVar = document.getElementById("nome_input").value;
    var senhaVar = document.getElementById("senha_input").value;
    var divErros = document.getElementById("div_erros_login");

    // Validação simples
    if (nomeVar == "" || senhaVar == "") {
        divErros.innerHTML = "Preencha todos os campos para entrar.";
        divErros.style.color = "#ffcccc"; // Cor de erro (vermelho claro)
        return false;
    } else {
        // Simulação visual de sucesso
        divErros.innerHTML = "Login realizado com sucesso! Redirecionando...";
        divErros.style.color = "#d4ffcc"; // Cor de sucesso (verde claro)
        
        // Simula um tempo de carregamento e redireciona para a página inicial
        setTimeout(function () {
            window.location = "./index.html"; 
        }, 1500); // 1,5 segundos de espera
    }

    return false;
}
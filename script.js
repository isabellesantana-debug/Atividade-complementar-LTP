
class Usuario {
    constructor(nome, email, telefone) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }

    exibirDados() {
        console.log("Nome: " + this.nome);
        console.log("E-mail: " + this.email);
        console.log("Telefone: " + this.telefone);
    }
}

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const mensagem = document.getElementById("mensagem");

    try {
        let erros = [];

        if (nome.trim() === "") {
            erros.push("O nome é obrigatório!");
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            erros.push("E-mail inválido!");
        }

        if (!/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(telefone)) {
            erros.push("Telefone inválido!");
        }

        if (erros.length > 0) {
            throw new Error(erros.join(" "));
        }

        const usuario1 = new Usuario(nome, email, telefone);

        usuario1.exibirDados();

        mensagem.textContent = "Cadastro realizado com sucesso!";
        mensagem.style.color = "green";

    } catch (erro) {
        mensagem.textContent = erro.message;
        mensagem.style.color = "red";
    }
});

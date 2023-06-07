const slider = document.querySelector("#slider");
const button = document.querySelector("#button");
const valor = document.querySelector("#valor");
const password = document.querySelector("#password");
const contPass = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%¨&*().,;:[{}=-+/";
let novaSenha = ""

valor.innerHTML = slider.value;

slider.oninput = function (){
    valor.innerHTML = this.value;
}

function generatePassword() {
    let senha = "";

    for(let i =0, n = charset.length; i < slider.value; ++i){
        senha += charset.charAt(Math.floor(Math.random() * n));
        // o charAt seleciona um caractere a partir de um número gerado pelo Math.random e busca na 
        // variavel charset.
    }
    password.innerHTML = senha;
    // Escreve a senha gerada na página 
    contPass.classList.remove("hide");
    // remove a classe Hide de um elemento
    novaSenha = senha;
}

function copyPassword() {
    alert("Senha copiada!")
    navigator.clipboard.writeText(novaSenha);
    // copia o conteúdo da variável 

}
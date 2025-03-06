const imagesBackground = [
    'carpenter.jpg',
    'hooper.webp',
    'lynch.jpg'
]

document.body.style.backgroundImage = `url("imagens\\\\${imagesBackground[0]}")`;

let i = 1 

setInterval(() => {
    document.body.style.backgroundImage = `url("imagens\\\\${imagesBackground[i++]}")`

    if(i === imagesBackground.length) i = 0
}, 7000)


//Código para verificação das informações enviadas pelo usuário
const telefoneValor = document.getElementById("telefone");
const emailValor = document.getElementById("email");
const elementosDiv = document.getElementsByClassName("elementosForm");
const botaoEnvio = document.getElementById("botaoEnvio");
const nomeFilme = document.getElementById("nomeFilme");
const nomeDiretor = document.getElementById("nomeDiretor");
const arquivo = document.getElementById("arquivo");
const botaoReiniciar = document.getElementById("botaoReiniciar");


telefoneValor.addEventListener('input', (e) =>{

    let telefoneUsuario = e.target.value;
    telefoneUsuario = telefoneUsuario.replace(/\D/g, "");

    // O usuário só pode digitar até 11 caracteres
    if (telefoneUsuario.length > 11) {
        telefoneUsuario = telefoneUsuario.slice(0, 11);
    }

    // Ajusta a formatação para (XX) XXXX-XXXX
    if (telefoneUsuario.length <= 10) {
      telefoneUsuario = telefoneUsuario.replace(/^(\d{2})(\d)/, "($1) $2");
      telefoneUsuario = telefoneUsuario.replace(/(\d{4})(\d)/, "$1-$2");
    } else {
      telefoneUsuario = telefoneUsuario.replace(/^(\d{2})(\d)/, "($1) $2");
      telefoneUsuario = telefoneUsuario.replace(/(\d{5})(\d)/, "$1-$2");
    }

    e.target.value = telefoneUsuario;

});


function limparDados() {
    // Configuração para o botão de limpar dados
        telefoneValor.value = "";
        emailValor.value = "";
        nomeFilme.value = "";
        nomeDiretor.value = "";
        arquivo.value = "";

}

botaoEnvio.addEventListener("click", () => {
    document.getElementById('formulario').addEventListener('submit', function(event) {
        event.preventDefault();
        if(telefoneValor.value && emailValor.value && nomeFilme.value && nomeDiretor.value && arquivo.value){
            alert("Inscrição realizada com sucesso");
            limparDados()
        }
      });

});






const nomeColaborador = document.getElementById("nomeColaborador")
const botaoProcurar = document.getElementById("searchColaborador")

const botaoRegistrar = document.querySelectorAll(".registrarColaborador")


botaoRegistrar.forEach((botao) =>{
    botao.addEventListener('click', () => {
        const dataOriginal = new Date();
        const dataRegistro = dataOriginal.getDate() + "-" + dataOriginal.getUTCMonth()+1
            + "-" + dataOriginal.getFullYear() 
            + " em " + dataOriginal.getHours() + "-"
            + dataOriginal.getMinutes() + "-"
            + dataOriginal.getSeconds()

        const dataParagrafo = document.createElement("p");
        dataParagrafo.innerText = dataRegistro;
        if(botao.parentElement.childElementCount > 2){
            botao.parentElement.removeChild(botao.parentElement.lastElementChild)
        }
        botao.parentElement.appendChild(dataParagrafo)
    })
})

function searchColaborador(){
    const registrosColaboradores = document.getElementsByClassName("registros");
    for(var i = 0; i<registrosColaboradores.length; i++){
        const nome = registrosColaboradores[i].getElementsByTagName("h6")[0].innerText;
        if(nomeColaborador.value.toLowerCase() == nome.toLowerCase()){
            document.querySelectorAll(".registros").forEach(registro => registro.style.visibility="hidden");
            registrosColaboradores[i].style.visibility = "visible";
        }
    }
}

nomeColaborador.addEventListener('mouseout', () => {
    if(nomeColaborador.value == ''){
        document.querySelectorAll(".registros").forEach(registro => registro.style.visibility="visible");
    }
})


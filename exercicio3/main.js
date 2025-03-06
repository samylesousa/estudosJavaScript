const botaoBuscar = document.getElementById("botaoBuscar");
const informacoesPais = document.getElementById("informacoesPais");
const botaoLimpar = document.getElementById("limparBusca");

botaoBuscar.addEventListener("click", () => {
    const paisNome = document.getElementById("pais").value.trim();

    if(!paisNome){
        alert("Digite o nome do país");
    }
    const apiURL = `https://restcountries.com/v3.1/name/${paisNome}`;

    fetch(apiURL)
        .then(response => {
            if(!response.ok){
                throw new Error("Os dados não foram recebidos")
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
            const linguagens = Object.values(data[0].languages);
            console.log(linguagens[0])
            informacoesPais.innerHTML = `
                <p>O idioma desse país é: ${linguagens[0]}</p>
                <p>Esse país tem uma população de: ${data[0].population}</p>
                <p>A capital é: ${data[0].capital[0]}</p>
                <p>A região desse país é: ${data[0].region}</p>
                <p>E por fim, a bandeira do país é: ${data[0].flag}</p>
            `;
        })
        .catch(error => {
            informacoesPais.innerHTML = `
                <p style="color:red;">O nome do país digitado não foi encontrado.</p>
            `;
        })
})

botaoLimpar.addEventListener("click", () => {
    const paisNome = document.getElementById("pais");

    paisNome.value = "";
})
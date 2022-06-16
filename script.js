// variaveis // dados de entrada // dados de saida

// Pegar do HTML o click no botão
const respostaElement = document.querySelector("#resposta")
// Pegar a pergunta feita
const perguntaElement = document.querySelector("#inputPergunta")
// Tratar o botão de pergunta
const buttonPerguntar = document.querySelector("#buttonPerguntar")
// array com as repostas
const respostas = [
    "Me falaram que não",
    "Provavelmente",
    "Os resultados dizem que sim",
    "Talvez",
    "Pensando bem, não sei te dizer!",
    "Se você se esforçar, sim!",
    "Melhor não te dizer agora",
    "Com certeza sim!",
    "Acho melhor não",
    "Você não esta sendo uma boa pessoa, melhor não!",
    "De acordo com a lua, SIM!",
    "Sinais apontam que sim",
    "Faça o que achar melhor",
    "O que sua mãe te disse?"
]

//função para gerar a resposta na tela
function fazerPergunta() {
    // validar se fez pergunta
    if(inputPergunta.value == "") {
        alert("Favor, digite sua pergunta!")
        return
    }
    // criar uma div via js
    const pergunta = "<div>" + inputPergunta.value + "</div>"
    // gerar número aleatório
    const totalRepostas = respostas.length
    const numberAleatorio = Math.floor(Math.random() * totalRepostas)
    // inserir resposta no HTML
    respostaElement.style.opacity = 1
    respostaElement.innerHTML = pergunta + respostas[numberAleatorio]
    // desabilitar o botão perguntar
    buttonPerguntar.setAttribute("disabled", true)
    // deixar o campo de pergunta vazio
    inputPergunta.value = "";
    // remover a resposta depois de 3seg
    setTimeout(function() {
        respostaElement.style.opacity = 0;
        buttonPerguntar.removeAttribute("disabled")
    }, 4000)
}

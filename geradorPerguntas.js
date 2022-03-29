var perguntaHTML = document.getElementById("pergunta");
var verificadorHTML = document.getElementById("verificador");
var pontuacaoHTML = document.getElementById("pontuacao");
var perguntas = [
    {
        pergunta: 'oi tudo bem?',
        resposta: 'sim'
    },
    {
        pergunta: 'como você está?',
        resposta: 'bem'
    },
    {
        pergunta: 'ta com fome',
        resposta: 'sim'
    },
    {
        pergunta: 'é sério tá?',
        resposta: 'sim'
    },
    {
        pergunta: 'acaba logo a aula',
        resposta: 'claro'
    }]


let perguntaGerada = "";
let respostaCorreta = "";
let contador = 0;



function Generate() {
    var random = Math.floor(Math.random() * perguntas.length)

    return random;
}


function getPergunta() {
    var random = Generate()
    perguntaGerada = perguntas[random].pergunta;
    return perguntas[random]
}

function generateQuestion() {
    var questao = getPergunta();

    perguntaHTML.innerHTML = questao.pergunta;
    respostaCorreta = questao.resposta;

}

function Quiz() {
    var respostaHTML = document.getElementById("resposta").value;

    if (perguntaGerada.length == 0) {
        verificadorHTML.innerHTML = "TEM QUE GERAR UMA PERGUNTA NEH JOÃO SEM BRAÇO";
        return;
    }

    if (respostaHTML.length == 0) {
        verificadorHTML.innerHTML = "RESPONDE ESSE CARALHO";
        return;
    }


    if (respostaHTML == respostaCorreta) {
        verificadorHTML.innerHTML = "resposta CORRETAAA";
        contador++;
    }
    else {
        verificadorHTML.innerHTML = "resposta Errada";
        contador--;
    }

    pontuacaoHTML.innerHTML = contador;
    generateQuestion()

}


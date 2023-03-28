//const imgRobotron = document.querySelector("#robotron");

// imgRobotron.addEventListener("click", function(){
//     console.log('você clicou no robô bobão, seu bobão');
// });

// imgRobotron.addEventListener("click", (evento) => {
//     console.log('você clicou no robô bobão, seu bobão');
//     console.log('Esse é seu evento:', evento);
// });


// function dizOi(nomeDoBobao) {
//     console.log(`oi, ${nomeDoBobao}`);
//     console.log('eu sou um robô bobão');
// } 

//dizOi('cara de batata');

// AULA 03



const controle = document.querySelectorAll("[data-controle]");
const estatistica = document.querySelectorAll("[data-estatistica]");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (element) => {
    element.addEventListener('click', (event) => {
        manipulaDados(event.target.parentNode, event.target.dataset.controle);
        atualizaEstatistica(event.target.dataset.peca);
    })
} )


function manipulaDados (elementoPai, operacao){
    const controleContador = elementoPai.querySelector("[data-contador]");

    if(operacao == '-' && parseInt(controleContador.value) > 0){
        controleContador.value =  parseInt(controleContador.value) - 1;
    }else if(operacao == '+'){
        controleContador.value =  parseInt(controleContador.value) + 1;
    }else{
        console.log('Valor igual a zero ou operação não aceita. Escolha "+" ou "-"');
    }
}

function atualizaEstatistica(peca){
    console.log(pecas[peca]);

    estatistica.forEach((element) => {
        element.textContent = parseInt(element.textContent) + pecas[peca][element.dataset.estatistica];
    })
}
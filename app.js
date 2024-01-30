let listaDeNumerosSorteadosm= [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, Texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = Texto;
    responsiveVoice.speak(Texto, 'Brazilian Portuguese Female',{rate:1.2});    
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1' , 'jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');    
}

    exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1' , 'Acertou !');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`; 
        exibirTextoNaTela('p' , mensagemTentativas); 
        document.getElementById('reiniciar').removeAttribute('disabled');      
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'o número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'o número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }       
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); 
    let quantidadeDeElementosNaLista = listaDeNumerosSorteadosm.length; 
    
    if (quantidadeDeElementosNaLista == numeroLimite ) {
        listaDeNumerosSorteadosm = [];
    }
    if (listaDeNumerosSorteadosm.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();        
    } else {
        listaDeNumerosSorteadosm.push(numeroEscolhido);
        console.log(listaDeNumerosSorteadosm);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';          
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
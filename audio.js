const fundo = new Audio("sons/fundo.mp3");
const pedras = new Audio("sons/pedras.mp3");
const cavalo = new Audio("sons/cavalos.mp3");
const fall = new Audio ("sons/fall.mp3");
const tensao = new Audio ("sons/tensao.mp3");

function tocarFundo(botao) {
    if (fundo.paused) {
        fundo.play();
        botao.textContent = "Parar";
    } else {
        fundo.pause();
        fundo.currentTime = 0;
        botao.textContent = "Fundo";
    }
}

function tocarPedras(botao) {
    if (pedras.paused) {
        pedras.play();
        botao.textContent = "Parar";
    } else {
        pedras.pause();
        pedras.currentTime = 0;
        botao.textContent = "Pedras";
    }
}

function tocarCavalo(botao) {
    if (cavalo.paused) {
        cavalo.play();
        botao.textContent = "Parar";
    } else {
        cavalo.pause();
        cavalo.currentTime = 0;
        botao.textContent = "Cavalo";
    }
}
function tocarCaindo(botao) {
    if (fall.paused) {
        fall.play();
        botao.textContent = "Parar";
    } else {
        fall.pause();
        fall.currentTime = 0;
        botao.textContent = "Caindo-Cavalo";
    }
}

function tocarTensao(botao) {
    if (tensao.paused) {
        tensao.play();
        botao.textContent = "Parar";
    } else {
        tensao.pause();
        tensao.currentTime = 0;
        botao.textContent = "Tensão";
    }
}
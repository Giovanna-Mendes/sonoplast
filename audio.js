const fundo = new Audio("sons/fundo.mp3");
const pedras = new Audio("sons/pedras.mp3");
const cavalo = new Audio("sons/cavalos.mp3");
const fall = new Audio ("sons/caindo.mp3");
const tensao = new Audio ("sons/tensao.mp3");


function tocarPedras(botao) {
    if (pedras.paused) {
        pedras.play();
        botao.textContent = "PARAR";
    } else {
        pedras.pause();
        pedras.currentTime = 0;
        botao.textContent = "PEDRAS";
    }
}

function tocarCavalo(botao) {
    if (cavalo.paused) {
        cavalo.play();
        botao.textContent = "PARAR";
    } else {
        cavalo.pause();
        cavalo.currentTime = 0;
        botao.textContent = "CAVALO";
    }
}
function tocarCaindo(botao) {
    if (fall.paused) {
        fall.play();
        botao.textContent = "PARAR";
    } else {
        fall.pause();
        fall.currentTime = 0;
        botao.textContent = "CAINDO";
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

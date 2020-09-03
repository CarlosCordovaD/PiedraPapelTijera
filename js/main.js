let userScore = 0;
let pcScore = 0;
const userScore_span = document.getElementById('user-score');
const pcScore_span = document.getElementById('pc-score');
const scoreBoard_div = document.querySelector('marcador');
const result_div = document.querySelector('.result p');
const piedra_div = document.getElementById('roca');
const papel_div = document.getElementById('papel');
const tijera_div = document.getElementById('tijera');

function movidaPc(){
    const opciones = ['roca','papel','tijera'];
    const random = Math.floor(Math.random() * 3);
    const movida = opciones[random];
    return movida;
}
function ganar(opcionUser, opcionComp){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = "Muy bien 😄!!! "+opcionUser+" > "+opcionComp;
}
function perder(opcionUser, opcionComp){
    pcScore++;
    pcScore_span.innerHTML = userScore;
    result_div.innerHTML = "Perdiste 😓"+opcionUser+" < "+opcionComp;
}
function empate(opcionUser, opcionComp){
    result_div.innerHTML = "Empate 😛"+opcionUser+" = "+opcionComp;
}
function game(opcion){
    const movidaComp = movidaPc();
    const movidaUser = opcion;
 
    switch(movidaUser+movidaComp){
        case 'rocatijera':
        case 'papelroca':
        case 'tijerapapel':
            ganar(movidaUser,movidaComp);
        break;
        case'rocapapel':
        case'papeltijera':
        case'tijeraroca':
            perder(movidaUser,movidaComp);
        break;
        case'rocaroca':
        case'tijeratijera':
        case'papelpapel':
            empate(movidaUser,movidaComp);
        break;
    }
}

function main(){
    piedra_div.addEventListener('click', () => game("roca"));
    papel_div.addEventListener('click', () => game("papel"));
    tijera_div.addEventListener('click', () => game("tijera"));
}
main();
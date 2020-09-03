let userScore = 0;
let pcScore = 0;
const userScore_span = document.getElementById('user-score');
const pcScore_span = document.getElementById('pc-score');
const scoreBoard_div = document.querySelector('marcador');
const result_div = document.querySelector('.result p');
const piedra_div = document.getElementById('roca');
const papel_div = document.getElementById('papel');
const tijera_div = document.getElementById('tijera');
const user_div = document.getElementById('Usuario'); 
const img_div = document.getElementById('img'); 

function getData(){
    const nombres = document.getElementById("nombre").value;
    const generos = document.getElementById("genero").value;  
    const colores = document.getElementById("color").value;  
    document.getElementById('principal').classList.toggle('ocultar');
    if(nombres == ''){
        user_div.innerHTML = 'Usuario';
    }
    else{
        user_div.innerHTML = nombres;
    }
    if(generos == 'mujer')
    {   
        img_div.innerHTML = '<img src="images/woman.png" alt="Woman">';        
    }
    else{
        img_div.innerHTML = '<img src="images/man.png" alt="Man">';    
    }
    if(colores == 'rojo'){
        document.getElementById('body').classList.add(colores);
    }
    else if(colores == 'negro'){
        document.getElementById('body').classList.add(colores);
    }
    else if(colores == 'morado'){
        document.getElementById('body').classList.add(colores);
    }
    else {
        document.getElementById('body').classList.add('azul');
    }

    
}
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
    pcScore_span.innerHTML = pcScore;
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
let mode = ''; // variável para armazenar o modo torre Origem / torre Destino
let count = 0;
let countChild = 1;
let lastDisc;
let previousDisc;
let towerSel;
let lastTower;

//Capturando elementos no HTML
let contTowerA = document.getElementById('towerA');
let contTowerB = document.getElementById('towerB');
let contTowerC = document.getElementById('towerC');


//Cria Varetas / Torre 
contTowerA.classList.add('varet__bg');
contTowerB.classList.add('varet__bg');
contTowerC.classList.add('varet__bg');

//Cria elementos na torre A (torre e discos)
let disco1 = document.createElement("div");
disco1.className = "disco__1Amarelo";
disco1.id = "disco__1Amarelo";
contTowerA.appendChild(disco1);
let disco2 = document.createElement("div");
disco2.className = "disco__2Azul";
disco2.id = "disco__2Azul";
contTowerA.appendChild(disco2);
let disco3 = document.createElement("div");
disco3.className = "disco__3Verde";
disco3.id = "disco__3Verde";
contTowerA.appendChild(disco3);
let disco4 = document.createElement("div");
disco4.className = "disco__4Vermelho";
disco4.id = "disco__4Vermelho";
contTowerA.appendChild(disco4);


// Evento de click
const eventoClick = function(event){
    
    let idTowerSel = event.currentTarget;
    
    mode = (count % 2 === 0 ? "origem" : "destino");
    count++;
    towerSel = idTowerSel.id;
    
    if(mode === 'destino'){
                moviment(lastDisc, towerSel);
    } else {
        lastTower = idTowerSel;
    }
    
    countChild = idTowerSel.childElementCount;
    
    if (countChild > 0){
        lastDisc = idTowerSel.lastElementChild;
        previousDisc = lastDisc.previousElementSibling; 
    } 
    
    countChild = idTowerSel.childElementCount;
    
    if (countChild > 0){
        lastDisc = idTowerSel.lastElementChild;
        previousDisc = lastDisc.previousElementSibling; 
    } 
}


// função de movimento do disco
function moviment(disc, towerSel){
    if (disc !== undefined){
        if (towerSel === 'towerA'){
            contTowerA.appendChild(disc);
        } else if (towerSel === 'towerB'){
            contTowerB.appendChild(disc);
        } else if(towerSel === 'towerC'){
            contTowerC.appendChild(disc);
        }
    }
}


// adicionando event Listener as torres
contTowerA.addEventListener('click', eventoClick);
contTowerB.addEventListener('click', eventoClick);
contTowerC.addEventListener('click', eventoClick);

// função para validar movimento de discos incorretos
function validMovement(lastDisc, countChild, originDisc){
    let widthLastDisc = lastDisc.offsetWidth;
    let widthOrigDisc = originDisc.offsetWidth;
    
    if (countChild === 1){
        return true;
    } else if(countChild === 2 && widthOrigDisc === 15){
        return true;
    } else if (countChild > 1 && widthLastDisc < widthOrigDisc){
            return true;
    } else {
        return false;
    }
}

// outras funções













// function victoryRule() {
//     if (towerSel !== torreA && countChild === 5){
//       console.log("Parabéns, você venceu!")        
//       return
//     }

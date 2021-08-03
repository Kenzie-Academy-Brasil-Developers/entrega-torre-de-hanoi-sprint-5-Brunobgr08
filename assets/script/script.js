let mode = ''; // variável para armazenar o modo torre Origem / torre Destino
let count = 0;
let countChild = 1;
let lastDisc;
let previousDisc;
let towerSel;

//Capturando elementos no HTML
let contTowerA = document.getElementById('towerA');
let contTowerB = document.getElementById('towerB');
let contTowerC = document.getElementById('towerC');

//Cria elementos na torre A (torre e discos)
let torreA = document.createElement("div");
torreA.className = "vareta__A";
torreA.id = "vareta__A";
contTowerA.appendChild(torreA);
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

//Cria elemento na torre B (torre)

let torreB = document.createElement("div");
torreB.className = "vareta__B";
torreB.id = "vareta__B";
contTowerB.appendChild(torreB);

//Cria elemento na torre C (torre)

let torreC = document.createElement("div");
torreC.className = "vareta__C";
torreC.id = "vareta__C";
contTowerC.appendChild(torreC);

// Evento de click
const eventoClick = function(event){
    
    let idTowerSel = event.currentTarget;
    
    mode = (count % 2 === 0 ? "origem" : "destino");
    count++;
    towerSel = idTowerSel.id;
    
    if(mode === "destino"){
        moviment(lastDisc, towerSel);
    }
    
    countChild = idTowerSel.childElementCount;
    
    if (countChild > 1){
        lastDisc = idTowerSel.lastElementChild;
        previousDisc = lastDisc.previousElementSibling; 
    } 
    console.log(mode); // modo de clique: origem ou destino
    console.log(towerSel); // torre clicada
    console.log(countChild); // quantos filho tem a torre
    console.log(lastDisc);  // ultimo filho da torre
    console.log(previousDisc); //penultimo filho da torre
}

// função de movimento do disco
function moviment(disc, towerSel){
    if (towerSel === 'towerA'){
        contTowerA.appendChild(disc);
    } else if (towerSel === 'towerB'){
        contTowerB.appendChild(disc);
    } else if(towerSel === 'towerC'){
        contTowerC.appendChild(disc);
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
    } else if (countChild > 1 && widthLastDisc < widthOrigDisc){
        return true;
    } else {
        return false;
    }
}

// outras funções
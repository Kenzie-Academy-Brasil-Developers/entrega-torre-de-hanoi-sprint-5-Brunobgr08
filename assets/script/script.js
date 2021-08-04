let mode = ''; // variável para armazenar o modo torre Origem / torre Destino
let count = 0;  // contador de cliques
let countChild;  // 
let lastDisc;  //variável para armazenar o último filho da torre 
let previousDisc; // variavel para armazenar o penúltimo filho da torre
let towerSelID; // variavel para armazenar a torre selecionada
let lastTower; //variavel para armazenar a torre anterior

//Capturando elementos no HTML
let contTowerA = document.getElementById('towerA');
let contTowerB = document.getElementById('towerB');
let contTowerC = document.getElementById('towerC');

//Cria as torres / varetas
contTowerA.classList.add('varet__bg');
contTowerB.classList.add('varet__bg');
contTowerC.classList.add('varet__bg');

//Cria elementos na torre A (discos)

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
    
    let towerSel = event.currentTarget;
    
    mode = (count % 2 === 0 ? "origem" : "destino");
    count++;

    towerSelID = towerSel.id;
    
    countChild = towerSel.childElementCount;
    lastDisc = towerSel.lastElementChild;
    console.log(lastDisc);
    if (lastDisc !== null){
        previousDisc = lastDisc.previousElementSibling; 
    }

    if(mode === "destino"){  
        // if (validMovement(towerSel, lastTower, lastDisc, previousDisc) === true){
            moviment(lastDisc, towerSelID);
        // }    
    } else {
        lastTower = towerSel;
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
function validMovement(towerSel, lastTower, lastDisc, originDisc){

     

    
    // // console.log(lastDisc.offsetWidth);
    // // console.log(previousDisc.offsetWidth);

    // let widthLastDisc = lastDisc.offsetWidth;
    // let widthOrigDisc = originDisc.offsetWidth;
    

}


//função para verificar movimentos/cliques incorretos/inválidos nas torres
function incorrectsMov(mode, towerSel, countChild, lastTower){

    
    
}
// outras funções

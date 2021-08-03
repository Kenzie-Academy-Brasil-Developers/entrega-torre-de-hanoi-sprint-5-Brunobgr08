let mode = ''; // variável para armazenar o modo torre Origem / torre Destino
let count = 0;
let countChild = 1;
let lastDisc;
let towerSel;

//Cria elementos na torre A (torre e discos)
let contTowerA = document.getElementById('towerA');

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
let contTowerB = document.getElementById('towerB');

let torreB = document.createElement("div");
torreB.className = "vareta__B";
torreB.id = "vareta__B";
contTowerB.appendChild(torreB);

//Cria elemento na torre C (torre)
let contTowerC = document.getElementById('towerC');

let torreC = document.createElement("div");
torreC.className = "vareta__C";
torreC.id = "vareta__C";
contTowerC.appendChild(torreC);

//Capturando elementos no HTML
towerA = document.getElementById('towerA');
towerB = document.getElementById('towerB');
towerC = document.getElementById('towerC');

// Evento de click
const eventoClick = function(event){
    
    let idTowerSel = event.currentTarget;
    countChild = idTowerSel.childElementCount;

    if (countChild > 1){
        lastDisc = idTowerSel.lastElementChild.id;
    } else {
        lastDisc = '';
    }

    mode = (count % 2 === 0 ? "origem" : "destino");
    count++;
    towerSel = idTowerSel.id;

    if(mode === "destino"){
        moviment();
    }

    console.log(towerSel); // torre clicada
    console.log(countChild); // quantos filho tem a torre
    console.log(lastDisc);  // ultimo filho da torre
    console.log(mode); // modo de clique: origem ou destino
}

// função de movimento do disco
function moviment(disc, countChild, towerSel, mode){
    
}

// adicionando event Listener as torres
towerA.addEventListener('click', eventoClick);
towerB.addEventListener('click', eventoClick);
towerC.addEventListener('click', eventoClick);

// outras funções
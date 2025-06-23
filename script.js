function clearScreen(){
for (let i=0;i<document.getElementsByClassName("quadrado").length;i++){
document.getElementsByClassName("quadrado")[i].setAttribute("style","background-color: black");
document.getElementsByClassName("quadrado")[i].innerHTML = "";
}
}

function levelMessage(){

let pixelWhite = [];
let levelName = [215,216,217,219,220,221,223,224,225,227,228,229,250,254,256,258,262,285,286,287,289,290,291,293,294,295,297,298,299,320,324,326,330,332,355,359,361,363,364,365,367,368,369];
pixelWhite = pixelWhite.concat(levelName);

let unidade0 = [237,238,239,272,274,307,309,342,344,377,378,379];
let unidade1 = [238,272,273,308,343,377,378,379];
let unidade2 = [237,238,239,274,307,308,309,342,377,378,379];
let unidade3 = [237,238,239,274,307,308,309,344,377,378,379];
let unidade4 = [237,239,272,274,307,308,309,344,379];
let unidade5 = [237,238,239,272,307,308,309,344,377,378,379];
let unidade6 = [237,238,239,272,307,308,309,342,344,377,378,379];
let unidade7 = [237,238,239,274,309,344,379];
let unidade8 = [237,238,239,272,274,307,308,309,342,344,377,378,379];
let unidade9 = [237,238,239,272,274,307,308,309,344,379];

let dezena0 = [233,234,235,268,270,303,305,338,340,373,374,375];
let dezena1 = [234,268,269,304,339,373,374,375];
let dezena2 = [233,234,235,270,303,304,305,338,373,374,375];

if (level == 1){pixelWhite = pixelWhite.concat(dezena0,unidade1);}
else if (level == 2){pixelWhite = pixelWhite.concat(dezena0,unidade2);}
else if (level == 3){pixelWhite = pixelWhite.concat(dezena0,unidade3);}
else if (level == 4){pixelWhite = pixelWhite.concat(dezena0,unidade4);}
else if (level == 5){pixelWhite = pixelWhite.concat(dezena0,unidade5);}
else if (level == 6){pixelWhite = pixelWhite.concat(dezena0,unidade6);}
else if (level == 7){pixelWhite = pixelWhite.concat(dezena0,unidade7);}
else if (level == 8){pixelWhite = pixelWhite.concat(dezena0,unidade8);}
else if (level == 9){pixelWhite = pixelWhite.concat(dezena0,unidade9);}
else if (level == 10){pixelWhite = pixelWhite.concat(dezena1,unidade0);}
else if (level == 11){pixelWhite = pixelWhite.concat(dezena1,unidade1);}
else if (level == 12){pixelWhite = pixelWhite.concat(dezena1,unidade2);}
else if (level == 13){pixelWhite = pixelWhite.concat(dezena1,unidade3);}
else if (level == 14){pixelWhite = pixelWhite.concat(dezena1,unidade4);}
else if (level == 15){pixelWhite = pixelWhite.concat(dezena1,unidade5);}

if (level <= lastLevel){
let pixel = document.getElementsByClassName("quadrado");
clearScreen();
for (let i=0;i<pixelWhite.length;i++){
pixel[pixelWhite[i]].setAttribute("style","background-color: white");
}
}
}

function updateSetIntervals(){
updateScreenInterval = setInterval(function () {updateScreen();},50);
moveMonsterInterval = setInterval(function () {moveMonster();},speedMonster);
checkCrashInterval = setInterval(function () {checkCrash();},1);
}

function changeLevel(){
level++;
map = [];
indexMap = [];
positionMap = [];
clearInterval(monster);clearInterval(updateScreenInterval);clearInterval(checkCrashInterval);
levelMessage();

setTimeout(function(){
clearScreen();
if (level == 1){
map = [linhaNeutra,linha1,linha2,linha3,linha4,linha5,linhaNeutra];
qntdMonstros = 1;
speedMonster = 1000;
updateMap();
}
else if (level == 2){
map = [linhaNeutra,linha1,linha2,linha3,linha4,linha5,linhaNeutra];
qntdMonstros = 2;
speedMonster = 950;
updateMap();
}
else if (level == 3){
map = [linhaNeutra,linha1,linha2,linha3,linha4,linha5,linhaNeutra];
qntdMonstros = 3;
speedMonster = 900;
updateMap();
}
else if (level == 4){
map = [linhaNeutra,linha1,linha2,linha3,linha4,linha5,linhaNeutra];
qntdMonstros = 4;
speedMonster = 850;
updateMap();
}
else if (level == 5){
map = [linhaNeutra,linha1,linha2,linha3,linha4,linha5,linhaNeutra];
qntdMonstros = 5;
speedMonster = 800;
updateMap();
}
else if (level == 6){
map = [linhaNeutra,linha1,linha2,linha3,linha4,linha5,linhaNeutra];
qntdMonstros = 6;
speedMonster = 750;
updateMap();
}
else if (level == 7){
map = [linhaNeutra,linha1V2,linha2V2,linha3V2,linha4V2,linha5V2,linhaNeutra];
qntdMonstros = 7;
speedMonster = 700;
updateMap();
}
else if (level == 8){
map = [linhaNeutra,linha1V3,linha2V3,linha3V3,linha4V3,linha5V3,linhaNeutra];
qntdMonstros = 8;
speedMonster = 650;
updateMap();
}
else if (level == 9){
map = [linhaNeutra,linha1V4,linha2V4,linha3V4,linha4V4,linha5V4,linhaNeutra];
qntdMonstros = 9;
speedMonster = 600;
updateMap();
}
else if (level == 10){
map = [linhaNeutra,linha1V5,linha2V5,linha3V5,linha4V5,linha5V5,linhaNeutra];
qntdMonstros = 10;
speedMonster = 550;
updateMap();
}
else if (level == 11){
map = [linhaNeutra,linha1V6,linha2V6,linha3V6,linha4V6,linha5V6,linha6V6,linha7V6,linha8V6,linha9V6,linha10V6,linha11V6,linhaNeutra];
qntdMonstros = 10;
speedMonster = 500;
updateMap();
monster.push([341,3,9,25],[343,3,9,27],[345,3,9,29]);
}
else if (level == 12){
map = [linhaNeutra,linha1V7,linha2V7,linha3V7,linha4V7,linha5V7,linha6V7,linha7V7,linha8V7,linha9V7,linha10V7,linha11V7,linhaNeutra];
qntdMonstros = 10;
speedMonster = 500;
updateMap();
monster.push([341,3,9,25],[343,3,9,27],[345,3,9,29]);
monster.push([338,3,9,23]);
}
else if (level == 13){
map = [linhaNeutra,linha1V8,linha2V8,linha3V8,linha4V8,linha5V8,linha6V8,linha7V8,linha8V8,linha9V8,linha10V8,linha11V8,linhaNeutra];
qntdMonstros = 10;
speedMonster = 500;
updateMap();
monster.push([341,3,9,25],[343,3,9,27],[345,3,9,29]);
monster.push([338,3,9,23]);
monster.push([331,3,9,16],[333,3,9,18],[335,3,9,20]);
}
else if (level == 14){
map = [linhaNeutra,linha1V9,linha2V9,linha3V9,linha4V9,linha5V9,linha6V9,linha7V9,linha8V9,linha9V9,linha10V9,linha11V9,linhaNeutra];
qntdMonstros = 10;
speedMonster = 500;
updateMap();
monster.push([341,3,9,25],[343,3,9,27],[345,3,9,29]);
monster.push([338,3,9,23]);
monster.push([331,3,9,16],[333,3,9,18],[335,3,9,20]);
monster.push([328,3,9,13]);
}
else if (level == 15){
map = [linhaNeutra,linha1V10,linha2V10,linha3V10,linha4V10,linha5V10,linha6V10,linha7V10,linha8V10,linha9V10,linha10V10,linha11V10,linhaNeutra];
qntdMonstros = 10;
speedMonster = 500;
updateMap();
monster.push([341,3,9,25],[343,3,9,27],[345,3,9,29]);
monster.push([338,3,9,23]);
monster.push([331,3,9,16],[333,3,9,18],[335,3,9,20]);
monster.push([328,3,9,13]);
monster.push([323,3,9,8],[323,3,9,8],[323,3,9,8]);
}
else if (level > lastLevel){
showCongratulations();
}

if (level <= 10){positionPlayer = [107,3,2];}
else if (level > 10){positionPlayer = [137,3,32];};

},2500);
}

function updateMap(){
for (let i=0;i<map.length;i++){
for (let j=0;j<linha1.length;j++){indexMap.push(map[i][j]);}
}
for (let i=0;i<map.length;i++){
let line = [];
for (let j=0;j<linha1.length;j++){line.push(i*35+j);}
positionMap.push(line);
}
addMonster(qntdMonstros);
updateSetIntervals();
}

function checkArrival(){
if (indexMap[positionPlayer[0]]==3){
clearInterval(moveMonsterInterval);clearInterval(updateScreenInterval);clearInterval(checkCrashInterval);
updateScreen();
changeLevel();
}
}

function checkCrash(){
for(let i=0;i<monster.length;i++){
if(monster[i][0] == positionPlayer[0]){
clearInterval(moveMonsterInterval);clearInterval(updateScreenInterval);clearInterval(checkCrashInterval);
statusCrash = true;
updateScreen();
showGameOver();
}
}
}
function addMonster(quantidade){
monster = [];
let spaceAvailable = [];
//CHECANDO spaceAvailable
for (let i=0;i<6;i++){
for (let j=0;j<linha1.length;j++){
if (map[i][j]==1){spaceAvailable.push([positionMap[i][j],0,i,j]);}
}
}
//SETAR N MONSTROS EM ESPAÇOS ALETORIOS
for (let i=0;i<quantidade;i++){
let randomNumber = Math.trunc(Math.random()*spaceAvailable.length);
monster.push(spaceAvailable[randomNumber]);
spaceAvailable = spaceAvailable.filter(element => element != spaceAvailable[randomNumber]);
}
//MUDAR SENTIDO DOS MONSTROS
for (let i=0;i<monster.length;i++){
monster[i][1] = changeWay(monster[i]);

}

}


/* MAPA

0 - VAZIO
1 - LIVRE
2 - PROTEGIDO
3 - PORTA/CHEGADA
4 - DOBRA
5 - CRUZADA
6 - COLISÃO
7 - DIAGONAIS
8 - IMPEDIMENTO

*/

function updateScreen(){
let pixel = document.getElementsByClassName("quadrado");
for (let i=0;i<indexMap.length;i++){
if (indexMap[i] == 0){pixel[i].setAttribute("style","background-color: black");}
else if (indexMap[i] == 1){pixel[i].setAttribute("style","background-color: yellow");}
else if (indexMap[i] == 2){pixel[i].setAttribute("style","background-color: green");}
else if (indexMap[i] == 3){pixel[i].setAttribute("style","background-color: blue");}
else if (indexMap[i] == 4){pixel[i].setAttribute("style","background-color: yellow");}
else if (indexMap[i] == 5){pixel[i].setAttribute("style","background-color: yellow");}
else if (indexMap[i] == 6){pixel[i].setAttribute("style","background-color: yellow");}
else if (indexMap[i] == 7){pixel[i].setAttribute("style","background-color: yellow");}
else if (indexMap[i] == 8){pixel[i].setAttribute("style","background-color: yellow");}
}
pixel[positionPlayer[0]].setAttribute("style","background-color: red");
for (let i=0;i<monster.length;i++){
pixel[monster[i][0]].setAttribute("style","background-color: purple");
}
if(statusCrash){pixel[positionPlayer[0]].setAttribute("style","background-color: gray");}
}

/* SENTIDOS

1 - ESQUERDA
2 - DIREITA
3 - CIMA
4 - BAIXO

*/

function moveMonster() {
for (let i=0;i<monster.length;i++){
if (monster[i][1]==1){monster[i][3]--;monster[i][0]--;}
else if (monster[i][1]==2){monster[i][3]++;monster[i][0]++;}
else if (monster[i][1]==3){monster[i][2]--;monster[i][0]-=35;}
else if (monster[i][1]==4){monster[i][2]++;monster[i][0]+=35;}
else if (monster[i][1]==5){monster[i][3]--;monster[i][2]--;monster[i][0]--;monster[i][0]-=35;}
else if (monster[i][1]==6){monster[i][3]++;monster[i][2]--;monster[i][0]++;monster[i][0]-=35;}
else if (monster[i][1]==7){monster[i][3]--;monster[i][2]++;monster[i][0]--;monster[i][0]+=35;}
else if (monster[i][1]==8){monster[i][3]++;monster[i][2]++;monster[i][0]++;monster[i][0]+=35;}
monster[i][1] = changeWay(monster[i]);
}

}
function changeWay(monster){
//INICIAL
if (monster[1]==0){
let availablePosition = [];
if(map[monster[2]][monster[3]-1] != 0 && map[monster[2]][monster[3]-1] != 3 && map[monster[2]][monster[3]-1] != 2){availablePosition.push(1);}
if(map[monster[2]][monster[3]+1] != 0 && map[monster[2]][monster[3]+1] != 3 && map[monster[2]][monster[3]+1] != 2){availablePosition.push(2);}
if(map[monster[2]-1][monster[3]] != 0 && map[monster[2]-1][monster[3]] != 3 && map[monster[2]-1][monster[3]] != 2){availablePosition.push(3);}
if(map[monster[2]+1][monster[3]] != 0 && map[monster[2]+1][monster[3]] != 3 && map[monster[2]+1][monster[3]] != 2){availablePosition.push(4);}
let randomNumber = Math.trunc(Math.random()*availablePosition.length);
return availablePosition[randomNumber];
}
//LIVRE
else if (indexMap[monster[0]]==1){return monster[1];}
//DOBRA
else if (indexMap[monster[0]]==4){
if(monster[1] == 1 || monster[1] == 2){
if(map[monster[2]-1][monster[3]] != 0){return 3;}
else{return 4;}
}
else{
if(map[monster[2]][monster[3]-1] != 0){return 1;}
else{return 2;}
}
}
//CRUZADA ------------------------------------------------- ajeitar
else if (indexMap[monster[0]]==5){
let availablePosition = [];
if (monster[1] == 1){
if(map[monster[2]][monster[3]-1] != 0){availablePosition.push(1);}
if(map[monster[2]-1][monster[3]] != 0){availablePosition.push(3);}
if(map[monster[2]+1][monster[3]] != 0){availablePosition.push(4);}
}
else if (monster[1] == 2){
if(map[monster[2]][monster[3]+1] != 0){availablePosition.push(2);}
if(map[monster[2]-1][monster[3]] != 0){availablePosition.push(3);}
if(map[monster[2]+1][monster[3]] != 0){availablePosition.push(4);}
}
else if (monster[1] == 3){
if(map[monster[2]][monster[3]-1] != 0){availablePosition.push(1);}
if(map[monster[2]][monster[3]+1] != 0){availablePosition.push(2);}
if(map[monster[2]-1][monster[3]] != 0){availablePosition.push(3);}
}
else if (monster[1] == 4){
if(map[monster[2]][monster[3]-1] != 0){availablePosition.push(1);}
if(map[monster[2]][monster[3]+1] != 0){availablePosition.push(2);}
if(map[monster[2]+1][monster[3]] != 0){availablePosition.push(4);}
}
let randomNumber = Math.trunc(Math.random()*availablePosition.length);
return availablePosition[randomNumber];
}
//COLISÃO
else if (indexMap[monster[0]]==6){
if (monster[1] == 1){return 2;}
else if (monster[1] == 2){return 1;}
else if (monster[1] == 3){return 4;}
else if (monster[1] == 4){return 3;}
}
//DIAGONAIS
else if (indexMap[monster[0]]==7){
let availablePosition = [];
if(map[monster[2]][monster[3]-1] == 7){availablePosition.push(1);}
if(map[monster[2]][monster[3]+1] == 7){availablePosition.push(2);}
if(map[monster[2]-1][monster[3]] == 7){availablePosition.push(3);}
if(map[monster[2]+1][monster[3]] == 7){availablePosition.push(4);}
let randomNumber = Math.trunc(Math.random()*availablePosition.length);
return availablePosition[randomNumber];
}

}
//MAPA 1
const linhaNeutra = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const linha1 = [0,0,0,0,0,0,0,2,2,0,0,4,1,4,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const linha2 = [0,2,2,2,0,0,0,2,2,0,0,1,0,1,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,3,2,2,0];
const linha3 = [0,2,2,2,6,1,1,1,1,1,1,5,1,5,1,1,1,1,1,1,5,1,5,1,1,1,1,1,1,1,6,3,2,2,0];
const linha4 = [0,2,2,2,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,3,2,2,0];
const linha5 = [0,0,0,0,0,0,0,0,0,0,0,4,1,4,0,0,0,0,0,0,4,1,4,0,0,0,0,0,0,0,0,0,0,0,0];

//MAPA 2
const linha1V2 = [0,0,0,0,0,0,0,2,2,0,0,4,1,4,0,0,2,2,0,0,4,1,4,0,0,4,1,4,0,0,0,0,0,0,0];
const linha2V2 = [0,2,2,2,0,0,0,2,2,0,0,1,0,1,0,0,2,2,0,0,1,0,1,0,0,1,0,1,0,0,0,3,2,2,0];
const linha3V2 = [0,2,2,2,6,1,1,1,1,1,1,5,1,5,1,1,1,1,1,1,5,1,5,1,1,5,1,5,1,1,6,3,2,2,0];
const linha4V2 = [0,2,2,2,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,3,2,2,0];
const linha5V2 = [0,0,0,0,0,0,0,0,0,0,0,4,1,4,0,0,0,0,0,0,4,1,4,0,0,4,1,4,0,0,0,0,0,0,0];

//MAPA 3
const linha1V3 = [0,0,0,0,0,0,0,2,2,0,0,4,1,4,0,0,2,2,0,0,4,1,4,0,0,4,1,4,0,0,0,0,0,0,0];
const linha2V3 = [0,2,2,2,0,0,0,2,2,0,0,1,0,1,0,0,2,2,0,0,1,0,1,0,0,1,0,1,0,0,0,3,2,2,0];
const linha3V3 = [0,2,2,2,6,1,5,1,1,5,1,5,1,5,1,1,1,1,1,1,5,1,5,1,1,5,1,5,1,1,6,3,2,2,0];
const linha4V3 = [0,2,2,2,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,3,2,2,0];
const linha5V3 = [0,0,0,0,0,0,4,1,1,4,0,4,1,4,0,0,0,0,0,0,4,1,4,0,0,4,1,4,0,0,0,0,0,0,0];

//MAPA 4
const linha1V4 = [0,0,0,0,0,0,0,2,2,0,0,4,1,4,0,0,2,2,0,0,4,1,4,0,0,4,1,4,0,0,0,0,0,0,0];
const linha2V4 = [0,2,2,2,0,0,0,2,2,0,0,1,0,1,0,0,2,2,0,0,1,0,1,0,0,1,0,1,0,0,0,3,2,2,0];
const linha3V4 = [0,2,2,2,6,1,5,1,1,5,1,5,1,5,1,5,1,1,5,1,5,1,5,1,1,5,1,5,1,1,6,3,2,2,0];
const linha4V4 = [0,2,2,2,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,3,2,2,0];
const linha5V4 = [0,0,0,0,0,0,4,1,1,4,0,4,1,4,0,4,1,1,4,0,4,1,4,0,0,4,1,4,0,0,0,0,0,0,0];

//MAPA 5
const linha1V5 = [0,0,0,0,0,0,0,2,2,0,0,4,1,4,0,0,2,2,0,0,4,1,5,1,1,5,1,4,0,0,0,0,0,0,0];
const linha2V5 = [0,2,2,2,0,0,0,2,2,0,0,1,0,1,0,0,2,2,0,0,1,0,1,0,0,1,0,1,0,0,0,3,2,2,0];
const linha3V5 = [0,2,2,2,6,1,5,1,1,5,1,5,1,5,1,5,1,1,5,1,5,1,5,1,1,5,1,5,1,1,6,3,2,2,0];
const linha4V5 = [0,2,2,2,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,3,2,2,0];
const linha5V5 = [0,0,0,0,0,0,4,1,1,5,1,5,1,5,1,5,1,1,5,1,5,1,5,1,1,5,1,4,0,0,0,0,0,0,0];
//MAPA 6
const linha1V6 = [0,0,0,0,0,0,0,2,2,0,0,4,1,4,0,0,2,2,0,0,4,1,5,1,1,5,1,4,0,0,0,0,0,0,0];
const linha2V6 = [0,2,2,2,0,0,0,2,2,0,0,1,0,1,0,0,2,2,0,0,1,0,1,0,0,1,0,1,0,0,0,2,2,2,0];
const linha3V6 = [0,2,2,2,6,1,5,1,1,5,1,5,1,5,1,5,1,1,5,1,5,1,5,1,1,5,1,5,1,1,6,2,2,2,0];
const linha4V6 = [0,2,2,2,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,2,2,2,0];
const linha5V6 = [0,0,0,0,0,0,4,1,1,5,1,5,1,5,1,5,1,1,5,1,5,1,5,1,1,5,1,4,0,0,0,0,8,0,0];
const linha6V6 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0];
const linha7V6 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,6,0,6,0,8,0,0];
const linha8V6 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,3,0,1,0,1,0,1,0,8,0,0];
const linha9V6 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,3,8,1,8,1,8,1,8,8,0,0];
const linha10V6 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,3,0,1,0,1,0,1,0,0,0,0];
const linha11V6 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,6,0,6,0,0,0,0];

//MAPA 7
const linha1V7 = [0,0,0,0,0,0,0,2,2,0,0,4,1,4,0,0,2,2,0,0,4,1,5,1,1,5,1,4,0,0,0,0,0,0,0];
const linha2V7 = [0,2,2,2,0,0,0,2,2,0,0,1,0,1,0,0,2,2,0,0,1,0,1,0,0,1,0,1,0,0,0,2,2,2,0];
const linha3V7 = [0,2,2,2,6,1,5,1,1,5,1,5,1,5,1,5,1,1,5,1,5,1,5,1,1,5,1,5,1,1,6,2,2,2,0];
const linha4V7 = [0,2,2,2,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,2,2,2,0];
const linha5V7 = [0,0,0,0,0,0,4,1,1,5,1,5,1,5,1,5,1,1,5,1,5,1,5,1,1,5,1,4,0,0,0,0,8,0,0];
const linha6V7 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0];
const linha7V7 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,6,0,6,0,8,0,0];
const linha8V7 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,3,0,7,7,7,0,1,0,1,0,1,0,8,0,0];
const linha9V7 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,3,8,7,7,7,8,1,8,1,8,1,8,8,0,0];
const linha10V7 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,3,0,7,7,7,0,1,0,1,0,1,0,0,0,0];
const linha11V7 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,6,0,6,0,0,0,0];
//MAPA 8
const linha1V8 = [0,0,0,0,0,0,0,2,2,0,0,4,1,4,0,0,2,2,0,0,4,1,5,1,1,5,1,4,0,0,0,0,0,0,0];
const linha2V8 = [0,2,2,2,0,0,0,2,2,0,0,1,0,1,0,0,2,2,0,0,1,0,1,0,0,1,0,1,0,0,0,2,2,2,0];
const linha3V8 = [0,2,2,2,6,1,5,1,1,5,1,5,1,5,1,5,1,1,5,1,5,1,5,1,1,5,1,5,1,1,6,2,2,2,0];
const linha4V8 = [0,2,2,2,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,2,2,2,0];
const linha5V8 = [0,0,0,0,0,0,4,1,1,5,1,5,1,5,1,5,1,1,5,1,5,1,5,1,1,5,1,4,0,0,0,0,8,0,0];
const linha6V8 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0];
const linha7V8 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,6,0,6,0,0,0,0,0,6,0,6,0,6,0,8,0,0];
const linha8V8 = [0,0,0,0,0,0,0,0,0,0,0,0,2,2,3,0,1,0,1,0,1,0,7,7,7,0,1,0,1,0,1,0,8,0,0];
const linha9V8 = [0,0,0,0,0,0,0,0,0,0,0,0,2,2,3,8,1,8,1,8,1,8,7,7,7,8,1,8,1,8,1,8,8,0,0];
const linha10V8 = [0,0,0,0,0,0,0,0,0,0,0,0,2,2,3,0,1,0,1,0,1,0,7,7,7,0,1,0,1,0,1,0,0,0,0];
const linha11V8 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,6,0,6,0,0,0,0,0,6,0,6,0,6,0,0,0,0];

//MAPA 9
const linha1V9 = [0,0,0,0,0,0,0,2,2,0,0,4,1,4,0,0,2,2,0,0,4,1,5,1,1,5,1,4,0,0,0,0,0,0,0];
const linha2V9 = [0,2,2,2,0,0,0,2,2,0,0,1,0,1,0,0,2,2,0,0,1,0,1,0,0,1,0,1,0,0,0,2,2,2,0];
const linha3V9 = [0,2,2,2,6,1,5,1,1,5,1,5,1,5,1,5,1,1,5,1,5,1,5,1,1,5,1,5,1,1,6,2,2,2,0];
const linha4V9 = [0,2,2,2,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,2,2,2,0];
const linha5V9 = [0,0,0,0,0,0,4,1,1,5,1,5,1,5,1,5,1,1,5,1,5,1,5,1,1,5,1,4,0,0,0,0,8,0,0];
const linha6V9 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0];
const linha7V9 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,6,0,6,0,0,0,0,0,6,0,6,0,6,0,8,0,0];
const linha8V9 = [0,0,0,0,0,0,0,0,2,2,3,0,7,7,7,0,1,0,1,0,1,0,7,7,7,0,1,0,1,0,1,0,8,0,0];
const linha9V9 = [0,0,0,0,0,0,0,0,2,2,3,8,7,7,7,8,1,8,1,8,1,8,7,7,7,8,1,8,1,8,1,8,8,0,0];
const linha10V9 = [0,0,0,0,0,0,0,0,2,2,3,0,7,7,7,0,1,0,1,0,1,0,7,7,7,0,1,0,1,0,1,0,0,0,0];
const linha11V9 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,6,0,6,0,0,0,0,0,6,0,6,0,6,0,0,0,0];
//MAPA 10
const linha1V10 = [0,0,0,0,0,0,0,2,2,0,0,4,1,4,0,0,2,2,0,0,4,1,5,1,1,5,1,4,0,0,0,0,0,0,0];
const linha2V10 = [0,2,2,2,0,0,0,2,2,0,0,1,0,1,0,0,2,2,0,0,1,0,1,0,0,1,0,1,0,0,0,2,2,2,0];
const linha3V10 = [0,2,2,2,6,1,5,1,1,5,1,5,1,5,1,5,1,1,5,1,5,1,5,1,1,5,1,5,1,1,6,2,2,2,0];
const linha4V10 = [0,2,2,2,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,2,2,2,0];
const linha5V10 = [0,0,0,0,0,0,4,1,1,5,1,5,1,5,1,5,1,1,5,1,5,1,5,1,1,5,1,4,0,0,0,0,8,0,0];
const linha6V10 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0];
const linha7V10 = [0,0,0,0,0,0,7,7,7,7,7,0,0,0,0,0,6,0,6,0,6,0,0,0,0,0,6,0,6,0,6,0,8,0,0];
const linha8V10 = [0,2,2,3,0,0,7,7,7,7,7,0,7,7,7,0,1,0,1,0,1,0,7,7,7,0,1,0,1,0,1,0,8,0,0];
const linha9V10 = [0,2,2,3,8,8,7,7,7,7,7,8,7,7,7,8,1,8,1,8,1,8,7,7,7,8,1,8,1,8,1,8,8,0,0];
const linha10V10 = [0,2,2,3,0,0,7,7,7,7,7,0,7,7,7,0,1,0,1,0,1,0,7,7,7,0,1,0,1,0,1,0,0,0,0];
const linha11V10 = [0,0,0,0,0,0,7,7,7,7,7,0,0,0,0,0,6,0,6,0,6,0,0,0,0,0,6,0,6,0,6,0,0,0,0];

let map = [];
let indexMap = [];
let positionMap = [];
let level = 1;
let positionPlayer = [107,3,2];
let monster = [];
let qntdMonstros = 1;
let speedMonster = 1000;
let statusCrash = false;
let statusHomeScreen = true;
let indexControls = 0;
let lastLevel = 15;

let updateScreenInterval = setInterval(function () {updateScreen();},50);
let moveMonsterInterval = setInterval(function () {moveMonster();},speedMonster);
let checkCrashInterval = setInterval(function () {checkCrash();},1);
clearInterval(moveMonsterInterval);clearInterval(updateScreenInterval);clearInterval(checkCrashInterval);

showHomeScreen();
document.body.addEventListener('keydown', function(event)
{
const key = event.key;
switch (key) {

case "ArrowLeft":
if (statusHomeScreen){
if (level != 1 && indexControls === 1){level--; showHomeScreen();}
}
else{
if(!statusCrash && positionPlayer[2]!=0 && (indexMap[positionPlayer[0]-1]!=0)){positionPlayer[2]--;positionPlayer[0]--;}
checkArrival();checkCrash();
}
break;
case "ArrowRight":
if (statusHomeScreen){
if (level != lastLevel && indexControls === 1){level++; showHomeScreen();}
}
else{
if(!statusCrash && positionPlayer[2]!=linha1.length-1 && (indexMap[positionPlayer[0]+1]!=0)){positionPlayer[2]++;positionPlayer[0]++;}
checkArrival();checkCrash();
}
break;
case "ArrowUp":
if(statusHomeScreen){
if(indexControls === 1){indexControls = 0; showHomeScreen();}
}
else {
if(!statusCrash && positionPlayer[1]!=0 && (indexMap[positionPlayer[0]-linha1.length]!=0)){positionPlayer[1]--;positionPlayer[0] -= linha1.length;}
checkArrival();checkCrash();
}
break;
case "ArrowDown":
if (statusHomeScreen){
if(indexControls === 0){indexControls = 1; showHomeScreen();}
}
else {
if(!statusCrash && positionPlayer[1]!=map.length && (indexMap[positionPlayer[0]+linha1.length]!=0)){positionPlayer[1]++;positionPlayer[0] += linha1.length;}
checkArrival();checkCrash();
}
break;
case "Enter":
if(statusHomeScreen && indexControls === 0){statusHomeScreen = false; level--; changeLevel();}
break;
}
});
function showHomeScreen(){

clearScreen();

//INDICES & STRINGS
let pixelPurple = [110,111,112,113,114,115,116,117,118,145,146,147,148,149,153,180,181,182,183,184,188,215,216,217,218,219,223,250,251,252,253,254,255,256,257,258,285,286,287,288,289,290,320,321,322,323,324,325,355,356,357,358,359,360,390,391,392,393,394,395,396,397,398];
let pixelRed = [295,326,327,328,329,365,162,163,164,165,166,167,168,197,198,199,200,203,232,233,234,235,238,267,268,269,270,271,272,273,302,303,304,305,308,337,338,339,340,343,372,373,374,375,376,377,378];
let pixelWhite = [150,151,152,185,193,194,195,201,202,220,236,262,263,264,333,334,335];
let pixelBorderNameLabirintoLogico = [490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594];
let pixelNameLabirintoLogico = [534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550];
let pixelNameIniciar = [715,716,717,718,719,720,721];
let pixelNameFase = [785,786,787,788];
let pixelControls = [713,783];
let nameLabirintoLogico = "LABIRINTO  LÓGICO";
let nameIniciar = "INICIAR"
let nameFase = "FASE";

//PREENCHENDO CORES
for (let i=0;i<pixelPurple.length;i++){document.getElementsByClassName("quadrado")[pixelPurple[i]].setAttribute("style","background-color: purple; color: purple;");}
for (let i=0;i<pixelRed.length;i++){document.getElementsByClassName("quadrado")[pixelRed[i]].setAttribute("style","background-color: red; color: red;");}
for (let i=0;i<pixelWhite.length;i++){document.getElementsByClassName("quadrado")[pixelWhite[i]].setAttribute("style","background-color: white; color: white; font-size: 30px");}

//NOME DO JOGO
for (let i=0;i<pixelNameLabirintoLogico.length;i++){
document.getElementsByClassName("quadrado")[pixelNameLabirintoLogico[i]].innerHTML = nameLabirintoLogico[i];
document.getElementsByClassName("quadrado")[pixelNameLabirintoLogico[i]].setAttribute("style","color: white; border: solid black;");
}
for (let i=0;i<pixelBorderNameLabirintoLogico.length;i++){
document.getElementsByClassName("quadrado")[pixelBorderNameLabirintoLogico[i]].innerHTML = "\u2501";
document.getElementsByClassName("quadrado")[pixelBorderNameLabirintoLogico[i]].setAttribute("style","color: white; border: solid black;");
}

//INICIAR E FASE
for (let i=0;i<pixelNameIniciar.length;i++){
document.getElementsByClassName("quadrado")[pixelNameIniciar[i]].innerHTML = nameIniciar[i];
document.getElementsByClassName("quadrado")[pixelNameIniciar[i]].setAttribute("style","color: white; border: solid black;");
}
for (let i=0;i<pixelNameFase.length;i++){
document.getElementsByClassName("quadrado")[pixelNameFase[i]].innerHTML = nameFase[i];
document.getElementsByClassName("quadrado")[pixelNameFase[i]].setAttribute("style","color: white; border: solid black;");
}
document.getElementsByClassName("quadrado")[pixelControls[indexControls]].innerHTML = "\u25ba";
document.getElementsByClassName("quadrado")[pixelControls[indexControls]].setAttribute("style","color: red; border: solid black; font-size: 30px");
if (level < 10){
document.getElementsByClassName("quadrado")[790].innerHTML = "0";
document.getElementsByClassName("quadrado")[791].innerHTML = level;
}
else{
document.getElementsByClassName("quadrado")[790].innerHTML = String(level)[0];
document.getElementsByClassName("quadrado")[791].innerHTML = String(level)[1];
}
document.getElementsByClassName("quadrado")[790].setAttribute("style","color: white; border: solid black; font-size: 25px");
document.getElementsByClassName("quadrado")[791].setAttribute("style","color: white; border: solid black; font-size: 25px;");

}



function showCongratulations(){

clearScreen();

//INDICES E TEXTO
let pixelBorder = [84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451];
let pixelBorderTip= [83,102,433,452];
let pixelBorderSide = [118,137,153,172,188,207,223,242,258,277,293,312,328,347,363,382,398,417];
let pixelText = [119,120,121,122,123,124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311,329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346,364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416];
let pixelWhiteEyes = [608,609,611,612,643,647];
let pixelYellow = [459,460,461,462,463,492,493,494,495,496,497,498,499,500,527,529,530,531,532,533,535,562,563,564,565,566,567,568,569,570,599,600,601,602,603,635,636,637,671,706,740,741,742,774,775,776,777,778];
let pixelRed = [572,573,574,574,575,576,577,578,607,610,613,642,645,648,677,678,679,680,681,682,683,712,714,715,716,718,747,748,752,753,782,783,784,785,786,787,788];
let textCongratulations = " PARABÉNS! VOCÊ FINALIZOU O LABIRINTO LÓGICO ESPERO QUE TENHA SE DIVERTIDO... VOLTE SEMPRE";

//PREENCHENDO BORDA
for (let i = 0; i< pixelBorder.length; i++){
document.getElementsByClassName("quadrado")[pixelBorder[i]].setAttribute("style","background-color: black; color: white; border: solid black;");
document.getElementsByClassName("quadrado")[pixelBorder[i]].innerHTML = "\u2501";
}
for (let i = 0; i< pixelBorderSide.length; i++){
document.getElementsByClassName("quadrado")[pixelBorderSide[i]].setAttribute("style","background-color: black; color: white; border: solid black;");
document.getElementsByClassName("quadrado")[pixelBorderSide[i]].innerHTML = "\u2503";
}
document.getElementsByClassName("quadrado")[pixelBorderTip[0]].setAttribute("style","background-color: black; color: white; border: solid black;");
document.getElementsByClassName("quadrado")[pixelBorderTip[0]].innerHTML = "\u250F";
document.getElementsByClassName("quadrado")[pixelBorderTip[1]].setAttribute("style","background-color: black; color: white; border: solid black;");
document.getElementsByClassName("quadrado")[pixelBorderTip[1]].innerHTML = "\u2513";
document.getElementsByClassName("quadrado")[pixelBorderTip[2]].setAttribute("style","background-color: black; color: white; border: solid black;");
document.getElementsByClassName("quadrado")[pixelBorderTip[2]].innerHTML = "\u2517";
document.getElementsByClassName("quadrado")[pixelBorderTip[3]].setAttribute("style","background-color: black; color: white; border: solid black;");
document.getElementsByClassName("quadrado")[pixelBorderTip[3]].innerHTML = "\u251B";

//PREENCHENDO CORES
for (let i = 0; i< pixelWhiteEyes.length; i++){document.getElementsByClassName("quadrado")[pixelWhiteEyes[i]].setAttribute("style","background-color: white; color: white;");}
for (let i = 0; i< pixelYellow.length; i++){document.getElementsByClassName("quadrado")[pixelYellow[i]].setAttribute("style","background-color: yellow; color: yellow;");}
for (let i = 0; i< pixelRed.length; i++){document.getElementsByClassName("quadrado")[pixelRed[i]].setAttribute("style","background-color: red; color: red;");}

//PREENCHENDO TEXTO
for (let i = 0; i< pixelText.length; i++){document.getElementsByClassName("quadrado")[pixelText[i]].setAttribute("style","background-color: black; color: white; border: solid black;");}
for (let i = 0; i< pixelText.length; i++){document.getElementsByClassName("quadrado")[pixelText[i]].innerHTML = textCongratulations[i];}



}

function showGameOver() {

clearScreen();

//INDICES
let pixelGrey = [111,112,113,114,115,116,117,142,143,144,146,149,152,154,155,156,178,179,180,181,184,187,188,189,190,214,215,216,217,218,219,220,221,222,223,224,251,252,256,257,286,288,289,290,292,321,322,323,324,325,326,327,394,426,429,432,461,464,467];
let pixelRed = [531,532,533,534,535,536,537,566,567,568,569,570,571,572,601,602,603,604,605,606,607,636,637,638,639,640,641,642,671,677,706,712,741,742,743,744,745,746,747];
let pixelWhite = [124,125,126,128,129,130,132,133,134,135,136,159,164,167,169,171,194,195,196,199,202,204,206,229,234,237,239,241,264,268,269,270,272,274,276,371,372,373,374,377,378,379,407,410,412,442,445,447,448,449,477,480,482,511,512,513,514,517,518,519,615,617,618,619,621,622,623,625,626,627,650,652,654,656,660,662,685,687,689,691,695,697,718,720,722,724,726,728,730,732,753,754,755,757,758,759,761,762,763,765,766,767];
let pixelXEyes = [567,603,570,606,568,602,571,605];


//PREENCHENDO CORES
for (let i = 0; i< pixelGrey.length; i++){document.getElementsByClassName("quadrado")[pixelGrey[i]].setAttribute("style","background-color: grey; color: grey;");}
for (let i = 0; i< pixelRed.length; i++){document.getElementsByClassName("quadrado")[pixelRed[i]].setAttribute("style","background-color: red; color: red;");}
for (let i = 0; i< pixelWhite.length; i++){document.getElementsByClassName("quadrado")[pixelWhite[i]].setAttribute("style","background-color: white; color: white; border: solid black;");}

for (let i = 0; i< 4; i++){
document.getElementsByTagName("h2")[pixelXEyes[i]].innerHTML = "\u2572";
document.getElementsByTagName("h2")[pixelXEyes[i+4]].innerHTML = "\u2571";
document.getElementsByClassName("quadrado")[pixelXEyes[i]].setAttribute("style","background-color: red; color: black; border: solid red; font-size: 25px;");
document.getElementsByClassName("quadrado")[pixelXEyes[i+4]].setAttribute("style","background-color: red; color: black; border: solid red; font-size: 25px;");
}

document.getElementsByClassName("quadrado")[375].setAttribute("style","background-color: black; color: white; border: solid black; font-size: 25px;");
document.getElementsByClassName("quadrado")[515].setAttribute("style","background-color: black; color: white; border: solid black; font-size: 25px;");
document.getElementsByTagName("h2")[375].innerHTML = "\u25e3" ;
document.getElementsByTagName("h2")[515].innerHTML = "\u25e4" ;


}
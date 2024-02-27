var asepriteImage = document.getElementById('asepriteImage');
var asepriteBlock = document.getElementById('asepriteBlock');
var gameImage = document.getElementById('gameImage');
var gameBlock = document.getElementById('gameBlock');
var projectImage = document.getElementById('projectImage');
var projectBlock = document.getElementById('projectBlock');

const arrayImage = [asepriteImage, gameImage, projectImage];
const arrayBlock = [asepriteBlock, gameBlock, projectBlock];

asepriteImage.addEventListener('click', setAseprite);
gameImage.addEventListener('click', setGame);
projectImage.addEventListener('click', setGit);

setItem(0);



function setItem(index) {
    arrayBlock.forEach((item) => {
        item.style.display = 'none';
      })
    arrayImage.forEach((item) => {
        item.style.backgroundColor = 'rgb(33, 37, 41)';
        item.style.border = '0px';
      })
    arrayBlock[index].style.display = 'block';
    arrayImage[index].style.backgroundColor = 'black';
    arrayImage[index].style.border = '1px dashed white';
}

function setAseprite(){
    setItem(0);
}

function setGame(){
    setItem(1);
}

function setGit(){
    setItem(2);
}
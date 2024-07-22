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

class CardData{
    constructor(
        title,
        image,
        desciption = null,
        gitHubLink = null,
        youTubeLink = null,
        gameJamLink = null,
        gameLink = null,
    ){
        this.title = title;
        this.image = image;
        this.desciption = desciption;
        this.gitHubLink = gitHubLink;
        this.youTubeLink = youTubeLink;
        this.gameJamLink = gameJamLink;
        this.gameLink = gameLink;
    }
}

var asepriteArray = [
    new CardData(
        title = "Дэвид Кинг (Dead by Daylight)",
        image = "davidKing.jpg",
    ),
    new CardData(
        title = "Hoodwink (Дота 2)",
        image = "hoodwink.gif",
    ),
    new CardData(
        title = "Алкманистик (Фрэн Боу)",
        image = "franBow.jpg",
    ),
    new CardData(
        title = "Сэм (Death Stranding)",
        image = "sam.png",
    ),
    new CardData(
        title = "BT (Смерть Стрендинг)",
        image = "bt.png",
    ),
];
var asepriteContainer = document.getElementById("asepriteContainer");
var gameArray = [
    new CardData(
        title = "Never Trust Crabs",
        image = "neverTrustCrabs.png",
        desciption = "VR adventure game",
        gitHubLink = "https://github.com/alkmanistik/VRGodotForHackathon",
        youTubeLink = "https://www.youtube.com/watch?v=g1keA9Iyt38",
    ),
    new CardData(
        title = "Cat's wisdom",
        image = "catsWisdom.png",
        desciption = "2D point and click game",
        gitHubLink = "https://github.com/alkmanistik/GodotGameJam-1",
        youTubeLink = null,
        gameJamLink = "https://itch.io/jam/godot-wild-jam-63/rate/2376822",
        gameLink = "https://alkmanistik.itch.io/cats-wisdom",
    ),
];
var gameContainer = document.getElementById("gameContainer");
var gitHubArray = [
    new CardData(
        title = "Личный сайт портфолио",
        image = "website.png",
        desciption = null,
        gitHubLink = "https://github.com/alkmanistik/alkmanistik.github.io",
    ),
    new CardData(
        title = "GreenМир",
        image = "greenWorld.png",
        desciption = "Мобильное приложение вклада в экологию",
        gitHubLink = "https://github.com/alkmanistik/EnvironmentalProjectForHackaton",
    ),
    new CardData(
        title = "Yard",
        image = "yard.png",
        desciption = "Мобильное приложение интернет магазин",
        gitHubLink = "https://github.com/alkmanistik/coursework-2",
    ),
];
var gitHubContainer = document.getElementById("gitHubContainer");

loadCard(asepriteContainer,asepriteArray, "source/images/asepriteWorks/");
loadCard(gameContainer,gameArray, "source/images/gameWorks/");
loadCard(gitHubContainer,gitHubArray, "source/images/gitHubWorks/");

function loadCard(container, array, sourceLink = "source/images/"){
    array.forEach(element => {
        var desciptionString = "";
        if (element.desciption!= null){
            desciptionString = `<p class="card-text">${element.desciption}</p>`;
        }
        var gitHubString = "";
        if (element.gitHubLink != null){
            gitHubString = `<a href="${element.gitHubLink}"><img src="source/images/logo/git.png" alt="gitHub logo"></a>`;
        }
        var youTubeString = "";
        if (element.youTubeLink!= null){
            youTubeString = `<a href="${element.youTubeLink}"><img src="source/images/logo/youTube.png" alt="youTube logo"></a>`;
        }
        var gameJamString = "";
        if (element.gameJamLink!= null){
            gameJamString = `<a href="${element.gameJamLink}"><img src="source/images/logo/gameJam.png" alt="gameJam logo"></a>`;
        }
        var gameString = "";
        if (element.gameLink!= null){
            gameString = `<a href="${element.gameLink}"><img src="source/images/logo/gamepad.png" alt="game logo"></a>`;
        }
        var optionString = `
            <p class="card-text">
                ${youTubeString}
                ${gitHubString}
                ${gameJamString}
                ${gameString}
            </p>
            `
        var htmlString = `<div class="col-lg-6 col-md-6 col-sm-12 grid-column">
                            <div class="card">
                                <div class="card-img"><img src="${sourceLink}${element.image}" class="card-img-top" alt="${element.title} photo">
                                </div>
                                <div class="card-body">
                                    <h3>${element.title}</h3>
                                    ${desciptionString}
                                    ${optionString}
                                </div>
                            </div>
                        </div>`
        container.insertAdjacentHTML("beforeend", htmlString);
    });
}

var asepriteImage = document.getElementById('asepriteImage');
var asepriteBlock = document.getElementById('asepriteBlock');
var gameImage = document.getElementById('gameImage');
var gameBlock = document.getElementById('gameBlock');
var projectImage = document.getElementById('projectImage');
var projectBlock = document.getElementById('projectBlock');
var mobileImage = document.getElementById('mobileImage');
var mobileBlock = document.getElementById('mobileBlock');

const arrayImage = [asepriteImage, gameImage, projectImage, mobileImage];
const arrayBlock = [asepriteBlock, gameBlock, projectBlock, mobileBlock];

asepriteImage.addEventListener('click', setAseprite);
gameImage.addEventListener('click', setGame);
projectImage.addEventListener('click', setGit);
mobileImage.addEventListener('click', setMobile);

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

function setMobile(){
    setItem(3);
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
        appGallery = null,
        ruStore = null,
        googlePlay = null,
        info = null,
    ){
        this.title = title;
        this.image = image;
        this.desciption = desciption;
        this.gitHubLink = gitHubLink;
        this.youTubeLink = youTubeLink;
        this.gameJamLink = gameJamLink;
        this.gameLink = gameLink;
        this.appGallery = appGallery;
        this.ruStore = ruStore;
        this.googlePlay = googlePlay;
        this.info = info;
    }
}

var asepriteArray = [
    new CardData(
        title = "David King (Dead by Daylight)",
        image = "davidKing.jpg",
    ),
    new CardData(
        title = "Hoodwink (Dota 2)",
        image = "hoodwink.gif",
    ),
    new CardData(
        title = "Fran bow",
        image = "franBow.jpg",
    ),
    new CardData(
        title = "Sam (Death Stranding)",
        image = "sam.png",
    ),
    new CardData(
        title = "BT (Death Stranding)",
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
        desciption = "Сайт о себе и мои работы",
        gitHubLink = "https://github.com/alkmanistik/alkmanistik.github.io",
    ),
];
var gitHubContainer = document.getElementById("gitHubContainer");

var mobileArray = [
    new CardData(
        title = "GreenМир",
        image = "greenWorld.png",
        desciption = "Мобильное приложение вклада в экологию",
        gitHubLink = "https://github.com/alkmanistik/EnvironmentalProjectForHackaton",
    ),
    // new CardData(
    //     title = "Yard",
    //     image = "yard.png",
    //     desciption = "Мобильное приложение интернет магазин",
    //     gitHubLink = "https://github.com/alkmanistik/coursework-2",
    // ),
    new CardData(
        title = "Кости",
        image = "dices.png",
        desciption = "Кидайте виртуальные кости",
        gitHubLink = null,
        youTubeLink = null,
        gameJamLink = null,
        gameLink = null,
        appGallery = "https://appgallery.huawei.ru/app/C113453621",
        ruStore = "https://www.rustore.ru/catalog/app/com.alkmanistik.diceapp",
        googlePlay = null,
        info = null,
    ),
];
var mobileContainer = document.getElementById("mobileContainer")

loadCard(asepriteContainer,asepriteArray, "source/images/asepriteWorks/");
loadCard(gameContainer,gameArray, "source/images/gameWorks/");
loadCard(gitHubContainer,gitHubArray, "source/images/gitHubWorks/");
loadCard(mobileContainer, mobileArray, "source/images/mobileWorks/");

function loadCard(container, array, sourceLink = "source/images/"){
    array.forEach((element) => {
        console.log("Processing element:", element);

        var desciptionString = "";
        if (element.desciption != null){
            desciptionString = `<p class="card-text">${element.desciption}</p>`;
        }
        var gitHubString = "";
        if (element.gitHubLink != null){
            gitHubString = `<a href="${element.gitHubLink}"><img src="source/images/logo/git.png" alt="gitHub logo"></a>`;
        }
        var youTubeString = "";
        if (element.youTubeLink != null){
            youTubeString = `<a href="${element.youTubeLink}"><img src="source/images/logo/youTube.png" alt="youTube logo"></a>`;
        }
        var gameJamString = "";
        if (element.gameJamLink != null){
            gameJamString = `<a href="${element.gameJamLink}"><img src="source/images/logo/gameJam.png" alt="gameJam logo"></a>`;
        }
        var gameString = "";
        if (element.gameLink != null){
            gameString = `<a href="${element.gameLink}"><img src="source/images/logo/gamepad.png" alt="game logo"></a>`;
        }
        var googlePlayString = "";
        if (element.googlePlay!= null){
            googlePlayString = `<a href="${element.googlePlay}"><img src="source/images/logo/googlePlay.png" alt="googlePlay logo"></a>`;
        }
        var appGalleryString = "";
        if (element.appGallery!= null){
            appGalleryString = `<a href="${element.appGallery}"><img src="source/images/logo/appGallery.png" alt="appGallery logo"></a>`;
        }
        var ruStoreString = "";
        if (element.ruStore!= null){
            ruStoreString = `<a href="${element.ruStore}"><img src="source/images/logo/ruStore.png" alt="ruStore logo"></a>`;
        }
        var optionString = `
            <p class="card-text">
                ${youTubeString}
                ${gitHubString}
                ${gameJamString}
                ${gameString}
                ${googlePlayString}
                ${appGalleryString}
                ${ruStoreString}
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

var profileImageArray = ["I.jpg", "I2.jpg", "I4.jpg", "I5.jpg", "I3.jpg"];
var profileCarousel = document.getElementById('profileCarousel');
var indicatorsCarousel = document.getElementById('indicatorsCarousel');
var profileContact = document.getElementById('profileContact');

class Contact{
    constructor(name, nickname, link, image){
        this.name = name;
        this.nickname = nickname;
        this.link = link;
        this.image = image;
    }
}

var profileContactArray = [
    new Contact(
        name = "Steam",
        nickname = "Alkmanistik",
        link = "https://steamcommunity.com/id/alkmanist/",
        image = "steam.png"
    ),
    new Contact(
        name = "Telegram",
        nickname = "@Alkmanistik",
        link = "https://t.me/Alkmanistik",
        image = "telegram.png"
    ),
    new Contact(
        name = "Discord",
        nickname = "alkmanistik",
        link = "https://discord.com/invite/SAxHf7R",
        image = "discord.png"
    ),
    new Contact(
        name = "Tiktok",
        nickname = "Alkmanistik",
        link = "https://www.tiktok.com/@alkmanistik?_t=8oD4xyp3kjB&_r=1",
        image = "tikTok.png"
    ),
    new Contact(
        name = "GitHub",
        nickname = "alkmanistik",
        link = "https://github.com/alkmanistik",
        image = "gitHub.png"
    ),
    new Contact(
        name = "X",
        nickname = "Alkmanistik",
        link = "https://twitter.com/Alkmanistik",
        image = "x.png"
    ),
]

loadProfileImage(profileImageArray);

loadProfileContact(profileContactArray);

function loadProfileImage(arrayImage){
    for (let i = 0; i< arrayImage.length;i++){
        console.log(i);
        if (i != 0){
            profileCarousel.insertAdjacentHTML( "beforeend", `<div class="carousel-item"> <img src="source/images/profilePhoto/${arrayImage[i]}" class="-block w-100" alt="..."> </div>`);
            indicatorsCarousel.insertAdjacentHTML("beforeend", `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" aria-label="Slide ${i+1}"></button>`);
        }
        else{
            profileCarousel.insertAdjacentHTML( "beforeend", `<div class="carousel-item active"> <img src="source/images/profilePhoto/${arrayImage[i]}" class="-block w-100" alt="..."> </div>`);
            indicatorsCarousel.insertAdjacentHTML("beforeend", `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>`);
        }
        
    }

}

function loadProfileContact(contactArray){
    contactArray.forEach(element => {
        profileContact.insertAdjacentHTML("beforeend", 
            `<div class="col-lg-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${element.name}</h5>
                        <a class="link-away" target="_blank" href="${element.link}"><img class="logo"src="source/images/logo/${element.image}" alt="${element.name} Logo"><span>${element.nickname}</span></a>
                    </div>
                </div>
            </div>`
        );
    });
}
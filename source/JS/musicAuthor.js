class MusicAuthor{

    constructor (name = "", description = "", image = "", link = ""){
        this.name = name;
        this.description = description;
        this.image = image;
        this.link = link
    }
}

var musicAuthor = document.getElementById("musicAuthor");

var musicAuthorArray = [ 
    new MusicAuthor(
        name = "Charli XCX",
        description = "Charli обычная тусовщица и оторва с крутыми битами и смыслами",
        image = "charlixcx.jpeg",
        link = "https://open.spotify.com/artist/25uiPmTg16RbhZWAqwLBy5?si=yeJBEu9FTZCb7-0A4okOyg"
    ),
    // new MusicAuthor(
    //     name = "Sia",
    //     description = "Sia просто хороший человек, который делает очень много для других, и пишет музыку она, как будто, лично для вас, на её песнях я вырос.",
    //     image = "sia.jpg",
    //     link = "https://open.spotify.com/artist/5WUlDfRSoLAfcVSX1WnrxN?si=G0iCM2YFRZaXGdpbljLVIQ"
    // ),
    new MusicAuthor(
        name = "Florence + The Machine",
        description = "Florence исполнительница, которая живёт в своих песнях, она всегда ориентируется на эмоции, которые несут её песни.",
        image = "florence.jpg",
        link = "https://open.spotify.com/artist/1moxjboGR7GNWYIMWsRjgG?si=5zJXPGFpSiOXXY_vUJKarA"
    ),
    new MusicAuthor(
        name = "Troye Sivan",
        description = "Troye парень без границ со своим стилем",
        image = "troye.jpg",
        link = "https://open.spotify.com/artist/3WGpXCj9YhhfX11TToZcXP?si=iCuLHb_iSVSzvx0DoAo_JA"
    ),
    new MusicAuthor(
        name = "YungBlud",
        description = "YungBlud обладатеть своего неповторимого стиля, который не такой, как все, поёт о том, что все мы разные и нужно быть терпимым ко всем.",
        image = "yungblud.jpg",
        link = "https://open.spotify.com/artist/6Ad91Jof8Niiw0lGLLi3NW?si=_GY84uN5RESfZQhfLhvcog"
    ),
    new MusicAuthor(
        name = "Aurora",
        description = "Aurora является нежным началом всего человечества, она думает и смотрит далеко вперёд, её песни полны символизма, наивным, но великолепным.",
        image = "aurora.jpg",
        link = "https://open.spotify.com/artist/1WgXqy2Dd70QQOU7Ay074N?si=8qzywk7uT0W2yvY8ZCNiPQ"
    ),
]



loadMusicAuthor(musicAuthorArray)

function loadMusicAuthor(authorArray){
    var i = 0;
    var direction = "left-text left-img"
    authorArray.forEach(element => {
        if (i == 0){
            direction = "left-text left-img"
        }
        else{
            direction = "right-text right-img"
        }
        musicAuthor.insertAdjacentHTML("beforeend", 
            `<div class="row ${direction} second">
                <div class="col-lg-4 col-md-6 shadow-less">
                    <a target="_blank" href="${element.link}"><img class="music_autor" src="source/images/musicAuthor/${element.image}" alt="${element.name} photo"></a>
                </div>
                <div class="col-lg-8 col-md-6">
                    <h3>${element.name}</h3>
                    <p>${element.description}</p>
                 </div>
            </div>`
        )
        i++;
        i %= 2;
    });
}



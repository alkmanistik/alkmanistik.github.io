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
        name = "Sia",
        description = "Sia просто хороший человек, который делает очень много для других, и пишет музыку она, как будто, лично для вас, на её песнях я вырос.",
        image = "sia.jpg",
        link = "https://music.youtube.com/channel/UCaPIRYCKs51kvD4jrbwMH1w?feature=share"
    ),
    new MusicAuthor(
        name = "YungBlud",
        description = "YungBlud обладатеть своего неповторимого стиля, который не такой, как все, поёт о том, что все мы разные и нужно быть терпимым ко всем.",
        image = "yungblud.jpg",
        link = "https://music.youtube.com/channel/UCMrCoizKiBxqeg5pTpBXn1A?feature=share"
    ),
    new MusicAuthor(
        name = "Aurora",
        description = "Aurora является нежным началом всего человечества, она думает и смотрит далеко вперёд, её песни полны символизма, наивным, но великолепным.",
        image = "aurora.jpg",
        link = "https://music.youtube.com/channel/UC4G-AJa7kn8oumI6TT2WXYw?feature=share"
    ),
    new MusicAuthor(
        name = "Florence + The Machine",
        description = "Florence + The Machine исполнительница, которая живёт в своих песнях, она всегда ориентируется на эмоции, которые несут её песни.",
        image = "florence.jpg",
        link = "https://music.youtube.com/channel/UCkmCGbrGa7yNrRl_NHrOaTw?feature=share"
    )
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




//TOGGLE SEARCH INPUT CON APPARAZIONE DI "PAGINA" SEARCH 
let searchbuttonIcon = document.getElementById('searchButtonIcon');
let searchInput = document.getElementById('SearchInput');
let colForAdv = document.getElementById('colAdv');
let personalPlaylist = document.getElementById('personalPlaylist');
let playListSearch = document.getElementById('playListSearch');
let spotifyPlaylists = document.getElementsByClassName('spotifyPlaylists')[0]
console.log('le playlist sono qyaaaaaaaaaaaaaaa',spotifyPlaylists)
let sectionContent = document.getElementById('sectionContent');
let rowforGenerateCard = document.getElementById('rowforGenarateCard');
console.log('BOTTONE A SINISTRA SEARCH ICONA', searchbuttonIcon)
console.log('SEARCH INPUT', searchInput)
let imgBG = document.getElementsByClassName('imgBG')[0];
if(imgBG) {
    let currentBackgroundImage = imgBG.style.backgroundImage;
       console.log('Salvataggio percorso immagine',currentBackgroundImage)
}

searchbuttonIcon.addEventListener('click', function() {
    searchInput.classList.toggle('invisible');
    let inputText = document.getElementById('inputText')
if(colForAdv, playListSearch, personalPlaylist,spotifyPlaylists, sectionContent) {
    colForAdv.classList.toggle('d-lg-block')
    playListSearch.classList.toggle('d-none')
    personalPlaylist.classList.toggle('d-none')
    spotifyPlaylists.classList.toggle('d-none');
    sectionContent.classList.toggle('d-none')
}
    rowforGenerateCard.classList.remove('d-none')
    if (!searchInput.classList.contains('invisible')) {
        inputText.focus();
    }
});


let sectionContentArtist = document.getElementById('sectionContentArtist')

if(imgBG){
    searchbuttonIcon.addEventListener('click', function() {
        imgBG.classList.toggle('imgBG')
    let InformationArtist = document.getElementById('InformationArtist')
    InformationArtist.classList.toggle('d-none')
    let navbar = document.getElementById('navbar')
        navbar.classList.toggle('bg-black')
        sectionContentArtist.classList.toggle('d-none')
        playListSearch.classList.toggle('d-none')
        console.log('si sta togliendo')
    })
}
// Array con i percorsi delle immagini
let ArrayGenresPlayList = [  
'Songs of Summer',
'Chill Vibes',
'Workout Mix',
'Study Beats',
'Relaxation',
'80s Classics',
'Dance Party',
'Acoustic Sessions',
'Feel Good Hits',
'Road Trip Soundtrack',
'Jazz Lounge',
'Indie Anthems',
'Rock Essentials',
'R&B Grooves',
'Electronic Beats',
'Country Living',
'Latin Fiesta',
'Motivational Mix',
'Throwback Jams',
'Instrumental Bliss', 
"Le migliori hit degli anni '80",
    "per una giornata di pioggia",
    "Classici del rock",
    "per una serata tranquilla",
    "Grandi successi del pop",
    "per allenarsi in palestra",
    "Melodie rilassanti per lo studio",
    "per una serata romantica",
    "Le migliori canzoni indie del momento",
    "per un road trip",
    "per festeggiare il weekend",
    "per ballare tutta la notte",
    "Canzoni per riflettere",
    "per una cena con gli amici",
    "Successi latini per l'estate",
    "per un viaggio in auto",
    "Musica classica per concentrarsi",
    "da ascoltare sotto le stelle",
    "per una giornata al mare",
    "Le migliori tracce EDM",
    "Canzoni per rilassarsi in spa",
    "per una serata al club",
    "Successi degli anni '90",
    "per un picnic nel parco",
    "per un momento di meditazione",
    "Le migliori tracce hip-hop",
    "per una festa in giardino",
    "Canzoni per un'atmosfera romantica",
    "per un mattino energico",
    "indie per scoprire nuove band",
    "Mix delle migliori canzoni degli anni",
    "'90 e 2000",
    "per una serata di relax e lettura"
]

const imagePaths = [
    { title: ``, img: 'assets/imgs/search/image-1.jpeg'},
    { title: ``, img: 'assets/imgs/search/image-2.jpg' },
    { title: ``, img: 'assets/imgs/search/image-3.jpg' },
    { title: ``, img: 'assets/imgs/search/image-4.jpg' },       
    { title: ``, img: 'assets/imgs/search/image-5.jpg' },
    { title: ``, img: 'assets/imgs/search/image-6.jpg' },
    { title: ``, img: 'assets/imgs/search/image-7.jpg' },
    { title: ``, img: 'assets/imgs/search/image-8.jpg' },
    { title: ``, img: 'assets/imgs/search/image-9.jpg' },
    { title: ``, img: 'assets/imgs/search/image-10.jpg' },
    { title: ``, img: 'assets/imgs/search/image-11.jpg' },
    { title: ``, img: 'assets/imgs/search/image-12.jpg' },
    { title: ``, img: 'assets/imgs/search/image-13.jpeg'},
    { title: ``, img: 'assets/imgs/search/image-14.jpg' },
    { title: ``, img: 'assets/imgs/search/image-15.jpg' },
    { title: ``, img: 'assets/imgs/search/image-16.jpg' },
    { title: ``, img: 'assets/imgs/search/image-17.jpg' },
    { title: ``, img: 'assets/imgs/search/image-18.jpg' },
    { title: ``, img: 'assets/imgs/search/image-19.jpg' },
    { title: ``, img: 'assets/imgs/search/image-20.jpg' },
    { title: ``, img: 'assets/imgs/search/image-21.jpg' },
    { title: ``, img: 'assets/imgs/search/image-22.jpg' },
    { title: ``, img: 'assets/imgs/search/image-23.jpg' },
    { title: ``, img: 'assets/imgs/search/image-24.jpg' },
    { title: ``, img: 'assets/imgs/search/image-25.jpeg'},
    { title: ``, img: 'assets/imgs/search/image-26.jpg' },
    { title: ``, img: 'assets/imgs/search/image-27.jpg' },
    { title: ``, img: 'assets/imgs/search/image-28.jpg' },
    { title: ``, img: 'assets/imgs/search/image-29.jpg' },
    { title: ``, img: 'assets/imgs/search/image-30.jpg' },
    { title: ``, img: 'assets/imgs/search/image-31.jpg' },
    { title: ``, img: 'assets/imgs/search/image-32.jpg' },
    { title: ``, img: 'assets/imgs/search/image-33.jpg' },
    { title: ``, img: 'assets/imgs/search/image-34.jpg' },
    { title: ``, img: 'assets/imgs/search/image-35.jpg' },
    { title: ``, img: 'assets/imgs/search/image-36.jpg' },
    { title: ``, img: 'assets/imgs/search/image-37.jpeg'},
    { title: ``, img: 'assets/imgs/search/image-38.jpg' },
    { title: ``, img: 'assets/imgs/search/image-39.jpg' },
    { title: ``, img: 'assets/imgs/search/image-40.jpg' },
    { title: ``, img: 'assets/imgs/search/image-41.jpg' },
    { title: ``, img: 'assets/imgs/search/image-42.png'},
    { title: ``, img: 'assets/imgs/search/image-43.png' },
    { title: ``, img: 'assets/imgs/search/image-44.png' },
    { title: ``, img: 'assets/imgs/search/image-45.png' },
    { title: ``, img: 'assets/imgs/search/image-46.jpeg'},
    { title: ``, img: 'assets/imgs/search/image-47.jpg' },
    { title: ``, img: 'assets/imgs/search/image-48.jpeg'},
    { title: ``, img: 'assets/imgs/search/image-49.jpg' },
    { title: ``, img: 'assets/imgs/search/image-50.jpg' },
    { title: ``, img: 'assets/imgs/search/image-51.jpg' },
    { title: ``, img: 'assets/imgs/search/image-52.jpg' }
    ];
// CREARE LE CARD DEL SEARCH
document.addEventListener('DOMContentLoaded', function() {
        // Funzione per creare una card
    function createCard() {
        imagePaths.forEach((img, i) => {
        img.title += ArrayGenresPlayList[i];
        
        rowforGenerateCard.innerHTML += 
        ` 
    <div
    class="col card bg-primary text-white rounded-3 overflow-hidden ms-4 p-0 my-3"
    style="width: 200px; height: 200px"
    >
    <div
    class="card-body position-relative d-flex align-items-center justify-content-center"
    >
    <h4 class="position-absolute top-0 start-0 my-3 m-2">
        ${img.title}
    </h4>
    <img
        src="${img.img}"
        class="img-fluid position-absolute e-3 mb-3 rotated-img"
     alt="Playlist_Cover"
     width="115px"
     height="115px"
   />
 </div>`
})
    }
    createCard()
    
    let query;
    const initialUrl = `https://striveschool-api.herokuapp.com/api/deezer/search?q=`; 
    let url = initialUrl
  
    searchInput.addEventListener("keypress", function() {
        query = inputText.value
        console.log('Ricerca:', query)
        url = initialUrl + query
        console.log(url)
        if(query.length >= 3) {
            researchSomething()
        }
    })


    let rowforGenarateCardMusic = document.getElementById('rowforGenarateCardMusic')
    let createCardMusic = function(arrSongs) {
        if (rowforGenarateCardMusic.innerHTML.trim() !== '') {
            rowforGenarateCardMusic.innerHTML = '';
        }
        arrSongs.forEach((element) => {
            rowforGenarateCardMusic.innerHTML +=`
            <div class="col">
            <div class="card bg-tertiary cforhover ms-4">
            <img src="${element.album.cover_medium}" class="card-img-top" alt="Cover_Song" />
            <div class="card-body text-light">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">
            <a href="#" class="text-light">${element.album.title}</a> •
            <a href="artist.html?q=${element.artist.id}" class="text-light">${element.artist.name}</a>
            </p>
            </div>
            </div>
            </div>
            </div>
            </div>`
        })
    }

 let filtredArr = [];
 let filtredArrAlbum = []
let FiltredArrFuncAlbum = function(array, query) {
    console.log('Valore di query:', query);
   
    const seen = new Set(); // Set per tenere traccia degli artisti già visti
     filtredArrAlbum = array.filter(el => {
        const name = el.album.title.toLowerCase();
        const matchesQuery = name.includes(query.toLowerCase());
        if (matchesQuery && !seen.has(name)) {
            seen.add(name); // Aggiungi il nome dell'artista al set visto
            return true;
        }
        return false;
    });
    
    console.log('Array filtrato ALBUM', filtredArrAlbum);
    createAlbum(filtredArrAlbum, query);
}



// FUNZIONE PER FILTARE GLI ALBUM
let createAlbum = function(arrSongs) {
    if (rowforGenarateCardMusic.innerHTML.trim() !== '') {
        rowforGenarateCardMusic.innerHTML = '';
    }

    arrSongs.forEach((element) => {
        rowforGenarateCardMusic.innerHTML +=`
        <div class="col">
        <div class="card bg-tertiary cforhover ms-4">
        <img src="${element.album.cover_medium}" class="card-img-top rounded-circle" alt="Cover_Song" />
        <a href="album.html" class="text-light">${element.album.title}</a>
        <p>Album</p>
        </p>
        </div>
        </div>
        </div>
        </div>
        </div>`
    })

}

let albumFilter = document.getElementById('albumFilter');
console.log(albumFilter)
albumFilter.addEventListener('click', function(){
    FiltredArrFuncAlbum(filtredArr, query)
})
// BUTTON "TUTTO"
let AllNoFilt = this.getElementById('AllNoFilter') 
AllNoFilt.addEventListener('click', function() {
    researchSomething();
})



// FUNZIONE PER FILTARE GLI ARTISTI
let FiltredArrFuncArtist = function(array, query) {
    console.log('Valore di query:', query);
   
    const seen = new Set(); // Set per tenere traccia degli artisti già visti
    const filtredArr = array.filter(el => {
        const name = el.artist.name.toLowerCase();
        const matchesQuery = name.includes(query.toLowerCase());
        if (matchesQuery && !seen.has(name)) {
            seen.add(name); // Aggiungi il nome dell'artista al set visto
            return true;
        }
        return false;
    });
    
    console.log('Array filtrato:', filtredArr);
    createArtist(filtredArr, query);
}
// CREARE CARD ARTISTI
let createArtist = function(arrSongs) {
    if (rowforGenarateCardMusic.innerHTML.trim() !== '') {
        rowforGenarateCardMusic.innerHTML = '';
    }

    arrSongs.forEach((element) => {
        rowforGenarateCardMusic.innerHTML +=`
        <div class="col">
        <div class="card bg-tertiary cforhover ms-4">
        <img src="${element.artist.picture_medium}" class="card-img-top rounded-circle" alt="Cover_Song" />
        <a href="artist.html?q=${element.artist.id}" class="text-light">${element.artist.name}</a>
        <p>Artista</p>
        </p>
        </div>
        </div>
        </div>
        </div>
        </div>`
    })

}
// CLICK SU BUTTON
let artistFilter = this.getElementById('artistFilter');
artistFilter.addEventListener('click', function() {
    FiltredArrFuncArtist(filtredArr, query)
})


// FETCH PER RICERCARE QUALCHE BRANO/CANTANTE/ALBUM
let researchSomething = function() {
    fetch(url)
    .then((response) => {
    if(response.ok) {
        console.log('La ricerca è andata bene');
        return response.json()
    } else {
        throw new Error('Si è verificato un problema durante la ricerca')
    }
    }) 
    .then((arr) => {
    console.log('Risulato della ricerca:', arr.data)
    filtredArr = [...arr.data]
    createCardMusic(filtredArr)
    })
    .catch((err) => {
        console.log('Errore durante la ricerca:', err)
    })
}
}); 

let musicRow = document.getElementById('musicRow');
searchInput.addEventListener('click', function() {
    playListSearch.classList.add('d-none')
    searchInput.addEventListener('keydown', function() {
        playListSearch.classList.add('d-none')
        musicRow.classList.remove('d-none')
    })
})  




//TOGGLE DEL RIGHTBAR
let rightBar = document.getElementById('rightBar');
let peopleButton = document.getElementById('peopleButton')
console.log('RightBar', rightBar)
console.log('peopleButton', peopleButton)

peopleButton.addEventListener('click', function() {
    rightBar.classList.toggle('d-none')
    
})
// REMOVE RIGHTBAR FROM X
let xRightBar = document.getElementById("xRightBar");
xRightBar.addEventListener('click', function() {
    rightBar.classList.add('d-none')
})


// COL PUBBLICITA' 
let colAdv = document.getElementById('colAdv')
let hideAdv = document.getElementById('hideAdv')
if(hideAdv) {
hideAdv.addEventListener('click', function() {
    colAdv.classList.add('d-none')
})
}


// LI STILE
const allLi = document.querySelectorAll('#listPlaylist li');
console.log(allLi)

allLi.forEach((sli) => {
    sli.classList.add('listli')
        
})
const allLiImg = document.querySelectorAll('ul div li img')
console.log(allLiImg)

// Contenuto LI
allLiImg.forEach((img, i) => {
    img.setAttribute('src', imagePaths[i].img)
})
const allLiP = document.querySelectorAll('ul div li p')
allLiP.forEach((p, i) => {
    p.innerHTML = ArrayGenresPlayList[i];
})

// CONTENUTO "ALTRO DI CIO' CHE TI PIACE"

const playlistIMG = document.querySelectorAll('item img')
console.log(playlistIMG)

const albumId = new URLSearchParams(location.search).get('q')
console.log(albumId)

let InformationArtistAndAlbum = function(obj) {
    let imgArtist = document.getElementById('imgArtist');
    imgArtist.setAttribute('src', obj.artist.picture_small)
    let imgAlbum = document.getElementById('imgAlbum');
    imgAlbum.setAttribute('src', obj.cover_medium)
    let nameArtist = document.getElementById('nameArtist');
    nameArtist.innerHTML = obj.artist.name + " •"
    let titleAlbum = document.getElementById('titleAlbum');
    titleAlbum.innerHTML = obj.title 
    let year = document.getElementById('year')
    year.innerHTML = obj.release_date.slice(0,4) + " •"
    let numberB = document.getElementById('numberB')
    if(obj.nb_tracks > 1) {
        numberB.innerHTML = obj.nb_tracks + " brani •"
    } else {
        numberB.classList.add('d-none')
    }
    let duration = document.getElementById('duration')
    let timer = obj.duration 
    let convertSeconds = function(duration) {
        const hours = Math.floor(duration / 3600);
        const minutes = Math.floor((duration % 3600) / 60);
        const remainingSeconds = duration % 60;
        
        
        if (hours > 0) {
            return `${hours} ore, ${minutes} minuti e ${remainingSeconds} secondi`;
        } else if (minutes > 0) {
            return  `${minutes} minuti e ${remainingSeconds} secondi`;
        } else {
            return `${remainingSeconds} secondi`;
        }
    }
    convertSeconds(timer) 
    duration.innerHTML = convertSeconds(timer)
    
}


let songsAlbum = function(songsAlbumArr) {
    let rowSong = document.getElementById('rowSong')
    songsAlbumArr.forEach((song, i) => {
    rowSong.innerHTML  +=
          `<div class="col">
          <p class="mb-0 p-0" id="rankAl">${i+1}</p>
        </div>
        <div class="col">
        <p class="mb-0 p-0 
        data-src="${song.album.cover_big}" 
        data-title="${song.title}" 
        data-artist="${song.artist.name}" 
        data-preview="${song.preview}" 
        data-title-short="${song.title_short}" 
        data-title-lg="${song.title}"
        data-album="${song.album.title}"
        onclick="takeElement(event)" 
        id="titleAl">${song.title}</p>
        </div>
        <div class="col">
        <p class="mb-0 p-0" id="albumAl">${song.album.title}</p>
        </div>
        <div class="col">
        </div>`

    });
}


let createAlbum = function() {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${albumId}`)
    .then((response) => {
        console.log('pls stampato', response)
        if(response.ok) {
            return response.json()
        } else {
            throw new Error ('Errore')
        }
        
    })
    .then((obj) => {
        console.log(obj)
        InformationArtistAndAlbum(obj)
        let songsAlbumArr = obj.tracks
        console.log(songsAlbumArr.data) 
        songsAlbum(songsAlbumArr.data)

    })
    .catch((err) => {
        console.log('errore', err)
    })
}
createAlbum()



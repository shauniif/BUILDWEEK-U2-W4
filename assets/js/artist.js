


const artistId = new URLSearchParams(location.search).get('q')
console.log(artistId)


let createCardList = function(arraySongsofAnArtist) {
    let Songrow = document.getElementById('Songrow');

    for (let i = 0; i < 5; i++) {
        let element = arraySongsofAnArtist[i];

        Songrow.innerHTML += `
            <li class="mt-4 ">
                <div class="row align-items-center">
                    <div class="col-6 d-flex">
                        <div>
                            <img
                                src="${element.album.cover_small}"
                                alt="cover_song"
                                height="50px"
                                width="50px"
                            />
                        </div>
                        <div class="align-self-center">
                            <p class="m-0 ms-3">
                                <a href="#" class="text-light text-decoration-none">${element.title}</a>
                            </p>
                        </div>
                    </div>
                    <div class="col-3">
                        <p class="mb-0 opacity-50">${element.rank}</p>
                    </div>
                    <div class="col-3">
                        <p class="mb-0 opacity-50">${element.duration}</p>
                    </div>
                </div>
            </li>`;
    }
};

let fetchSongs = function(fetchSongs) {
    fetch(fetchSongs) 
    .then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error('Errore nel recupero dei dettagli')
        }

    })
    .then((obj) => {
        console.log('Canzoni ottenute', obj.data)
        createCardList(obj.data)
    })
    .catch((err) => {
        console.log('ERRORE', err)
    })
}

let ModifyArtist = function(obj) {
    let nameArtist = document.getElementById('nameArtist');
    console.log(nameArtist)
    let numberListener = document.getElementById('numberListener');
    nameArtist.innerHTML = ''
    numberListener.innerHTML = ''
    nameArtist.innerHTML = obj.name
    console.log(nameArtist)
    numberListener.innerHTML = obj.nb_fan
    let imgBG = document.getElementsByClassName('imgBG')[0];
    imgBG.style.backgroundImage = `url('${obj.picture_xl}')`
    let nArtist = document.getElementById('nArtist');
    nArtist.innerHTML = obj.name
    let imgBraniLikes = document.getElementById('imgBraniLikes');
    imgBraniLikes.setAttribute('src', obj.picture_medium)
     
    }

let tracksSong
let createArtist = function() {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}`)
    .then((response) => {
        console.log('pls stampato', response)
        if(response.ok) {
            return response.json()
        } else {
            throw new Error ('perché Dio è così stronzo?cit. Il primo Jojo')
        }
        
    })
    .then((obj) => {
        console.log(obj)
        ModifyArtist(obj)
        tracksSong = obj.tracklist
        console.log(tracksSong)
        fetchSongs(tracksSong)
    })
    .catch((err) => {
        console.log('errore', err)
    })
}
createArtist()
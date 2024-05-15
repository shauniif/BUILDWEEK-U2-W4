/*fetch("https://striveschool-api.herokuapp.com/api/deezer/album/${albumID}")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else throw new Error("Sono morto");
  })
  .then(({ songs }) => {
    //wrappa il return in un oggetto chiamato "x", che ha tutte le chiavi/val della response
    console.log(songs);

    // immagini.forEach((element, i) => {
    //   setTimeout(() => {
    //     element
    //       .querySelector("img")
    //       .setAttribute("src", photos[i].src.original);
    //     element.querySelector(".card-text").innerHTML = photos[i].alt;
    //     element.querySelector("img").setAttribute("id", photos[i].id);
    //   });
    // });
  });

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen}")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else throw new Error("Sono morto");
  })
  .then(({ songs }) => {
    //wrappa il return in un oggetto chiamato "x", che ha tutte le chiavi/val della response
    console.log(songs);

   /*   immagini.forEach((element, i) => {
        setTimeout(() => {
          element
            .querySelector("img")
            .setAttribute("src", photos[i].src.original);
          element.querySelector(".card-text").innerHTML = photos[i].alt;
          element.querySelector("img").setAttribute("id", photos[i].id);
        });
      }); */
  //  });



    const ulrDeezer = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
const contenitoreFirstSong = document.getElementById("firstSong");
const contenitoreAlbum = document.getElementById("albums");
const contenitoreAltro = document.getElementById("altro");

/* ulrDeezer: Contiene l'URL base per effettuare le richieste all'API di Deezer per
 la ricerca di brani.

contenitoreFirstSong, contenitoreAlbum, contenitoreAltro: Sono elementi del DOM
 che vengono selezionati tramite getElementById */

// player audio
const audio = document.querySelector("audio");
let seek_slider = document.querySelector(".seek_slider");

let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
/* 
audio: È l'elemento audio HTML.

seek_slider: È l'elemento per il controllo dello scorrimento della traccia.

curr_time, total_duration: Sono elementi per visualizzare il tempo trascorso e la durata totale 
della traccia corrente. */

//////////////////////////

/* populatePlayer: Popola il player con le informazioni dell'artista, del titolo, dell'anteprima 
e dell'immagine dell'album.*/
  const populatePlayer = function (artist, title, preview, img) {
  const artist_name = document.querySelector(".track-artist");
  const track_name = document.querySelector(".track-name");
  const audio = document.querySelector("audio");
  const image = document.querySelector(".cover img");

  artist_name.innerText = artist;
  track_name.innerText = title;

  audio.setAttribute("src", preview);
  image.setAttribute("src", img);
  // clearInterval(updateTimer); questa e' in forse da provare 
};

/* Seleziona gli elementi del DOM che mostrano le informazioni dell'artista e del titolo della traccia
 utilizzando document.querySelector(".track-artist") e document.querySelector(".track-name").

Seleziona l'elemento audio e l'elemento immagine dell'album utilizzando rispettivamente 
document.querySelector("audio") e document.querySelector(".cover img").

Imposta il testo dell'elemento dell'artista con il nome dell'artista passato alla funzione (artist).

Imposta il testo dell'elemento del titolo della traccia con il titolo della traccia passato alla funzione (title).

Imposta l'attributo src dell'elemento audio con l'URL dell'anteprima della traccia passato alla funzione (preview).

Imposta l'attributo src dell'elemento immagine dell'album con l'URL dell'immagine dell'album passato alla funzione (img) 

populatePlayer non crea una funzione artist, ma  prende un valore per artist come parametro quando viene chiamata.

artist è solo il nome del parametro all'interno della definizione della funzione, non è una funzione a sé stante.

Quando la funzione populatePlayer viene chiamata con i valori
specifici per artist, title, preview, e img, questi valori vengono utilizzati per aggiornare l'interfaccia del player audio. */

/////////////////////////

/* playpauseTrack: Gestisce la riproduzione e la pausa della traccia audio. */
const playpauseTrack = function () {
  const play_pause_btn = document.querySelector(".playpause-track");

 if (audio.paused) {
    audio.play();
    play_pause_btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pause-circle-fill mx-2" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/>
  </svg>`;
    let updateTimer = setInterval(seekUpdate, 1000);
  } else {
    audio.pause();

    play_pause_btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle-fill mx-2" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
</svg>`; 
  }
  console.log('Cliccato correttamente!')
};

/* Seleziona l'elemento del pulsante di riproduzione/pausa tramite 
document.querySelector(".playpause-track").

Controlla se l'elemento audio è in pausa (audio.paused). Se è in pausa:

Avvia la riproduzione dell'audio utilizzando audio.play().

Modifica l'HTML del pulsante di riproduzione/pausa per mostrare un'icona di pausa.

Avvia un timer che chiama la funzione seekUpdate ogni secondo, per aggiornare la barra 
di avanzamento della traccia audio.

Se l'elemento audio non è in pausa:

Mette in pausa la riproduzione dell'audio utilizzando audio.pause().

Modifica l'HTML del pulsante di riproduzione/pausa per mostrare un'icona di riproduzione
 */
////////////////////////////

/* setVolume: Imposta il volume dell'audio. */

const setVolume = function () {
  const volume_slider = document.querySelector(".volume_slider");
  audio.volume = volume_slider.value / 100;
}; 
 
/* Seleziona l'elemento dello slider del volume nel documento HTML utilizzando 
document.querySelector(".volume_slider").

Ottiene il valore dello slider del volume tramite volume_slider.value.

Imposta il volume dell'elemento audio (audio.volume) uguale al valore dello slider del volume, 
diviso per 100. Questo è necessario perché il valore dello slider del volume 
è compreso tra 0 e 100, mentre il volume dell'audio è compreso tra 0 e 1. */

////////////////////////////

/* seekTo: Consente di navigare all'interno della traccia audio */

const seekTo = function () {
  let seekto = audio.duration * (seek_slider.value / 100);
  audio.currentTime = seekto;
};

/* Calcola la posizione desiderata all'interno della traccia audio moltiplicando
 la durata totale dell'audio per la percentuale di avanzamento dello slider (seek_slider.value / 100).
Imposta il tempo corrente di riproduzione dell'audio (audio.currentTime)
 alla posizione calcolata. */

////////////////////////////

/* seekUpdate: Aggiorna lo slider di navigazione temporale e 
visualizza il tempo trascorso e la durata totale della traccia. */

const seekUpdate = function () {
  let seekPosition = 0;

  if (!isNaN(audio.duration)) {
    seekPosition = audio.currentTime * (100 / audio.duration);
    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(audio.currentTime / 60);
    let currentSeconds = Math.floor(audio.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(audio.duration / 60);
    let durationSeconds = Math.floor(audio.duration - durationMinutes * 60);

    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    if (durationMinutes < 10) {
      durationMinutes = "0" + durationMinutes;
    }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
};
/* 
Inizializza la variabile seekPosition a 0.

Controlla se la durata dell'audio è un numero valido (!isNaN(audio.duration)). Se lo è:
Calcola la posizione del cursore di scorrimento (seekPosition) moltiplicando il tempo corrente 
della traccia audio per il rapporto tra 100 e la durata totale della traccia.

Imposta il valore dello slider di scorrimento (seek_slider.value) con la posizione calcolata.

Calcola i minuti e i secondi correnti e della durata totale della traccia.

Se i secondi correnti o della durata totale sono inferiori a 10, aggiunge uno zero 
davanti per mantenerli su due cifre.

Aggiorna il contenuto dei tag HTML corrispondenti al tempo corrente (curr_time) e 
alla durata totale (total_duration) della traccia audio. */

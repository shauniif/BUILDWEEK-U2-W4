const loadAlbums = (searchKeyword) =>
    fetch("https://striveschool-api.herokuapp.com/api/deezer/album/75621062" , {
      headers: {
        Authorization: "xIMO8U8wKkk7kIjnmZrhxZe8rsgqBbd3sur3Ecpt5vAs2Szf7nQVqztb",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else throw new Error("Sono morto");
      })
      .then(({ photos }) => { //wrappa il return in un oggetto chiamato "photos", che ha tutte le chiavi/val della response
        console.log(photos);
        const immagini = document.querySelectorAll(".card");
        console.log(immagini.length);
  
        immagini.forEach((element, i) => {
          setTimeout(() => {
            element
              .querySelector("img")
              .setAttribute("src", photos[i].src.original);
            element.querySelector(".card-text").innerHTML = photos[i].alt;
            element.querySelector('img').setAttribute('id', photos[i].id)
            
          });
        });
      });
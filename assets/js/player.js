fetch("https://striveschool-api.herokuapp.com/api/deezer/album/${albumID}")
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

    immagini.forEach((element, i) => {
      setTimeout(() => {
        element
          .querySelector("img")
          .setAttribute("src", photos[i].src.original);
        element.querySelector(".card-text").innerHTML = photos[i].alt;
        element.querySelector("img").setAttribute("id", photos[i].id);
      });
    });
  });

// document.querySelector("#loadPrimary").addEventListener("click", () => {
//   loadImages(window.prompt("Scegli la keyword da cercare per le immagini: "));
// });

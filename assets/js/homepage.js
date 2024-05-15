
//TOGGLE SEARCH INPUT CON APPARAZIONE DI "PAGINA" SEARCH 
let searchbuttonIcon = document.getElementById('searchButtonIcon');
let searchInput = document.getElementById('SearchInput');
let colForAdv = document.getElementById('colAdv');
let personalPlaylist = document.getElementById('personalPlaylist');
let playListSearch = document.getElementById('playListSearch')
console.log('BOTTONE A SINISTRA SEARCH ICONA', searchbuttonIcon)
console.log('SEARCH INPUT', searchInput)
searchbuttonIcon.addEventListener('click', function() {
    searchInput.classList.toggle('invisible');
    inputText = document.getElementById('inputText')
    colForAdv.classList.toggle('d-lg-block')
    playListSearch.classList.toggle('d-none')
    personalPlaylist.classList.toggle('d-none')
    if (!searchInput.classList.contains('invisible')) {
        inputText.focus();
    }
});

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
hideAdv.addEventListener('click', function() {
    colAdv.classList.add('d-none')
})



const allLi = document.querySelectorAll('#listPlaylist li');
console.log(allLi)
allLi.forEach(sli => {
    sli.classList.add('listli')
})
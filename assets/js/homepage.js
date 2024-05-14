
//TOGGLE SEARCH INPUT
let searchbuttonIcon = document.getElementById('searchButtonIcon');
let searchInput = document.getElementById('SearchInput');
console.log('BOTTONE A SINISTRA SEARCH ICONA', searchbuttonIcon)
console.log('SEARCH INPUT', searchInput)
searchbuttonIcon.addEventListener('click', function() {
    searchInput.classList.toggle('invisible');
    inputText = document.getElementById('inputText')
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





const allLi = document.querySelectorAll('#listPlaylist li');
console.log(allLi)
allLi.forEach(sli => {
    sli.classList.add('listli')
})
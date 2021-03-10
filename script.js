// Sugestão no plantão, função para criar o quadro de pixels
function creatBoxes() {
  let dad = document.getElementById('pixel-board');
  for (let index = 0; index < 5; index++) {
    for (let index = 0; index < 5; index++) {
        let box = document.createElement('div');
        box.className = 'pixel';
        dad.appendChild(box);
    }
      let line = document.createElement('br');
      dad.appendChild(line);
  }
}
creatBoxes()

// Movendo a classe selected com um click
// Entendimento de event.target: https://www.w3schools.com/jsref/event_target.asp
// Entendimento classList.add e .remove: https://stackoverflow.com/questions/507138/how-to-add-a-class-to-a-given-element
let boxBlack = document.getElementById('black');
let boxYellow = document.getElementById('yellow');
let boxBlue = document.getElementById('blue');
let boxGreen = document.getElementById('green');

boxBlack.addEventListener('click',changeClass);
boxYellow.addEventListener('click',changeClass);
boxBlue.addEventListener('click',changeClass);
boxGreen.addEventListener('click',changeClass);

function changeClass (event) {
    let selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected');
}

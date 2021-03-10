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


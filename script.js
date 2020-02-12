const TABEL = document.querySelector('table');
const COLOR = document.getElementById('color');

function drawTable(idx) {
  COLOR.value = '';
  let element = '';

  for (let i = 0; i < idx; i++) {
    element += `<tr>`;
    for (let j = 0; j < idx; j++) {
      element += `<td onclick="applyColor(event)"></td>`
    }
    element += `</tr>`
  }

  TABEL.innerHTML = element;
}

function applyColor(event) {
  event.target.style.backgroundColor = COLOR.value;
}

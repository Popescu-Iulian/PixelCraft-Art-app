const TABEL = document.querySelector('table');
const BROWSER_COLORS = document.getElementById('browser-colors');
const USER_COLORS = document.getElementById('user-colors');

function drawTable(idx) {
  BROWSER_COLORS.value = '';
  let elements = '';

  for (let i = 0; i < idx; i++) {
    elements += `<tr>`;
    for (let j = 0; j < idx; j++) {
      elements += `<td onclick="applyColor(event)"></td>`
    }
    elements += `</tr>`
  }

  TABEL.innerHTML = elements;
}

function applyColor(event) {
  if (USER_COLORS.value === '') {
    event.target.style.backgroundColor = BROWSER_COLORS.value;
  } else {
    event.target.style.backgroundColor = USER_COLORS.value;
  }
}

function clearUserColors() {
  USER_COLORS.value = '';
}
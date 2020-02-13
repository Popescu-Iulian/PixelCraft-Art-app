const BROWSER_COLORS = document.getElementById('browser-colors');
const USER_COLORS = document.getElementById('user-colors');
const TDS = document.getElementsByTagName('td');
const TABLE = document.createElement('TABLE');

function drawTable(idx) {
  document.querySelector('body').appendChild(TABLE);
  TABLE.setAttribute('border', '1');

  BROWSER_COLORS.value = '';
  let elements = '';

  for (let i = 0; i < idx; i++) {
    elements += `<tr>`;

    for (let j = 0; j < idx; j++) {
      elements += `<td onclick="applyColor(event)"></td>`
    }

    elements += `</tr>`
  }

  TABLE.innerHTML = elements;

  clearUserColors();
}

function applyColor(event) {
  if (USER_COLORS.value === '') {
    event.target.style.backgroundColor = BROWSER_COLORS.value;
  } else {
    event.target.style.backgroundColor = USER_COLORS.value;
  }
}

function clearUserColors() {
  if (USER_COLORS.value !== '') {
    USER_COLORS.value = '';
  }
}

function screenshotHelper() {
  for (let i = 0; i < TDS.length; i++) {
    TDS[i].classList.toggle('remove-borders');
    TABLE.classList.toggle('remove-borders');
  }
}
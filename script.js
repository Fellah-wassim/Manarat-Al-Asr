setInterval(displayClock, 500);
function displayClock() {
  var time = new Date();
  var hours = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();
  if (hours > 12) {
    hours = hours - 12;
  }
  if (hours == 0) {
    hours = 12;
  }
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (min < 10) {
    min = '0' + min;
  }
  if (sec < 10) {
    sec = '0' + sec;
  }
  document.getElementById('clock').innerHTML = hours + ':' + min + ':' + sec;
}

setInterval(displayDate, 500);
function displayDate() {
  var time = new Date();
  var day = time.getDate();
  var month = time.getMonth() + 1;
  var year = time.getFullYear();
  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }
  document.getElementById('date').innerHTML = month + '/' + day + '/' + year;
}

var btn1 = document.getElementById('full-screen');
var el = document.documentElement;
btn1.addEventListener('click', () => {
  if (el.requestFullscreen) {
    el.requestFullscreen();
  }
});
btn1.addEventListener('click', () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
});
function menuToggler() {
  const toggleMenu = document.querySelector('.menu');
  toggleMenu.classList.toggle('active');
}
function searchButton() {
  const searchBtn = document.querySelector('.divv');
  searchBtn.classList.toggle('active');
}
function displayProduct() {
  const displayPbtn = document.querySelector('.when-choose-fiaa');
  displayPbtn.classList.toggle('active');
}
function displayAsnafFiaa1() {
  const displayFiaaProduct = document.querySelector('.asnaf-fiaa1');
  const colorFiaaBtn = document.querySelector('.fiaa1');
  displayFiaaProduct.classList.toggle('active');
  colorFiaaBtn.classList.toggle('active');
}
function kamiaPlusOne() {
  const val = document.getElementById('kamia').value;
  if (val < 99) document.getElementById('kamia').value++;
  if (val < 9) {
    document.getElementById('kamia').value =
      '0' + document.getElementById('kamia').value++;
  }
}
function kamiaMinusOne() {
  const val = document.getElementById('kamia').value;
  if (val > 1) document.getElementById('kamia').value--;
  if (val < 11) {
    document.getElementById('kamia').value =
      '0' + document.getElementById('kamia').value--;
  }
}
//on delete any box
// if (number === 0) {
//   document.querySelector(".page2-box21").style.display = "content";
// }
let number = 0;
function buildBox(fiaaClass) {
  number = number + 1;
  document.querySelector('.page2-box21').style.display = 'none';
  document.querySelector(
    '.pricing-tables'
  ).innerHTML += `              <div class="pricing-box">
                <div class="pricing-name-box">
                  <div class="numbering-box"><p class="numbering-box-txt">${
                    document.querySelector('.' + fiaaClass + ' .product-name')
                      .textContent
                  }</p><span class="nbr">${number}</span></div>
                </div>
                <div class="flex-list-pricing-box">
                  <div class="kamia">
                    <button class="plus-button" onclick="kamiaPlusOne()">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="8" height="8" viewBox="0 0 8 8">
                        <image id="plus" width="8" height="8" xlink:href="data:image/png;base64,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"/>
                      </svg>
                    </button>
                    <input type="number" id="kamia" value="01" min="01" max="99"class="kamia-input">
                    <button class="minus-button" onclick="kamiaMinusOne()">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="6" height="6" viewBox="0 0 6 6">
                        <image id="minus" width="6" height="6" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAADkmAAA5JgHuD001AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAPNQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoHlZCgAAAFB0Uk5TAAECAwQFBwkKDxITFBcgJSYwMTU5Oj9ET1FUVmBiZGlscnh9gIWHjY6PkJGUmZ+kq6ytrrfAxMbHztLT1dfY3+Di4+To7O3u7/D19/j5+/5IUs73AAAD+klEQVQYGe3BaVuNCxQA0N1cJCo5SqZE5tIsQxqEUPv//5prfhIR+XDPu9daEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADRC51Dr0pXr0zN3+d+amb5+5VJrqDP+teEbc2tvkzbxdm3uxnD8K10X7q4nbWf9zoWuOLG+iw9fJm3q5cOLfXESw492k7a2+2g4/tbQ7H7S9vZnh+JvnL79LmmEd7dPx5/qm3qTNMabqb74E52Xt5JG2brcGcc2sJg0zuJAHNPZZ0kDPTsbx9J6lTTSq1Ycw7W9pKH2rsXv9DxIGuxBT/zS4FLSaEuD8Qv9j5OGe9wfR+qYSxpvriOOMp0UMB1HmNhPCtifiJ8a2U1K2B2JnzizkRSxcSZ+0LuSlLHSG4fdSwq5F4ec20sK2TsX35tPSpmP74wlxYzFQctJMctxwHhSznh80/08Ked5d3x1NSnoanzRv50UtN0fn00kJU3EZ7NJSbPxSc/rpKTXPfFRKymqFR/dT4q6Hx90bCZFbXZExGhS1mhE3EzKuhkRT5OynkacSgo7FeeTws7HZFLYZNxKCrsVC0lhC7GaFLYaT5LCnsSLpLAXsZMUthPvk8Lex/uksPexkxS2Ey+Swl7Ek6SwJ7GaFLYaC0lhC3ErKexWTCaFTcb5pLDzcSop7FTE06SspxFxMynrZkSMJmWNRkTHZlLUZkd8cD8p6n581EqKasVHPa+Tkl73xCezSUmz8dlEUtJEfNa/nRS03R9fXE0KuhpfdT9PynneHd+MJ+WMxwHLSTHLcdBYUsxYfGc+KWU+vnduLylk71wcci8p5F4c1ruSlLHSGz84s5EUsXEmfmJkNylhdyR+amI/KWB/Io4wnRQwHUfpmEsab64jjtT/OGm4x/3xC4NLSaMtDcYv9TxIGuxBT/zOtb2kofauxTG0XiWN9KoVx3L2WdJAz87GMQ0sJo2zOBDH1nl5K2mUrcud8Sf6pt4kjfFmqi/+1Onb75JGeHf7dPyNodn9pO3tzw7F3xp+tJu0td1Hw3ESfRcfvkza1MuHF/vixLou3F1P2s76nQtd8a8M35hbe5u0ibdrczeG41/rHGpdunJ9euYu/1sz09evXGoNdQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACN8B8ko0mAp4BxgAAAAABJRU5ErkJggg=="/>
                      </svg>
                    </button>
                  </div>
                  <div class="wi7da">
                    <select name="" id="">
                      <option value="كرتون">كرتون</option>
                      <option value="حبه">حبه</option>
                    </select>
                  </div>
                  <div class="si3r">
                    <input class="input-price" type="number" value="00" size="3">
                  </div>
                  <div class="">
                    <input class="input-price" type="number" value="00" size="3">
                  </div>
                  <div class="khasm">
                    <input class="input-price" type="number" value="00" size="3">
                    <select name="" id="">
                      <option value="oumla">$</option>
                      <option value="nissba">%</option>
                    </select>
                  </div>
                  <div class="dariba"></div>
                </div>
                <div class="ijmali">
                  <button>
                    <img class="delete-icon" src="IMG/trash.png" alt="trash icon">
                  </button>
                  <div class="ijmali-txt">
                    <p>الإجمالي</p>
                    <span>00</span>
                  </div>
                </div>
              </div>`;
}

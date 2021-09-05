// Счетчик состоит из спана и кнопок, которые должны увеличивать 
// и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

const counterValue = document.querySelector('#value')
const btnInc = document.querySelector('button[data-action="increment"]')
btnInc.addEventListener('click', increment)

const btnDec = document.querySelector('button[data-action="decrement"]')
btnDec.addEventListener('click', decrement)
 
let newValue = 0;
function increment()  {
    counterValue.textContent = newValue += 1
}

function decrement() {
    counterValue.textContent = newValue -= 1
}

counterValue.textContent = newValue;
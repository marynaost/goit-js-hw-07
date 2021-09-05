// Напиши скрипт создания и очистки коллекции элементов.Пользователь
// вводит количество элементов в input и нажимает кнопку Создать, после
// чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция
// элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр
// amount - число.Функция создает столько div, сколько указано в amount
// и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

const btnRender = document.querySelector('button[data-action="render"]')
const btnDestroy = document.querySelector('button[data-action="destroy"]')
const inputRef = document.querySelector('#controls input')
const boxesRef = document.querySelector('#boxes')

btnRender.addEventListener('click', createBoxes)
btnDestroy.addEventListener('click', clearBoxes)

let boxWidth = 30
let boxHeight = 30

function createBoxes(amount) {
    amount = inputRef.value
    const array = [];

    for (let i = 1; i <= amount; i += 1){
        const newBox = document.createElement('div')
        newBox.style.width = `${ boxWidth + i * 10 }px`
        newBox.style.height = `${ boxHeight + i * 10 }px`
        newBox.style.backgroundColor = `rgb( ${random()}, ${random()}, ${random()} )`
        array.push(newBox)
    }
    
  boxesRef.append(...array)  
}

function random() {
    return Math.floor(Math.random() * 256);
}

function clearBoxes() {
    boxesRef.innerHTML = ''
    inputRef.value = ''
}
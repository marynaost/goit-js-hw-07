// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет инлайн - стиль
// span#text обновляя свойство font - size.В результате при перетаскивании
// ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const ref = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),
}

ref.input.addEventListener('input', onChangeSize)

function onChangeSize(even) {
    ref.span.style.fontSize = Number(ref.input.value) + 10 + 'px'
    console.log(ref.span.style.fontSize);
}

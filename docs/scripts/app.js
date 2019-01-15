const input = document.getElementById('value-input');

let progress = new Progress({
    id: 'circle',
    size: 200,
    stroke: '#03a9f4',
    strokeWidth: 5,
    fill: 'transparent',
});

progress.initialize(); // Инициализация библиотеки

progress.setValue(input.value); // Задать начальное значение !!Важно после инициализации

input.oninput = () => { // Изменение значений при вводе
    if (input.value < 101 && input.value > -1) { // Проверка на валидное значение
        progress.setValue(input.value);
    }
}

function animateCircle(check){ // Анимация загрузки
    if(check.checked){
        progress.setMod('animated', 'yes');
    }else{
        progress.setMod('animated', '');
    }
}

function hideCircle(check){ // Спрятать элемент
    if(check.checked){
        progress.setMod('hidden', 'yes');
    }else{
        progress.setMod('hidden', '');
    }
}


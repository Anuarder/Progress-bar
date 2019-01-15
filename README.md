# Progress-bar

### Установка
Загрузите файлы CSS и JS и добавьте в свой HTML
```html
<link rel="stylesheet" href="./progress.css">
<script src="./progress.js"></script>
```
### Использование
Создайте элемент контейнер с id (по умолчанию circle)
```html
<div id="circle"></div>
```
Инициализируйте библиотеку в вашем index.js
```js
let progress = new Progress({
    id: 'circle', // ID контейнера
    size: 200, // Размер элемента
    stroke: '#03a9f4', // Цвет
    strokeWidth: 5, // Толщина линии
    fill: 'transparent', // Заливка
});
progress.initialize(); // Инициализация библиотеки
```
При пустом объекте - используются значения по умолчанию

### Основные методы
```js
progress.setValue(value) - Устанавливает процент загрузки
progress.setMod(mod, value); - Устанавливает режим отображение 'animated'(анимированный) и 'hidden'(скрытый) при value = 'yes'. 
```

class Progress {
    constructor(field){
        if(field == null){ // Проверка на отсутсвие каких либо значений
            this.id = 'circle';
            this.size = 200;
            this.stroke = 'red';
            this.strokeWidth = 2;
            this.fill = 'transparent';
        }else{ // Если объект передан, проверка по свойствам
            if(field.id == undefined){
                this.id = 'circle'
            }else{
                this.id = field.id;
            }
            if(field.size == undefined){
                this.size = 200;
            }else{
                if(field.size < 25){
                    this.size = 25;
                    console.log('Min size is 25');
                }else{
                    this.size = field.size;
                }
            }
            if(field.stroke == undefined){
                this.stroke = 'red';
            }else{
                this.stroke = field.stroke;
            }
            if(field.strokeWidth == undefined){
                this.strokeWidth = 2;
            }else{
                this.strokeWidth = field.strokeWidth;
            }
            if(field.fill == undefined){
                this.fill = 'transparent';
            }else{
                this.fill = field.fill;
            }
        }
        this.radius = this.size / 2 - 10;
        this.circumference = this.radius * 2 * Math.PI; // Длинна окружности
        this.circleSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg"); // Элемент SVG в который добавляется Circle
        this.circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
    }
    initialize(){
        this._drawCircle();
        document.getElementById(this.id).appendChild(this.circleSvg);
    }
    setValue(percent){
        const offset = this.circumference - percent / 100 * this.circumference;
        this.circle.style.strokeDashoffset = offset;
    }
    setMod(mod, value){
        switch(mod){
            case 'animated':
                if(value == 'yes'){
                    this.circle.classList.add('_circle-load'); // Css class для анимации
                }else{
                    this.circle.classList.remove('_circle-load');
                }
                break;
            case 'hidden':
                if(value == 'yes'){
                    this.circleSvg.style.display = 'none'; // Полное скрытие SVG элемента со страницы
                }else{
                    this.circleSvg.style.display = 'block';
                }
        }
    }
    _drawCircle(){ // Добавление атрибутов и стилей для Circle
        this.circleSvg.setAttribute('width', this.size);
        this.circleSvg.setAttribute('height', this.size);
        this.circle.style.strokeDasharray = `${this.circumference} ${this.circumference}`;
        this.circle.style.strokeDashoffset = `${this.circumference}`; 
        this.circle.classList.add('_circle');

        this.circle.style.fill = this.fill;
        this.circle.style.stroke = this.stroke;
        this.circle.style.strokeWidth = this.strokeWidth;
        this.circle.setAttribute('r', this.radius);
        this.circle.setAttribute('cx', this.size / 2);
        this.circle.setAttribute('cy', this.size / 2);
        this.circleSvg.appendChild(this.circle);
    }
}
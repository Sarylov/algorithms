class EventEmitter {
    constructor() {
        this.listeners = new Map()
    }

    addEventListener(event, listener) {
        if (!this.listeners.has(event)) this.listeners.set(event, new Set())

        this.listeners.get(event).add(listener)

        return () => {
            this.listeners.get(event).delete(listener)
        }
    }

    dispatchEvent(event, payload) {
        if (!this.listeners.has(event)) return

        for (const listener of this.listeners.get(event)) {
            listener(payload)
        }
    }
}


// // Создаем инстанс EventEmitter
// const button = new EventEmitter();

// // Подписываем слушатели к событию 'click'
// const removeHandleClick1 = button.addEventListener('click', () => console.log('called on click 1'));
// const removeHandleClick2 = button.addEventListener('click', () => console.log('called on click 2'));

// // Подписываем слушатель к событию 'hover'
// const removeHandleHover = button.addEventListener('hover', (payload) => console.log('called on hover', payload));

// // Оповещаем всех слушателей о наступлении события 'click'
// button.dispatchEvent('click'); // called on click 1, called on click 2

// // Оповещаем всех слушателей о наступлении события 'hover'
// button.dispatchEvent('hover', 1); // called on hover 1

// // Отписываем все слушатели
// removeHandleClick1();
// removeHandleClick2();
// removeHandleHover();

// // Пытаемся снова оповестить всех слушателей о наступлении событий 'click' и 'hover'
// button.dispatchEvent('click'); // Обработчики не вызвались
// button.dispatchEvent('hover'); // Обработчики не вызвались

const button = new EventEmitter();  /* инициализация по умолчанию */
const macroTaskButton = new EventEmitter(/* инициализация с оповещением через очередь макротаск */);
const microTaskButton = new EventEmitter(/* инициализация с оповещением через очередь микротаск */);

// Подписываем слушателей к событию 'click'
macroTaskButton.addEventListener('click', () => console.log('Один'));
microTaskButton.addEventListener('click', () => console.log('Два'));
button.addEventListener('click', () => console.log('Три'));

// Оповещаем слушателей о событии 'click'
macroTaskButton.dispatchEvent('click');
microTaskButton.dispatchEvent('click');
button.dispatchEvent('click');
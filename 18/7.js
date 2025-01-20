// strategy// micro macro

class EventEmitter {
    constructor(strategy = "sync") {
        this.strategy = strategy
        this.listeners = new Map()
    }

    addEventListener(event, listener) {
        if (!this.listeners.has(event))
            this.listeners.set(event, new Set())

        this.listeners.get(event).add(listener)

        return () => {
            this.listeners.get(event).delete(listener)
        }
    }

    once(event, listener) {
        const removeListener = this.addEventListener((event, listener))
        listener()
        removeListener()
        return removeListener
    }

    dispatchEvent(event, payload) {
        if (this.listeners.has(event)) {
            const listeners = this.listeners.get(event)

            if (this.strategy === "sync") {
                for (let listener of listeners) {
                    listener(payload)
                }
            }
            else if (this.strategy === "micro") {
                for (let listener of listeners) {
                    new Promise((resolve) => { resolve(listener) }).then((res) => res())
                }
            }
            else if (this.strategy === "macro") {
                for (let listener of listeners) {
                    setTimeout(() => listener(payload), 0)
                }
            }
        }
    }
}

const button = new EventEmitter("sync");  /* инициализация по умолчанию */
const macroTaskButton = new EventEmitter("macro");
const microTaskButton = new EventEmitter("micro");

// Подписываем слушателей к событию 'click'
macroTaskButton.addEventListener('click', () => console.log('Один'));
microTaskButton.addEventListener('click', () => console.log('Два'));
button.once('click', () => console.log('Три'));

// Оповещаем слушателей о событии 'click'
macroTaskButton.dispatchEvent('click');
microTaskButton.dispatchEvent('click');
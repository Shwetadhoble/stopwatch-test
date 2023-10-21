class Stopwatch {
    constructor() {
        this.display = document.getElementById('display');
        this.startButton = document.getElementById('start');
        this.stopButton = document.getElementById('stop');
        this.resetButton = document.getElementById('reset');

        this.intervalId = null;
        this.startTime = 0;
        this.running = false;

        this.startButton.addEventListener('click', () => this.start());
        this.stopButton.addEventListener('click', () => this.stop());
        this.resetButton.addEventListener('click', () => this.reset());
    }

    start() {
        if (!this.running) {
            this.startTime = Date.now() - (this.startTime ? this.startTime : 0);
            this.intervalId = setInterval(() => this.updateDisplay(), 10);
            this.running = true;
        }
    }

    stop() {
        clearInterval(this.intervalId);
        this.running = false;
    }

    reset() {
        this.stop();
        this.startTime = 0;
        this.updateDisplay();
    }

    updateDisplay() {
        const currentTime = Date.now() - this.startTime;
        const minutes = Math.floor(currentTime / 60000);
        const seconds = Math.floor((currentTime % 60000) / 1000);
        const milliseconds = currentTime % 1000;
        this.display.textContent = `${this.formatTime(minutes)}:${this.formatTime(seconds)}`;
    }

    formatTime(value) {
        return value < 10 ? `0${value}` : value.toString();
    }
}

const stopwatch = new Stopwatch();
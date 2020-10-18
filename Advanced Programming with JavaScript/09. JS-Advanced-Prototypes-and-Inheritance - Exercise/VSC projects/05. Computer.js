function solve() {

    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }
    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }
    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }
    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {

            if (new.target === Computer) {
                throw new Error();
            }

            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }
    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery; //receiver from the setter(instead of initializing a new property)
        }

        get battery() {

            return this._battery; //get the battery which we receive
        }

        set battery(battery) {

            if (battery.constructor.name != "Battery") {
                throw new TypeError();
            }

            this.battery = battery; //setting the baterry in order to not have the same property name twice
        }
    }
    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard() {

            return this._keyboard;
        }

        set keyboard(keyboard) {

            if (keyboard.constructor.name != "Keyboard") {

                throw new TypeError();
            }

            this._keyboard = keyboard;
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(monitor) {

            if (this.constructor.name != "Monitor") {
                throw new TypeError();
            }

            this._monitor = monitor;
        }
    }

    return {
        Keyboard,
        Monitor,
        Battery,
        Computer,
        Laptop,
        Desktop,
    };
}

let app = solve();
let keyboard = new app.Keyboard();
let monitor = new app.Monitor();
let battery = new app.Battery();
let computer = new app.Computer();
let laptop = new app.Laptop();
let desktop = new app.Desktop();
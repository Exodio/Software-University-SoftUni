function solve() {

    class Figure {

        constructor(units = "cm") {
            this.units = units;
        }

        changeUnits(units = "") {
            return this.units = units;
        }

        get area() {
            let unitProps = {
                m: 1000,
                cm: 10,
                mm: 1,
            };

            return Object.fromEntries(
                Object.entries({
                    width: this.width,
                    height: this.height,
                    radius: this.radius,
                })
                .filter(([key, value]) => value !== undefined)
                .map(([key, value]) => [
                    [key], (unitProps.cm * value) / unitProps[this.units]
                ]),
            )
        }
    }

    class Circle extends Figure {

        constructor(radius = 0, units) {
            super(units);
            this.radius = radius;
        }

        get area() {

            return (Math.PI * this.radius * this.radius);
        }

        toString() {
            let {
                radius
            } = super.area;

            return `Figures units: ${this.units} Area: ${this.area} - radius: ${radius}`;
        }
    }

    class Rectangle extends Figure {

        constructor(width = 0, height = 0, units) {
            super(units);
            this.width = width;
            this.height = height;
        }

        get area() {
            let {
                width,
                height
            } = super.area;

            return width * height;
        }

        toString() {
            let {
                width,
                height
            } = super.area;

            return `Figures units: ${this.units} Area: ${this.area} - width: ${width}, height: ${height}`;
        }
    }

    return {
        Figure,
        Rectangle,
        Circle,
    };
}

// let c = new Circle(5);
// console.log(c.area); // 78.53981633974483
// console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

// let r = new Rectangle(3, 4, 'mm');
// console.log(r.area); // 1200 
// console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

// r.changeUnits('cm');
// console.log(r.area); // 12
// console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

// c.changeUnits('mm');
// console.log(c.area); // 7853.981633974483
// console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50
function solve() {

    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this.ribbonColor = ribbonColor;
            this.ribbonLength = ribbonLength;
        }

        get ribbon() {

            return {
                color: this.ribbonColor,
                length: this.ribbonLength,
            };
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this.BirthdayBalloonText = text;
        }

        get text() {

            return this.BirthdayBalloonText;
        }

        set text(text) {

            return this.BirthdayBalloonText = text;
        }
    }

    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon,
    };
}

let app = solve();
let test = new app.PartyBalloon("Tumno-bqlo", 20.5, "Svetlo-cherno", 10.25);
console.log(test);
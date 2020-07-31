function TheIsleOfManTTRace(input) {

    for (let eachLine of input) {
        let regexPattern = /([#$%&*])(?<name>[A-Za-z]+)\1=(?<length>[0-9]+)!!(?<script>.+)/g;
        let validator = regexPattern.exec(eachLine);

        if (validator) {

            if (Number(validator[3]) === validator[4].length) {
                let newScriptArr = [];

                for (let eachSymbol of validator[4]) {
                    let element = eachSymbol.charCodeAt(0);
                    let newElement = element + Number(validator[3]);
                    let newSymbol = String.fromCharCode(newElement);
                    newScriptArr.push(newSymbol);
                }

                console.log(`Coordinates found! ${validator[2]} -> ${newScriptArr.join("")}`);
                break;

            } else {
                console.log('Nothing found!');
            }

        } else {
            console.log('Nothing found!');
        }
    }
}

solve([
    'Ian6Hutchinson=7!!\\(58ycb4',
    "#MikeHailwood#!!'gfzxgu6768=11",
    'slop%16!!plkdek/.8x11ddkc',
    '$Steve$=9Hhffjh',
    "*DavMolyneux*=15!!efgk#'_$&UYV%h%",
    'RichardQ^uayle=16!!fr5de5kd'
]);
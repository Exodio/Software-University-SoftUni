function solve(area, volume, input) {

    let parsedInput = JSON.parse(input);

    function calculation(object) {
        let areaObj = Math.abs(area.call(object));
        let volumeObj = Math.abs(volume.call(object));

        return {
            area: areaObj,
            volume: volumeObj,
        }
    }
    return parsedInput.map(calculation);
}

solve('[{"x":"10","y":"-22","z":"10"},{"x":"47","y":"7","z":"-5"},{"x":"55","y":"8","z":"0"},{"x":"100","y":"100","z":"100"},{"x":"55","y":"80","z":"250"}]');
// function attachEventsListeners() {

//     let daysElement = document.getElementById("days");
//     let daysButtonElement = document.getElementById("daysBtn");

//     let hoursElement = document.getElementById("hours");
//     let hoursButtonElement = document.getElementById("hoursBtn");

//     let minutesElement = document.getElementById("minutes");
//     let minutesButtonElement = document.getElementById("minutesBtn");

//     let secondsElement = document.getElementById("seconds");
//     let secondsButtonElement = document.getElementById("secondsBtn");

//     daysButtonElement.addEventListener("click", daysConverter);
//     hoursButtonElement.addEventListener("click", hoursConverter);
//     minutesButtonElement.addEventListener("click", minutesConverter);
//     secondsButtonElement.addEventListener("click", secondsConvertor);

//     function daysConverter() {
//         let daysNumberValue = daysElement.value;

//         hoursElement.value = daysNumberValue * 24;
//         minutesElement.value = daysNumberValue * 1440;
//         secondsElement.value = daysNumberValue * 86400;
//     }

//     function hoursConverter() {
//         let hoursNumberValue = hoursElement.value;

//         if (hoursNumberValue >= 24) {
//             daysElement.value = hoursNumberValue / 24;
//         }

//         minutesElement.value = hoursNumberValue* 60;
//         secondsElement.value = hoursNumberValue * 3600;
//     }

//     function minutesConverter() {
//         let minutesNumberValue = minutesElement.value;

//         if (minutesNumberValue >= 1400) {
//             daysElement.value = minutesNumberValue / 1400;
//         }

//         if (minutesNumberValue >= 60) {
//             hoursElement.value = minutesNumberValue / 60;
//         }

//         secondsElement.value = minutesNumberValue * 60;
//     }

//     function secondsConvertor() {
//         let secondsNumberValue = secondsElement.value;

//         if (secondsNumberValue >= 86400) {
//             daysElement.value = secondsNumberValue / 86400;
//         }

//         if (secondsNumberValue >= 3600) {
//             hoursElement.value = secondsNumberValue / 3600;
//         }

//         if (secondsNumberValue >= 60) {
//             minutesElement.value = secondsNumberValue / 60;
//         }
//     }
// }

function attachEventsListeners() {

    let daysElement = document.getElementById("days");
    let hoursElement = document.getElementById("hours");
    let minutesElement = document.getElementById("minutes");
    let secondsElement = document.getElementById("seconds");

    document.getElementById("daysBtn").addEventListener("click", () => {convertionHandler(Number(daysElement.value) * 86400)});
    document.getElementById("hoursBtn").addEventListener("click", () => {convertionHandler(Number(hoursElement.value) * 3600)});
    document.getElementById("minutesBtn").addEventListener("click", () => {convertionHandler(Number(minutesElement.value) * 60)});
    document.getElementById("secondsBtn").addEventListener("click", () => {convertionHandler(Number(secondsElement.value))});

    function convertionHandler(seconds) {   
        let days = seconds / (24 * 60 * 60);
        let hours = seconds / 60 (60 * 60);
        let minutes = seconds / 60;

        daysElement.value = days;
        hoursElement.value = hours;
        minutesElement.value = minutes;
        secondsElement.value = seconds;
    }  
}
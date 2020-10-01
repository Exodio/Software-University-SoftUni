function stopwatch() {

    let timeIndicatorElement = document.getElementById("time");
    let startButtonElement = document.getElementById("startBtn");
    let stopButtonElement = document.getElementById("stopBtn");

    startButtonElement.addEventListener("click", (setter));
    stopButtonElement.addEventListener("click", (stopper));

    let intervalStatus = 0;
    let timer = 0;

    function setter() {
        timeIndicatorElement.textContent = "00:00";

        intervalStatus = setInterval(() => {
            timer++;

            let mins = Math.floor(timer / 60);
            let secs = timer % 60;

            timeIndicatorElement.textContent = `${mins < 10 ? `0${mins}` : mins}:${secs < 10 ? `0${secs}` : secs}`;
        }, 1000);

        stopButtonElement.disabled = false;
        startButtonElement.disabled = true;
    };

    function stopper() {
        clearInterval(intervalStatus);
        timer = 0;

        stopButtonElement.disabled = true;
        startButtonElement.disabled = false;
    }
}
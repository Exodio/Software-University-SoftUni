function notify(message) {

    let notificationElement = document.getElementById("notification");
    notificationElement.textContent = message;
    notificationElement.style.display = "block";

    setTimeout(notificationFunction, 2000);

    function notificationFunction() {
        notificationElement.style.display = "none";
    }
}
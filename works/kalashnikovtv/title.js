if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 600);

}

var x = 0;

var titleText = [ "K", "Ka", "Kal", "Kala", "Kalas", "Kalash", "Kalashn", "Kalashni", "Kalashnik", "Kalashniko", "Kalashnikov", "KalashnikovT", "KalashnikovTV", "KalashnikovT", "Kalashnikov", "Kalashniko", "Kalashnik", "Kalashni", "Kalashn", "Kalash", "Kalas", "Kala", "Kal", "Ka", "K"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}

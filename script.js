window.onload = function () {

var sekunder = 00;
var tiendel = 00;
var appendSekunder = document.getElementById("sekunder");
var appendTiendel = document.getElementById("tiendel");
var knappStart = document.getElementById("start");
var knappStopp = document.getElementById("stopp");
var knappResett = document.getElementById("resett");
var interval;

knappStart.onclick = function() {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
}

knappStopp.onclick = function() {
    clearInterval(interval);
}

knappResett.onclick = function() {
    clearInterval(interval);
    tiendel = "00";
    sekunder = "00";
    appendTiendel.innerHTML = tiendel;
    appendSekunder.innerHTML = sekunder;
}

function startTimer() {
    tiendel++;

    if(tiendel <= 9) {
        appendTiendel.innerHTML = "0" + tiendel;
    }

    if(tiendel > 9) {
        appendTiendel.innerHTML = tiendel;
    }

    if(tiendel > 99 ) {
        console.log("sekunder");
        sekunder++;
        appendSekunder.innerHTML = "0" + sekunder;
        tiendel = 0;
        appendTiendel.innerHTML = "0" + 0;
    }

    if(sekunder > 9) {
        appendSekunder.innerHTML = seconds;
    }
}

}

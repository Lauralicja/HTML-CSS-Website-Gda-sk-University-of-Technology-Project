function czas() {
    var teraz = new Date();

    var rok = teraz.getFullYear();
    var miesiac = teraz.getMonth() + 1;
    var dzien = teraz.getDate();
    var godzina = teraz.getHours();
    var minuta = teraz.getMinutes();
    var sekunda = teraz.getSeconds();

    if (minuta < 10)
        minuta = "0" + minuta;

    if (sekunda < 10)
        sekunda = "0" + sekunda;

    document.getElementById("footer").innerHTML =
   dzien + "." + miesiac + "." + rok + " || " + godzina + ":" + minuta + ":" + sekunda;

    setTimeout("czas()", 1000);
}

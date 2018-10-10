function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (sessionStorage.clickcount) {
            sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
        } else {
            sessionStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "Zastosowano ten przycisk " + sessionStorage.clickcount + " razy podczas tej sesji.";
    } else {
        document.getElementById("result").innerHTML = "Twoja przegl¹darka nie pozwala na przechowywanie zawartoœci typu storage.";
    }
}




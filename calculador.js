// Creo e inicilizo variables.
let numberInDisplay = "0";
let displayConNumber = "si";
let userPoint = "no";
let numberOnHold = 0;
let pendingOperation = "";
let solution = "";
//Logica de las funciones por medio de sentencias if else.
function ingresanumero(x) {
    if (x != ".") {
        if (numberInDisplay == "0" || displayConNumber == "si") {
            document.calculador.textoNumeros.value = x;
            numberInDisplay = x; 
        }
        else if (x != ".") {
            document.calculador.textoNumeros.value += x;
            numberInDisplay += x;

        }
    }
    if (x == "." && userPoint == "no" && numberInDisplay == "0") {
        document.calculador.textoNumeros.value = "0."
        numberInDisplay = x;
        userPoint = "si";
    }
    else if (x == ".") {
        document.calculador.textoNumeros.value += x
        numberInDisplay += x;
        userPoint = "si";
    }
    else if (x == "." && userPoint == "si") {

    }
    displayConNumber = "no;"
}
function ingresaoperacion(y) {
    if (pendingOperation == "") {
        numberOnHold = document.calculador.textoNumeros.value;
        document.calculador.textoNumeros.value += y
        pendingOperation = y;
        displayConNumber = "no"
        numberInDisplay = "";
        userPoint = "no";
    }
}

function igual() {
    if (pendingOperation != "") {
        solution = numberOnHold + pendingOperation + numberInDisplay;
        document.calculador.textoNumeros.value = eval(solution);
        numberInDisplay = eval(solution);
        displayConNumber = "si";
        pendingOperation = "";
        userPoint = "no";
    }
}

function raiz() {
    if (pendingOperation == "") {
        document.calculador.textoNumeros.value = Math.sqrt(numberInDisplay);
        displayConNumber = "si";
        pendingOperation = "";
        userPoint = "no";
    }
}

function limpiar() {
    numberInDisplay = "0";
    displayConNumber = "si";
    userPoint = "no";
    numberOnHold = 0;
    pendingOperation = "";
    solution = "";
    document.calculador.textoNumeros.value = "0";
}


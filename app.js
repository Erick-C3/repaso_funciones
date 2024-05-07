const leer = require("prompt-sync")();



/**
 * Pide un numero mediante la terminal
 * @returns el numero ingresado
 */
function pedirNumero() {
    console.log("---Funcion pedirNumero en uso---");
    let numeroIngresado = 0;
    console.log("Ingresa un numero");
    numeroIngresado = Number(leer());
    console.log("---Funcion pedirNumero uso terminado---");
    return numeroIngresado;
}

/**
 * Muestra un numero en la terminal
 * @param {Number} numero a mostrar
 */
function mostrarEnTerminal(numero) {
    console.log("---Funcion mostrarEnTerminal en uso---");
    console.log("Ingresate", numero);
    console.log("---Funcion mostrarEnTerminal uso terminado---");
}

/**
 * Duplica el numero recibido
 * @param {Number} numero a duplicar
 * @returns el numero duplicado
 */
function duplicarUn(numero) {
    console.log("---Funcion duplicarUn en uso---");
    let numeroDuplicado = numero *2;
    console.log("---Funcion duplicarUn uso terminado---");
    return numeroDuplicado;
}


function main() {
    console.log("---Funcion main en uso---");
    /* mostrarEnTerminal( pedirNumero() );
    mostrarEnTerminal( pedirNumero() ); */
    let numeroIngresado = pedirNumero();
    let numeroDuplicado = duplicarUn(numeroIngresado);
    mostrarEnTerminal( numeroDuplicado );
    /* mostrarEnTerminal( duplicarUn( pedirNumero() ) ); */

    console.log("---Funcion main uso terminado---");
}






main();
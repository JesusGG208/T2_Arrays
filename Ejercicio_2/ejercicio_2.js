let arrayBooleano = ["Verdadero", "Falso"];

let numero = prompt("Introduce un número del 0 al 9");

function numUnDigito (num) {
    if (num === null || num === "") {
        alert(arrayBooleano[1]);
    } else if (num >= 0 && num <= 9) {
        alert(arrayBooleano[0]);
    } else {
        alert(arrayBooleano[1]);
    }
}

numUnDigito(numero);


let listaNum = [5,12,10,4,5];

function sumaLista(lista) {
    let suma = 0;
    for (let i=0; !(lista[i] === undefined); i++) {
        suma += lista[i];
    }
    return suma;
}

console.log("La suma de los números es " + sumaLista(listaNum) + ".");
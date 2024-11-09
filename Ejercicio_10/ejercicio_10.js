function precio(producto) {
    let listaPrecios = [
        ['monitor', 200],
        ['teclado', 20],
        ['ratón', 10]
    ];

    for (let i = 0; i < listaPrecios.length; i++) {
        if (listaPrecios[i][0] === producto) { 
            return listaPrecios[i][1]; 
        }
    }

    return "No está en los precios";
}

console.log(precio('monitor')); 
console.log(precio('teclado')); 
console.log(precio('ratón'));   
console.log(precio('altavoz')); // Este no está en los precios
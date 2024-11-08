function existeEn(letra, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === letra) {
            return true; 
        }
    }
    
    return false;
}

// Ejemplos de uso
console.log(existeEn('a', ['w', 'e', 'r', 'i']));
console.log(existeEn('e', ['w', 'e', 'r', 'i']));
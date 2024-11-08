function esVocal(letra) {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    letra = letra.toLowerCase();

    for (let i = 0; i < vocales.length; i++) {
        if (letra === vocales[i]) { 
            return true; 
        }
    }

    return false;
}

console.log(esVocal('A'));
console.log(esVocal('z')); 
console.log(esVocal('e'));
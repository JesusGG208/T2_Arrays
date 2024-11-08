function min(arr, tipo) {
    let minValue = arr[0];
    let minIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) { 
            minValue = arr[i];
            minIndex = i;
        }
    }

    return tipo === 'v' ? minValue : minIndex;
}

console.log(min([7, 5, 7, 6], 'v'));
console.log(min([3, 5, 7, 3], 'i'));
function listar(arr) {
    let resultado = "";

    for (let i = 0; i < arr.length; i++) {
        resultado += arr[i];

        if (i < arr.length - 1) {
            resultado += "-";
        }
    }

    return resultado;
}

console.log(listar(["rojo", "verde", "azul"]));
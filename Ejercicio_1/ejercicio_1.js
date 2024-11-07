let diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

let esValido = true
while (esValido) {

    let dia = prompt("Introduce un número del 0 al 6: ");

    if (dia < 0 || dia > 6) {
        console.log("El número introducido es incorrecto")
    } else {
        console.log(diasSemana[dia])
        esValido = false
    }
}
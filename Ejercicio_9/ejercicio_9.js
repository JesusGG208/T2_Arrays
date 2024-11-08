function servicio(dia) {
    let turnos = [
        ['lunes', 'María'],
        ['martes', 'Luis'],
        ['miércoles', 'Antonia'],
        ['jueves', 'Pedro'],
        ['viernes', 'Marisa']
    ];

    dia = dia.toLowerCase();

    for (let i = 0; i < turnos.length; i++) {
        if (turnos[i][0] === dia) { 
            return "Este día se encarga " + turnos[i][1];
        }
    }

    return "No hay servicio este día";
}

console.log(servicio('Lunes'));
console.log(servicio('Miércoles'));
console.log(servicio('Domingo'));
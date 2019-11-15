export const clientesTipicos = [
    { tipoCliente: "Una persona", cantidad: 13.33 }, // cantidad=2
    { tipoCliente: "Dos personas / Pareja", cantidad: 0 }, //cantidad=0
    { tipoCliente: "Tres personas", cantidad: 13.33 }, //cantidad=2
    { tipoCliente: "Cuatro personas", cantidad: 26.67 }, //cantidad=4
    { tipoCliente: "Grupo", cantidad: 0 }, //cantidad=0
    { tipoCliente: "Familia niños", cantidad: 26.67 }, //cantidad=4
    { tipoCliente: "Familia adolescentes", cantidad: 13.33 }, //cantidad=2
    { tipoCliente: "Familia adultos", cantidad: 6.67 } //cantidad=1 total= 15
];

export var clienteMasAsiste = (data) => {
    let clienteMasFrecuente = data[0].cantidad;
    let nombreClienteMasFrecuente = data[0].tipoCliente;
    for (let i = 1; i < data.length; i++) {
        if (data[i].cantidad >= clienteMasFrecuente) {
            clienteMasFrecuente = data[i].cantidad;
            nombreClienteMasFrecuente = data[i].tipoCliente;
        }
    }
    return nombreClienteMasFrecuente;
}

export var clienteMenosAsiste = (data) => {
    let clienteMenosFrecuente = data[0].cantidad;
    let nombreClienteMenosFrecuente = data[0].tipoCliente;
    for (let i = 1; i < data.length; i++) {
        if (data[i].cantidad <= clienteMenosFrecuente) {
            clienteMenosFrecuente = data[i].cantidad;
            nombreClienteMenosFrecuente = data[i].tipoCliente;
        }
    }
    return nombreClienteMenosFrecuente;
}
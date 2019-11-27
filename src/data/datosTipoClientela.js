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

export var generarTipoCliente = (data) => {
    var arr = [];
    for (let h = 0; h < data.length; h++) {
        arr.push(data[h].Descripcion);
    }
    return arr;
}

export var generarFrecuenciaCliente = (data, length) => {
    let temp = 0;
    let arr = [];

    for (let a = 0; a < length; a++) {
        arr[a] = 0.0;
    }

    for (let i = 0; i < data.length; i++) {
        temp = arr[(data[i].Id_Cliente) - 1];
        if (temp !== undefined) {
            arr[(data[i].Id_Cliente - 1)] = temp + 1;
        }
        else {
            arr.splice(data[i].Id_Cliente, (data[i].Id_Cliente - 1), 0.0);
        }
    }
    return arr;
}

export var frecuenciaTotalClientes = (arr) => {
    let frecuanciaClientela = 0;
    for (let j = 0; j < arr.length; j++) {
        frecuanciaClientela += arr[j];
    }
    return frecuanciaClientela;
}

export var frecuenciaClientePorcentaje = (arr, frecuenciaClientela) => {
    let temp = 0;
    for (let k = 0; k < arr.length; k++) {
        temp = ((arr[k] * 100) / frecuenciaClientela);
        arr[k] = temp;
    }
    return arr;
}

export var construirDataSetCliente = (arr1, arr2) => {
    let arrResultante = [];
    for (let i = 0; i < arr1.length; i++) {
        var json = { "tipoCliente": arr1[i], "cantidad": arr2[i] };
        arrResultante.push(json);
    }
    return arrResultante;
}

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

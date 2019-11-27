/*
Ejemplo de como necesito los datos para DonutChart.
Los datos los obtienes de catalogo.js campo Nombre accedes a el por medio del id o como gustes.
El dato de cantidad los obtuve de requisicion.js campo Cantidad donde usas el id del producto del catálogo para acceder a él.
*/
export const productoCantidad = [
    // Formato { tipo : NombreProductoCatalogo, cantidad:TotalVendidoDeEseProducto}
    { tipo: "Refresco", cantidad: 1.39 }, // id=1 valor=1
    { tipo: "Agua Fresca", cantidad: 12.5 }, // id=2 valor=9
    { tipo: "Cerveza", cantidad: 6.94 }, // id=3 valor=5
    { tipo: "Orden Tacos de Pastor", cantidad: 22.22 }, // id=4 valor=16
    { tipo: "Orden Tacos de Bistec", cantidad: 0 }, // id=5 valor=0
    { tipo: "Orden de Alambre", cantidad: 12.5 }, // id=6 valor=9
    { tipo: "Taco Pastor", cantidad: 11.11 }, // id=7 valor=8
    { tipo: "Taco de Bistec", cantidad: 12.5 }, // id=8 valor=9
    { tipo: "Quesadilla", cantidad: 13.89 }, // id=9 valor=10
    { tipo: "Queso Fundido", cantidad: 6.95 } // id=10 total = 72 valor=5
];

export var generarNombresProducto = (data) => {
    var arr = [];
    for (let h = 0; h < data.length; h++) {
        arr.push(data[h].Nombre);
    }
    return arr;
}

export var generarVentasProductos = (data, length) => {
    let temp = 0;
    let arr = [];

    for (let a = 0; a < length; a++) {
        arr[a] = 0.0;
    }

    for (let i = 0; i < data.length; i++) {
        temp = arr[(data[i].Id_Catalogo) - 1];
        if (temp !== undefined) {
            arr[(data[i].Id_Catalogo) - 1] = temp + data[i].Cantidad;
        }
        else {
            arr.splice(data[i].Id_Catalogo, (data[i].Id_Catalogo - 1), 0.0);
        }
    }
    return arr;
}

export var totalGenerado = (arr) => {
    let totalGenerado = 0;
    for (let j = 0; j < arr.length; j++) {
        totalGenerado += arr[j];
    }
    return totalGenerado;
}

export var ingresoPorcentaje = (arr, totalGenerado) => {
    let temp = 0;
    for (let k = 0; k < arr.length; k++) {
        temp = ((arr[k] * 100) / totalGenerado);
        arr[k] = temp;
    }
    return arr;
}

export var construirDataSetProducto = (arr1, arr2) => {
    let arrResultante = [];
    for (let i = 0; i < arr1.length; i++) {
        var json = { "tipo": arr1[i], "cantidad": arr2[i] };
        arrResultante.push(json);
    }
    return arrResultante;
}

export var productoMasVendido = (data) => {
    let maximoVentas = data[0].cantidad;
    let nombreProducto = data[0].tipo;
    for (let i = 1; i < data.length; i++) {
        if (data[i].cantidad >= maximoVentas) {
            maximoVentas = data[i].cantidad;
            nombreProducto = data[i].tipo;
        }
    }
    return nombreProducto;
}

export var productoMenosVendido = (data) => {
    let ventasMenores = data[0].cantidad;
    let nombreProducto = data[0].tipo;
    for (let i = 1; i < data.length; i++) {
        if (data[i].cantidad <= ventasMenores) {
            ventasMenores = data[i].cantidad;
            nombreProducto = data[i].tipo;
        }
    }
    return nombreProducto;
}

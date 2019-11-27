export const empleadoTotalVentas = [
    { nombre: "Hugo", ventas: 20 }, //id=1 count=3
    { nombre: "Francisco", ventas: 20 }, //id=2 count=3
    { nombre: "Luis", ventas: 6.67 }, //id=3 count=1
    { nombre: "Mary", ventas: 26.67 }, //id=4 count=4
    { nombre: "Julia", ventas: 13.33 }, //id=5 count=2
    { nombre: "Elizabeth", ventas: 13.33 }, //id=6 count=2 total= 15
]

export var generarNombresEmpleado = (data) => {
    var arr = [];
    for (let h = 0; h < data.length; h++) {
        arr.push(data[h].Nombre);
    }
    return arr;
}

export var generarEmpleadoVentas = (data, length) => {
    let temp = 0;
    let arr = [];

    for (let a = 0; a < length; a++) {
        arr[a] = 0.0;
    }

    for (let i = 0; i < data.length; i++) {
        temp = arr[(data[i].Id_Vendedor) - 1];
        if (temp !== undefined) {
            arr[(data[i].Id_Vendedor) - 1] = temp + 1;
        }
        else {
            arr.splice(data[i].Id_Vendedor, (data[i].Id_Vendedor - 1), 0.0);
        }
    }
    return arr;
}

export var totalVentasEmpleados = (arr) => {
    let totalVentas = 0;
    for (let j = 0; j < arr.length; j++) {
        totalVentas += arr[j];
    }
    return totalVentas;
}

export var ventasEmpleadoPorcentaje = (arr, totalVentas) => {
    let temp = 0;
    for (let k = 0; k < arr.length; k++) {
        temp = ((arr[k] * 100) / totalVentas);
        arr[k] = temp;
    }
    return arr;
}

export var construirDataSetEmpleado = (arr1, arr2) => {
    let arrResultante = [];
    for (let i = 0; i < arr1.length; i++) {
        var json = { "nombre": arr1[i], "ventas": arr2[i] };
        arrResultante.push(json);
    }
    return arrResultante;
}

export var empleadoMasVentas = (data) => {
    let maximoVentasEmpleado = data[0].ventas;
    let nombreEmpleado = data[0].nombre;
    for (let i = 1; i < data.length; i++) {
        if (data[i].ventas >= maximoVentasEmpleado) {
            maximoVentasEmpleado = data[i].ventas;
            nombreEmpleado = data[i].nombre;
        }
    }
    return nombreEmpleado;
}

export var empleadoMenosVentas = (data) => {
    let ventasMenoresEmpleado = data[0].ventas;
    let nombreEmpleado = data[0].nombre;
    for (let i = 1; i < data.length; i++) {
        if (data[i].ventas <= ventasMenoresEmpleado) {
            ventasMenoresEmpleado = data[i].ventas;
            nombreEmpleado = data[i].nombre;
        }
    }
    return nombreEmpleado;
}

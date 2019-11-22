export const datosSucursalDineroGenerado = [
    { sucursal: "Roma", dineroGenerado: 24.72, cantidad: 2385 }, //id=1 dineroGenerado=2385
    { sucursal: "Condesa", dineroGenerado: 16.11 }, //id=2 dineroGenerado=1555
    { sucursal: "Del Valle", dineroGenerado: 11.40 }, //id=3 dineroGenerado=1100
    { sucursal: "Polanco", dineroGenerado: 47.77 }, //id=4 dineroGenerado=4610 total=9650
];

export var generarNombresSucursales = (data) => {
    var arr = [];
    for (let h = 0; h < data.length; h++) {
        arr.push(data[h].Sucursal);
    }
    return arr;
}

export var generarVentasSucursales = (data, length) => {
    let temp = 0;
    let arr = [];

    for (let a = 0; a < length; a++) {
        arr[a] = 0.0;
    }

    for (let i = 0; i < data.length; i++) {
        temp = arr[(data[i].Id_Sucursal) - 1];
        if (temp !== undefined) {
            arr[(data[i].Id_Sucursal) - 1] = temp + data[i].Total_Liquidacion;
        }
        else {
            arr.splice(data[i].Id_Sucursal, (data[i].Id_Sucursal - 1), 0.0);
        }
    }
    console.log(arr);
    return arr;
}

export var totalIngresosSucursales = (arr) => {
    let totalIngresos = 0;
    for (let j = 0; j < arr.length; j++) {
        totalIngresos += arr[j];
    }
    console.log(totalIngresos);
    return totalIngresos;
}

export var ingresoSucursalPorcentaje = (arr, totalIngresosSucursales) => {
    let temp = 0;
    for (let k = 0; k < arr.length; k++) {
        temp = ((arr[k] * 100) / totalIngresosSucursales);
        arr[k] = temp;
    }
    console.log(arr);
    return arr;
}

export var construirDataSetSucursal = (arr1, arr2) => {
    let arrResultante = [];
    for (let i = 0; i < arr1.length; i++) {
        var json = { "sucursal": arr1[i], "dineroGenerado": arr2[i] };
        arrResultante.push(json);
    }
    console.log(arrResultante);
    return arrResultante;
}

export var sucursalMasVentas = (data) => {
    let maximoVentasSucursal = data[0].dineroGenerado;
    let nombreSucursal = data[0].sucursal;
    for (let i = 1; i < data.length; i++) {
        if (data[i].dineroGenerado >= maximoVentasSucursal) {
            maximoVentasSucursal = data[i].dineroGenerado;
            nombreSucursal = data[i].sucursal;
        }
    }
    return nombreSucursal;
}

export var sucursalMenosVentas = (data) => {
    let ventasMenoresSucursal = data[0].dineroGenerado;
    let nombreSucursal = data[0].sucursal;
    for (let i = 1; i < data.length; i++) {
        if (data[i].dineroGenerado <= ventasMenoresSucursal) {
            ventasMenoresSucursal = data[i].dineroGenerado;
            nombreSucursal = data[i].sucursal;
        }
    }
    return nombreSucursal;
}
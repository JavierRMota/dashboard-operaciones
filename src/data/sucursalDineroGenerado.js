export const datosSucursalDineroGenerado = [
    { sucursal: "Roma", dineroGenerado: 24.72, cantidad: 2385 }, //id=1 dineroGenerado=2385
    { sucursal: "Condesa", dineroGenerado: 16.11 }, //id=2 dineroGenerado=1555
    { sucursal: "Del Valle", dineroGenerado: 11.40 }, //id=3 dineroGenerado=1100
    { sucursal: "Polanco", dineroGenerado: 47.77 }, //id=4 dineroGenerado=4610 total=9650
];

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
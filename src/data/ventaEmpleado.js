export const empleadoTotalVentas = [
    { nombre: "Hugo", ventas: 20 }, //id=1 count=3
    { nombre: "Francisco", ventas: 20 }, //id=2 count=3
    { nombre: "Luis", ventas: 6.67 }, //id=3 count=1
    { nombre: "Mary", ventas: 26.67 }, //id=4 count=4
    { nombre: "Julia", ventas: 13.33 }, //id=5 count=2
    { nombre: "Elizabeth", ventas: 13.33 }, //id=6 count=2 total= 15 
]

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
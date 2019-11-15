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
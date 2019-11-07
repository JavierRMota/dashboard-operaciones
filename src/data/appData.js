export const donutChartData = [
  { tipo: 'Beverages', cantidad: 16.5 },
  { tipo: 'Condiments', cantidad: 24 },
  { tipo: 'Produce', cantidad: 13 },
  { tipo: 'Meat/Poultry', cantidad: 16.5 },
  { tipo: 'Seafood', cantidad: 20 },
  { tipo: 'Other', cantidad: 10 },
];
export const barChartQ4Months = ['October', 'November', 'December'];
export const barChartMonthlyPercentages = [
  { name: 'Beverages', data: [14, 16, 19.5] },
  { name: 'Condiments', data: [24, 23.5, 24.5] },
  { name: 'Produce', data: [12.5, 12.5, 14] },
  { name: 'Meat/Poultry', data: [16, 18, 17] },
  { name: 'Seafood', data: [21.5, 20, 17] },
  { name: 'Other', data: [7, 12, 11] },
];

export const donutChartProductsData = [
  { tipo: 'Coca-Cola', cantidad: 14 },
  { tipo: 'Nestea', cantidad: 11 },
  { tipo: 'Powerade', cantidad: 73 },
  { tipo: 'Sabritas', cantidad: 2 },
];
export const barChartVentas = ['Ventas Esperadas', 'Ventas Reales'];
export const barCharVentasProductos = [
  { name: 'Coca-Cola', data: [100000, 75000] },
  { name: 'Nestea', data: [350000, 315000] },
  { name: 'Powerade', data: [150000, 180000] },
  { name: 'Sabritas', data: [23000, 10000] },
];

//Datos dummies
export var companies = [
  { id: 0, name: 'FEMSA' },
  { id: 1, name: 'FACEBOOK' },
  { id: 2, name: 'PEPSICO' },
  { id: 3, name: 'MICROSOFT' },
];

export var expenses = [
  { date: 1571332800, name: 'FEMSA', amount: 10000.00, category: 'SALARIOS' },
  { date: 1571332801, name: 'FEMSA', amount: 20000.00, category: 'RENTAS' },
  { date: 1571332802, name: 'FEMSA', amount: 5000.00, category: 'GASOLINA' },
  { date: 1571332803, name: 'FEMSA', amount: 2000.00, category: 'PAPELERIA' },
  { date: 1571332804, name: 'FEMSA', amount: 4000.00, category: 'REPARACIONES' },
];

export var incomes = [
  { date: 1571332800, name: 'FEMSA', amount: 10000.00, category: 'COCACOLA' },
  { date: 1571332801, name: 'FEMSA', amount: 20000.00, category: 'FANTA' },
  { date: 1571332802, name: 'FEMSA', amount: 5000.00, category: 'SPRITE' },
  { date: 1571332803, name: 'FEMSA', amount: 2000.00, category: 'CINEPOLIS' },
  { date: 1571332804, name: 'FEMSA', amount: 4000.00, category: 'INVERSIONES' },
];

export var goals = [
  { date: 1572566400, amount: 100000.00, category: 'VENTAS' },
  { date: 1572566400, amount: 50000.00, category: 'GASTO' },
  { date: 1575158400, amount: 100000.00, category: 'VENTAS' },
  { date: 1575158400, amount: 50000.00, category: 'GASTO' },
];
export var report = {
  gauges: [
    { title: 'VENTAS', value: 68000, subtitle1: 'Ventas actuales acumuladas',
      plan: 100000, subtitle2: 'Plan de ventas',
      objective: 340000, subtitle3: 'Diferencia de ventas',
      subtitle4: 'Objetivo anual de ventas', },
    { title: 'GASTOS', value: 8000, subtitle1: 'Gastos actuales acumulados',
      plan: 10000, subtitle2: 'Plan de gastos',
      objective: 20000, subtitle3: 'Diferencia de gastos',
      subtitle4: 'Objetivo anual de gastos', },
    { title: 'MARGEN', value: 60000, subtitle1: 'Margen actual acumulado',
      plan: 90000, subtitle2: 'Plan de margen',
      objective: 320000, subtitle3: 'Diferencia de margen',
      subtitle4: 'Objetivo anual de margen', },
  ],
};
export const currency = value => '$' + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

// JSON Provisionales
export var Sucursales = [
  {
      Id_Sucursal: 1,
      Sucursal: "Roma",
      Direccion: "Av. Álvaro Obregon 90, Roma Nte., 06700 Ciudad de México, CDMX"
  },
  {
      Id_Sucursal: 2,
      Sucursal: "Condesa",
      Direccion: "Fernando Montes de Oca 22, Colonia Condesa, 06140 Ciudad de México, CDMX"
  },
  {
      Id_Sucursal: 3,
      Sucursal: "Del Valle",
      Direccion: "Calle Concepcion Beistegui 721, Col del Valle Centro, 03100 Ciudad de México, CDMX"
  },
  {
      Id_Sucursal: 4,
      Sucursal: "Polanco",
      Direccion: "A. Musset 3, Polanco, Polanco III Secc, 11550 Ciudad de México, CDMX"
  }
];

export var Vendedor = [
  {
      Id_Vendedor: 1,
      Nombre: "Hugo",
      Genero: "Masculino",
      Edad: 29,
      Antiguedad: 6,
      FechaDeNacimiento: "1/1/90",
      FechaDeIngreso: "1/1/13",
  },
  {
      Id_Vendedor: 2,
      Nombre: "Francisco",
      Genero: "Masculino",
      Edad: 27,
      Antiguedad: 5,
      FechaDeNacimiento: "1/1/92",
      FechaDeIngreso: "1/1/14"
  },
  {
      Id_Vendedor: 3,
      Nombre: "Luis",
      Genero: "Masculino",
      Edad: 25,
      Antiguedad: 4,
      FechaDeNacimiento: "1/1/94",
      FechaDeIngreso: "1/1/15"
  },
  {
      Id_Vendedor: 4,
      Nombre: "Mary",
      Genero: "Femenino",
      Edad: 23 ,
      Antiguedad: 3,
      FechaDeNacimiento: "1/1/96",
      FechaDeIngreso: "1/1/16"
  },
  {
      Id_Vendedor: 5,
      Nombre: "Julia",
      Genero: "Femenino",
      Edad: 21,
      Antiguedad: 2,
      FechaDeNacimiento: "1/1/98",
      FechaDeIngreso: "1/1/17"
  },
  {
      Id_Vendedor: 6,
      Nombre: "Elizabeth",
      Genero: "Femenino",
      Edad: 19 ,
      Antiguedad: 1 ,
      FechaDeNacimiento: "1/1/00",
      FechaDeIngreso: "1/1/18"
  }
];

export var Catalogo = [
  {
    Id_Catalogo: 1,
    Nombre: "Refresco",
    Precio: 25.00,
  },
  {
      Id_Catalogo: 2,
      Nombre: "Agua Fresca",
      Precio: 30.00, 
  },
  {
      Id_Catalogo: 3,
      Nombre: "Cerveza",
      Precio: 35.00,
  },
  {
      Id_Catalogo: 4,
      Nombre: "Orden Tacos de Pastor",
      Precio: 40.00,
  },
  {
      Id_Catalogo: 5,
      Nombre: "Orden Tacos de Bistec",
      Precio: 50.00,
  },
  {
      Id_Catalogo: 6,
      Nombre: "Orden de Alambre",
      Precio: 60.00,
  },
  {
      Id_Catalogo: 7,
      Nombre: "Taco Pastor",
      Precio: 25.00,
  },
  {
      Id_Catalogo: "8",
      Nombre: "Taco de Bistec",
      Precio: " $30.00 "
  },
  {
      Id_Catalogo: "9",
      Nombre: "Quesadilla",
      Precio: " $35.00 "
  },
  {
      Id_Catalog: "10",
      Nombre: "Queso Fundido",
      Precio: " $55.00 "
  }
];

export var Clientes = [
  {
      Id_Cliente: 1,
      Descripcion: "Una Persona"
  },
  {
      Id_Cliente: 2,
      Descripcion: "Dos Personas / Pareja"
  },
  {
      Id_Cliente: 3,
      Descripcion: "Tres Personas"
  },
  {
      Id_Cliente: 4,
      Descripcion: "Cuatro Personas"
  },
  {
      Id_Cliente: 5,
      Descripcion: "Grupo"
  },
  {
      Id_Cliente: 6,
      Descripcion: "Familia Niños"
  },
  {
      Id_Cliente: 7,
      Descripcion: "Familia Adolescentes"
  },
  {
      Id_Cliente: 8,
      Descripcion: "Familia Adultos"
  }
];

export var Requisicion = [
  {
      Id_Requisicion: 1,
      Id_Sucursal: 2,
      Id_Vendedor: 2,
      Id_Catalogo: 3,
      Cantidad: 5,
      Fecha_Requisicion: "10/11/19 18:01",
      Fecha_Entrega: "10/11/19 18:04",
      Total: 175
  },
  {
      Id_Requisicion: 1,
      Id_Sucursal: 2,
      Id_Vendedor: 2,
      Id_Catalogo: 10,
      Cantidad: 5,
      Fecha_Requisicion: "10/11/19 18:06",
      Fecha_Entrega: "10/11/19 18:11",
      Total: 275
  },
  {
      Id_Requisicion: 2,
      Id_Sucursal: 2,
      Id_Vendedor: 6,
      Id_Catalogo: 4,
      Cantidad: 4,
      Fecha_Requisicion: "10/26/19 19:09",
      Fecha_Entrega: "10/26/19 19:14",
      Total: 160
  },
  {
      Id_Requisicion: 2,
      Id_Sucursal: 2,
      Id_Vendedor: 6,
      Id_Catalogo: 2,
      Cantidad: 5,
      Fecha_Requisicion: "10/26/19 19:14",
      Fecha_Entrega: "10/26/19 19:18",
      Total: 150
  },
  {
      Id_Requisicion: 2,
      Id_Sucursal: 2,
      Id_Vendedor: 6,
      Id_Catalogo: 1,
      Cantidad: 3,
      Fecha_Requisicion: "10/26/19 19:16",
      Fecha_Entrega: "10/26/19 19:17",
      Total: 75
  },
  {
      Id_Requisicion: 3,
      Id_Sucursal: 1,
      Id_Vendedor: 4,
      Id_Catalogo: 9,
      Cantidad: 5,
      Fecha_Requisicion: "8/15/19 17:10",
      Fecha_Entrega: "8/15/19 17:15",
      Total: 175
  },
  {
      Id_Requisicion: 3,
      Id_Sucursal: 1,
      Id_Vendedor: 4,
      Id_Catalogo: 4,
      Cantidad: 7,
      Fecha_Requisicion: "8/15/19 17:15",
      Fecha_Entrega: "8/15/19 17:20",
      Total: 280
  },
  {
      Id_Requisicion: 3,
      Id_Sucursal: 1,
      Id_Vendedor: 4,
      Id_Catalogo: 7,
      Cantidad: 3,
      Fecha_Requisicion: "8/15/19 17:16",
      Fecha_Entrega: "8/15/19 17:21",
      Total: 75
  },
  {
      Id_Requisicion: 3,
      Id_Sucursal: 1,
      Id_Vendedor: 4,
      Id_Catalogo: 6,
      Cantidad: 3,
      Fecha_Requisicion: "8/15/19 17:17",
      Fecha_Entrega: "8/15/19 17:19",
      Total: 180
  },
  {
      Id_Requisicion: 4,
      Id_Sucursal: 4,
      Id_Vendedor: 3,
      Id_Catalogo: 6,
      Cantidad: 4,
      Fecha_Requisicion: "2/7/19 15:09",
      Fecha_Entrega: "2/7/19 15:13",
      Total: 240
  },
  {
      Id_Requisicion: 4,
      Id_Sucursal: 4,
      Id_Vendedor: 3,
      Id_Catalogo: 7,
      Cantidad: 5,
      Fecha_Requisicion: "2/7/19 15:12",
      Fecha_Entrega: "2/7/19 15:14",
      Total: 125
  },
  {
      Id_Requisicion: 4,
      Id_Sucursal: 4,
      Id_Vendedor: 3,
      Id_Catalogo: 4,
      Cantidad: 5,
      Fecha_Requisicion: "2/7/19 15:15",
      Fecha_Entrega: "2/7/19 15:16",
      Total: 200
 },
  {
      Id_Requisicion: 4,
      Id_Sucursal: 4,
      Id_Vendedor: 3,
      Id_Catalogo: 1,
      Cantidad: 3,
      Fecha_Requisicion: "2/7/19 15:17",
      Fecha_Entrega: "2/7/19 15:19",
      Total: 75
  },
  {
      Id_Requisicion: 4,
      Id_Sucursal: 4,
      Id_Vendedor: 3,
      Id_Catalogo: 2,
      Cantidad: 4,
      Fecha_Requisicion: "2/7/19 15:22",
      Fecha_Entrega: "2/7/19 15:25",
      Total: 120 
  },
  {
      Id_Requisicion: 5,
      Id_Sucursal: 1,
      Id_Vendedor: 1,
      Id_Catalogo: 8,
      Cantidad: 5,
      Fecha_Requisicion: "9/6/19 17:10",
      Fecha_Entrega: "9/6/19 17:14",
      Total: 150
  },
  {
      Id_Requisicion: 5,
      Id_Sucursal: 1,
      Id_Vendedor: 1,
      Id_Catalogo: 1,
      Cantidad: 3,
      Fecha_Requisicion: "9/6/19 17:13",
      Fecha_Entrega: "9/6/19 17:15",
      Total: 75
  },
  {
      Id_Requisicion: 5,
      Id_Sucursal: 1,
      Id_Vendedor: 1,
      Id_Catalogo: 9,
      Cantidad: 5,
      Fecha_Requisicion: "9/6/19 17:16",
      Fecha_Entrega: "9/6/19 17:19",
      Total: 175
  },
  {
      Id_Requisicion: 5,
      Id_Sucursal: 1,
      Id_Vendedor: 1,
      Id_Catalogo: 1,
      Cantidad: 6,
      Fecha_Requisicion: "9/6/19 17:18",
      Fecha_Entrega: "9/6/19 17:21",
      Total: 330
  },
  {
      Id_Requisicion: 5,
      Id_Sucursal: 1,
      Id_Vendedor: 1,
      Id_Catalogo: 8,
      Cantidad: 4,
      Fecha_Requisicion: "9/6/19 17:22",
      Fecha_Entrega: "9/6/19 17:25",
      Total: 120
  },
  {
      Id_Requisicion: 5,
      Id_Sucursal: 1,
      Id_Vendedor: 1,
      Id_Catalogo: 6,
      Cantidad: 2,
      Fecha_Requisicion: "9/6/19 17:24",
      Fecha_Entrega: "9/6/19 17:29",
      Total: 120
  }
];

export var Liquidacion = [
  {
    Id_Liquidacion: 1,
    Id_Requisicion: 1,
    Id_Sucursal: 2,
    Id_Vendedor: 2,
    Id_Cliente: 7,
    Cliente_Genero: "Femenino",
    Cliente_Edad: 50,
    Cliente_Cantidad: 6,
    Cliente_Ubicacion: 2,
    Forma_de_Pago: "Tarjeta",
    Total_Liquidacion: 450
},
{
    Id_Liquidacion: 2,
    Id_Requisicion: 2,
    Id_Sucursal: 2,
    Id_Vendedor: 6,
    Id_Cliente: 4,
    Cliente_Genero: "Masculino",
    Cliente_Edad: 50,
    Cliente_Cantidad: 4,
    Cliente_Ubicacion: 2,
    Forma_de_Pago: "Efectivo",
    Total_Liquidacion: 385
},
{
    Id_Liquidacion: 3,
    Id_Requisicion: 3,
    Id_Sucursal: 1,
    Id_Vendedor: 4,
    Id_Cliente: 3,
    Cliente_Genero: "Femenino",
    Cliente_Edad: 20,
    Cliente_Cantidad: 3,
    Cliente_Ubicacion: 1,
    Forma_de_Pago: "Tarjeta",
    Total_Liquidacion: 710
},
{
    Id_Liquidacion: 4,
    Id_Requisicion: 4,
    Id_Sucursal: 4,
    Id_Vendedor: 3,
    Id_Cliente: 4,
    Cliente_Genero: "Masculino",
    Cliente_Edad: 10,
    Cliente_Cantidad: 4,
    Cliente_Ubicacion: 4,
    Forma_de_Pago: "Tarjeta",
    Total_Liquidacion: 760
},
{
    Id_Liquidacion: 5,
    Id_Requisicion: 5,
    Id_Sucursal: 1,
    Id_Vendedor: 1,
    Id_Cliente: 3,
    Cliente_Genero: "Masculino",
    Cliente_Edad: 70,
    Cliente_Cantidad: 3,
    Cliente_Ubicacion: 978,
    Forma_de_Pago: "Tarjeta",
    Total_Liquidacion: 970
}
];

export var Insumos = [
  {
      Id_Insumo: 1,
      Descripcion : "Torilla de Maiz",
      Insumo_Categoria: "Tortillas"
  },
  {
      Id_Insumo: 2,
      Descripcion : "Tortilla de Harina",
      Insumo_Categoria: "Tortillas"
  },
  {
      Id_Insumo: 3,
      Descripcion : "Chile Verde",
      Insumo_Categoria: "Verduras"
  },
  {
      Id_Insumo: 4,
      Descripcion : "Chile Rojo",
      Insumo_Categoria: "Verduras"
  },
  {
      Id_Insumo: 5,      
      Descripcion : "Cebolla",
      Insumo_Categoria: "Verduras"
  },
  {
      Id_Insumo: 6,
      Descripcion : "Cilantro",
      Insumo_Categoria: "Verduras"
  },
  {
      Id_Insumo: 7,
      Descripcion : "Limones",
      Insumo_Categoria: "Verduras"
  },
  {
      Id_Insumo: 8,
      Descripcion : "Carne de Cerdo",
      Insumo_Categoria: "Carne"
  },
  {
      Id_Insumo: "9",
      Descripcion : "Carne de Res",
      Insumo_Categoria: "Carne"
  },
  {
      Id_Insumo: "10",
      Descripcion : "Queso Oaxaca",
      Insumo_Categoria: "Queso"
  },
  {
      Id_Insumo: "11",
      Descripcion : "Queso Chihuahua",
      Insumo_Categoria: "Queso"
  },
  {
      Id_Insumo: "12",
      Descripcion : "Queso Asadero",
      Insumo_Categoria: "Queso"
  },
  {
      Id_Insumo: 13,
      Descripcion : "CocaCola Regular",
      Insumo_Categoria: "Bebidas"
  },
  {
      Id_Insumo: 14,
      Descripcion : "CocaCola Sin Azucar",
      Insumo_Categoria: "Bebidas"
  },
  {
      Id_Insumo: 15,
      Descripcion: "CocaCola Light",
      Insumo_Categoria: "Bebidas"
  },
  {
      Id_Insumo: "16",
      Descripcion : "Corona",
      Insumo_Categoria: "Bebidas"
  },
  {
      Id_Insumo: "17",
      Descripcion : "Corona Ligth",
      Insumo_Categoria: "Bebidas"
  },
  {
      Id_Insumo: "18",
      Descripcion : "Victoria",
      Insumo_Categoria: "Bebidas"
  },
  {
      Id_Insumo: 19,
      Descripcion: "Negra Modelo",
      Insumo_Categoria: "Bebidas"
  },
  {
      Id_Insumo: 20,
      Descripcion: "XX Lager",
      Insumo_Categoria: "Bebidas"
  }
];
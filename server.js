const express = require("express");
const adminPosts = require("./routes/adminPosts");
const adminGets = require("./routes/adminGets");
const adminMod = require("./models/admin");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var app = express();
var cors = require("cors");

app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    arrayLimit: 5000
  })
);
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);

const db_url = "mongodb://localhost/dbCompanias";
mongoose.connect(db_url, { userNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;

app.use("/api/compania", adminPosts);
app.use("/api/compania", adminGets);
db.on("error", console.error.bind(console, "Error en la conexión"));
db.once("open", function() {
  db.dropDatabase(function(err, result) {});
  /**/
  adminMod.create(
    {
      mail: "a",
      password: "a",
      companias: [
        { nombre: "nem" },
        {
          nombre: "Facebook",
          planMensual: [
            {
              Fecha: "1/1/2019",
              Ingreso_Plan: 520000,
              Egreso_Plan: 450000,
              Margen: 70000
            },
            {
              Fecha: "1/2/2019",
              Ingreso_Plan: 530000,
              Egreso_Plan: 455000,
              Margen: 75000,
              Margen_Porcentaje: "14%"
            },
            {
              Fecha: "1/3/2019",
              Ingreso_Plan: 540000,
              Egreso_Plan: 460000,
              Margen: 80000,
              Margen_Porcentaje: "15%"
            }
          ],
          sucursales: [
            {
              Id_Sucursal: 1,
              Sucursal: "Roma",
              Direccion:
                "Av. Álvaro Obregon 90, Roma Nte., 06700 Ciudad de México, CDMX"
            },
            {
              Id_Sucursal: 2,
              Sucursal: "Condesa",
              Direccion:
                "Fernando Montes de Oca 22, Colonia Condesa, 06140 Ciudad de México, CDMX"
            }
          ],
          gastosFijos: [
            {
              Fecha: "31/01/2019",
              Renta: 20000,
              Agua: 10000,
              Luz: 5000,
              Salarios: 50000,
              Administracion: 10000
            },
            {
              Fecha: "28/02/2019",
              Renta: 20000,
              Agua: 10200,
              Luz: 5000,
              Salarios: 50000,
              Administracion: 10000
            }
          ],
          gastosVariables: [
            {
              Fecha: "31/1/2019",
              Tortillas: 414.87,
              Vegetales: 966.08,
              Carne: 6906.13,
              Queso: 1294.76,
              Bebidas: 2675.92
            },
            {
              Fecha: "21/2/2019",
              Tortillas: 429.68,
              Vegetales: 873.01,
              Carne: 6918.99,
              Queso: 1336.96,
              Bebidas: 2251.77
            }
          ],
          vendedores: [
            {
              Id_Vendedor: 1,
              Nombre: "Hugo",
              Genero: "Masculino",
              Edad: 29,
              Antiguedad: 6,
              FechaDeNacimiento: "1/31/90",
              FechaDeIngreso: "1/21/13"
            },
            {
              Id_Vendedor: 2,
              Nombre: "Francisco",
              Genero: "Masculino",
              Edad: 27,
              Antiguedad: 5,
              FechaDeNacimiento: "1/1/92",
              FechaDeIngreso: "1/1/14"
            }
          ],
          catalogo: [
            {
              Id_Catalogo: 1,
              Nombre: "Refresco",
              Precio: 25.0
            },
            {
              Id_Catalogo: 2,
              Nombre: "Agua Fresca",
              Precio: 30.0
            }
          ],
          clientes: [
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
          ],
          detallesGasto: [
            {
              Fecha: "1/1/2019",
              Id_Insumo: 1,
              Insumo_Categoria: "Tortillas",
              Id_Proveedor: 6,
              Gasto: 414.87
            },
            {
              Fecha: "1/1/2019",
              Id_Insumo: 4,
              Insumo_Categoria: "Verduras",
              Id_Proveedor: 4,
              Gasto: 966.08
            },
            {
              Fecha: "1/1/2019",
              Id_Insumo: 9,
              Insumo_Categoria: "Carne",
              Id_Proveedor: 8,
              Gasto: 6906.13
            },
            {
              Fecha: "1/1/2019",
              Id_Insumo: 11,
              Insumo_Categoria: "Queso",
              Id_Proveedor: 4,
              Gasto: 1294.76
            },
            {
              Fecha: "1/1/2019",
              Id_Insumo: 18,
              Insumo_Categoria: "Bebidas",
              Id_Proveedor: 5,
              Gasto: 2675.92
            },
            {
              Fecha: "1/2/2019",
              Id_Insumo: 2,
              Insumo_Categoria: "Tortillas",
              Id_Proveedor: 3,
              Gasto: 429.68
            },
            {
              Fecha: "1/2/2019",
              Id_Insumo: 4,
              Insumo_Categoria: "Verduras",
              Id_Proveedor: 5,
              Gasto: 873.01
            },
            {
              Fecha: "1/2/2019",
              Id_Insumo: 8,
              Insumo_Categoria: "Carne",
              Id_Proveedor: 7,
              Gasto: 6918.99
            },
            {
              Fecha: "1/2/2019",
              Id_Insumo: 12,
              Insumo_Categoria: "Queso",
              Id_Proveedor: 6,
              Gasto: 1336.96
            },
            {
              Fecha: "1/2/2019",
              Id_Insumo: 20,
              Insumo_Categoria: "Bebidas",
              Id_Proveedor: 5,
              Gasto: 2251.77
            },
            {
              Fecha: "1/3/2019",
              Id_Insumo: 1,
              Insumo_Categoria: "Tortillas",
              Id_Proveedor: 1,
              Gasto: 451.31
            },
            {
              Fecha: "1/3/2019",
              Id_Insumo: 3,
              Insumo_Categoria: "Verduras",
              Id_Proveedor: 6,
              Gasto: 751.39
            },
            {
              Fecha: "1/3/2019",
              Id_Insumo: 8,
              Insumo_Categoria: "Carne",
              Id_Proveedor: 8,
              Gasto: 7898.94
            },
            {
              Fecha: "1/3/2019",
              Id_Insumo: 12,
              Insumo_Categoria: "Queso",
              Id_Proveedor: 7,
              Gasto: 1093.93
            },
            {
              Fecha: "1/3/2019",
              Id_Insumo: 19,
              Insumo_Categoria: "Bebidas",
              Id_Proveedor: 6,
              Gasto: 2208.59
            },
            {
              Fecha: "1/4/2019",
              Id_Insumo: 1,
              Insumo_Categoria: "Tortillas",
              Id_Proveedor: 3,
              Gasto: 458.05
            },
            {
              Fecha: "1/4/2019",
              Id_Insumo: 5,
              Insumo_Categoria: "Verduras",
              Id_Proveedor: 5,
              Gasto: 1042.57
            },
            {
              Fecha: "1/4/2019",
              Id_Insumo: 8,
              Insumo_Categoria: "Carne",
              Id_Proveedor: 7,
              Gasto: 7635.61
            },
            {
              Fecha: "1/4/2019",
              Id_Insumo: 12,
              Insumo_Categoria: "Queso",
              Id_Proveedor: 8,
              Gasto: 1256.88
            }
          ],
          insumos: [
            {
              Id_Insumo: 1,
              Descripcion: "Torilla de Maiz",
              Insumo_Categoria: "Tortillas"
            },
            {
              Id_Insumo: 2,
              Descripcion: "Tortilla de Harina",
              Insumo_Categoria: "Tortillas"
            },
            {
              Id_Insumo: 3,
              Descripcion: "Chile Verde",
              Insumo_Categoria: "Verduras"
            },
            {
              Id_Insumo: 4,
              Descripcion: "Chile Rojo",
              Insumo_Categoria: "Verduras"
            },
            {
              Id_Insumo: 5,
              Descripcion: "Cebolla",
              Insumo_Categoria: "Verduras"
            },
            {
              Id_Insumo: 6,
              Descripcion: "Cilantro",
              Insumo_Categoria: "Verduras"
            },
            {
              Id_Insumo: 7,
              Descripcion: "Limones",
              Insumo_Categoria: "Verduras"
            },
            {
              Id_Insumo: 8,
              Descripcion: "Carne de Cerdo",
              Insumo_Categoria: "Carne"
            },
            {
              Id_Insumo: 9,
              Descripcion: "Carne de Res",
              Insumo_Categoria: "Carne"
            },
            {
              Id_Insumo: 10,
              Descripcion: "Queso Oaxaca",
              Insumo_Categoria: "Queso"
            },
            {
              Id_Insumo: 11,
              Descripcion: "Queso Chihuahua",
              Insumo_Categoria: "Queso"
            },
            {
              Id_Insumo: 12,
              Descripcion: "Queso Asadero",
              Insumo_Categoria: "Queso"
            },
            {
              Id_Insumo: 13,
              Descripcion: "CocaCola Regular",
              Insumo_Categoria: "Bebidas"
            },
            {
              Id_Insumo: 14,
              Descripcion: "CocaCola Sin Azucar",
              Insumo_Categoria: "Bebidas"
            },
            {
              Id_Insumo: 15,
              Descripcion: "CocaCola Light",
              Insumo_Categoria: "Bebidas"
            },
            {
              Id_Insumo: 16,
              Descripcion: "Corona",
              Insumo_Categoria: "Bebidas"
            },
            {
              Id_Insumo: 17,
              Descripcion: "Corona Ligth",
              Insumo_Categoria: "Bebidas"
            },
            {
              Id_Insumo: 18,
              Descripcion: "Victoria",
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
          ],
          requisiciones: [
            {
              Id_Requisicion: 1,
              Id_Sucursal: 2,
              Id_Vendedor: 2,
              Id_Catalogo: 3,
              Cantidad: 5,
              Fecha_Requisicion: "10/11/2019 18:01",
              Fecha_Entrega: "10/11/2019 18:04",
              Total: 175
            },
            {
              Id_Requisicion: 1,
              Id_Sucursal: 2,
              Id_Vendedor: 2,
              Id_Catalogo: 10,
              Cantidad: 5,
              Fecha_Requisicion: "10/11/2019 18:06",
              Fecha_Entrega: "10/11/2019 18:11",
              Total: 275
            },
            {
              Id_Requisicion: 2,
              Id_Sucursal: 2,
              Id_Vendedor: 6,
              Id_Catalogo: 4,
              Cantidad: 4,
              Fecha_Requisicion: "10/26/2019 19:09",
              Fecha_Entrega: "10/26/2019 19:14",
              Total: 160
            },
            {
              Id_Requisicion: 2,
              Id_Sucursal: 2,
              Id_Vendedor: 6,
              Id_Catalogo: 2,
              Cantidad: 5,
              Fecha_Requisicion: "10/26/2019 19:14",
              Fecha_Entrega: "10/26/2019 19:18",
              Total: 150
            },
            {
              Id_Requisicion: 2,
              Id_Sucursal: 2,
              Id_Vendedor: 6,
              Id_Catalogo: 1,
              Cantidad: 3,
              Fecha_Requisicion: "10/26/2019 19:16",
              Fecha_Entrega: "10/26/2019 19:17",
              Total: 75
            },
            {
              Id_Requisicion: 3,
              Id_Sucursal: 1,
              Id_Vendedor: 4,
              Id_Catalogo: 9,
              Cantidad: 5,
              Fecha_Requisicion: "8/15/2019 17:10",
              Fecha_Entrega: "8/15/2019 17:15",
              Total: 175
            },
            {
              Id_Requisicion: 3,
              Id_Sucursal: 1,
              Id_Vendedor: 4,
              Id_Catalogo: 4,
              Cantidad: 7,
              Fecha_Requisicion: "8/15/2019 17:15",
              Fecha_Entrega: "8/15/2019 17:20",
              Total: 280
            },
            {
              Id_Requisicion: 3,
              Id_Sucursal: 1,
              Id_Vendedor: 4,
              Id_Catalogo: 7,
              Cantidad: 3,
              Fecha_Requisicion: "8/15/2019 17:16",
              Fecha_Entrega: "8/15/2019 17:21",
              Total: 75
            },
            {
              Id_Requisicion: 3,
              Id_Sucursal: 1,
              Id_Vendedor: 4,
              Id_Catalogo: 6,
              Cantidad: 3,
              Fecha_Requisicion: "8/15/2019 17:17",
              Fecha_Entrega: "8/15/2019 17:19",
              Total: 180
            },
            {
              Id_Requisicion: 4,
              Id_Sucursal: 4,
              Id_Vendedor: 3,
              Id_Catalogo: 6,
              Cantidad: 4,
              Fecha_Requisicion: "2/7/2019 15:09",
              Fecha_Entrega: "2/7/2019 15:13",
              Total: 240
            },
            {
              Id_Requisicion: 4,
              Id_Sucursal: 4,
              Id_Vendedor: 3,
              Id_Catalogo: 7,
              Cantidad: 5,
              Fecha_Requisicion: "2/7/2019 15:12",
              Fecha_Entrega: "2/7/2019 15:14",
              Total: 125
            },
            {
              Id_Requisicion: 4,
              Id_Sucursal: 4,
              Id_Vendedor: 3,
              Id_Catalogo: 4,
              Cantidad: 5,
              Fecha_Requisicion: "2/7/2019 15:15",
              Fecha_Entrega: "2/7/2019 15:16",
              Total: 200
            }
          ]
        }
      ],
      provedores: [
        {
          ID_Proveedor: 1,
          Nombre: "Walmart"
        },
        {
          ID_Proveedor: 2,
          Nombre: "Chedraui"
        },
        {
          ID_Proveedor: 3,
          Nombre: "Costco"
        },
        {
          ID_Proveedor: 4,
          Nombre: "La Merced"
        },
        {
          ID_Proveedor: 5,
          Nombre: "Central de Abastos"
        },
        {
          ID_Proveedor: 6,
          Nombre: "Mercado Local"
        },
        {
          ID_Proveedor: 7,
          Nombre: "Carniceria Los Cochinitos"
        },
        {
          ID_Proveedor: 8,
          Nombre: "Carniceria Don Juan"
        }
      ],
      liquidaciones: [
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
        },
        {
          Id_Liquidacion: 6,
          Id_Requisicion: 6,
          Id_Sucursal: 4,
          Id_Vendedor: 4,
          Id_Cliente: 6,
          Cliente_Genero: "Femenino",
          Cliente_Edad: 30,
          Cliente_Cantidad: 10,
          Cliente_Ubicacion: 4,
          Forma_de_Pago: "Efectivo",
          Total_Liquidacion: 190
        },
        {
          Id_Liquidacion: 7,
          Id_Requisicion: 7,
          Id_Sucursal: 1,
          Id_Vendedor: 2,
          Id_Cliente: 4,
          Cliente_Genero: "Femenino",
          Cliente_Edad: 20,
          Cliente_Cantidad: 4,
          Cliente_Ubicacion: 1,
          Forma_de_Pago: "Tarjeta",
          Total_Liquidacion: 705
        },
        {
          Id_Liquidacion: 8,
          Id_Requisicion: 8,
          Id_Sucursal: 3,
          Id_Vendedor: 4,
          Id_Cliente: 4,
          Cliente_Genero: "Femenino",
          Cliente_Edad: 40,
          Cliente_Cantidad: 4,
          Cliente_Ubicacion: 3,
          Forma_de_Pago: "Tarjeta",
          Total_Liquidacion: 575
        },
        {
          Id_Liquidacion: 9,
          Id_Requisicion: 9,
          Id_Sucursal: 4,
          Id_Vendedor: 1,
          Id_Cliente: 6,
          Cliente_Genero: "Femenino",
          Cliente_Edad: 10,
          Cliente_Cantidad: 10,
          Cliente_Ubicacion: 4,
          Forma_de_Pago: "Efectivo",
          Total_Liquidacion: 1185
        },
        {
          Id_Liquidacion: 10,
          Id_Requisicion: 10,
          Id_Sucursal: 4,
          Id_Vendedor: 5,
          Id_Cliente: 8,
          Cliente_Genero: "Femenino",
          Cliente_Edad: 50,
          Cliente_Cantidad: 7,
          Cliente_Ubicacion: 4,
          Forma_de_Pago: "Tarjeta",
          Total_Liquidacion: 905
        },
        {
          Id_Liquidacion: 11,
          Id_Requisicion: 11,
          Id_Sucursal: 4,
          Id_Vendedor: 5,
          Id_Cliente: 1,
          Cliente_Genero: "Femenino",
          Cliente_Edad: 40,
          Cliente_Cantidad: 1,
          Cliente_Ubicacion: 4,
          Forma_de_Pago: "Tarjeta",
          Total_Liquidacion: 260
        }
      ]
    },
    function(err, doc) {}
  );
});

app.listen("8080", () => {
  console.log("server up");
});

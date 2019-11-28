import { obtenerPlanVentas } from './appData';
import { GastoFijo } from './gastoFijo';
// Datos de la gráfica múltiple de ingresos.
export const mesesGraficaMultiple = ["1/19", "2/19", "3/19", "4/19", "5/19",
    "6/19", "7/19", "8/19", "9/19", "10/19", "11/19", "12/19"];

export var obtenerMetaMensualIngresos = (data) => {
    let planVentas = 0;
    let fechaActual = new Date();
    let anoActual = fechaActual.getFullYear().toString();
    let arrDatos = [];

    for (let a = 0; a < 12; a++) {
        arrDatos[a] = undefined;
    }

    for (let i = 0; i < data.length; i++) {
        let arrDate = data[i].Fecha.split('/');
        let year = arrDate[2];
        if (year == anoActual) {
            planVentas += data[i].Ingreso_Plan;
            arrDatos[i] = planVentas;
        }
    }
    return arrDatos;
}

export var obtenerMetaMensualEgresos = (data) => {
    let planEgresos = 0;
    let fechaActual = new Date();
    let anoActual = fechaActual.getFullYear().toString();
    let arrDatos = [];

    for (let a = 0; a < 12; a++) {
        arrDatos[a] = undefined;
    }

    for (let i = 0; i < data.length; i++) {
        let arrDate = data[i].Fecha.split('/');
        let year = arrDate[2];
        if (year == anoActual) {
            planEgresos += data[i].Egreso_Plan;
            arrDatos[i] = planEgresos;
        }
    }
    return arrDatos;
}

export var obtenerMesVentaReal = (requisicion) => {
    let year;
    let yearDate;
    let arrDate;
    let month;
    let ventasRealesMes = 0;
    let fechaActual = new Date();
    let mesActual = fechaActual.getMonth() + 1;
    let anoActual = fechaActual.getFullYear().toString();
    let arrDatos = [];

    for (let a = 0; a < 12; a++) {
        arrDatos[a] = undefined;
    }
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < requisicion.length; j++) {
            arrDate = requisicion[j].Fecha_Entrega.split('/');
            month = parseInt(arrDate[1]);
            yearDate = arrDate[2].split(" ");
            year = yearDate[0];
            if (year == anoActual && month - 1 == i) {
                ventasRealesMes += parseFloat(requisicion[j].Total);
            }
        }
        if (ventasRealesMes != 0 && i >= 1) {
            ventasRealesMes += arrDatos[i - 1];
            arrDatos[i] = ventasRealesMes;
        } else if (ventasRealesMes != 0 && i < 1) {
            arrDatos[i] = ventasRealesMes;
        }
        ventasRealesMes = 0;
    }
    console.log(arrDatos);
    return arrDatos;
}

export var obtenerMesEgresoReal = (gastoVariable, gastoFijo) => {
    let egresosReales = 0;
    let fechaActual = new Date();
    let mesActual = fechaActual.getMonth() + 1;
    let anoActual = fechaActual.getFullYear().toString();
    let arrDatos = [];

    for (let a = 0; a < 12; a++) {
        arrDatos[a] = undefined;
    }

    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < gastoVariable.length; j++) {
            let arrDateGV = gastoVariable[j].Fecha.split('/');
            let monthGV = parseInt(arrDateGV[1]);
            let yearGV = arrDateGV[2];
            if (yearGV == anoActual && monthGV - 1 == i) {
                egresosReales += gastoVariable[j].Tortillas + gastoVariable[j].Vegetales + gastoVariable[j].Carne + gastoVariable[j].Queso
                    + gastoVariable[j].Bebidas;
            }
        }

        for (let k = 0; k < gastoFijo.length; k++) {
            let arrDateGF = gastoFijo[k].Fecha.split('/');
            let monthGF = parseInt(arrDateGF[1]);
            let yearGF = arrDateGF[2];
            if (yearGF == anoActual && monthGF - 1 == i) {
                egresosReales += gastoFijo[k].Renta + gastoFijo[k].Agua + gastoFijo[k].Luz + gastoFijo[k].Salarios + gastoFijo[k].Administracion;
            }
        }

        if (egresosReales != 0 && i >= 1) {
            egresosReales += arrDatos[i - 1];
            arrDatos[i] = egresosReales;
        } else if (egresosReales != 0 && i < 1) {
            arrDatos[i] = egresosReales;
        }
        egresosReales = 0;
    }
    return arrDatos;
}

export const datosGraficaMultiple = [
    {
        data: [/*MetaFinal*/{ name: "Meta Final", data: [6270000, 6270000, 6270000, 6270000, 6270000, 6270000, 6270000, 6270000, 6270000, 6270000, 6270000, 6270000] },
             /*Real*/{ name: "Real", data: [53000, 1030000, 1700000, 2340000, 2900000, 3490000, 3600000, 4200000, 5042000, 5450000] },
             /*MetaMensualAcumulada*/{ name: "Meta Mensual Acumulada", data: [520000, 1050000, 1590000, 2140000, 2700000, 3270000, 3850000, 4400000, 5040000, 5650000, 6270000] }]
    }
]

// Datos de la gráfica múltiple de egresos.
export const datosEgresosGraficaMultiple = [
    {
        data: [/*MetaFinal*/{ name: "Meta Final", data: [5730000, 5730000, 5730000, 5730000, 5730000, 5730000, 5730000, 5730000, 5730000, 5730000, 5730000, 5730000] },
             /*Real*/{ name: "Real", data: [425000, 1145000, 1365000, 1810000, 2300000, 2955000, 3145000, 3730000, 4220000, 5125000, 5225000] },
             /*MetaMensualAcumulada*/ { name: "Meta Mensual Acumulada", data: [450000, 905000, 1365000, 1830000, 2300000, 2775000, 3255000, 3740000, 4230000, 4725000, 5225000] }]
    }
]
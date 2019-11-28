import { Objetivo } from './objetivo';
import { Liquidacion } from './liquidacion';
import { Requisicion } from './requisicion';
import { GastoFijo } from './gastoFijo';
import { GastoVariable } from './gastoVariable';

export var obtenerPlanVentas = (data) => {
    let planTotalVentas = 0;
    let fechaActual = new Date();
    let anoActual = fechaActual.getFullYear().toString();

    for (let i = 0; i < data.length; i++) {
        let arrDate = data[i].Fecha.split('/');
        let year = arrDate[2];
        if (year == anoActual) {
            planTotalVentas += data[i].Ingreso_Plan;
        }
    }

    return planTotalVentas;
}

export var obtenerVentasPlanActual = (data) => {
    let planVentasPlanActual = 0;
    let fechaActual = new Date();
    let mesActual = fechaActual.getMonth() + 1;
    let anoActual = fechaActual.getFullYear().toString();

    for (let i = 0; i < data.length; i++) {
        let arrDate = data[i].Fecha.split('/');
        let month = parseInt(arrDate[0]);
        let year = arrDate[2];
        if (year == anoActual && month <= mesActual) {
            planVentasPlanActual += data[i].Ingreso_Plan;
        }

    }

    return planVentasPlanActual;
}

export var obtenerVentasReales = (liquidacion, requisicion) => {
    let year;
    let yearDate;
    let arrDate;
    let month;
    let ventasReales = 0;
    let fechaActual = new Date();
    let mesActual = fechaActual.getMonth() + 1;
    let anoActual = fechaActual.getFullYear().toString();
    for (let i = 0; i < liquidacion.length; i++) {
        for (let j = 0; j < requisicion.length; j++) {
            if (liquidacion[i].Id_Requisicion == requisicion[j].Id_Requisicion) {
                arrDate = requisicion[j].Fecha_Entrega.split('/');
                month =  parseInt(arrDate[0]);
                yearDate = arrDate[2].split(" ");
                year = yearDate[0];
            }
        }
        if (year == anoActual && month <= mesActual) {
            ventasReales += liquidacion[i].Total_Liquidacion;
        }
    }
    return ventasReales;
}

export var obtenerEgresosReales = (gastoVariable, gastoFijo) => {
    let egresosReales = 0;
    let fechaActual = new Date();
    let mesActual = fechaActual.getMonth() + 1;
    let anoActual = fechaActual.getFullYear().toString();

    for (let i = 0; i < gastoVariable.length; i++) {
        let arrDateGV = gastoVariable[i].Fecha.split('/');
        let monthGV =  parseInt(arrDateGV[0]);
        let yearGV = arrDateGV[2];
        if (yearGV == anoActual && monthGV <= mesActual) {
            egresosReales += gastoVariable[i].Tortillas + gastoVariable[i].Vegetales + gastoVariable[i].Carne + gastoVariable[i].Queso
                + gastoVariable[i].Bebidas;
        }
    }

    for (let j = 0; j < gastoFijo.length; j++) {
        let arrDateGF = gastoFijo[j].Fecha.split('/');
        let monthGF =  parseInt(arrDateGF[0]);
        let yearGF = arrDateGF[2];
        if (yearGF == anoActual && monthGF <= mesActual) {
            egresosReales += gastoFijo[j].Renta + gastoFijo[j].Agua + gastoFijo[j].Luz + gastoFijo[j].Salarios + gastoFijo[j].Administracion;
        }
    }

    return egresosReales;

}

export var obtenerPlanEgresos = (data) => {
    let planTotalEgresos = 0;
    let fechaActual = new Date();
    let anoActual = fechaActual.getFullYear().toString();

    for (let i = 0; i < data.length; i++) {
        let arrDate = data[i].Fecha.split('/');
        let year = arrDate[2];
        if (year == anoActual) {
            planTotalEgresos += data[i].Egreso_Plan;
        }
    }

    return planTotalEgresos;
}

export var obtenerEgresosPlanActual = (data) => {
    let planEgresosPlanActual = 0;
    let fechaActual = new Date();
    let mesActual = fechaActual.getMonth() + 1;
    let anoActual = fechaActual.getFullYear().toString();

    for (let i = 0; i < data.length; i++) {
        let arrDate = data[i].Fecha.split('/');
        let month =  parseInt(arrDate[0]);
        let year = arrDate[2];
        if (year == anoActual && month <= mesActual) {
            planEgresosPlanActual += data[i].Egreso_Plan;
        }
    }

    return planEgresosPlanActual;
}

export var report = {
    gauges: [
        {
            title: 'VENTAS', value: obtenerVentasReales(Liquidacion, Requisicion), subtitle1: 'Ventas actuales acumuladas',
            plan: obtenerVentasPlanActual(Objetivo), subtitle2: 'Plan de ventas',
            objective: obtenerPlanVentas(Objetivo), subtitle3: 'Diferencia de ventas',
            subtitle4: 'Objetivo anual de ventas',
            path: '/ventas',
        }, //5042000............... 9650
        {
            title: 'GASTOS', value: obtenerEgresosReales(GastoVariable, GastoFijo), subtitle1: 'Gastos actuales acumulados',
            plan: obtenerEgresosPlanActual(Objetivo), subtitle2: 'Plan de gastos',
            objective: obtenerPlanEgresos(Objetivo), subtitle3: 'Diferencia de gastos',
            subtitle4: 'Objetivo anual de gastos',
            path: '/gastos',
        }, // 3950000
        {
            title: 'MARGEN', value: obtenerVentasReales(Liquidacion, Requisicion) - obtenerEgresosReales(GastoVariable, GastoFijo), subtitle1: 'Margen actual acumulado',
            plan: obtenerVentasPlanActual(Objetivo) - obtenerEgresosPlanActual(Objetivo), subtitle2: 'Plan de margen',
            objective: obtenerPlanVentas(Objetivo) - obtenerPlanEgresos(Objetivo), subtitle3: 'Diferencia de margen',
            subtitle4: 'Objetivo anual de margen',
            path: '/margen',
        }, // 1092000
    ],
};
export const currency = value => '$' + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

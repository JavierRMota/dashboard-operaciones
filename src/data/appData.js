//Datos dummies
export var companies = [
    { id: 0, name: "FEMSA" },
    { id: 1, name: "FACEBOOK" },
    { id: 2, name: "PEPSICO" },
    { id: 3, name: "MICROSOFT" }
];

export var report = {
    gauges: [
        {
            title: 'VENTAS', value: 5042000, subtitle1: 'Ventas actuales acumuladas',
            plan: 6270000, subtitle2: 'Plan de ventas',
            objective: 6900000, subtitle3: 'Diferencia de ventas',
            subtitle4: 'Objetivo anual de ventas',
            path: '/ventas',
        },
        {
            title: 'GASTOS', value: 3950000, subtitle1: 'Gastos actuales acumulados',
            plan: 5225000, subtitle2: 'Plan de gastos',
            objective: 5730000, subtitle3: 'Diferencia de gastos',
            subtitle4: 'Objetivo anual de gastos',
            path: '/gastos',
        },
        {
            title: 'MARGEN', value: 1092000, subtitle1: 'Margen actual acumulado',
            plan: 1045000, subtitle2: 'Plan de margen',
            objective: 1170000, subtitle3: 'Diferencia de margen',
            subtitle4: 'Objetivo anual de margen',
            path: '/margen',
        },
    ],
};
export const currency = value => '$' + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

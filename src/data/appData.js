export const donutChartData = [
    { tipo: "Beverages", cantidad: 16.5 },
    { tipo: "Condiments", cantidad: 24 },
    { tipo: "Produce", cantidad: 13 },
    { tipo: "Meat/Poultry", cantidad: 16.5 },
    { tipo: "Seafood", cantidad: 20 },
    { tipo: "Other", cantidad: 10 }
];

export const pruebaMultiplesDatos = ["September", "October", "November", "December"];
export const pruebaDatosMultiplesDatos = [
    { data: [{ data: [10, 20, 30, 40] }, { data: [50, 60, 70, 80] }, { data: [90, 100, 110, 120] }] }
];


export const barChartQ4Months = ["October", "November", "December"];
export const barChartMonthlyPercentages = [
    { name: "Beverages", data: [14, 16, 19.5] },
    { name: "Condiments", data: [24, 23.5, 24.5] },
    { name: "Produce", data: [12.5, 12.5, 14] },
    { name: "Meat/Poultry", data: [16, 18, 17] },
    { name: "Seafood", data: [21.5, 20, 17] },
    { name: "Other", data: [7, 12, 11] }
];

export const donutChartProductsData = [
    { tipo: "Coca-Cola", cantidad: 14 },
    { tipo: "Nestea", cantidad: 11 },
    { tipo: "Powerade", cantidad: 73 },
    { tipo: "Sabritas", cantidad: 2 }
];
export const barChartVentas = ["Ventas Esperadas", "Ventas Reales"];
export const barCharVentasProductos = [
    { name: "Coca-Cola", data: [100000, 75000] },
    { name: "Nestea", data: [350000, 315000] },
    { name: "Powerade", data: [150000, 180000] },
    { name: "Sabritas", data: [23000, 10000] }
];

//Datos dummies
export var companies = [
    { id: 0, name: "FEMSA" },
    { id: 1, name: "FACEBOOK" },
    { id: 2, name: "PEPSICO" },
    { id: 3, name: "MICROSOFT" }
];

export var expenses = [
    { date: 1571332800, name: "FEMSA", amount: 10000.0, category: "SALARIOS" },
    { date: 1571332801, name: "FEMSA", amount: 20000.0, category: "RENTAS" },
    { date: 1571332802, name: "FEMSA", amount: 5000.0, category: "GASOLINA" },
    { date: 1571332803, name: "FEMSA", amount: 2000.0, category: "PAPELERIA" },
    { date: 1571332804, name: "FEMSA", amount: 4000.0, category: "REPARACIONES" }
];

export var incomes = [
    { date: 1571332800, name: "FEMSA", amount: 10000.0, category: "COCACOLA" },
    { date: 1571332801, name: "FEMSA", amount: 20000.0, category: "FANTA" },
    { date: 1571332802, name: "FEMSA", amount: 5000.0, category: "SPRITE" },
    { date: 1571332803, name: "FEMSA", amount: 2000.0, category: "CINEPOLIS" },
    { date: 1571332804, name: "FEMSA", amount: 4000.0, category: "INVERSIONES" }
];

export var goals = [
    { date: 1572566400, amount: 100000.0, category: "VENTAS" },
    { date: 1572566400, amount: 50000.0, category: "GASTO" },
    { date: 1575158400, amount: 100000.0, category: "VENTAS" },
    { date: 1575158400, amount: 50000.0, category: "GASTO" }
];

export var compSemilla = [
    {
        nombre: "FEMSA",
        metasMensuales: [100000, 120000, 360000],
        transacciones: [
            {
                concepto: "Ingreso",
                monto: 150000
            },
            {
                concepto: "Egreso",
                monto: 20000
            }
        ]
    }
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

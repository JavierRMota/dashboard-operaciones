//const dataSetLength = DetalleGasto.length;
//const nombresLength = Insumo.length;
//var totalGastado = 0
//var temp;
//export var nombresInsumos = []
//export var cantidadTotalInsumos = new Array();
//cantidadTotalInsumos[dataSetLength] = 0;

export var generarNombresInsumo = (data) => {
    var arr = [];
    for (let h = 0; h < data.length; h++) {
        arr.push(data[h].Descripcion);
    }
    return arr;
}

export var generarTotalInsumos = (data, length) => {
    let temp = 0;
    let arr = [];

    for (let a = 0; a < length; a++) {
        arr[a] = 0.0;
    }

    for (let i = 0; i < data.length; i++) {
        temp = arr[(data[i].Id_Insumo) - 1];
        if (temp !== undefined) {
            arr[(data[i].Id_Insumo) - 1] = temp + data[i].Gasto;
        }
        else {
            arr.splice(data[i].Id_Insumo, (data[i].Id_Insumo - 1), 0.0);
        }
    }
    return arr;
}

export var totalGastado = (arr) => {
    let totalGastado = 0;
    for (let j = 0; j < arr.length; j++) {
        totalGastado += arr[j];
    }
    return totalGastado;
}

export var insumoPorcentaje = (arr, totalGastado) => {
    let temp = 0;
    for (let k = 0; k < arr.length; k++) {
        temp = ((arr[k] * 100.0) / totalGastado);
        arr[k] = temp;
    }
    return arr;
}

export var construirDataSetInsumo = (arr1, arr2) => {
    let arrResultante = [];
    for (let i = 0; i < arr1.length; i++) {
        var json = { "insumo": arr1[i], "totalGastado": arr2[i] };
        arrResultante.push(json);
    }
    return arrResultante;
}

export var insumoMasComprado = (data) => {
    let insumoMasFrecuente = data[0].totalGastado;
    let nombreInsumo = data[0].insumo;
    for (let i = 0; i < data.length; i++) {
        if (data[i].totalGastado >= insumoMasFrecuente) {
            insumoMasFrecuente = data[i].totalGastado;
            nombreInsumo = data[i].insumo;
        }
    }
    return nombreInsumo;
}

export var insumoMenosComprado = (data) => {
    let insumoMenosFrecuente = data[0].totalGastado;
    let nombreInsumo = data[0].insumo;
    for (let i = 0; i < data.length; i++) {
        if (data[i].totalGastado <= insumoMenosFrecuente) {
            insumoMenosFrecuente = data[i].totalGastado;
            nombreInsumo = data[i].insumo;
        }
    }
    return nombreInsumo;
}

/*export const totalInsumos = [

    { insumo: nombresInsumos[0], totalGastado: cantidadTotalInsumos[0] }, //id=1
    { insumo: nombresInsumos[1], totalGastado: cantidadTotalInsumos[1] }, //id=2
    { insumo: nombresInsumos[2], totalGastado: cantidadTotalInsumos[2] }, //id=3
    { insumo: nombresInsumos[3], totalGastado: cantidadTotalInsumos[3] }, //id=4
    { insumo: nombresInsumos[4], totalGastado: cantidadTotalInsumos[4] }, //id=5
    { insumo: nombresInsumos[5], totalGastado: cantidadTotalInsumos[5] }, //id=6
    { insumo: nombresInsumos[6], totalGastado: cantidadTotalInsumos[6] }, //id=7
    { insumo: nombresInsumos[7], totalGastado: cantidadTotalInsumos[7] }, //id=8
    { insumo: nombresInsumos[8], totalGastado: cantidadTotalInsumos[8] }, //id=9
    { insumo: nombresInsumos[9], totalGastado: cantidadTotalInsumos[9] }, //id=10
    { insumo: nombresInsumos[10], totalGastado: cantidadTotalInsumos[10] }, //id=11
    { insumo: nombresInsumos[11], totalGastado: cantidadTotalInsumos[11] }, //id=12
    { insumo: nombresInsumos[12], totalGastado: cantidadTotalInsumos[12] }, //id=13
    { insumo: nombresInsumos[13], totalGastado: cantidadTotalInsumos[13] }, //id=14
    { insumo: nombresInsumos[14], totalGastado: cantidadTotalInsumos[14] }, //id=15
    { insumo: nombresInsumos[15], totalGastado: cantidadTotalInsumos[15] }, //id=16
    { insumo: nombresInsumos[16], totalGastado: cantidadTotalInsumos[16] }, //id=17
    { insumo: nombresInsumos[17], totalGastado: cantidadTotalInsumos[17] }, //id=18
    { insumo: nombresInsumos[18], totalGastado: cantidadTotalInsumos[18] }, //id=19
    { insumo: nombresInsumos[19], totalGastado: cantidadTotalInsumos[19] }, //id=20
]*/

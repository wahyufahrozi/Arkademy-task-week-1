let matrix = [
    [5, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
]

function transposeArray(array) {
    var mat = [];
    for (var i = 0; i < array.length; i++) {
        mat.push([]); //untuk mengisi array kosong sebanyak panjang array
    };

    //untuk mengisi array yang kosong tetapi di balik
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[0].length; j++) {
            mat[j].push(array[i][j]); //untuk mengambil nilai array dan dimasukan ke array indeks ke j
        };
    };

    return mat;
}

console.table(transposeArray(matrix));
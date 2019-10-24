let matrix = [
    [5, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
]

function transposeArray(array) {
    let mat = []; //menampung array
    for (let i = 0; i < array[0].length; i++) {
        mat.push([]); //untuk mengisi array kosong sebanyak panjang array
        // console.log(mat);

    };

    //untuk mengisi array yang kosong tetapi di balik
    for (let i = 0; i < array.length; i++) { //untuk mengakses isi dari array (baris)
        for (let j = 0; j < array[0].length; j++) {
            mat[j].push(array[i][j]); //untuk mengambil nilai array dan dimasukan ke array indeks ke j (kolom)
        };
    };

    return mat;
}

console.log(transposeArray(matrix));
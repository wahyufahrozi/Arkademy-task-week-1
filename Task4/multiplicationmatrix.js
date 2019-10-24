let a = [
    [3, 4],
    [1, 2]
];
let b = [
    [7, 5],
    [6, 4]
];

let panjangA = a.length; //merupakan panjang dari array a
let PanjangBpertama = b[0].length; //merupakan panjang dari array b = 0
let PanjangB = b.length; //merupakan panjang keseluruhan dari array b
if (a[0].length !== PanjangB) {
    console.log("Matrik Tidak sama");

} else {
    let result = []; //menyipan array hasil
    for (let i = 0; i < panjangA; i++) {
        result.push([]) //untuk mengisi array kosong sepanjang array a
        for (let j = 0; j < PanjangBpertama; j++) { //j isi dari array b pertama
            result[i][j] = 0; // di isi dengan angka nol
            // console.log(result[i][j]);
            for (let k = 0; k < PanjangB; k++) {
                result[i][j] = result[i][j] + a[i][k] * b[k][j];
                // console.log(result[i][j]);
            }
        }
    }
    console.log(result);
}
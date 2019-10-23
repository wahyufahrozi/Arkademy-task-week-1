let a = [
    [3, 4],
    [1, 2]
];
let b = [
    [7, 5],
    [6, 4]
];

let r = a.length; //merupakan panjang dari array a
let c = b[0].length; //merupakan panjang dari array b = 0
let p = b.length;
if (a[0].length !== p) {
    console.log("Matrik Tidak sama");

} else {
    let result = [];
    for (let i = 0; i < r; i++) {
        result.push([])
        for (let j = 0; j < c; j++) {
            result[i][j] = 0;
            for (let k = 0; k < p; k++) {
                result[i][j] = result[i][j] + a[i][k] * b[k][j];
            }
        }
    }
    console.table(result);
}
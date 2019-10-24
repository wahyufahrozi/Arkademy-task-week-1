let angka = [2, 10, 4, 18, 2, 2, 3];

const mean = (angka) => {

    let temp = 0;
    for (let i = 0; i < angka.length; i++) { //melakukan perulangan selama angka length belum tercapai
        temp = temp + angka[i]
    }
    return Math.floor(temp / angka.length);

}

console.log("Nilai Mean adalah :", mean(angka));

const median = (angka) => {
    angka.sort(function (a, b) {
        return a - b;

    });
    // console.log(angka);

    let half = Math.round(angka.length / 2);
    return angka[half - 1]
}

console.log(`nilai median nya adalah:`, median(angka));


// const modus = (angka) => {
//     if (angka.length == 0)
//         return null;
//     var modeMap = {}; //menyimpan array dalam bentuk objek
//     var Elementmax = angka[0], //angka indeks pertama untuk sementara
//         maxCount = 1;
//     for (var i = 0; i < angka.length; i++) {
//         var el = angka[i]; //untuk mengambil nilai dari array
//         if (modeMap[el] == null) //untuk membandingkan angka yang keluar
//             modeMap[el] = 1; //menghitung angka berapa kali keluar
//         else
//             modeMap[el]++; //jika angka yang sama valuenya nambah 1
//         if (modeMap[el] > maxCount) {
//             Elementmax = el;
//             maxCount = modeMap[el]; //jika angka yang sama lebih dari maxcount maka element max sama
//             //  dengan element max
//         }
//     }
//     // console.log(modeMap);s
//     return Elementmax;

// }

console.log("Nilai Modus adalah :", modus(angka));
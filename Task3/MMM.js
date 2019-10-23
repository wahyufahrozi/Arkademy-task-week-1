let angka = [2, 10, 4, 18, 10, 13, 52, 9, 20, 1, 6, 2, 4];

const mean = (angka) => {

    let temp = 0;
    for (let i = 0; i < angka.length; i++) {
        temp = temp + angka[i]
    }
    return temp / angka.length;

}

console.log("Nilai Mean adalah :", mean(angka));

const median = (angka) => {
    angka.sort(function (a, b) {
        return a - b;

    });
    // console.log(angka);

    let half = Math.floor(angka.length / 2);
    return angka[half]
}

console.log(`nilai tengah nya adalah:`, median(angka));


const modus = (angka) => {
    if (angka.length == 0)
        return null;
    var modeMap = {};
    var Elementmax = angka[0],
        maxCount = 1;
    for (var i = 0; i < angka.length; i++) {
        var el = angka[i];
        if (modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;
        if (modeMap[el] > maxCount) {
            Elementmax = el;
            maxCount = modeMap[el];
        }
    }
    return Elementmax;
}

console.log("Nilai Yang paling banyak keluar adalah :", modus(angka));
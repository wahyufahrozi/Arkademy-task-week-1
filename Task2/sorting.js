let bilangan = [6, 22, 34, 15, 2, 13, 26, 57, 42, 32];


const sorting = (bilangan) => {
    console.log(`data terkecil: `, Math.min(...bilangan));
    console.log(`data terbesar: `, Math.max(...bilangan));
    bilangan.sort(function (a, b) {
        return a - b
    });

    console.log(bilangan);
    bilangan.sort(function (a, b) {
        return b - a
    });
    console.log(bilangan);


}

sorting(bilangan);
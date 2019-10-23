function simplemath(uang, harga) {
    let hasil = uang / harga
    let bonus = hasil / 4

    let hasilAkhir = Math.floor(hasil + bonus)

    //setiap function harus memiliki function
    return hasilAkhir
}
console.log(simplemath(75000, 2500));
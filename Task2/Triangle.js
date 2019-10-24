function prima(number) {
    for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) { //Math.sqrt(number) untuk melakukan pengakaran
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}


function triangle(num) {
    let tampung = "";
    let array = [];
    if (num > 0 && num <= 10) {

        for (let i = 2; array.length < num; i++) {
            if (prima(i) == true) {
                tampung = tampung + i
                array.push(tampung)
            }
        }
        array.map(isi => console.log(isi));
    } else {
        console.log("harus besar dari 0 dan kecil atau sama dengan 10 ");

    }

}
triangle(4);
function printer(masukan) {
    let print = ["start", "off"];
    let perintah = [true, false];

    // perulangan untuk perintah masukan
    for (let p = 0; p < print.length; p++) {
        if (perintah[p] == masukan)
            return print[p]
    }
}

console.log(printer(true))
function printer(masukan) {
    let print = ["start", "off"];
    let perintah = [true, false];

    // perulangan untuk perintah masukan
    for (let i = 0; i < print.length; i++) {
        if (perintah[i] === masukan)
            return print[i]
    }
}

console.log(printer(false))
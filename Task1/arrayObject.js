// menampilkan semua Array

let temen = [{
        name: "wahyu",
        hobby: "futsal",
        umur: 23
    },
    {
        name: "nanang",
        hobby: "badminton",
        umur: 24
    },
    {
        name: "fauzan",
        hobby: "takraw",
        umur: 23
    }
];
console.log(temen);

// end

// nemambahkan teman
const pushTemen = (temen) => {
    let temenbaru = {
        name: "bayu",
        hobby: "futsal",
        umur: 25
    }
    temen.push(temenbaru);
    console.log(temen);

}
// end

// menghapus teman
const deleteTemen = (temen) => {
    temen.pop();
    console.log(temen);
}
// end

// ganti value object
const gantitemen = (temen) => {
    objek = temen.findIndex((objek => objek.name == "wahyu"));
    temen[objek].name = "anton",
        temen[objek].hobby = "berenang",
        temen[objek].umur = 26
    console.log(temen);
}
// end

pushTemen(temen);
deleteTemen(temen);
gantitemen(temen);
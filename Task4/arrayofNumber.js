const number = [123, 9, 27];

function arrayOfnumber(array) { //untuk penjumlahan
    let temp = array; //untuk menampung array    
    while (temp.length > 1) { //apabila panjang array tidak lebih dari satu maka dilakukan perulangan
        let storage = 0; //penampung data sementara
        temp.map(function (value, index) {
            storage = storage + value;
            // console.log(`Angka ${value} ada di index ${index}`);
        });
        temp = `${storage}`.split('').map(Number);
    }
    // console.log(temp);
    console.log(temp[0]);
}

arrayOfnumber(number);


// function greeting(nama) {
//     console.log('Hello ' + nama);

// }

// greeting('Wahyu')
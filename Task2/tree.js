function tree(tinggi, tahun) {


    if (tinggi > 0 && tahun > 0) {
        //let hasil = tinggi;  agar tinggi pohon megikuti tinggi tahun sebelumnya
        let hasil = tinggi;
        for (let i = 0; i < tahun; i++) {
            //musim semi
            hasil = hasil * 2;
            // musim gugur
            hasil = hasil + 1;

        }
        console.log(`Tinggi pohon : ${hasil} meter dalam Kurun waktu  ${tahun} tahun`);
    } else {
        console.log(`nilai harus diatas 0`);

    }

}

tree(2, 2);
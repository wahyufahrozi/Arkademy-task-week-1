function palindrom(word, find) {
    let hitung = 0;

    function selection(string) { //fungsi untuk menghitung berpakali polindrome yang muncul
        while (string.length >= find.length) {
            if (find === string.substring(0, find.length)) {
                hitung++;
                //jika yang dihitung sama hitungny di tambah 1
            }
            string = string.substring(1); //dilaklukan pemotogan satu huruf tiap perulangan
        }
    }
    selection(word);
    selection(word.split('').reverse().join(''));
    return hitung + 'kali';
}

console.log(palindrom("banananana", "nana"));
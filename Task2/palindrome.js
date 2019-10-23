function palindrom(word, find) {
    let hitung = 0;

    function selection(string) { //fungsi untuk menghitung berpakali polindrome yang muncul
        while (string.length >= find.length) {
            if (find === string.substring(0, find.length)) {
                hitung++;
            }
            string = string.substring(1);
        }
    }
    selection(word);
    selection(word.split('').reverse().join(''));
    return hitung + 'kali';
}

console.log(palindrom("banananana", "banana"));
function binary(number) {
    let result = [];

    for (let i = number; i > 0; i = parseInt(i / 2)) {
        result.push(i % 2);
    }
    return result.reverse().join("");
}
console.log(binary(5));
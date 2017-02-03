function sum (x) {
    return x.slice(2).map(Number).reduce((a,b) => a + b, 0);
}
console.log(sum(process.argv));
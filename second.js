//with arrays

let fibon = [0,1]
function fibo(n) {
    for (let count = 0; count < n; count++) {
        x = fibon[fibon.length-1] + fibon[fibon.length-2]
        fibon.push(x)
        
    }
    console.log(fibon);
    console.log(fibon[fibon.length-1]);
}
fibo(7)
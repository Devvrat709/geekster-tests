var n = prompt("Enter the last number of range: ")
parseInt(n)
// alert(n)
 
for(var i = 2; i<=n; i++){
var isPrime = 1

    for (var j = 2; j<=i/2; j++){
        if(i%j==0){
            isPrime = 0
            break
        }
    }
    if(isPrime==1){
        console.log(i)
        alert(`All the prime numbers between range 1 to ${n} is: ${i}` )
        // prompt(i)
    }
}
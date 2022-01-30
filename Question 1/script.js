var nth = prompt("Enter the number you want to know of fibonacci series: ")
parseInt(nth)
var prevNum = 0
var curentNum = 1
for(var i = 1; i<=nth-1; i++){
    var prePrevNum = prevNum
    prevNum = curentNum
    curentNum = prevNum + prePrevNum

}
alert(`The ${nth}th term is: ${curentNum}`)
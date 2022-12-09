let a=25
let b=36
function sumOfNumbers(a,b){
    let sum=a+b
    return (sum)
}
let Sum = sumOfNumbers(a,b)
console.log(Sum)


function max( a,b){

    if (a>b){
        return a;
    }else{
        return b;
    }
}
let greaterValue = max(93,143)
console.log(greaterValue);

var numArray = [140000, 104, 99,77,43,1];
numArray.sort(function(a, b) {
  return a - b;
});

console.log(numArray);
 

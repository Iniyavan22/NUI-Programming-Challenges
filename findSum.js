function findSum(mulitplier, noOfTimesToSum){

    var sumOfMultiplier =0

    for(var i=0;i<noOfTimesToSum;i++){
        sumOfMultiplier+=mulitplier*(i+1)
    }
    return `Total sum of the multiplier ${mulitplier} is : ${sumOfMultiplier}`
}


var mulitplier =5
var noOfTimesToSum =5

if (mulitplier || noOfTimesToSum !== undefined){
    console.log(findSum(mulitplier, noOfTimesToSum))
}
else{
    console.log("please enter the required parameters")
}


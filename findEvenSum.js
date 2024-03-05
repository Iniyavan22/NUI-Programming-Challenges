function findEvenSum(integerArray){

    var evenSum =0
    for(var i=0; i<integerArray.length ;i++){
        if(integerArray[i]%2==0){
            evenSum+=integerArray[i]
        }
    }
    return `Even number's sum in the Array is :${evenSum}`
}

var integerArray=[38, 3, 2, 8, 31]

if (integerArray !== undefined){
    console.log(findEvenSum(integerArray))
}
else{
    console.log("please enter the array")
}


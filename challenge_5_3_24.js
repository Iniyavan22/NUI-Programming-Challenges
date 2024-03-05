


function findNumberOfOccurance(sentence,wordToCheck){
    
    var count = sentence.split(wordToCheck).length - 1

    return count



}


var sentence = "be kind whenever possible. kindness is what matters"

var wordToCheck ="kind"

// console.log(findNumberOfOccurance(sentence,wordToCheck))



function stringSplit(word,jumper){
    
    var jumperStack = []

    var i=0
    var text=""

    while(i < (word.length)){
        text = word.slice(i,i+jumper)
        jumperStack.push(text)
        console.log(i)
        i=i+jumper
    }
    return jumperStack
}

var word = "numenticaui"

var jumper =2

// console.log(stringSplit(word,jumper))


function filterOut(arr, typeToCheck){

    var itemsToRemove =[]

    for(var i=0; i<arr.length; i++){
        if (typeof(arr[i])!= typeToCheck){
            itemsToRemove.push(arr[i])
        }
    }
    return itemsToRemove
}


var arr = ["a", "d", 1, true, "cd", 33]

var typeToCheck="number"

// console.log(filterOut(arr,typeToCheck))

// console.log(filterOut(["a", "d", 1, true, "cd", 33], "boolean"))

// console.log(filterOut(["a", "d", 1, true, "cd", 33], "string"))


function charRepeating(str){
    
    const n = str.length
    let maxCount = 0, curCount = 1
    let res = str[0]
     
    for (let i = 1; i < n; i++) {
        if (str[i] === str[i - 1]) {
            curCount++
        } else {
            if (curCount > maxCount) {
                maxCount = curCount
                res = str[i - 1]
            }
            curCount = 1
        }
    }
 
    if (curCount > maxCount) {
        maxCount = curCount
        res = str[n - 1]
    }
     
    return res

}



console.log(charRepeating("traaainngfornewbie"))
console.log(charRepeating("abb"))


function findSum(mulitplier, noOfTimesToSum){

    var sumOfMultiplier =0

    for(var i=0;i<noOfTimesToSum;i++){
        sumOfMultiplier+=mulitplier*(i+1)
    }
    return sumOfMultiplier
}




// console.log(findSum(5, 5))
// console.log(findSum(8, 3))


function findEvenSum(arr){

    var evenSum =0
    for(var i=0; i<arr.length ;i++){
        if(arr[i]%2==0){
            evenSum+=arr[i]
        }
    }
    return evenSum
}


// console.log(findEvenSum([38, 3, 2, 8, 31]))

function repeatString(word,noTimesToappend){
    var text=""

    for(var i=0;i<noTimesToappend;i++){
        text+=word
    }
    return text
}


// console.log(repeatString("arun", 3))

function removeDuplicates(arr){
    return arr.filter((item,index) => arr.indexOf(item) === index)
}

// console.log(removeDuplicates([1, "two", "two", 3, "two"]))




function numberToString(num){
    
    var refer_dict = {0:'zero',1:'one',2:'two',3:'three',4:'four', 5:'five',6:'six',7:'seven',8:'eight',9:'nine'}
    var stringNum = num.toString()
    var words=""

    for(var item of stringNum){
        words+=refer_dict[item]
    }
    return words
    
}

// console.log(numberToString(119))




function CheckSpaces(sentence){

    for(var i=0;i<sentence.length;i++){
        if(sentence[i]==" "){
            return true
        }
    }
    return false
}

// console.log(CheckSpaces("arun"))
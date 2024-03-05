function numberToWordConverter(number){
    
    var reference_dictionary = {0:'zero',1:'one',2:'two',3:'three',4:'four', 5:'five',6:'six',7:'seven',8:'eight',9:'nine'}
    var stringNum = number.toString()
    var numberToWords=""

    for(var item of stringNum){
        numberToWords+=reference_dictionary[item]
    }
    return `Number in words : ${numberToWords}`
    
}

var number = 119

if (number !== undefined){
    console.log(numberToWordConverter(119))
}
else{
    console.log("please enter the required parameter")
}

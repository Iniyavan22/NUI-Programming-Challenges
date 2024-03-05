function repeatString(word,noOfTimesToAppend){
    var repeatedString=""

    for(var i=0;i<noOfTimesToAppend;i++){
        repeatedString+=word
    }
    return `Result after appending the string : ${repeatedString}`
}

var word = "arun"
var noOfTimesToAppend =3

if (word || noOfTimesToAppend !== undefined){
    console.log(repeatString(word, noOfTimesToAppend))
}
else{
    console.log("please enter the required parameters")
}
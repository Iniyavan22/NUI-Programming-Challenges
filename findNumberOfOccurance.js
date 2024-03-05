


function findNumberOfOccurance(sentence,wordToCheck){
    
    sentence=sentence.toLowerCase()
    wordToCheck =wordToCheck.toLowerCase()
    
    var countOfWord = sentence.split(wordToCheck).length -1

    return `Number of Occurence of word is :${countOfWord}`

}


var sentence= "be kind whenever possible. kindness is what matters"

var wordToCheck ="kind"

if (sentence || wordToCheck != undefined){

    console.log(findNumberOfOccurance(sentence,wordToCheck))
}
else{
    console.log("please enter the required parameters")
}


function charRepeating(wordParam){
    
    
    var wordParamLength = wordParam.length
    var maxCount = 0
    var currCount = 1
    var consecutivelyRepeatedChar = wordParam[0]
     
    for (var i = 1; i < wordParamLength; i++) {
        if (wordParam[i] === wordParam[i - 1]) {
            currCount++
        } else {
            if (currCount > maxCount) {
                maxCount = currCount
                consecutivelyRepeatedChar = wordParam[i - 1]
            }
            currCount = 1
        }
    }
 
    if (currCount > maxCount) {
        maxCount = currCount
        consecutivelyRepeatedChar = wordParam[wordParamLength - 1]
    }
     
    return `Consecutively repeated Character is :"${consecutivelyRepeatedChar}"`

}

var wordParam ="traaainngfornewbie"

if (wordParam !== undefined){
    console.log(charRepeating(wordParam))
}
else{
    console.log("please enter the required parameter")
}

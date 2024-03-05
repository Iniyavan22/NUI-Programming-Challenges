function removeDuplicates(duplicatesArray){
    return duplicatesArray.filter((item,index) => duplicatesArray.indexOf(item) === index)
}

var duplicatesArray =[1, "two", "two", 3, "two"]


if (duplicatesArray !== undefined){
    console.log(removeDuplicates(duplicatesArray))
}
else{
    console.log("please enter the required parameter")
}
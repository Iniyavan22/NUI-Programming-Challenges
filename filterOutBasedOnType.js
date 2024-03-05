function filterOut(arrayWithDifferentTypes, typeToCheck){

    var invalidTypeArray =[]

    for(var i=0; i<arrayWithDifferentTypes.length; i++){
        if (typeof(arrayWithDifferentTypes[i])!= typeToCheck){
            invalidTypeArray.push(arrayWithDifferentTypes[i])
        }
    }
    return `Invalid elements in the  Array :[${invalidTypeArray}]`
}


var arrayWithDifferentTypes = ["a", "d", 1, true, "cd", 33]

var typeToCheck="number"

if (arrayWithDifferentTypes || typeToCheck !== undefined){
    console.log(filterOut(arrayWithDifferentTypes,typeToCheck))
}
else{
    console.log("please enter the required parameters")
}
// console.log(filterOut(["a", "d", 1, true, "cd", 33], "boolean"))

// console.log(filterOut(["a", "d", 1, true, "cd", 33], "string"))
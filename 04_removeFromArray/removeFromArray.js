const removeFromArray = function(array,...moreArgs) {

    let newArray = [];
    
    for (let i=0;i<array.length;i++){
        
        for (let j=0;j<moreArgs.length;j++){
        if(array[i] === moreArgs[j]){
        newArray[i] = "undefined";
        break;
    }
        else newArray[i] = array[i];
    }
    }

    newArray = newArray.filter(item => item != "undefined");
    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;

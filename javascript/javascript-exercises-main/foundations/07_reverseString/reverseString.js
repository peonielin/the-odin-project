const reverseString = function(str) {

    let newstr="";
    
    for (let i = str.length-1; i>=0; i--){
        newstr += str[i];
    }

    return newstr;
    
};

// Do not edit below this line
module.exports = reverseString;

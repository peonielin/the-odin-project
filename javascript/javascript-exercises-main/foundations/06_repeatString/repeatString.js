const repeatString = function(string, number) {

    if (number <0)
    return "ERROR";


    let output ="";

if (number >= 0){

        for (let step =0; step < number; step++){
            output += string ;
            
        }
 return output;
};
}



// Do not edit below this line
module.exports = repeatString;

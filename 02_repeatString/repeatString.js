const repeatString = function(word, count) {
// let result='';
// if(count>0){
// for(let i=1;i<=count;i++){
//      result= result.concat(word);
// }
// return result;
// }
// else if (count==0){
//     return "";
// }
// else{
//     return "ERROR";
// }
// };
if(count<0){
    return "ERROR"
    }
return word.repeat(count);

}

// Do not edit below this line
module.exports = repeatString;

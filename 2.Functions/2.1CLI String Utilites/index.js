function capitalize(str) {
  return str.toUpperCase();
}

const reverseString = function(str){

    let arrayStr = str.split("");

      let i=0;
      let j = arrayStr.length()-1;

      while(i<j){
        let temp = arrayStr[i];
        arrayStr[i] = arrayStr[j];
        arrayStr[j] = temp;

        i++;
        j--;
        
      }

      return arrayStr.join('');
}


const shout = (str) => {
    return str+"!";
}

let str = "Learn Functions"

console.log(capitalize(str));
console.log(str.reverseString())
console.log(shout(str));
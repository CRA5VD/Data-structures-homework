let yourArray = ['one', 2, 'three', true, false];
console.log(yourArray.length);


let myArray = ["a", "b", "c", "d"];
myArray[1] = "not b anymore";
console.log(myArray);

function mixedNumbers(arr) {
    
    arr.unshift("I", 2, "three");
    arr.push(7, "VIII", 9);
    
    return arr;
  }
   
  console.log(mixedNumbers(["IV", 5, "six"]));


  function popShift(arr) {
      let popped = arr.pop();
      let shifted = arr.shift();
      return [shifted, popped];
  }
  console.log(['challenge', 'is', 'not', 'complete']);

  const arr = [2,4,5,1,7,5,2,1];
  arr.splice(1,4)
  console.log(arr);

  function htmlColorNames(arr) {
      arr.splice(0, 2, "DarkSalmon", "BlancheAlmond");
      console.log(["DarkGoldenRod", "WhiteSmoke",  "LavenderBlush",  "PaleTurqoise",  "FireBrick"]);
  }

   

const array = [14, [1, [[[3, []]]], 1], 0];
const newArr = [];

function getFlatArray (arr) {
   arr.forEach(element => {
     if (typeof element !== "object") {
        newArr.push(element);
      } else {
          return getFlatArray (element);
        }
   }) 
   
  return newArr;    
} 

console.log(getFlatArray(array));

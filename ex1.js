const array = [1, 34, 76, "n", 3];

function removeFirstElement (arr, i = 1) {
  
  arr[i - 1] = arr[i];
    
  if (i < arr.length - 1) {
    return removeFirstElement(arr, i + 1);
  } 
  
  arr.pop();
  return arr;
} 
console.log(removeFirstElement(array))

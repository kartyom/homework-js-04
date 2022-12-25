const array = [
  { book: "Catcher in the Rye&quot", readStatus: true, percent: 40},
  { book: "Animal Farm", readStatus: true, percent: 20},
  { book: "Solaris", readStatus: false, percent: 90 },
  { book: "The Fall", readStatus: true, percent: 50 },
  { book: "White Nights", readStatus: false, percent: 60 } ,
  { book: "After Dark", readStatus: true, percent: 70 }
  ];
  
function fn (arr) {
  const filteredArr = arr.filter(element => element.readStatus); 
  filteredArr.sort((a, b) => b.percent - a.percent);
  
  for (let index of filteredArr) {
    index.percent = index.percent + "%"
  }
  
  return filteredArr;
} 

console.log(fn(array));

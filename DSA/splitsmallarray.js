/**
 * Given an array [2, 4, 2, 5, 3, 6, 3] and a size n
 * Chunk the array into smaller size arrays such that no subarray is greater than size n
**/



const chunk = (arr, size) => {
    for (let i=0; i < arr.length; i += size) {
 
         let tempArray;
         tempArray = arr.slice(i, i + size);
         console.log(tempArray);
     }
 
 
   
 }
 
 
 console.log(chunk([2, 4, 2, 5, 3, 6, 3], 3)); // [[2, 4, 2], [5, 3, 6], [3]]
 console.log(chunk([2, 4, 2, 5, 3, 6], 3)); // [[2, 4, 2], [5, 3, 6]]
 console.log(chunk([2, 4, 2, 5, 3, 6], 2)); // [[2, 4], [2, 5], [3, 6]]
 console.log(chunk([2, 4, 2, 5, 3, 6, 3], 1)); // [[2], [4], [2], [5], [3], [6], [3]]
 console.log(chunk([2, 4, 2, 5], 5)); // [[2, 4, 2, 5]]
 console.log(chunk([2, 2], 3)); // [[2, 2]]
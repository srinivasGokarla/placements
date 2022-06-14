
function runProgram(input){
 input = input.trim().split("\n")
 let arr = input[0].trim().split(" ").map(Number)
 let k = Number(input[1])
//    for(let i=0; i< arr.length-1; i++) {
//        for(let j = i+1; j < arr.length; j++) {
//            if(arr[i] + arr[j] === k) {
          
//                console.log(i,j)
//                break
               
//            }
//        }
//    }
console.log(IndusSum(arr,k))
  }
  function IndusSum(arr,k) {
      let left = 0, right = arr.length-1
      while(left < right) {
          let sum = arr[left] + arr[right]
          if(sum === k) {
           
            break
          }  else if(sum > k) {
            right--;

          } else  {
              
            left++
          }
      }
      return [left,right]
  }
  
  if (process.env.USERNAME === "srini") {
    runProgram(`2 7 15 14 16
    9`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    
   




function runProgram(input){
    input =  input.trim().split("\n");
    var N = Number(input[0])
     var arr = input[1].trim().split(" ").map(Number);
    // console.log(arr,N)
     console.log(NeelamJourney(arr,N))
     
  }
  function NeelamJourney(arr,N){
  var curr = 9999;
     var sum = 0;
     for(var i = 0; i < arr.length; i++){
         curr = Math.min(curr,arr[i]);
         sum =   sum + curr;
     }
     return sum;
    
  }
  
if (process.env.USERNAME === "srini") {
    runProgram(`5
    4 7 8 3 4`);
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
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  
  
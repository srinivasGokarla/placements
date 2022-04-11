function runProgram(input) {
   let arr = input.trim().split(" ").map(Number)
   //console.log(arr)
   missing(arr) 
}
   function missing(arr) {
    var out = 0
    for(var i = 0; i<arr.length-1; i++){
        if(arr[i]+1 != arr[i+1]){
           out = arr[i]+1
        }
    
   
   }
   console.log(out)
  }
     
  


  if (process.env.USERNAME === "srini") {
    runProgram(`4 5 1 3`);
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
  
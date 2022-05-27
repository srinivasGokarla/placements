function runProgram(input) {
    input = input.trim().split("\n");
    let arr = input[0].trim().split(" ").map(Number);
 
    let maximum = Infinity
    let ans;
 
    for(i=0;i<arr.length;i++){
        if(arr[i]<maximum){
            maximum = arr[i]
            ans = i
        }
    }
     
 console.log(ans)
     
 }
  
 
    if (process.env.USERNAME === 'srini') {
      runProgram(`3 4 5 0 1 2`)
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
function samosaCount(arr, K){
    let sum = 0;
    let count = 0;
    let i = 0;
    while (sum <= K){
        sum = sum + arr[i]
        i = i + 1
        count= count+1
    }   
    return count - 1;
    
    }
    
    function runProgram(input) {
     input = input.trim().split("\n");
     let [N,K] = input[0].trim().split(" ").map(Number);
     let arr = input[1].trim().split(" ").map(Number).sort((a,b) => (a-b));
    
    console.log( samosaCount(arr, K))
     }
    
    if (process.env.USERNAME === 'srini') {
      runProgram(`4 10
      5 4 2 4`);
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
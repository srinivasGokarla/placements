function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0];
    var line = 1;
    for(i = 0; i< test;i++){
        var size = +input[line++];
        var mat = [];
        for(k = 0;k < size; k++){
            mat.push(input[line++].trim().split(" ").map(Number))
        } 
     var mat1 = [];
   if(r== size/2 -1 && cl == size-1) {
        console.log(mat[r][size-1])
        mat1.push(mat[r][size-1])
    }
           }
       }
    
    
    
    
    
    
    if (process.env.USERNAME === "srini") {
      runProgram(`1
      3
      1 2 3
      4 5 6
      7 8 9`);
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
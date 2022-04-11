       
  function runProgram(input) {
    input = input.trim().split("\n")
    var n = input[0].trim().split(" ").map(Number)
    var line = 1;
    var mat = [];
    for(var i = 0; i < n; i++) {
    mat.push(input[line++].trim().split(" ").map(Number))
    //console.log(mat,n,input)
    }
   
}
    function sumWithoutBorders(N, M, matrix){
        var sum = 0
       for(var i = 1; i <= N-2; i++){
           for(var j =1; j <= M-2; j++){
      sum = sum + matrix[i][j]
           }
       }
        console.log(sum)
    }
    
if (process.env.USERNAME === "srini") {
    runProgram(`4 4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    13 14 15 16`);
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
  
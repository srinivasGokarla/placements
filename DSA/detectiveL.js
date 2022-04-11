function runProgram(input) {
    input = input.trim().split("\n");
    var testcases = +input[0];
    var line = 1;
    for(i = 0; i < testcases; i++) {
        var [n,m] = input[line++].trim().split(" ").map(Number);
        var arr = [];
    
        for(var j = 0; j < n; j++) {
            arr.push(input[line++].trim().split(" ").map(Number));
        }
        
        detective(arr,n,m)
    }
   
}
function detective(arr,n,m) {
    let mat = []
    let size = n * m
    let count = 0;
    let top = 0,bottom = n-1,left = 0,right = m-1;
    while(count < size) {
        for(let r = top; r <= bottom && count < size; r++) {
            mat.push(arr[r][left])
            count++
        }
        left++;
   
        for(let cl = left; cl <= right && count < size; cl++) {
            mat.push(arr[bottom][cl])
            count++
        }
        bottom--;
        

    }
    console.log(mat.join(" "))
    
}
    
    if (process.env.USERNAME === "srini") {
      runProgram(`2
      3 3
      1 2 3
      4 5 6
      7 8 9
      4 3
      1 2 3
      4 5 6
      7 8 9
      10 11 12`);
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
    
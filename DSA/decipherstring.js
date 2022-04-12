function runProgram(input) {
    input = input.trim().split("\n")
    //console.log(input)
    let testcases = Number(input[0])
    let line = 1;
    for(let l = 0; l < testcases; l++){
        let size = Number(input[line++])
        let str = input[line++].trim().split("")
     
    var res = ""
    for(var i = 0; i < str.length; i++){
        var c = str[i];
        var k = str[i+1]
        for(var j = 0; j < k; j++){
            res += c
        }
    }
 console.log(res)
}
}
    if (process.env.USERNAME === "srini") {
      runProgram(`2
      5
      aabcc
      5
      aazaa`);
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
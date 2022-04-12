function runProgram(input) {
    input = input.trim().split("\n")
    //console.log(input)
    let testcases = Number(input[0])
    let line = 1;
    for(let i = 0; i < testcases; i++){
        let size = Number(input[line++])
        let str = input[line++].trim().split("")
      //   console.log(testcases);
      //  console.log(size)
      //   console.log(str)
    let k = 0;
    let res = "";
    while(k < size) {
      let count = 0;
      for(let j = k; j < size; j++) {
        if(str[k] != str[j]) {
          break;
        } else {
          count++;
        }
      }
      res = res + str[k] + count;
      k = j;
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
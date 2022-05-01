function runProgram(input) {
    input = input.trim().split("\n")
    var N = Number(input[0])
    var arr = input[1].trim().split(" ").map(Number)
    var K = Number(input[2])
    if ((SumExists(N, arr, K))) {
        console.log("yes")
    } else {
        console.log("no")
    }
  }
  function SumExists(N, arr, K) {
    if (K == 0) {
        return true;
    } if (N == 0) {
        return false;
    } if (arr[N - 1] > K) {
        return SumExists(N - 1, arr, K)
    }
    return SumExists(N - 1, arr, K) || SumExists(N - 1, arr, K - arr[N - 1])
  }
  
  if (process.env.USERNAME === "srini") {
    runProgram(`9
    1 2 3 4 5 6 7 8 9
    5`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function(input) {
        read += input;
    });
    process.stdin.on("end", function() {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function() {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
  }
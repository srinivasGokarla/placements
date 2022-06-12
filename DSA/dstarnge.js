function runProgram(input) {
    input = input.trim().split("\n");
    var N = Number(input[0])
    var arr = []
    for (var i = 1; i <= N; i++) {
        arr.push(i)
    }
  //  console.log(arr)
    console.log(N)
    DrStrange(arr, N, newarr = [], 0)
}

function DrStrange(arr, N, newarr, steps) {
    if (N == steps) {
        console.log(newarr.join(" "))
        return;
    } if (arr.length > 0) {
        console.log(newarr.join(" "))
    }
    for (var i = steps; i < N; i++) {
        newarr.push(arr[i])
        DrStrange(arr, N, newarr, i + 1)
        newarr.pop();
    }
}

if (process.env.USERNAME === "srini") {
    runProgram(`3 `);
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
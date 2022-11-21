function runProgram(input) {
    input = input.trim().split("\n")
 let N = Number(input[0])
 console.log(NumberOfWays(N))

}
function NumberOfWays(N) {
    if(N == 0 || N == 1)
    return 1
   else if(N == 2)
    return 2
    else {
        return (NumberOfWays(N-1) + NumberOfWays(N-2) + NumberOfWays(N-3))
    }
}


if (process.env.USERNAME === "srini") {
    runProgram(`5`);
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
function runProgram(input) {
    input = input.trim().split("\n")
   let N = Number(input[0]);
   let arr = input[1].trim().split(" ").map(Number)
   console.log(N,arr)
   let arr1 = []
   for (i = 0; i < N; i++) {
     arr1.push(i)
   }
   for (let i = 0; i < N; i++) {
     for (let j = 0; j < N - i - 1; j++){
       if (arr[j] > arr[j + 1]) {
         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
         [arr1[j], arr1[j + 1]] = [arr1[j + 1], arr1[j]];
       }
     }
   }
   console.log(arr1.join(" "));
 
 }
if (process.env.USER === "srini") {
  runProgram(`5
  4 5 3 7 1`);
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
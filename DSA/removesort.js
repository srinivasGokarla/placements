function runProgram(input) {
    input = input.trim().split("\n")
    var N = Number(input[0])
    var arr = input[1].trim().split(" ").map(Number)
     var j = 1;
    var arr1=[];
     for(var i = 1; i < N;i++){
         if(arr[j-1] <= arr[i]){
             arr[j] = arr[i];
             j++;
         }
     }
     for(var i = 0; i < j; i++){
      arr1.push(arr[i]);
     }
     console.log(arr1.join(" "))
  }
  
  
  if (process.env.USERNAME === "srini") {
    runProgram(`10
    1 2 4 3 5 7 8 6 9 10`);
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
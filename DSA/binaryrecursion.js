function runProgram(input) {
    input = input.trim().split("\n")
    var[N,K] = input[0].trim().split(" ").map(Number)
    var arr = input[1].trim().split(" ").map(Number)
    console.log(recursiveBinarySearch(arr,K,0,N-1,))
      }
   
      function recursiveBinarySearch(arr,K,lo,hi) {
        while(lo <= hi) {
            var  mid = (lo + Math.floor((hi-lo) / 2));
              if(arr[mid] == K) {
                  return 1;
              } else if(arr[mid] > K) {
                recursiveBinarySearch(arr,K,lo,mid-1)
   
              } else if(arr[mid] < K) {
                recursiveBinarySearch(arr,K,lo,mid+1)
                 }
                  return -1;
              
          }
      }
     
  if (process.env.USERNAME === "srini") {
    runProgram(`5 0
    2 -2 0 3 4`);
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
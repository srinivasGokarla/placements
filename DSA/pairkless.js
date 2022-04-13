function runProgram(input) {
    input  = input.trim().split("\n")
   let testcases = Number(input[0])
   let line = 1;
   for(let i = 0; i < testcases; i++) {
       let n = Number(input[line++])
       let arr = input[line++].trim().split(" ").map(Number)
       let k = Number(input[line++])
      // console.log(testcases,n,arr,k)
       console.log(pairKless(arr,k,n))
   }

}
function pairKless(arr,k,n){
    let l =0, r = n-1,ans= -1;
    while(l<r){
        if(arr[l]+arr[r] < k){
            if(arr[l]+arr[r] > ans){
                ans = arr[l]+arr[r]
            }
            l++
        }
        else{
            
            r--;
        }
        
    }
    return ans
  }
  

  if (process.env.USERNAME === "srini") {
    runProgram(`2
    5
    1 2 3 4 5
    7
    3
    30 10 20
    15`);
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
  
function runProgram(input){
    input=input.split("\n");
    let[n,k] = input[0].trim().split(" ").map(Number)
    let arr = input[1].trim().split(" ").map(Number)
console.log(countTriplets(n,k,arr))
}
function countTriplets(n,k,arr){
      
        arr.sort(function(a,b){return b-a});

        let ans = 0;
        for (let i = 0; i < n - 2; i++){
            let j = i + 1, k = n - 1;
            while (j < k){
            
                if (arr[i] + arr[j] + arr[k] >= sum)
                    k--;
                else
                {
                    ans += (k - j);
                    j++;
                }
            }
        }
        return ans;
    }
 
if (process.env.USERNAME === "srini") {
    runProgram(`4 2
    -3 -2 -1 0`);
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
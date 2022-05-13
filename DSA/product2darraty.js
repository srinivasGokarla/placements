function runProgram(input){
    input = input.split("\n");
    let [n,m,P] = input[0].split(" ").map(Number);
    let line = 1;
    let arr = [];
    for(let i = 0; i < n; i++){
        arr.push(input[line++].split(" ").map(Number));
    }
    //console.log(sum);
    let count = 0;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(i+3 <= n){
                if(arr[i][j]*arr[i+1][j]*arr[i+2][j] == P){
                    count++;
                }
            }
            if(j+3 <= m){
                if(arr[i][j]*arr[i][j+1]*arr[i][j+2] == P){
                    count++;
                }
            }
            if(i+3<=n && j+3<=m){
                if(arr[i][j]*arr[i+1][j+1]*arr[i+2][j+2] == P){
                    count++;
                }
            }
            if(i-2 >= 0 && j+3 <= m){
                if(arr[i][j]*arr[i-1][j+1]*arr[i-2][j+2] == P){
                    count++;
                }
            }
        }
    }
    console.log(count);
}

if (process.env.USERNAME === "srini") {
    runProgram(`3 3 6
    3 2 1
    2 2 2
    1 5 1`);
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
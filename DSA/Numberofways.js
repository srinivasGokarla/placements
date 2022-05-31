function runProgram(input) {
    input  = input.trim().split(" ")
    var n = Number(input)
 // console.log(n)
 console.log( NumberofWays(n))
  }
   var dp =[]
  function NumberofWays(n){
     
      dp[0] = 1;
      dp[1] = 1;
      dp[2]  = 2;
      for(var i = 3; i <= n; i++) {
          dp[i] = dp[i-1] + dp[i-2] + dp[i-3]
      }
      return dp[n]
  }
  
  
  
  

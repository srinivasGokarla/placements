function rotateBy180(N, matrix){
    //write code here
   
        if (matrix == null || matrix.length == 0) {
            return;
        }
 
        for (var i = 0; i < N /2; i++) {
            for (var j = 0; j < N; j++) {
                var temp = matrix[i][j];
                matrix[i][j] = matrix[N - i - 1][N - j - 1];
                matrix[N - i - 1][N - j - 1] = temp;
            }
        }
 
        if (N % 2 == 1){
            for (var j = 0; j < Math.floor(N/2); j++) {
                var temp = matrix[Math.floor(N/2)][j];
                matrix[Math.floor(N/2)][j] = matrix[Math.floor(N/2)][N - j - 1];
                matrix[Math.floor(N/2)][N -j- 1] = temp;
            }
        }
        
      for(var k = 0; k < matrix.length; k++) {
        console.log(matrix[k].join(" "));
        }
    }
 
        
     
 

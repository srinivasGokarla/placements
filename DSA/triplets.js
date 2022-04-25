function printAllAPTriplets(arr, n)
{
    let count = 0
    for (let i = 1; i < n - 1; i++)
    {
 
        // Search other two elements of
        // AP with arr[i] as middle.
        for (let j = i - 1, k = i + 1; j >= 0 && k < n;)
        {
 
            // if a triplet is found
            if (arr[j] + arr[k] == 2 * arr[i])
            {
                count++
             
                // Since elements are distinct,
                // arr[k] and arr[j] cannot form
                // any more triplets with arr[i]
                k++;
                j--;
            }
 
            // If middle element is more move to
            // higher side, else move lower side.
            else if (arr[j] + arr[k] < 2 * arr[i])
                k++;       
            else
                j--;       
        }
    }
    console.log(count)
}
 
// Driver code
    let arr = [ 2, 6, 9, 12, 17,
                22, 31, 32, 35, 42 ];
    let n = arr.length;
    printAllAPTriplets(arr, n);
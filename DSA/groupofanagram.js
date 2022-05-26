// let obj = {};
//     for(let i=0;i<strs.length;i++)
//         {
//             let x = strs[i].split("").sort();
//             if(obj[x]==undefined)
//                 obj[x]=[strs[i]];
//             else
//                 obj[x].push(strs[i]);
//         }
//     return Object.values(obj)
function groupAnagrams(strs) {
    let result = {};
  for (let word of strs) {
      let cleansed = word.split("").sort().join("");
      if (result[cleansed]) {
        result[cleansed].push(word);
      } else {
        result[cleansed] = [word];
      }
    }
  return Object.values(result);
  }
    
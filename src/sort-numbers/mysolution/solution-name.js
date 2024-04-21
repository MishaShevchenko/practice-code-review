/**
 *
 */
export const solutionName2 = (arr = []) => {
  const newarr = arr.sort((a, b) => a - b);
  return newarr;
};

// export const solutionName3 = (arr = []) => {
//   let newArray = arr;
//   let result = [];
//   while (newArray.length !== 0) {
//     let min = Math.min(newArray);
//     result.push(min);
//     const index = newArray.indexOf(min);
//     newArray = newArray.splice(index, 1);
//   }

//   return result;
// };
// difference([1, 2, 1], [2, 3]); //  [1]

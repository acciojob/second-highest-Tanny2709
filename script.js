function secondHighest(arr) {
  if (arr.length < 2) return -Infinity;

  let max = -Infinity;
  let secondMax = -Infinity;

  for (let num of arr) {
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num < max && num > secondMax) {
      secondMax = num;
    }
  }

  // If all elements are the same, secondMax stays -Infinity
  return secondMax;
}

// ✅ Test Cases
console.log(secondHighest([5, 1, 2, 3, 4])); // 4
console.log(secondHighest([-1, -2, -3, -4, -5])); // -2
console.log(secondHighest([])); // -Infinity
console.log(secondHighest([1])); // -Infinity
console.log(secondHighest([1, 1, 1, 1])); // -Infinity

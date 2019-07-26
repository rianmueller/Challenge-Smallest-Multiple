/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function(ceiling) {
  // do work here
  // Some optimizations:
  // 1) The result must be divisible by 'ceiling' so the loop iterates through multiples of 'ceiling' rather than all integers
  // 2) If a number is divisible by 20 then it is already divisible by 2, 4, 5, and 10, so checking these numbers is redundant. 18 also makes 9, 6, and 3 redundant, 16 makes 8 and 4 redundant, 15 makes 5 redundant, and 14 makes 7 redundant. So when the ceiling is 20 a number only has to be checked against 11-20, 1-10 are implicit. This should work as a general rule for all values of ceiling.

  let x = 1;
  for (y = Math.floor(ceiling / 2) + 1; y <= ceiling - 1; y++) {
    if ((x * ceiling) % y !== 0) {
      x++;
      y = Math.floor(ceiling / 2);
    }
  }
  return x * ceiling;
};

function longestSubstring(s) {
    // Handle empty string case
    if (!s) return 0;

    let longest = 0;
    let left = 0;
    const charSet = new Set();

    for (let right = 0; right < s.length; right++) {
      const currentChar = s[right];
  
      while (charSet.has(currentChar)) {
        charSet.delete(s[left]);
        left++;
      }
  
      charSet.add(currentChar);
      longest = Math.max(longest, right - left + 1);
    }
  
    return longest;
  }
module.exports = { longestSubstring };
[26/04, 1:05 pm] Hemant: function smallestMissingPositiveInteger(nums) {
  // Handle the base case where the list is empty
  if (!nums.length) return 1;

   const positiveNumbers = new Set();
  for (const num of nums) {
    if (num > 0) {
      positiveNumbers.add(num);
    }
  }

  for (let i = 1; i <= positiveNumbers.size + 1; i++) {
    if (!positiveNumbers.has(i)) {
        return i;
    }
  }

  return positiveNumbers.size + 1;
}
  
  module.exports = smallestMissingPositiveInteger;

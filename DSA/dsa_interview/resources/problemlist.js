// ✅ Solved Problems Database
const solvedProblems = {
  "MySQL": {
    176: "Second Highest Salary",
    180: "Consecutive Numbers",
    181: "Employees Earning More Than Their Managers",
    185: "Department Top Three Salaries",
    196: "Delete Duplicate Emails",
    585: "Investments in 2016",
    1068: "Product Sales Analysis I",
    1070: "Product Sales Analysis III",
    1122: "Relative Sort Array",
    1141: "User Activity for the Past 30 Days I",
    1148: "Article Views I",
    1164: "Product Price at a Given Date",
    1204: "Last Person to Fit in the Bus",
    1211: "Queries Quality and Percentage",
    1251: "Average Selling Price",
    1280: "Students and Examinations",
    1321: "Restaurant Growth",
    1327: "List the Products Ordered in a Period",
    1341: "Movie Rating",
    1378: "Replace Employee ID With The Unique Identifier"
  },
  "Arrays": {
    1: "Two Sum",
    2: "Add Two Numbers",
    26: "Remove Duplicates from Sorted Array",
    27: "Remove Element",
    28: "Find the Index of the First Occurrence in a String",
    33: "Search in Rotated Sorted Array",
    34: "Find First and Last Position of Element",
    35: "Search Insert Position",
    53: "Maximum Subarray",
    75: "Sort Colors",
    121: "Best Time to Buy and Sell Stock",
    122: "Best Time to Buy and Sell Stock II",
    169: "Majority Element",
    189: "Rotate Array",
    238: "Product of Array Except Self",
    643: "Maximum Average Subarray I",
    977: "Squares of a Sorted Array",
    1480: "Running Sum of 1d Array",
    2261: "K Divisible Elements Subarrays",
    2262: "Total Appeal of A String",
    2958: "Length of Longest Subarray With at Most K Frequency",
    3512: "Minimum Operations to Make Array Sum Divisible by K"
  },
  "Strings": {
    3: "Longest Substring Without Repeating Characters",
    5: "Longest Palindromic Substring",
    17: "Letter Combinations of a Phone Number",
    76: "Minimum Window Substring",
    125: "Valid Palindrome",
    131: "Palindrome Partitioning",
    132: "Palindrome Partitioning II",
    151: "Reverse Words in a String",
    344: "Reverse String",
    383: "Ransom Note",
    387: "First Unique Character in a String",
    392: "Is Subsequence",
    680: "Valid Palindrome II",
    944: "Reverse Words in a String II",
    1047: "Remove All Adjacent Duplicates In String",
    1189: "Maximum Number of Balloons",
    1455: "Check If a Word Occurs As a Prefix",
    1461: "Check If a String Contains All Binary Codes",
    2259: "Remove Digit From Number to Maximize Result"
  },
  "Linked List": {
    19: "Remove Nth Node From End of List",
    92: "Reverse Linked List II",
    141: "Linked List Cycle",
    160: "Intersection of Two Linked Lists",
    206: "Reverse Linked List",
    876: "Middle of the Linked List",
    1669: "Merge In Between Linked Lists"
  },
  "Stack / Queue": {
    84: "Largest Rectangle in Histogram",
    946: "Validate Stack Sequences"
  },
  "Trees": {
    94: "Binary Tree Inorder Traversal",
    100: "Same Tree",
    101: "Symmetric Tree",
    102: "Binary Tree Level Order Traversal",
    104: "Maximum Depth of Binary Tree",
    108: "Convert Sorted Array to BST",
    110: "Balanced Binary Tree",
    226: "Invert Binary Tree",
    513: "Find Bottom Left Tree Value",
    515: "Find Largest Value in Each Tree Row",
    538: "Convert BST to Greater Tree",
    540: "Single Element in a Sorted Array",
    572: "Subtree of Another Tree",
    593: "Cousins in Binary Tree",
    1448: "Count Good Nodes in Binary Tree"
  },
  "Graphs": {
    133: "Clone Graph",
    841: "Keys and Rooms"
  },
  "Dynamic Programming": {
    70: "Climbing Stairs",
    198: "House Robber",
    907: "Sum of Subarray Minimums",
    918: "Maximum Sum Circular Subarray",
    1004: "Max Consecutive Ones III"
  },
  "Two Pointers / Sliding Window": {
    11: "Container With Most Water",
    15: "3Sum",
    18: "4Sum",
    167: "Two Sum II - Input Array Is Sorted",
    560: "Subarray Sum Equals K",
    930: "Binary Subarrays With Sum",
    1011: "Capacity To Ship Packages Within D Days"
  },
  "Backtracking / Recursion": {
    39: "Combination Sum",
    46: "Permutations",
    77: "Combinations",
    131: "Palindrome Partitioning",
    79: "Word Search"
  },
  "Math / Bit Manipulation": {
    136: "Single Number",
    231: "Power of Two",
    268: "Missing Number",
    283: "Move Zeroes",
    485: "Max Consecutive Ones"
  }
};


function checkProblem(num) {
  for (const topic in solvedProblems) {
    if (num in solvedProblems[topic]) {
      return `✅ Solved! [${num}] "${solvedProblems[topic][num]}" under Topic: ${topic}`;
    }
  }
  return `❌ Not solved yet: [${num}]`;
}

console.log(checkProblem(76));   // Solved
console.log(checkProblem(500));  // Not solved

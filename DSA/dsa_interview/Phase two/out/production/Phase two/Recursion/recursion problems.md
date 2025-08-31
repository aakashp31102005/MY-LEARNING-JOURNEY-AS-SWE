# 🚀 **COMPLETE RECURSION & BACKTRACKING ROADMAP**
**(FAANG Interview Ready - No DP/Trees/Graphs)**

## **📍 STAGE 1: Recursion Foundations (Week 1)**
*Build recursion mechanics & confidence*

### **Basic Mathematical Recursion:**
1. Factorial of a number
2. Fibonacci sequence (nth Fibonacci) - LC 509
3. Power function (x^n) - LC 50 (Pow(x,n))
4. GCD using recursion
5. Sum of digits recursively
6. **Tail vs Head Recursion examples** (concept understanding)

### **Basic Array/String Recursion:**
7. Reverse a string recursively
8. Print numbers 1 to N and N to 1 recursively
9. Binary Search (recursive) - LC 704
10. Check if array is sorted recursively
11. Find Max/Min element in array recursively
12. Check if string is palindrome recursively

---

## **📍 STAGE 2: Linear & Array Recursion (Week 2)**
*Master single-path recursion*

### **Array Problems:**
13. Reverse array recursively
14. Sum of array elements recursively
15. **Generate all subsequences of an array**
16. Subsets - LC 78
17. Subsets II - LC 90
18. **Subset Sum Problem** (classic)

### **String Recursion:**
19. Print all subsequences of a string
20. **Generate all anagrams of a string**
21. Decode Ways - LC 91
22. **Remove/insert characters recursively**

---

## **📍 STAGE 3: Core Backtracking Patterns (Week 3-4)**
*The heart of recursion interviews*

### **Permutations & Combinations:**
23. Permutations - LC 46
24. Permutations II - LC 47
25. Generate all permutations of a string
26. Combinations - LC 77
27. Combination Sum - LC 39
28. Combination Sum II - LC 40
29. Combination Sum III - LC 216

### **Classic Backtracking:**
30. Generate Parentheses - LC 22
31. Letter Combinations of Phone Number - LC 17
32. Palindrome Partitioning - LC 131
33. Restore IP Addresses - LC 93

---

## **📍 STAGE 4: Grid & Matrix Backtracking (Week 5)**
*Spatial recursion mastery*

### **Grid Problems:**
34. **Rat in a Maze** (all paths)
35. **Count paths in grid** (top-left to bottom-right)
36. **Print all paths in matrix** (only right/down moves)
37. Word Search - LC 79
38. **Unique Paths III** - LC 980
39. Number of Islands - LC 200 (recursive approach)

### **Advanced Grid:**
40. N-Queens - LC 51
41. N-Queens II - LC 52
42. Sudoku Solver - LC 37

---

## **📍 STAGE 5: Divide & Conquer (Week 6)**
*Critical FAANG pattern - was missing in original*

### **Sorting Algorithms:**
43. **Merge Sort** (implementation from scratch)
44. **Quick Sort** (implementation from scratch)
45. **Find Kth Largest Element** - LC 215 (QuickSelect)

### **D&C Problem Solving:**
46. Maximum Subarray - LC 53 (D&C approach)
47. Different Ways to Add Parentheses - LC 241
48. Majority Element - LC 169 (D&C approach)
49. **Construct Binary Tree from Preorder/Inorder** - LC 105 *(if you want to touch trees)*

---

## **📍 STAGE 6: Advanced Recursion Patterns (Week 7)**
*FAANG favorites & tricky patterns*

### **Advanced Backtracking:**
50. **Remove Invalid Parentheses** - LC 301 ⭐ *Meta/Google favorite*
51. **Expression Add Operators** - LC 282 ⭐ *Google classic*
52. **Partition to K Equal Sum Subsets** - LC 698 ⭐ *Amazon favorite*
53. **Beautiful Arrangement** - LC 526 *Microsoft loves*
54. Word Search II - LC 212 (backtracking part)
55. **Word Break** (recursive + backtracking version) - LC 139

### **Advanced String Recursion:**
56. **Wildcard Matching** - LC 44 (recursive approach)
57. **Regular Expression Matching** - LC 10 (recursive approach)
58. **Interleaving String** - LC 97 (recursive approach)

### **Game Theory & Decision Recursion:**
59. **Predict the Winner** - LC 486
60. **Stone Game** variations

---

## **📍 STAGE 7: Classic Recursion Mastery (Week 8)**
*Famous interview classics*

### **Mathematical Classics:**
61. **Tower of Hanoi** ⭐ *Classic interview question*
62. **Josephus Problem** ⭐ *Famous recursion problem*
63. Generate all Binary Strings of length N
64. Generate Gray Code sequence - LC 89
65. **Count Numbers with Unique Digits** - LC 357

### **Final Challenges:**
66. Climbing Stairs - LC 70 (multiple approaches)
67. House Robber - LC 198 (recursive approach)
68. **Generate all Balanced Parentheses variations**

---

## **🎯 PRACTICE STRATEGY:**

### **Daily Schedule:**
- **Week 1-2:** 3-4 problems/day (foundations)
- **Week 3-4:** 4-5 problems/day (backtracking)
- **Week 5-6:** 3-4 problems/day (grid + D&C)
- **Week 7-8:** 2-3 problems/day (advanced + review)

### **Key Success Metrics:**
✅ Can solve any permutation/combination problem in 15-20 mins  
✅ Can identify backtracking pattern instantly  
✅ Can implement Merge/Quick Sort from scratch  
✅ Can explain recursion tree and time complexity  
✅ Can optimize with memoization when needed  

---

## **🚨 CRITICAL TEMPLATES TO MASTER:**

### **Backtracking Template:**
```python
def backtrack(path, remaining_choices, result):
    # Base case
    if len(path) == target_length:
        result.append(path[:])
        return
    
    # Try each choice
    for i, choice in enumerate(remaining_choices):
        # Make choice
        path.append(choice)
        # Recurse with updated choices
        backtrack(path, remaining_choices[i+1:], result)
        # Undo choice (backtrack)
        path.pop()
```

### **Divide & Conquer Template:**
```python
def divide_conquer(arr, left, right):
    # Base case
    if left >= right:
        return base_result
    
    # Divide
    mid = (left + right) // 2
    left_result = divide_conquer(arr, left, mid)
    right_result = divide_conquer(arr, mid+1, right)
    
    # Conquer (combine results)
    return combine(left_result, right_result)
```

---

## **🏆 FINAL COVERAGE:**
- ✅ **Mathematical Recursion** 
- ✅ **Array Recursion**
- ✅ **String Recursion** 
- ✅ **Backtracking (Basic + Advanced)**
- ✅ **Grid/Matrix Recursion**
- ✅ **Divide & Conquer** *(Now Complete!)*
- ✅ **Game Theory Recursion**
- ✅ **Classic Interview Problems**

**Total: 68 Problems** covering **every recursion pattern** tested in FAANG interviews!

After completing this roadmap, you'll crush any recursion problem thrown at you! 🚀
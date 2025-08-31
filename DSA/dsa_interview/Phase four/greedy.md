
# 🎯 **CORRECTED ULTIMATE GREEDY ALGORITHMS ROADMAP**

## **📍 STAGE 1: Greedy Fundamentals (Week 1)**
*Build intuition for when greedy works*

### **Basic Greedy Concepts:**
1. **What is Greedy Algorithm?** - Understanding optimal substructure
2. **When Greedy Works vs DP** - Decision framework
3. **Greedy Choice Property** - Local optimum leads to global optimum

### **Simple Greedy Problems:**
4. **Assign Cookies** - LC 455 ⭐
5. **Lemonade Change** - LC 860
6. **Best Time to Buy and Sell Stock II** - LC 122 ⭐
7. **Monotonic Array** - LC 896
8. **Minimum Add to Make Parentheses Valid** - LC 921

### **Two-Pointer Greedy:**
9. **Container With Most Water** - LC 11 ⭐
10. **Boats to Save People** - LC 881 ⭐

---

## **📍 STAGE 2: Interval Scheduling (Week 2)**
*Master interval problems - FAANG favorites*

### **Basic Interval Problems:**
11. **Activity Selection Problem** (classic greedy)
12. **Non-overlapping Intervals** - LC 435 ⭐
13. **Meeting Rooms** - LC 252
14. **Meeting Rooms II** - LC 253 ⭐⭐
15. **Minimum Number of Arrows to Burst Balloons** - LC 452 ⭐

### **Interval Optimization:**
16. **Car Pooling** - LC 1094
17. **My Calendar I** - LC 729
18. **Interval List Intersections** - LC 986 *(Analysis, not pure greedy)*
19. **Remove Covered Intervals** - LC 1288
20. **Minimum Number of Taps to Open** - LC 1326 ⭐⭐

---

## **📍 STAGE 3: Job Scheduling & Deadlines (Week 3)**
*Classic scheduling theory problems*

### **Deadline-based Scheduling:**
21. **Job Scheduling with Deadlines and Profits** (classic)
22. **Maximum Profit in Job Scheduling** - LC 1235 ⭐⭐
23. **Task Scheduler** - LC 621 ⭐
24. **Course Schedule III** - LC 630 ⭐⭐
25. **Single-Threaded CPU** - LC 1834

### **Priority-based Problems:**
26. **Minimum Platforms** (railway scheduling classic)
27. **Maximum Events That Can Be Attended** - LC 1353
28. **Maximum Events That Can Be Attended II** - LC 1751

---

## **📍 STAGE 4: Array & String Greedy (Week 4)**
*Greedy choices on sequences*

### **String Manipulation:**
29. **Remove K Digits** - LC 402 ⭐⭐
30. **Largest Number** - LC 179 ⭐
31. **Reorganize String** - LC 767 ⭐
32. **Partition Labels** - LC 763 ⭐
33. **Minimum Deletions to Make Character Frequencies Unique** - LC 1647

### **Array Greedy:**
34. **Candy** - LC 135 ⭐⭐
35. **Gas Station** - LC 134 ⭐
36. **Jump Game** - LC 55 ⭐
37. **Jump Game II** - LC 45 ⭐⭐
38. **Maximum Units on a Truck** - LC 1710

---

## **📍 STAGE 5: Heap-Based Greedy (Week 5)**
*Priority queue + greedy choices*

### **Heap + Greedy Fundamentals:**
39. **Last Stone Weight** - LC 1046
40. **Furthest Building You Can Reach** - LC 1642 ⭐
41. **IPO** - LC 502 ⭐⭐
42. **Minimum Cost to Hire K Workers** - LC 857 ⭐⭐

### **Advanced Heap Greedy:**
43. **Hand of Straights** - LC 846 ⭐
44. **Reduce Array Size to The Half** - LC 1338
45. **Reorganize String** - LC 767 (heap approach)
46. **Task Scheduler** - LC 621 (heap approach)

---

## **📍 STAGE 6: Stack-Based Greedy (Week 6)**
*Monotonic stack + greedy decisions*

### **Stack Greedy Patterns:**
47. **Remove Duplicate Letters** - LC 316 ⭐⭐
48. **Smallest Subsequence of Distinct Characters** - LC 1081
49. **Remove K Digits** - LC 402 (stack approach)
50. **Next Greater Element I** - LC 496

### **Advanced Stack Greedy:**
51. **Create Maximum Number** - LC 321 ⭐⭐⭐ *(Moved to advanced)*
52. **Maximum Binary Tree** - LC 654
53. **132 Pattern** - LC 456
54. **Daily Temperatures** - LC 739

---

## **📍 STAGE 7: Mathematical & Optimization Greedy (Week 7)**
*Number theory + greedy optimization*

### **Classical Greedy Algorithms:**
55. **Fractional Knapsack** (classic greedy proof)
56. **Egyptian Fraction** representation  
57. **Huffman Coding Implementation**
58. **Optimal Merge Pattern** (file merging cost)

### **Optimization Problems:**
59. **Connect Sticks** (classic problem, not LC number)
60. **Minimize Deviation in Array** - LC 1675 ⭐⭐
61. **Maximum Swap** - LC 670
62. **Wiggle Subsequence** - LC 376 ⭐

---

## **📍 STAGE 8: Advanced Greedy Patterns (Week 8)**
*Complex greedy strategies*

### **Subsequence Problems:**
63. **Split Array into Consecutive Subsequences** - LC 659 ⭐⭐
64. **Is Subsequence** - LC 392 (greedy matching)
65. **Number of Matching Subsequences** - LC 792
66. **Increasing Triplet Subsequence** - LC 334

### **Advanced Array Greedy:**
67. **Video Stitching** - LC 1024 ⭐
68. **Advantage Shuffle** - LC 870
69. **Best Time to Buy and Sell with Transaction Fee** - LC 714
70. **Best Time to Buy and Sell with Cooldown** - LC 309

---

## **📍 STAGE 9: Contest & Expert Level (Week 9)**
*Hardest greedy problems in interviews*

### **Multi-Criteria Greedy:**
71. **Russian Doll Envelopes** - LC 354 ⭐⭐
72. **Queue Reconstruction by Height** - LC 406 ⭐⭐
73. **Non-decreasing Array** - LC 665
74. **Patching Array** - LC 330 ⭐⭐

### **Expert Challenge Problems:**
75. **Smallest Range Covering Elements from K Lists** - LC 632 ⭐⭐
76. **Stone Game VI** - LC 1686 ⭐⭐
77. **Minimum Cost to Make Array Non-decreasing** (generic problem)
78. **Create Maximum Number** - LC 321 ⭐⭐⭐ *(Expert level)*

---

## **🔧 CORRECTED TEMPLATES:**

### **When to Use Greedy (Decision Framework):**
```python
"""
USE GREEDY WHEN:
1. Greedy Choice Property exists (local optimum → global optimum)
2. Optimal Substructure (optimal solution contains optimal subproblems)
3. Can prove correctness with exchange argument

DO NOT USE GREEDY WHEN:
1. Future choices depend heavily on current choices
2. Need to explore all possibilities 
3. Problem asks for "count of all ways" or "all possible solutions"

EXAMPLES:
✅ Greedy: Activity Selection, Huffman Coding, Dijkstra
❌ Not Greedy: 0/1 Knapsack, Longest Common Subsequence, Edit Distance
"""
```

### **Corrected Problem Examples:**
```python
# CORRECT: Activity Selection (Pure Greedy)
def activity_selection(intervals):
    intervals.sort(key=lambda x: x[1])  # Sort by end time
    count = 0
    last_end = float('-inf')
    for start, end in intervals:
        if start >= last_end:
            count += 1
            last_end = end
    return count

# INCORRECT CLASSIFICATION: Maximum Subarray (This is DP, not Greedy)
# Kadane's algorithm maintains optimal substructure through DP state
def max_subarray_kadane(nums):  # This is DP!
    max_ending_here = max_so_far = nums[0]
    for i in range(1, len(nums)):
        max_ending_here = max(nums[i], max_ending_here + nums[i])
        max_so_far = max(max_so_far, max_ending_here)
    return max_so_far
```

---

## **🏆 FINAL CORRECTED COVERAGE:**
**Total: 78 Problems** (removed incorrect classifications)

✅ **Pure Greedy Problems** - Proper greedy choice property  
✅ **Interval Scheduling** - Activity selection, meeting rooms  
✅ **Job Scheduling** - Deadlines, priorities  
✅ **String/Array Greedy** - Rearrangement, optimization  
✅ **Heap-based Greedy** - Priority queue applications  
✅ **Stack-based Greedy** - Monotonic stack patterns  
✅ **Mathematical Greedy** - Huffman, fractional knapsack  
✅ **Advanced Patterns** - Multi-criteria optimization  

**This corrected version eliminates DP problems masquerading as greedy and focuses on true greedy algorithms!** 🎯💪
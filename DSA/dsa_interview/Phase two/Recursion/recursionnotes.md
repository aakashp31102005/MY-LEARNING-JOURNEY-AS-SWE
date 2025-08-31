# ALL SUB-* PATTERNS


# 🔹 1. **Subsets**

* **Definition:** Any combination of elements, order doesn’t matter.
* **Core recursion:** At each element → **include or exclude**.
* **Key idea:** 2 choices per element → $2^n$ subsets.
* **Pseudocode:**

  ```python
  def subsets(arr, i=0, cur=[]):
      if i == len(arr):
          print(cur)
          return
      subsets(arr, i+1, cur)           # exclude
      subsets(arr, i+1, cur+[arr[i]])  # include
  ```

✅ Used for **Power Set**, **Subset sum problems**, **Knapsack variations**.

---

# 🔹 2. **Subsequences**

* **Definition:** Keep relative order, but not necessarily contiguous.
* **Core recursion:** Identical to subsets (include/exclude), but **order matters** since we follow array sequence.
* **Key difference:** `{1,3}` is valid subsequence but **not** `{3,1}`.
* **Count:** $2^n$.
* **Pseudocode:** (same as subsets)

✅ Used for **Longest Common Subsequence (LCS)**, **String matching**, **DP on subsequences**.

---

# 🔹 3. **Subarrays**

* **Definition:** Contiguous chunk of an array.
* **Core recursion:** Different! → pick a start and expand end index.
* **Count:** $n(n+1)/2$.
* **Pseudocode:**

  ```python
  def subarrays(arr):
      n = len(arr)
      for i in range(n):
          for j in range(i, n):
              print(arr[i:j+1])
  ```

✅ Used in **Kadane’s Algorithm**, **Sliding Window problems**.

---

# 🔹 4. **Substrings**

* **Definition:** Contiguous chunk of a string (string version of subarray).
* **Logic:** Exactly like subarray.
* **Count:** $n(n+1)/2$.

✅ Used for **Palindrome Substring**, **String matching**, **Partitioning problems**.

---

# 🔹 5. **Subsequence Variants**

Here’s where recursion + constraints appear:

### (a) **Palindromic Subsequences**

* Generate subsequences (include/exclude), but check palindrome validity.
* Useful in DP problems: **Longest Palindromic Subsequence**.

### (b) **Increasing Subsequences**

* While recursing, only include element if it’s larger than the last included.

✅ Classic in **LIS (Longest Increasing Subsequence)**.

---

# 🔹 6. **Substring Partition / Palindrome Partitioning**

* **Definition:** Split a string into parts based on rules.
* **Core recursion:**

  * At each index → decide a cut point (`s[start:end]`).
  * Recurse on remainder.
* **Pseudocode:**

  ```python
  def partition(s, start=0, cur=[]):
      if start == len(s):
          print(cur)
          return
      for end in range(start, len(s)):
          piece = s[start:end+1]
          partition(s, end+1, cur+[piece])
  ```

✅ Used in **Palindrome Partitioning**, **Word Break**, **Backtracking problems**.

---

# 🔹 7. **Substructure**

* Seen in **DP & Trees**:

  * Every solution is built from **smaller substructures**.
  * E.g., Fibonacci, LCS, Tree problems.
* Principle: Solve on smaller size → combine for bigger one.
* Less about “generate all” and more about **optimal recursion**.

---

# 🔹 8. **Subset-Sum / Partition Problems**

* **Definition:** Partition array into subsets satisfying conditions (like sum = target).
* **Core recursion:** Same include/exclude logic, but with an extra constraint.
* **Example:**

  ```python
  def subset_sum(arr, i=0, cur=[], total=0, target=0):
      if total == target:
          print(cur)
          return
      if i == len(arr): return
      subset_sum(arr, i+1, cur, total, target)               # exclude
      subset_sum(arr, i+1, cur+[arr[i]], total+arr[i], target) # include
  ```

✅ Leads to **Knapsack DP**, **Equal Partition**, **Target Sum**.

---

# 🔹 The **Master Pattern**

Almost all **sub-**\* recursion can be reduced to one of these skeletons:

### 1. **Include / Exclude** (non-contiguous selections)

* Subsets
* Subsequences
* Subset Sum, Knapsack, LIS, LCS

### 2. **Expand Interval** (contiguous selections)

* Subarrays
* Substrings
* Sliding Window, Kadane’s Algorithm

### 3. **Cut & Recurse** (partitioning problems)

* Palindrome Partitioning
* Integer Partition
* Word Break

### 4. **Optimal Substructure** (DP problems)

* LCS
* LIS
* Tree DP
* Matrix chain multiplication

---
Perfect 🔥 let’s **visualize recursion trees** for each of the 4 **master patterns**.
I’ll keep examples small (`{1,2}` or `"ab"`) so you can see the branching clearly.

---

# 🌳 1. **Include / Exclude Pattern** (Subsets / Subsequences)

Example: `{1,2}`

At each element: **exclude** OR **include**.

```
                   []
            /                 \
         exclude              include(1)
        []                      [1]
       /   \                  /     \
 exclude   include(2)   exclude   include(2)
   []         [2]         [1]        [1,2]
```

✅ Subsets/Subsequences = `[], [1], [2], [1,2]`.

---

# 🌳 2. **Expand Interval Pattern** (Subarrays / Substrings)

Example: `"ab"`

We pick **start** and expand `end`.

```
start=0 → "a"
         → "ab"
start=1 → "b"
```

✅ Substrings = `"a", "ab", "b"`
(Contiguous only, no skipping!)

---

# 🌳 3. **Cut & Recurse Pattern** (Partitioning)

Example: `"ab"`

At each index, choose a **cut point**:

```
start=0
 ├─ Cut after "a" → ["a"] + partition("b")
 │                      └─ ["a","b"]
 └─ Cut after "ab" → ["ab"]
```

✅ Partitions = `[a,b], [ab]`.

---

# 🌳 4. **Optimal Substructure Pattern** (DP-style recursion)

Example: LCS of `"ab"` and `"ac"`

Logic:

* If last chars match → `1 + LCS(rest)`
* Else → `max(LCS(skip in s1), LCS(skip in s2))`

Tree:

```
LCS("ab","ac")
   chars(b vs c) ≠
   ├─ LCS("a","ac")
   │     chars(a vs c) ≠
   │     ├─ LCS("","ac") = 0
   │     └─ LCS("a","a") = 1
   │ → max(0,1) = 1
   └─ LCS("ab","a")
         chars(b vs a) ≠
         ├─ LCS("a","a") = 1
         └─ LCS("ab","") = 0
   → max(1,0) = 1
```

✅ Answer = 1 (`"a"` is the LCS).

---

# 🔥 Summary of Recursion Tree Styles

1. **Include/Exclude → binary tree of choices.**
2. **Expand Interval → nested loops (or recursion over start/end).**
3. **Cut & Recurse → k-way branching at each cut.**
4. **Optimal Substructure → overlapping subproblems → best solved with memoization.**

---


# ALL SUB-* PATTERNS


# 🔹 1. **Subsets**
* Definition: Any selection of elements from a set/array, regardless of order or continuity.
* Elements don’t have to be adjacent, and you can choose none or all.
* Contiguity: ❌ not required.
* Example with `[1, 2, 3]`:
  Subsets = `{}`, `{1}`, `{2}`, `{3}`, `{1,2}`, `{1,3}`, `{2,3}`, `{1,2,3}`

* `{3,1}` is a valid **subset** of `[1,2,3]`.
* Here’s why:
* A **subset** means *any selection* of elements from the set/array, regardless of their original order or continuity.
* Order does **not** matter in subsets. `{1,3}` and `{3,1}` are considered the **same subset** (because in set theory, order doesn’t matter).
👉 Total number of subsets = `2^n`

```java
// generic subset / combination helper
void helper(Type input, int start, State current) {
    // 1. (Optional) base condition
    //    if start == input.length → usually just return
    
    // 2. Loop through remaining choices
    for (int i = start; i < input.length; i++) {
        
        // 2a. choose element i
        update current with input[i];
        
        // 2b. process/record current (e.g. print/store)
        
        // 2c. recurse on next index
        helper(input, i + 1, current);
        
        // 2d. backtrack (if current is mutable, e.g. List)
        undo current change;
    }
}
```


### 🔑 Core ideas

* At each recursive call, you **start from `start` index**, not `0` (avoids duplicates).
* The **for loop** generates all possible *continuations* of the current path.
* Use `i+1` to ensure forward progress.
* Works for strings, arrays, or lists.
---

# 🔹 2. **Subsequences**

* **Definition:** Keep relative order.
* Contiguity: ❌ not required.
* **Core recursion:** Identical to subsets (include/exclude), but **order matters** since we follow array sequence.
* Example from `[1,2,3]`:
  * `[1,3]` ✅ valid subsequence.
  * `[3,1]` ❌ not valid subsequence (order changed).* **Count:** $2^n$.
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
### 3. **Subarray / Substring**

* Definition: A **contiguous slice** of the array/string.
* Example from `[1,2,3]`:

  * `[1,2]` ✅ valid subarray.
  * `[1,3]` ❌ not valid subarray (not contiguous).
* Contiguity: ✅ required.

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
## 📝 Skeleton (include/exclude)

```java
void dfs(int index, State current) {
    if (index == arr.length) {
        process(current);   // subset or subsequence
        return;
    }

    // exclude
    dfs(index + 1, current);

    // include
    current.add(arr[index]);
    dfs(index + 1, current);
    current.removeLast(); // backtrack if needed
}
```
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


Both **permutations** and **subsets** can be implemented using the **same recursion pattern** (`processed + unprocessed`), but:

* **Permutations (Balance pattern)** → consume from `unprocessed`, move to `processed`.
* **Subsets (No balance)** → don’t permute `unprocessed`, just make *include/exclude* decisions.

Let’s draw both recursion trees for `[1,2,3]`.

---

# 🌳 **Permutation Recursion Tree (\[1,2,3])**

```
P=[], U=[1,2,3]
├── P=[1], U=[2,3]
│   ├── P=[1,2], U=[3]
│   │   └── P=[1,2,3], U=[]
│   └── P=[1,3], U=[2]
│       └── P=[1,3,2], U=[]
│
├── P=[2], U=[1,3]
│   ├── P=[2,1], U=[3]
│   │   └── P=[2,1,3], U=[]
│   └── P=[2,3], U=[1]
│       └── P=[2,3,1], U=[]
│
└── P=[3], U=[1,2]
    ├── P=[3,1], U=[2]
    │   └── P=[3,1,2], U=[]
    └── P=[3,2], U=[1]
        └── P=[3,2,1], U=[]
```

✅ Leaves (where `U=[]`) → All **permutations**:

```
[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]
```

---

# 🌳 **Subset Recursion Tree (\[1,2,3])**

Here we don’t “consume” `unproc` the same way — instead, at each step, we either **include or exclude** the first element of `unproc`.

```
P=[], U=[1,2,3]
├── include 1 → P=[1], U=[2,3]
│   ├── include 2 → P=[1,2], U=[3]
│   │   ├── include 3 → P=[1,2,3], U=[]
│   │   └── exclude 3 → P=[1,2], U=[]
│   └── exclude 2 → P=[1], U=[3]
│       ├── include 3 → P=[1,3], U=[]
│       └── exclude 3 → P=[1], U=[]
│
└── exclude 1 → P=[], U=[2,3]
    ├── include 2 → P=[2], U=[3]
    │   ├── include 3 → P=[2,3], U=[]
    │   └── exclude 3 → P=[2], U=[]
    └── exclude 2 → P=[], U=[3]
        ├── include 3 → P=[3], U=[]
        └── exclude 3 → P=[], U=[]
```

✅ Leaves (where `U=[]`) → All **subsets**:

```
[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]
```


# Understanding the problem

The maximum depth of a binary tree is the number of nodes along the longest path from the root node down to the farthest **leaf node**.

A **leaf node** is a node that has no children nodes.

## Step by step though process

- If the root is **null**, the depth is **0** — this is the base case

- At any node, the maximum depth is: **1 (current node) + max(depth of left subtree, depth of right subtree)**

- This naturally suggests **recursion** — every node asks its children _"what's your max depth?"_ and adds 1

- We can also solve it **iteratively** using BFS (level-order traversal) — we count how many levels we process, but this will be inefficient.

## Example walkthrough

Consider the tree: [3, 9, 20, null, null, 15, 7]

(Recall that for trees represented in level-order array form like the one above, for any node at an index **i**, its left child is **2i+ 1**, and its right child is **2i + 2**)

maxDepth(3)

-     → maxDepth(9)
-       → maxDepth(null) = 0
-       → maxDepth(null) = 0
-       → returns 1 + max(0, 0) = 1
-     → maxDepth(20)
-       → maxDepth(15) = 1
-       → maxDepth(7) = 1
-       → returns 1 + max(1, 1) = 2
-     → returns 1 + max(1, 2) = 3

## Time and Space Complexity

| Complexity | Recursive DFS                | Iterative BFS                     |
| ---------- | ---------------------------- | --------------------------------- |
| Time       | O(n) - visit every node once | O(n) - visit every node once      |
| Space      | O(h) — call stack height     | O(w) — max width of tree in queue |

- O(h) in the best case (balanced tree) is **O(log n)**, worst case (skewed tree) is **O(n)**

- O(w) for BFS in the worst case (full bottom level) can be O(n/2) → **O(n)**

## Edge Cases

- **root = null** → return **0**
- **Single node** (no children) → return 1
- **Skewed tree** (like a linked list, all nodes go left) → depth equals **n**
- **Large tree** → recursive solution could hit call stack limits (rare occurrence)

## Conclusion

This pattern of "solve subproblems on children and combine" is the foundation of nearly every binary tree problem

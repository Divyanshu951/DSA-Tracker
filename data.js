// --- DATA ---
// (Using the same data structure you provided)

const level1 = {
  title: "Level 1: Fundamental Knowledge",
  id: "basics",
  icon: "fa-laptop-code",
  color: "text-violet-500",
  columns: [
    {
      title: "Language Basics",
      icon: "fa-terminal",
      color: "text-violet-600 dark:text-violet-400",
      bgColor: "bg-violet-50 dark:bg-violet-900/10",
      groups: [
        {
          name: "Setup & Syntax",
          items: [
            {
              name: "Basic Input/Output (Cin/Cout, Print, Scanner)",
              link: "#",
            },
            { name: "Data Types (int, float, char, boolean, etc.)", link: "#" },
          ],
        },
        {
          name: "Control Flow",
          items: [
            { name: "Conditional Statements (If-Else, Switch)", link: "#" },
            { name: "Nested If-Else Logic", link: "#" },
          ],
        },
        {
          name: "Loops (Iterations)",
          items: [
            { name: "For Loops", link: "#" },
            { name: "While Loops", link: "#" },
            { name: "Do-While Loops", link: "#" },
            { name: "Break and Continue statements", link: "#" },
          ],
        },
      ],
    },
    {
      title: "Core Concepts",
      icon: "fa-cogs",
      color: "text-fuchsia-600 dark:text-fuchsia-400",
      bgColor: "bg-fuchsia-50 dark:bg-fuchsia-900/10",
      groups: [
        {
          name: "Functions",
          items: [
            { name: "Function Declaration & Definition", link: "#" },
            { name: "Pass by Value", link: "#" },
            { name: "Pass by Reference", link: "#" },
          ],
        },
        {
          name: "Basic Collections",
          items: [
            { name: "Arrays (1D & Multi-dimensional)", link: "#" },
            { name: "Strings & Basic Manipulation", link: "#" },
          ],
        },
      ],
    },
    {
      title: "Logic Building",
      icon: "fa-brain",
      color: "text-pink-600 dark:text-pink-400",
      bgColor: "bg-pink-50 dark:bg-pink-900/10",
      groups: [
        {
          name: "Patterns",
          badge:
            "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
          items: [
            { name: "Rectangular Star Pattern", link: "#" },
            { name: "Triangular Star Pattern", link: "#" },
            { name: "Inverted Triangle Pattern", link: "#" },
            { name: "Pyramid Pattern", link: "#" },
            { name: "Diamond Pattern", link: "#" },
            { name: "Number Patterns", link: "#" },
          ],
        },
      ],
    },
  ],
};

const level2 = {
  title: "Level 2: Time & Space Complexity",
  id: "time_complexity",
  icon: "fa-clock",
  color: "text-blue-500",
  columns: [
    {
      title: "Theory",
      icon: "fa-book",
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/10",
      groups: [
        {
          name: "Asymptotic Notation",
          items: [
            { name: "What is Time Complexity?", link: "#" },
            { name: "Big O Notation (Upper Bound)", link: "#" },
            { name: "Omega Notation (Lower Bound)", link: "#" },
            { name: "Theta Notation (Tight Bound)", link: "#" },
          ],
        },
        {
          name: "Complexity Cases",
          items: [
            { name: "Best Case Analysis", link: "#" },
            { name: "Average Case Analysis", link: "#" },
            { name: "Worst Case Analysis", link: "#" },
          ],
        },
      ],
    },
    {
      title: "Calculation & Analysis",
      icon: "fa-calculator",
      color: "text-sky-600 dark:text-sky-400",
      bgColor: "bg-sky-50 dark:bg-sky-900/10",
      groups: [
        {
          name: "How to Calculate",
          items: [
            { name: "Counting Iterations in Loops", link: "#" },
            { name: "Analyzing Nested Loops (O(N^2))", link: "#" },
            { name: "Logarithmic Complexity (O(log N))", link: "#" },
            { name: "Space Complexity (Auxiliary vs Total)", link: "#" },
          ],
        },
        {
          name: "Common Orders of Growth",
          items: [
            { name: "Constant Time O(1)", link: "#" },
            { name: "Linear Time O(N)", link: "#" },
            { name: "Quadratic Time O(N^2)", link: "#" },
            { name: "Exponential Time O(2^N)", link: "#" },
          ],
        },
      ],
    },
    {
      title: "Practice",
      icon: "fa-question-circle",
      color: "text-indigo-600 dark:text-indigo-400",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/10",
      groups: [
        {
          name: "Drills",
          badge:
            "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
          items: [
            { name: "Calculate complexity of simple loop", link: "#" },
            { name: "Calculate complexity of nested loop", link: "#" },
            { name: "Find complexity of recursive code (Basic)", link: "#" },
            { name: "Compare two algorithms for same problem", link: "#" },
          ],
        },
      ],
    },
  ],
};

const level3 = {
  title: "Level 3: Array Problems",
  id: "arrays",
  icon: "fa-layer-group", // Added Icon
  color: "text-blue-500", // Added color hint
  columns: [
    {
      title: "Learn",
      icon: "fa-book-open",
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/10",
      groups: [
        {
          name: "Introduction",
          items: [
            { name: "What is an array?", link: "#" },
            {
              name: "Basic characteristics: contiguous memory, fixed size, indexed elements",
              link: "#",
            },
          ],
        },
        {
          name: "Array Declaration and Initialization",
          items: [
            {
              name: "Syntax for declaring arrays in various programming languages",
              link: "#",
            },
            {
              name: "Initializing arrays with default or specific values",
              link: "#",
            },
          ],
        },
        {
          name: "Accessing Elements",
          items: [
            {
              name: "Indexing: accessing elements using their position",
              link: "#",
            },
            {
              name: "Address calculation for element access",
              link: "#",
            },
          ],
        },
        {
          name: "Operations",
          items: [
            {
              name: "Basic operations like insertion, deletion, updating",
              link: "#",
            },
            { name: "Swapping elements", link: "#" },
          ],
        },
        {
          name: "Multi-dimensional",
          items: [
            { name: "Understanding 2D arrays (matrices)", link: "#" },
            {
              name: "Accessing elements in multi-dimensional arrays",
              link: "#",
            },
          ],
        },
        {
          name: "Manipulation",
          items: [
            { name: "Reversing an array", link: "#" },
            {
              name: "Finding the maximum or minimum element",
              link: "#",
            },
            {
              name: "Finding the sum or average of elements",
              link: "#",
            },
          ],
        },
        {
          name: "Traversal",
          items: [
            { name: "Iterating through all elements", link: "#" },
            {
              name: "Different approaches (e.g., for loop, while loop)",
              link: "#",
            },
          ],
        },
        {
          name: "Subarrays",
          items: [
            {
              name: "Creating subarrays from existing arrays",
              link: "#",
            },
            {
              name: "Understanding slicing for specific ranges",
              link: "#",
            },
          ],
        },
      ],
    },
    {
      title: "Practice",
      icon: "fa-code",
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/10",
      groups: [
        {
          name: "Easy",
          badge:
            "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
          items: [
            { name: "Find largest element in an array", link: "#" },
            { name: "Second largest element in an array", link: "#" },
            {
              name: "Count the frequency of an element in an array",
              link: "#",
            },
            {
              name: "Find the minimum (or maximum) element of an array",
              link: "#",
            },
            { name: "Rotate an array by K", link: "#" },
            { name: "2 sum", link: "#" },
            { name: "Longest subarray with sum", link: "#" },
            {
              name: "Find if a given element is in a sorted array (binary search)",
              link: "#",
            },
          ],
        },
        {
          name: "Medium",
          badge:
            "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
          items: [
            { name: "Move zeros", link: "#" },
            {
              name: "Best Time to Buy and Sell Stock (Sliding Window)",
              link: "#",
            },
            { name: "3 sum", link: "#" },
            { name: "Next Permutation", link: "#" },
            { name: "Top K frequent element", link: "#" },
            { name: "Maximum Subarray", link: "#" },
            { name: "Container With Most Water", link: "#" },
            { name: "Find all subsets", link: "#" },
            { name: "Set Matrix Zero", link: "#" },
          ],
        },
        {
          name: "Hard",
          badge: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
          items: [
            { name: "Find missing positive", link: "#" },
            { name: "4 sum", link: "#" },
            { name: "Best Time to Buy and Sell Stock III", link: "#" },
            { name: "Reverse pairs", link: "#" },
          ],
        },
      ],
    },
  ],
};

const level4 = {
  title: "Level 4: Sorting & Searching",
  id: "sorting_searching",
  icon: "fa-search",
  color: "text-purple-500",
  columns: [
    {
      title: "Learn Algorithms",
      icon: "fa-project-diagram",
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/10",
      groups: [
        {
          name: "Basic Sorting",
          items: [
            { name: "Selection Sort", link: "#" },
            { name: "Bubble Sort", link: "#" },
            { name: "Insertion Sort", link: "#" },
          ],
        },
        {
          name: "Advanced Sorting",
          items: [
            { name: "Merge Sort (Divide & Conquer)", link: "#" },
            { name: "Quick Sort", link: "#" },
            { name: "Heap Sort", link: "#" },
            { name: "Cycle Sort", link: "#" },
            { name: "Counting Sort & Radix Sort", link: "#" },
          ],
        },
        {
          name: "Search Fundamentals",
          items: [
            { name: "Linear Search", link: "#" },
            {
              name: "Binary Search (Iterative & Recursive)",
              link: "#",
            },
            { name: "Lower Bound & Upper Bound", link: "#" },
          ],
        },
      ],
    },
    {
      title: "Practice Problems",
      icon: "fa-crosshairs",
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-50 dark:bg-orange-900/10",
      groups: [
        {
          name: "Easy (Foundations)",
          badge:
            "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
          items: [
            { name: "Binary Search Implementation", link: "#" },
            { name: "Implement Lower Bound", link: "#" },
            { name: "Implement Upper Bound", link: "#" },
            { name: "Search Insert Position", link: "#" },
            { name: "Floor and Ceil in Sorted Array", link: "#" },
            {
              name: "Find First and Last Position of Element",
              link: "#",
            },
          ],
        },
        {
          name: "Medium (Logic Building)",
          badge:
            "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
          items: [
            {
              name: "Search in Rotated Sorted Array I (Unique)",
              link: "#",
            },
            {
              name: "Search in Rotated Sorted Array II (Duplicates)",
              link: "#",
            },
            { name: "Find Minimum in Rotated Sorted Array", link: "#" },
            { name: "Single Element in a Sorted Array", link: "#" },
            { name: "Find Peak Element", link: "#" },
            { name: "Find Nth Root of an Integer", link: "#" },
          ],
        },
        {
          name: "Hard (BS on Answers)",
          badge: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
          items: [
            { name: "Koko Eating Bananas", link: "#" },
            { name: "Minimum days to make M bouquets", link: "#" },
            {
              name: "Capacity to Ship Packages within D Days",
              link: "#",
            },
            { name: "Aggressive Cows", link: "#" },
            { name: "Book Allocation Problem", link: "#" },
            { name: "Split Array Largest Sum", link: "#" },
            { name: "Median of Two Sorted Arrays", link: "#" },
            { name: "K-th Element of Two Sorted Arrays", link: "#" },
          ],
        },
      ],
    },
  ],
};

const level5 = {
  title: "Level 5: Strings & Sliding Window",
  id: "strings",
  icon: "fa-font",
  color: "text-pink-500",
  columns: [
    {
      title: "Learn & Patterns",
      icon: "fa-font",
      color: "text-pink-600 dark:text-pink-400",
      bgColor: "bg-pink-50 dark:bg-pink-900/10",
      groups: [
        {
          name: "String Basics",
          items: [
            { name: "ASCII vs Unicode", link: "#" },
            { name: "Immutability of Strings", link: "#" },
            { name: "StringBuilder / StringBuffer", link: "#" },
            { name: "Rabin-Karp Algorithm (Rolling Hash)", link: "#" },
            { name: "KMP Algorithm (Pattern Matching)", link: "#" },
          ],
        },
        {
          name: "Sliding Window Pattern",
          items: [
            { name: "Fixed Size Window", link: "#" },
            { name: "Variable Size Window", link: "#" },
            { name: "Two Pointers Technique", link: "#" },
          ],
        },
      ],
    },
    {
      title: "Practice Problems",
      icon: "fa-code",
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/10",
      groups: [
        {
          name: "Easy",
          badge:
            "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
          items: [
            { name: "Add Strings", link: "#" },
            { name: "Reverse words in a String", link: "#" },
            { name: "Valid Palindrome", link: "#" },
            { name: "Valid Anagram", link: "#" },
            {
              name: "Find the Index of the First Occurrence",
              link: "#",
            },
          ],
        },
        {
          name: "Medium",
          badge:
            "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
          items: [
            {
              name: "Longest Substring Without Repeating Characters",
              link: "#",
            },
            { name: "Sort Characters By Frequency", link: "#" },
            { name: "Group Anagrams", link: "#" },
            { name: "Integer to Roman", link: "#" },
            { name: "Basic Calculator II", link: "#" },
          ],
        },
        {
          name: "Hard",
          badge: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
          items: [
            { name: "Integer to English Words", link: "#" },
            { name: "Minimum Window Substring", link: "#" },
            { name: "Distinct Subsequences", link: "#" },
            { name: "Sliding Window Median", link: "#" },
          ],
        },
        {
          name: "Sliding Window Specials",
          badge:
            "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
          items: [
            {
              name: "Longest Substring with At Least K Repeating",
              link: "#",
            },
            { name: "Max Consecutive Ones III", link: "#" },
          ],
        },
      ],
    },
  ],
};

const level6 = {
  title: "Level 6: Stacks",
  id: "stacks",
  icon: "fa-layer-group",
  color: "text-amber-500",
  columns: [
    {
      title: "Learn",
      icon: "fa-layer-group",
      color: "text-amber-600 dark:text-amber-400",
      bgColor: "bg-amber-50 dark:bg-amber-900/10",
      groups: [
        {
          name: "Concepts",
          items: [
            { name: "LIFO Principle", link: "#" },
            {
              name: "Implementation using Arrays vs Linked Lists",
              link: "#",
            },
            { name: "Monotonic Stack Pattern", link: "#" },
            { name: "Stack for Recursion Simulation", link: "#" },
          ],
        },
      ],
    },
    {
      title: "Practice Problems",
      icon: "fa-code",
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/10",
      groups: [
        {
          name: "Easy",
          badge:
            "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
          items: [{ name: "Valid Parentheses", link: "#" }],
        },
        {
          name: "Medium",
          badge:
            "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
          items: [
            { name: "Min Stack", link: "#" },
            { name: "Generate Parentheses", link: "#" },
            { name: "Car Fleet", link: "#" },
          ],
        },
        {
          name: "Hard",
          badge: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
          items: [{ name: "Largest Rectangle in Histogram", link: "#" }],
        },
      ],
    },
  ],
};
const level7 = {
  title: "Level 7: Linked Lists",
  id: "linked_lists",
  icon: "fa-link",
  color: "text-cyan-500",
  columns: [
    {
      title: "Learn",
      icon: "fa-link",
      color: "text-cyan-600 dark:text-cyan-400",
      bgColor: "bg-cyan-50 dark:bg-cyan-900/10",
      groups: [
        {
          name: "Singly Linked List",
          items: [
            { name: "What are linked lists?", link: "#" },
            { name: "Inserting node (Head, Tail, Middle)", link: "#" },
            { name: "Deleting node", link: "#" },
            { name: "Traversal of a node", link: "#" },
            { name: "Searching a node", link: "#" },
          ],
        },
        {
          name: "Doubly Linked List",
          items: [
            { name: "What are doubly linked lists?", link: "#" },
            { name: "Inserting node", link: "#" },
            { name: "Deleting node", link: "#" },
            { name: "Reversing DLL", link: "#" },
          ],
        },
      ],
    },
    {
      title: "Practice Problems",
      icon: "fa-code",
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/10",
      groups: [
        {
          name: "Easy",
          badge:
            "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
          items: [
            { name: "Reverse Linked List", link: "#" },
            { name: "Merge Two Sorted Lists", link: "#" },
            { name: "Linked List Cycle", link: "#" },
            { name: "Middle of the Linked List", link: "#" },
            { name: "Remove Duplicates from Sorted List", link: "#" },
          ],
        },
        {
          name: "Medium",
          badge:
            "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
          items: [
            { name: "Linked List Cycle II", link: "#" },
            { name: "Intersection of Two Linked Lists", link: "#" },
            { name: "Design Browser History", link: "#" },
          ],
        },
        {
          name: "Hard",
          badge: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
          items: [
            { name: "Merge k Sorted Lists", link: "#" },
            { name: "Reverse Nodes in k-Group", link: "#" },
          ],
        },
      ],
    },
  ],
};
const level8 = {
  title: "Level 8: Recursion",
  id: "recursion",
  icon: "fa-recycle",
  color: "text-teal-500",
  columns: [
    {
      title: "Learn & Basic Drills",
      icon: "fa-recycle",
      color: "text-teal-600 dark:text-teal-400",
      bgColor: "bg-teal-50 dark:bg-teal-900/10",
      groups: [
        {
          name: "Learn Basics",
          items: [
            { name: "What is recursion?", link: "#" },
            {
              name: "Understand 3 major steps (Base Case, Work, Recursive Call)",
              link: "#",
            },
            { name: "Stack Space Visualization", link: "#" },
          ],
        },
        {
          name: "Solve Basic Problems",
          items: [
            { name: "Find power using recursion", link: "#" },
            { name: "Fibonacci series", link: "#" },
            { name: "Sum of digits", link: "#" },
            { name: "Sum of natural numbers", link: "#" },
          ],
        },
      ],
    },
    {
      title: "Standard Problems",
      icon: "fa-code",
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/10",
      groups: [
        {
          name: "Medium",
          badge:
            "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
          items: [
            { name: "Generate Parentheses", link: "#" },
            { name: "Combination Sum", link: "#" },
            { name: "Combination Sum II", link: "#" },
            { name: "Pow(x, n)", link: "#" },
            { name: "K-th Symbol in Grammar", link: "#" },
          ],
        },
      ],
    },
  ],
};
const level9 = {
  title: "Level 9: Trees & BST",
  id: "trees",
  icon: "fa-tree",
  color: "text-green-500",
  columns: [
    {
      title: "Learn Basics",
      icon: "fa-tree",
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/10",
      groups: [
        {
          name: "Introduction",
          items: [
            {
              name: "Tree terminologies: nodes, edges, root, leaf",
              link: "#",
            },
            { name: "Types: Binary, BST, Balanced", link: "#" },
          ],
        },
        {
          name: "Binary Trees",
          items: [
            { name: "Definition and characteristics", link: "#" },
            { name: "Representation: Array vs Linked", link: "#" },
          ],
        },
        {
          name: "Traversals",
          items: [
            {
              name: "DFS: In-order, Pre-order, Post-order (Recursive & Iterative)",
              link: "#",
            },
            { name: "BFS: Level-order traversal", link: "#" },
          ],
        },
        {
          name: "Binary Search Trees (BST)",
          items: [
            { name: "What is a BST?", link: "#" },
            { name: "Operations: Insert, Delete, Search", link: "#" },
            {
              name: "Properties: Ordering, Balanced vs Unbalanced",
              link: "#",
            },
          ],
        },
        {
          name: "Tree Algorithms",
          items: [
            { name: "Lowest Common Ancestor (LCA)", link: "#" },
            { name: "Finding height or depth", link: "#" },
            { name: "Diameter of a tree", link: "#" },
          ],
        },
      ],
    },
    {
      title: "Practice Problems",
      icon: "fa-code",
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/10",
      groups: [
        {
          name: "Easy",
          badge:
            "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
          items: [
            { name: "Maximum Depth of Binary Tree", link: "#" },
            { name: "Invert Binary Tree", link: "#" },
            { name: "Path Sum", link: "#" },
            { name: "Same Tree", link: "#" },
            { name: "Binary Tree Level Order Traversal", link: "#" },
          ],
        },
        {
          name: "Medium",
          badge:
            "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
          items: [
            {
              name: "Binary Tree Zigzag Level Order Traversal",
              link: "#",
            },
            {
              name: "Lowest Common Ancestor of a Binary Tree",
              link: "#",
            },
            {
              name: "Construct Binary Tree from Inorder and Postorder",
              link: "#",
            },
            { name: "Validate Binary Search Tree", link: "#" },
            { name: "Kth Smallest Element in a BST", link: "#" },
            { name: "Binary Tree Right Side View", link: "#" },
          ],
        },
        {
          name: "Hard",
          badge: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
          items: [
            { name: "Binary Tree Maximum Path Sum", link: "#" },
            {
              name: "Serialize and Deserialize Binary Tree",
              link: "#",
            },
          ],
        },
      ],
    },
  ],
};
const level10 = {
  title: "Level 10: Tries",
  id: "tries",
  icon: "fa-share-alt",
  color: "text-gray-500",
  columns: [
    {
      title: "Learn Basics",
      icon: "fa-share-alt",
      color: "text-gray-600 dark:text-gray-400",
      bgColor: "bg-gray-100 dark:bg-gray-800",
      groups: [
        {
          name: "Introduction",
          items: [
            { name: "What is a Trie? Nodes, Edges, Root", link: "#" },
            { name: "Use cases: Autocomplete, Dictionary", link: "#" },
          ],
        },
        {
          name: "Structure & Operations",
          items: [
            { name: "Trie Node Structure (Data fields)", link: "#" },
            { name: "Insertion, Search, Deletion", link: "#" },
          ],
        },
        {
          name: "Advanced",
          items: [
            { name: "Ternary Search Trees (TSTs)", link: "#" },
            { name: "Space efficiency approaches", link: "#" },
          ],
        },
      ],
    },
    {
      title: "Problems",
      icon: "fa-code",
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/10",
      groups: [
        {
          name: "Standard",
          badge:
            "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
          items: [
            { name: "Implement Trie (Prefix Tree)", link: "#" },
            { name: "Implement Trie II", link: "#" },
            {
              name: "Design Add and Search Words Data Structure",
              link: "#",
            },
            { name: "Word Search II (Hard)", link: "#" },
          ],
        },
      ],
    },
  ],
};
const level11 = {
  title: "Level 11: Backtracking",
  id: "backtracking",
  icon: "fa-undo",
  color: "text-rose-500",
  columns: [
    {
      title: "Learn",
      icon: "fa-undo",
      color: "text-rose-600 dark:text-rose-400",
      bgColor: "bg-rose-50 dark:bg-rose-900/10",
      groups: [
        {
          name: "Introduction",
          items: [
            {
              name: "What is backtracking? When to use it?",
              link: "#",
            },
            { name: "Recursive vs Iterative approaches", link: "#" },
          ],
        },
        {
          name: "The Algorithm",
          items: [
            {
              name: "Steps: Choose, Test, Make Choice, Undo (Backtrack)",
              link: "#",
            },
            { name: "Pseudocode template", link: "#" },
            { name: "Base cases and Termination", link: "#" },
          ],
        },
        {
          name: "Classic Examples",
          items: [
            { name: "N-Queens problem", link: "#" },
            { name: "Sudoku solving", link: "#" },
            { name: "Permutations and Combinations", link: "#" },
          ],
        },
      ],
    },
    {
      title: "Problems",
      icon: "fa-code",
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/10",
      groups: [
        {
          name: "Medium",
          badge:
            "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
          items: [
            { name: "Subsets", link: "#" },
            { name: "Subsets II", link: "#" },
            { name: "Permutations", link: "#" },
            { name: "Palindrome Partitioning", link: "#" },
          ],
        },
        {
          name: "Hard",
          badge: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
          items: [{ name: "N-Queens", link: "#" }],
        },
      ],
    },
  ],
};
const level12 = {
  title: "Level 12: Heap Priority Queue",
  id: "heaps",
  icon: "fa-server",
  color: "text-slate-500",
  columns: [
    {
      title: "Learn",
      icon: "fa-layer-group",
      color: "text-slate-600 dark:text-slate-400",
      bgColor: "bg-slate-100 dark:bg-slate-800",
      groups: [
        {
          name: "Introduction",
          items: [
            { name: "What is a heap? (Max vs Min)", link: "#" },
            { name: "Heap Property (Parent vs Child)", link: "#" },
          ],
        },
        {
          name: "Binary Heap",
          items: [
            { name: "Definition and Characteristics", link: "#" },
            { name: "Operations: Insert, Delete, Extract", link: "#" },
          ],
        },
        {
          name: "Heapify Operations",
          items: [
            { name: "Up-heap (Percolate up)", link: "#" },
            { name: "Down-heap (Percolate down)", link: "#" },
            { name: "Complexity Analysis", link: "#" },
          ],
        },
        {
          name: "Advanced",
          items: [
            { name: "Priority Queue Interface", link: "#" },
            { name: "Binomial / Fibonacci Heaps (Theory)", link: "#" },
          ],
        },
      ],
    },
    {
      title: "Practice",
      icon: "fa-code",
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/10",
      groups: [
        {
          name: "Easy",
          badge:
            "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
          items: [
            { name: "Kth Largest Element in an Array", link: "#" },
            { name: "Last Stone Weight", link: "#" },
          ],
        },
        {
          name: "Medium",
          badge:
            "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
          items: [
            { name: "K Closest Points to Origin", link: "#" },
            { name: "Reorganize String", link: "#" },
            { name: "Cheapest Flights Within K Stops", link: "#" },
            { name: "Task Scheduler", link: "#" },
            { name: "Hand of Straights", link: "#" },
          ],
        },
        {
          name: "Hard",
          badge: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
          items: [
            { name: "Design Twitter", link: "#" },
            { name: "Find Median from Data Stream", link: "#" },
            { name: "Top K Frequent Elements", link: "#" },
          ],
        },
      ],
    },
  ],
};
const level13 = {
  title: "Level 13: Graphs",
  id: "graphs",
  icon: "fa-project-diagram",
  color: "text-indigo-500",
  columns: [
    {
      title: "Learn",
      icon: "fa-project-diagram",
      color: "text-indigo-600 dark:text-indigo-400",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/10",
      groups: [
        {
          name: "Basics",
          items: [
            { name: "What is a graph? (Nodes, Edges)", link: "#" },
            {
              name: "Directed vs Undirected, Weighted vs Unweighted",
              link: "#",
            },
            {
              name: "Representations: Adjacency Matrix vs List",
              link: "#",
            },
          ],
        },
        {
          name: "Traversal",
          items: [
            { name: "Breadth-First Search (BFS)", link: "#" },
            { name: "Depth-First Search (DFS)", link: "#" },
          ],
        },
        {
          name: "Shortest Path Algorithms",
          items: [
            { name: "Dijkstra's Algorithm", link: "#" },
            { name: "Bellman-Ford Algorithm", link: "#" },
            { name: "Floyd-Warshall Algorithm", link: "#" },
          ],
        },
        {
          name: "Advanced Algo",
          items: [
            { name: "A* Algorithm", link: "#" },
            { name: "Ford-Fulkerson & Edmonds-Karp", link: "#" },
          ],
        },
      ],
    },
    {
      title: "Practice",
      icon: "fa-code",
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/10",
      groups: [
        {
          name: "Standard Problems",
          badge:
            "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
          items: [
            { name: "Number of Provinces", link: "#" },
            { name: "Number of Islands", link: "#" },
            { name: "Max Area of Island", link: "#" },
            { name: "Surrounded Regions", link: "#" },
            { name: "Rotting Oranges", link: "#" },
            { name: "Course Schedule I", link: "#" },
            { name: "Course Schedule II", link: "#" },
            { name: "Word Ladder", link: "#" },
          ],
        },
      ],
    },
  ],
};
const level14 = {
  title: "Level 14: 1-D Dynamic Programming",
  id: "dp_1d",
  icon: "fa-chart-line",
  color: "text-fuchsia-500",
  columns: [
    {
      title: "Learn",
      icon: "fa-chart-line",
      color: "text-fuchsia-600 dark:text-fuchsia-400",
      bgColor: "bg-fuchsia-50 dark:bg-fuchsia-900/10",
      groups: [
        {
          name: "Concepts",
          items: [
            { name: "Memoization (Top-Down)", link: "#" },
            { name: "Tabulation (Bottom-Up)", link: "#" },
            { name: "Space Optimization", link: "#" },
          ],
        },
        {
          name: "Classic Patterns",
          items: [
            { name: "Fibonacci Sequence", link: "#" },
            { name: "Coin Change", link: "#" },
            { name: "Longest Increasing Subsequence (LIS)", link: "#" },
            { name: "Longest Common Subsequence (LCS)", link: "#" },
            { name: "Knapsack Problems (0/1, Subset Sum)", link: "#" },
            { name: "Edit Distance", link: "#" },
          ],
        },
      ],
    },
    {
      title: "Practice",
      icon: "fa-code",
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/10",
      groups: [
        {
          name: "Easy",
          badge:
            "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
          items: [
            { name: "Climbing Stairs", link: "#" },
            { name: "Min Cost Climbing Stairs", link: "#" },
            { name: "Divisor Game", link: "#" },
          ],
        },
        {
          name: "Medium",
          badge:
            "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
          items: [
            { name: "House Robber", link: "#" },
            { name: "House Robber II", link: "#" },
            { name: "Longest Palindromic Substring", link: "#" },
            { name: "Palindromic Substrings", link: "#" },
            { name: "Decode Ways", link: "#" },
            { name: "Coin Change", link: "#" },
            { name: "Word Break", link: "#" },
          ],
        },
      ],
    },
  ],
};
const level15 = {
  title: "Level 15: 2-D DP & Advanced Graphs",
  id: "dp_2d",
  icon: "fa-th",
  color: "text-purple-500",
  columns: [
    {
      title: "2-D Dynamic Programming",
      icon: "fa-th",
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/10",
      groups: [
        {
          name: "String DP",
          badge:
            "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
          items: [
            { name: "Longest Common Subsequence", link: "#" },
            { name: "Longest Palindromic Subsequence", link: "#" },
            { name: "Distinct Subsequences (Hard)", link: "#" },
          ],
        },
        {
          name: "Grid/Math DP",
          badge:
            "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
          items: [
            { name: "Unique Paths", link: "#" },
            { name: "Unique Paths II", link: "#" },
            { name: "Triangle", link: "#" },
            { name: "Target Sum", link: "#" },
            { name: "Longest Increasing Path in a Matrix", link: "#" },
            { name: "Burst Balloons (Hard)", link: "#" },
            { name: "Regular Expression Matching", link: "#" },
          ],
        },
      ],
    },
    {
      title: "Advanced Graphs",
      icon: "fa-project-diagram",
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/10",
      groups: [
        {
          name: "Hard Problems",
          badge: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
          items: [
            { name: "Min Cost to Connect All Points", link: "#" },
            { name: "Swim in Rising Water", link: "#" },
            { name: "Reconstruct Itinerary", link: "#" },
          ],
        },
      ],
    },
  ],
};

const syllabusData = [
  level1,
  level2,
  level3,
  level4,
  level5,
  level6,
  level7,
  level8,
  level9,
  level10,
  level11,
  level12,
  level13,
  level14,
  level15,
];

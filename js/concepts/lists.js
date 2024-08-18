export const lists = {
    title: "Lists",
    content: `
        <h3>Lists in Python</h3>
        <p>Lists are ordered, mutable collections of items. They can contain elements of different types and are defined using square brackets [].</p>

        <h4>Key Concepts:</h4>
        <ul>
            <li><strong>Creating lists</strong>: Using [] or list()</li>
            <li><strong>Indexing</strong>: Accessing elements using their position (0-based)</li>
            <li><strong>Slicing</strong>: Extracting a portion of the list</li>
            <li><strong>List methods</strong>: append(), extend(), insert(), remove(), pop(), etc.</li>
            <li><strong>List comprehensions</strong>: Concise way to create lists</li>
        </ul>

        <h4>Example:</h4>
        <pre>
        # Creating a list
        fruits = ["apple", "banana", "cherry"]
        print(fruits)

        # Indexing
        print(fruits[0])  # Output: apple
        print(fruits[-1])  # Output: cherry (last item)

        # Slicing
        print(fruits[1:3])  # Output: ['banana', 'cherry']

        # List methods
        fruits.append("date")
        fruits.insert(1, "blueberry")
        fruits.remove("cherry")
        popped = fruits.pop()
        print(fruits)  # Output: ['apple', 'blueberry', 'banana']
        print(popped)  # Output: date

        # List comprehension
        squares = [x**2 for x in range(5)]
        print(squares)  # Output: [0, 1, 4, 9, 16]
        </pre>
    `,
    practice: `# Practice: Working with lists

# 1. Create a list called 'numbers' with the values 1, 2, 3, 4, 5
numbers = 

# 2. Add the number 6 to the end of the list
# Your code here

# 3. Insert the number 0 at the beginning of the list
# Your code here

# 4. Remove the number 3 from the list
# Your code here

# 5. Create a new list 'even_numbers' containing only the even numbers from 'numbers'
# Use a list comprehension
# Your code here

# 6. Reverse the 'numbers' list
# Your code here

# 7. Sort the 'numbers' list in descending order
# Your code here

# Print the final 'numbers' list and 'even_numbers' list
print("Numbers:", numbers)
print("Even numbers:", even_numbers)

# 8. Create a list of lists representing a 3x3 matrix
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# 9. Print the element at the second row and third column of the matrix
# Your code here

`
};
export const dataTypes = {
    title: "Data Types",
    content: `
        <h3>Data Types in Python</h3>
        <p>Python has several built-in data types. The most common ones are:</p>
        <ul>
            <li><strong>int</strong>: Integer numbers (e.g., 5, -3, 1000)</li>
            <li><strong>float</strong>: Floating-point numbers (e.g., 3.14, -0.001, 2.0)</li>
            <li><strong>str</strong>: Strings (e.g., "Hello", 'Python', "123")</li>
            <li><strong>bool</strong>: Boolean values (True or False)</li>
            <li><strong>list</strong>: Ordered, mutable sequences (e.g., [1, 2, 3])</li>
            <li><strong>tuple</strong>: Ordered, immutable sequences (e.g., (1, 2, 3))</li>
            <li><strong>dict</strong>: Key-value pairs (e.g., {"name": "John", "age": 30})</li>
        </ul>
        
        <p>You can use the <code>type()</code> function to check the type of any variable.</p>
    `,
    practice: `# Data Types in Python

# Integer
age = 25
print("Age:", age, "Type:", type(age))

# Float
pi = 3.14159
print("Pi:", pi, "Type:", type(pi))

# String
name = "Alice"
print("Name:", name, "Type:", type(name))

# Boolean
is_student = True
print("Is Student:", is_student, "Type:", type(is_student))

# List
fruits = ["apple", "banana", "cherry"]
print("Fruits:", fruits, "Type:", type(fruits))

# Tuple
coordinates = (10, 20)
print("Coordinates:", coordinates, "Type:", type(coordinates))

# Dictionary
person = {"name": "Bob", "age": 30}
print("Person:", person, "Type:", type(person))

# Try modifying these variables or creating your own!
# For example, create a list of your favorite colors:
# my_colors = ["red", "blue", "green"]
# print("My favorite colors:", my_colors)

`
};
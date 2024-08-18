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
        
        <h4>Example:</h4>
        <pre>
        # Integer
        age = 25
        print(type(age))  # <class 'int'>

        # Float
        pi = 3.14159
        print(type(pi))  # <class 'float'>

        # String
        name = "Alice"
        print(type(name))  # <class 'str'>

        # Boolean
        is_student = True
        print(type(is_student))  # <class 'bool'>

        # List
        fruits = ["apple", "banana", "cherry"]
        print(type(fruits))  # <class 'list'>

        # Tuple
        coordinates = (10, 20)
        print(type(coordinates))  # <class 'tuple'>

        # Dictionary
        person = {"name": "Bob", "age": 30}
        print(type(person))  # <class 'dict'>
        </pre>

        <p>You can use the <code>type()</code> function to check the type of any variable.</p>
    `,
    practice: `# Practice: Create variables of different types and print their types

# Create an integer variable named 'quantity' and assign it a value
quantity = 

# Create a float variable named 'price' and assign it a value
price = 

# Create a string variable named 'product' and assign it a value
product = 

# Create a boolean variable named 'in_stock' and assign it a value
in_stock = 

# Create a list variable named 'colors' with at least 3 color names
colors = 

# Create a tuple variable named 'dimensions' with width and height
dimensions = 

# Create a dictionary variable named 'book' with 'title' and 'author' keys
book = 

# Print the type of each variable you created
print(type(quantity))
print(type(price))
print(type(product))
print(type(in_stock))
print(type(colors))
print(type(dimensions))
print(type(book))

# Bonus: Try to change the value of 'dimensions' tuple. What happens?
# dimensions[0] = 100  # Uncomment this line and run the code
`
};
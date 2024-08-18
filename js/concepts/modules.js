export const modules = {
    title: "Modules and Imports",
    content: `
        <h3>Modules and Imports in Python</h3>
        <p>Modules are files containing Python code. They allow you to organize and reuse code across different programs.</p>

        <h4>Key Concepts:</h4>
        <ul>
            <li><strong>Importing modules</strong>: Using the 'import' statement</li>
            <li><strong>From import</strong>: Importing specific functions or classes</li>
            <li><strong>Aliasing</strong>: Renaming modules or imports</li>
            <li><strong>Creating modules</strong>: Writing your own modules</li>
            <li><strong>Package</strong>: A directory of Python modules</li>
            <li><strong>Built-in modules</strong>: Python's standard library (e.g., math, random, datetime)</li>
        </ul>

        <h4>Example:</h4>
        <pre>
        # Importing an entire module
        import math
        print(math.pi)

        # Importing specific functions
        from random import randint, choice
        print(randint(1, 10))

        # Aliasing
        import datetime as dt
        print(dt.datetime.now())

        # Creating a module (in a file named 'mymodule.py')
        # def greet(name):
        #     return f"Hello, {name}!"

        # Importing from your module
        # from mymodule import greet
        # print(greet("Alice"))
        </pre>
    `,
    practice: `# Practice: Modules and Imports

# Note: Some operations will be simulated due to the web environment limitations

# 1. Import the 'math' module and calculate the square root of 16
# Your code here

# 2. From the 'random' module, import 'randint' and generate a random number between 1 and 10
# Your code here

# 3. Import the 'datetime' module with an alias and print the current date
# Your code here

# 4. Create a list of 5 random items and use the 'random.choice' function to select one
# Your code here

# 5. Use the 'math' module to calculate the sine of 30 degrees (remember to convert to radians)
# Your code here

# 6. Simulate creating a custom module called 'geometry' with functions for area calculations
# (In a real environment, this would be in a separate file)

def circle_area(radius):
    import math
    return math.pi * radius ** 2

def rectangle_area(length, width):
    return length * width

# 7. Import and use the functions from your 'geometry' module
# Your code here

# 8. Use the 'os' module to get the current working directory (simulated)
import os
print(f"Current working directory: {os.getcwd()}")

# 9. Use the 'sys' module to print the Python version
import sys
print(f"Python version: {sys.version}")

# 10. Create a simple package structure (simulated)
# my_package/
#     __init__.py
#     module1.py
#     module2.py

# Simulated package import
from my_package import module1, module2

# Use functions from the simulated package
print(module1.function1())
print(module2.function2())

`
};
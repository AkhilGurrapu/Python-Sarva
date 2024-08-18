export const errorHandling = {
    title: "Error Handling",
    content: `
        <h3>Error Handling in Python</h3>
        <p>Error handling allows you to gracefully manage and respond to errors (exceptions) that occur during program execution.</p>

        <h4>Key Concepts:</h4>
        <ul>
            <li><strong>try-except blocks</strong>: Catching and handling exceptions</li>
            <li><strong>Multiple except blocks</strong>: Handling different types of exceptions</li>
            <li><strong>else clause</strong>: Executed if no exception occurs</li>
            <li><strong>finally clause</strong>: Always executed, regardless of exceptions</li>
            <li><strong>Raising exceptions</strong>: Manually triggering exceptions</li>
            <li><strong>Custom exceptions</strong>: Creating your own exception classes</li>
        </ul>

        <h4>Example:</h4>
        <pre>
        try:
            x = 10 / 0  # This will raise a ZeroDivisionError
        except ZeroDivisionError:
            print("Cannot divide by zero!")
        except Exception as e:
            print(f"An error occurred: {e}")
        else:
            print("Division successful")
        finally:
            print("This always executes")

        # Raising an exception
        def validate_age(age):
            if age < 0:
                raise ValueError("Age cannot be negative")
            return age

        try:
            validate_age(-5)
        except ValueError as e:
            print(e)

        # Custom exception
        class CustomError(Exception):
            pass

        raise CustomError("This is a custom error")
        </pre>
    `,
    practice: `# Practice: Error Handling

# 1. Write a function that takes two numbers and returns their division
def divide_numbers(a, b):
    # Your code here (use try-except to handle ZeroDivisionError)
    pass

# Test the divide_numbers function
print(divide_numbers(10, 2))  # Should print 5.0
print(divide_numbers(10, 0))  # Should handle the error

# 2. Create a function that reads an integer from the user and handles potential ValueError
def get_integer_input():
    # Your code here
    pass

# Test the get_integer_input function
result = get_integer_input()
print(f"You entered: {result}")

# 3. Implement a custom exception called NegativeNumberError
# Your code here

# 4. Write a function that calculates the square root of a number,
# raising NegativeNumberError for negative inputs
import math

def calculate_square_root(number):
    # Your code here
    pass

# Test the calculate_square_root function
try:
    print(calculate_square_root(16))  # Should print 4.0
    print(calculate_square_root(-4))  # Should raise NegativeNumberError
except NegativeNumberError as e:
    print(e)

# 5. Create a context manager using a class to handle file operations
class FileHandler:
    def __init__(self, filename, mode):
        # Your code here
        pass

    def __enter__(self):
        # Your code here
        pass

    def __exit__(self, exc_type, exc_value, traceback):
        # Your code here
        pass

# Test the FileHandler context manager
with FileHandler('test.txt', 'w') as f:
    f.write('Hello, World!')

# 6. Use a try-except-else-finally block to demonstrate all parts of exception handling
# Your code here

`
};
export const functions = {
    title: "Functions",
    content: `
        <h3>Functions in Python</h3>
        <p>Functions are reusable blocks of code that perform a specific task. They help in organizing code, improving readability, and reducing repetition.</p>

        <h4>Defining a Function</h4>
        <pre>
        def function_name(parameters):
            # function body
            return result  # optional
        </pre>

        <h4>Key Concepts:</h4>
        <ul>
            <li><strong>Parameters</strong>: Input values passed to the function</li>
            <li><strong>Return Statement</strong>: Specifies the output of the function</li>
            <li><strong>Default Parameters</strong>: Allow functions to be called with fewer arguments</li>
            <li><strong>*args and **kwargs</strong>: Allow functions to accept any number of positional or keyword arguments</li>
        </ul>

        <h4>Example:</h4>
        <pre>
        # Simple function
        def greet(name):
            return f"Hello, {name}!"

        print(greet("Alice"))  # Output: Hello, Alice!

        # Function with default parameter
        def power(base, exponent=2):
            return base ** exponent

        print(power(3))    # Output: 9
        print(power(2, 3)) # Output: 8

        # Function with *args
        def sum_all(*args):
            return sum(args)

        print(sum_all(1, 2, 3, 4))  # Output: 10

        # Function with **kwargs
        def print_info(**kwargs):
            for key, value in kwargs.items():
                print(f"{key}: {value}")

        print_info(name="Bob", age=30, city="New York")
        </pre>
    `,
    practice: `# Practice: Define and use functions

# 1. Create a function called 'calculate_area' that takes the radius of a circle
# and returns its area (π * r^2). Use 3.14 for π.
# Your code here


# Test your function
print(calculate_area(5))

# 2. Define a function called 'is_palindrome' that takes a string and returns
# True if it's a palindrome (reads the same forwards and backwards), False otherwise.
# Hint: You can use string slicing: word == word[::-1]
# Your code here


# Test your function
print(is_palindrome("radar"))
print(is_palindrome("python"))

# 3. Create a function called 'print_args' that takes any number of arguments
# and prints them one per line.
# Your code here


# Test your function
print_args("apple", 42, True, [1, 2, 3])

# 4. Define a function called 'create_person' that takes name and age as required
# parameters and any number of additional keyword arguments. It should return a
# dictionary with all the information.
# Your code here


# Test your function
person = create_person("Alice", 30, city="London", occupation="Engineer")
print(person)
`
};
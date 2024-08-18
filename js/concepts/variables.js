export const variables = {
    title: "Variables and Assignment",
    content: `
        <h3>Variables and Assignment in Python</h3>
        <p>In Python, variables are used to store data values. Unlike some other programming languages, Python has no command for declaring a variable. A variable is created the moment you first assign a value to it.</p>
        
        <h4>Key Points:</h4>
        <ul>
            <li>Variables don't need to be declared with any particular type</li>
            <li>Python uses = for assignment</li>
            <li>Variable names should be descriptive and follow naming conventions</li>
            <li>Python variables are case-sensitive</li>
        </ul>

        <h4>Example:</h4>
        <pre>
        # Assigning values to variables
        x = 5
        y = "Hello, World!"

        # Print variables
        print(x)
        print(y)

        # Reassigning variables
        x = 10
        print(x)

        # Multiple assignment
        a, b, c = 1, 2, 3
        print(a, b, c)
        </pre>

        <p>Try modifying and running the code in the editor!</p>
    `,
    practice: `# Variables and Assignment

# Assign your name to a variable
name = "Akhil Gurrapu"

# Assign your age to a variable
age = 25

# Assign a floating-point number to a variable
height = 1.75

# Print out the variables
print("Name: " + str(name))
print("Age: " + str(age))
print("Height: " + str(height))

# Try modifying the variables and see how the output changes!

# Multiple assignment
x, y, z = 1, 2, 3
print("x: " + str(x) + ", y: " + str(y) + ", z: " + str(z))

# Swap variables without a temporary variable
a, b = 10, 20
print("Before swap: a = " + str(a) + ", b = " + str(b))
a, b = b, a
print("After swap: a = " + str(a) + ", b = " + str(b))
`
};
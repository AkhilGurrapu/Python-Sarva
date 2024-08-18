export const controlFlow = {
    title: "Control Flow",
    content: `
        <h3>Control Flow in Python</h3>
        <p>Control flow is the order in which individual statements, instructions, or function calls are executed in a program. Python uses various control flow structures:</p>
        
        <h4>1. Conditional Statements (if, elif, else)</h4>
        <pre>
        if condition:
            # code to execute if condition is True
        elif another_condition:
            # code to execute if another_condition is True
        else:
            # code to execute if all conditions are False
        </pre>

        <h4>2. Loops (for and while)</h4>
        <pre>
        # For loop
        for item in iterable:
            # code to execute for each item

        # While loop
        while condition:
            # code to execute while condition is True
        </pre>

        <h4>3. Break and Continue</h4>
        <ul>
            <li><code>break</code>: Exits the current loop</li>
            <li><code>continue</code>: Skips the rest of the current iteration and moves to the next one</li>
        </ul>

        <h4>Example:</h4>
        <pre>
        # Conditional statement
        age = 18
        if age < 18:
            print("You are a minor")
        elif age == 18:
            print("You just became an adult")
        else:
            print("You are an adult")

        # For loop
        fruits = ["apple", "banana", "cherry"]
        for fruit in fruits:
            print(f"I like {fruit}")

        # While loop
        count = 0
        while count < 5:
            print(count)
            count += 1

        # Break and continue
        for i in range(10):
            if i == 3:
                continue  # Skip 3
            if i == 7:
                break  # Stop at 7
            print(i)
        </pre>
    `,
    practice: `# Practice: Implement control flow structures

# 1. Write an if-elif-else statement to categorize a person's age
# Child: 0-12, Teenager: 13-19, Adult: 20+
age = 15
# Your code here


# 2. Create a for loop to print the square of numbers from 1 to 5
# Your code here


# 3. Use a while loop to print numbers from 10 to 1 (countdown)
# Your code here


# 4. Create a loop that prints numbers from 1 to 10, but skips 5 and stops at 8
# Hint: Use continue and break
# Your code here

`
};
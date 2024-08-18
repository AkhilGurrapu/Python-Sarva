export const dictionaries = {
    title: "Dictionaries",
    content: `
        <h3>Dictionaries in Python</h3>
        <p>Dictionaries are unordered collections of key-value pairs. They are defined using curly braces {} and are mutable.</p>

        <h4>Key Concepts:</h4>
        <ul>
            <li><strong>Creating dictionaries</strong>: Using {} or dict()</li>
            <li><strong>Accessing values</strong>: Using keys</li>
            <li><strong>Adding/modifying key-value pairs</strong></li>
            <li><strong>Dictionary methods</strong>: keys(), values(), items(), get(), update(), etc.</li>
            <li><strong>Dictionary comprehensions</strong>: Concise way to create dictionaries</li>
        </ul>

        <h4>Example:</h4>
        <pre>
        # Creating a dictionary
        person = {"name": "Alice", "age": 30, "city": "New York"}
        print(person)

        # Accessing values
        print(person["name"])  # Output: Alice
        print(person.get("age"))  # Output: 30

        # Adding/modifying key-value pairs
        person["occupation"] = "Engineer"
        person["age"] = 31
        print(person)

        # Dictionary methods
        print(person.keys())
        print(person.values())
        print(person.items())

        # Dictionary comprehension
        squared = {x: x**2 for x in range(5)}
        print(squared)  # Output: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}
        </pre>
    `,
    practice: `# Practice: Working with dictionaries

# 1. Create a dictionary called 'student' with keys 'name', 'age', and 'grade'
student = 

# 2. Add a new key-value pair for 'subject' to the 'student' dictionary
# Your code here

# 3. Update the 'grade' of the student
# Your code here

# 4. Remove the 'age' key from the dictionary
# Your code here

# 5. Print all keys in the 'student' dictionary
# Your code here

# 6. Print all values in the 'student' dictionary
# Your code here

# 7. Check if 'grade' is in the dictionary and print the result
# Your code here

# 8. Create a new dictionary 'squares' where keys are numbers from 1 to 5 and values are their squares
# Use a dictionary comprehension
# Your code here

# 9. Merge two dictionaries: 'dict1' and 'dict2'
dict1 = {"a": 1, "b": 2}
dict2 = {"c": 3, "d": 4}
# Your code here (use the update method or | operator in Python 3.9+)

# Print the final 'student' dictionary and 'squares' dictionary
print("Student:", student)
print("Squares:", squares)
print("Merged dictionary:", dict1)  # or the new merged dictionary if you created one

`
};
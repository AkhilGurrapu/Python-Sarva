export const objectOrientedProgramming = {
    title: "Object-Oriented Programming",
    content: `
        <h3>Object-Oriented Programming in Python</h3>
        <p>Object-Oriented Programming (OOP) is a programming paradigm that uses objects to structure code. Python is a multi-paradigm language that supports OOP.</p>

        <h4>Key Concepts:</h4>
        <ul>
            <li><strong>Classes</strong>: Blueprints for creating objects</li>
            <li><strong>Objects</strong>: Instances of classes</li>
            <li><strong>Attributes</strong>: Data stored inside a class or instance</li>
            <li><strong>Methods</strong>: Functions defined inside a class</li>
            <li><strong>Inheritance</strong>: Creating a new class based on an existing class</li>
            <li><strong>Encapsulation</strong>: Restricting access to methods and variables</li>
            <li><strong>Polymorphism</strong>: Using a single type entity to represent different types in different scenarios</li>
        </ul>

        <h4>Example:</h4>
        <pre>
        class Animal:
            def __init__(self, name):
                self.name = name

            def speak(self):
                pass

        class Dog(Animal):
            def speak(self):
                return f"{self.name} says Woof!"

        class Cat(Animal):
            def speak(self):
                return f"{self.name} says Meow!"

        # Creating objects
        dog = Dog("Buddy")
        cat = Cat("Whiskers")

        # Using methods
        print(dog.speak())  # Output: Buddy says Woof!
        print(cat.speak())  # Output: Whiskers says Meow!
        </pre>
    `,
    practice: `# Practice: Object-Oriented Programming

# 1. Create a class called 'Rectangle' with attributes 'width' and 'height'
class Rectangle:
    # Your code here

    # 2. Add a method called 'area' that returns the area of the rectangle
    # Your code here

    # 3. Add a method called 'perimeter' that returns the perimeter of the rectangle
    # Your code here

# 4. Create an instance of Rectangle with width 5 and height 3
# Your code here

# 5. Print the area and perimeter of the rectangle
# Your code here

# 6. Create a subclass of Rectangle called 'Square'
class Square(Rectangle):
    # Your code here

    # 7. Override the __init__ method to ensure width and height are always equal
    # Your code here

# 8. Create an instance of Square with side length 4
# Your code here

# 9. Print the area and perimeter of the square
# Your code here

# 10. Create a method in Rectangle called 'is_square' that returns True if the rectangle is a square, False otherwise
# Your code here

# 11. Test the is_square method on both the rectangle and square instances
# Your code here

`
};
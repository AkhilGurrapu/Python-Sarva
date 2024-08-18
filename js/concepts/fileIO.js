export const fileIO = {
    title: "File I/O",
    content: `
        <h3>File Input/Output in Python</h3>
        <p>File I/O operations allow you to read from and write to files on your computer using Python.</p>

        <h4>Key Concepts:</h4>
        <ul>
            <li><strong>Opening files</strong>: Using the open() function</li>
            <li><strong>File modes</strong>: 'r' (read), 'w' (write), 'a' (append), 'r+' (read and write)</li>
            <li><strong>Reading files</strong>: read(), readline(), readlines()</li>
            <li><strong>Writing to files</strong>: write(), writelines()</li>
            <li><strong>Closing files</strong>: Always close files after operations</li>
            <li><strong>Context managers</strong>: Using 'with' statement for automatic file closing</li>
        </ul>

        <h4>Example:</h4>
        <pre>
        # Writing to a file
        with open('example.txt', 'w') as file:
            file.write("Hello, World!\\n")
            file.write("This is a new line.")

        # Reading from a file
        with open('example.txt', 'r') as file:
            content = file.read()
            print(content)

        # Appending to a file
        with open('example.txt', 'a') as file:
            file.write("\\nThis line is appended.")

        # Reading lines
        with open('example.txt', 'r') as file:
            lines = file.readlines()
            for line in lines:
                print(line.strip())
        </pre>
    `,
    practice: `# Practice: File I/O operations

# Note: For this practice, we'll simulate file operations using strings.
# In a real environment, you would use actual file paths.

# Simulated file content
file_content = ""

# 1. Write a function to simulate writing to a file
def write_to_file(content):
    global file_content
    file_content += content + "\\n"

# 2. Write a function to simulate reading from a file
def read_from_file():
    return file_content

# 3. Write some content to the simulated file
write_to_file("Hello, this is the first line.")
write_to_file("This is the second line.")
write_to_file("And this is the third line.")

# 4. Read and print the entire content of the file
print("File content:")
print(read_from_file())

# 5. Write a function to simulate appending to a file
def append_to_file(content):
    global file_content
    file_content += content + "\\n"

# 6. Append a new line to the file
append_to_file("This line is appended.")

# 7. Read and print the updated file content
print("\\nUpdated file content:")
print(read_from_file())

# 8. Write a function to simulate reading lines from a file
def read_lines_from_file():
    return file_content.split("\\n")

# 9. Read and print each line of the file separately
print("\\nReading lines individually:")
for line in read_lines_from_file():
    if line:  # Avoid printing empty lines
        print(line)

# 10. Write a function to simulate searching for a word in the file
def search_in_file(word):
    return word in file_content

# 11. Search for a word in the file and print the result
search_word = "second"
if search_in_file(search_word):
    print(f"\\nThe word '{search_word}' was found in the file.")
else:
    print(f"\\nThe word '{search_word}' was not found in the file.")

`
};
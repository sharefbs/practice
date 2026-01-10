# This is an evolving doc for my python training.

# There is no python syntax
# for multi-line comments

"""
Docstring for learning-py
as long as this string is not
assigned to a variable.
"""

print("Hello World!")
print("Learning", "Python", sep=" ", end="...\n") # sep indicates separator between values

# Variables do need a type declaration
# and canchange type after being set

x = 5
y = "John"
print(x)
print(y)

# Can CAST to specify variable
x = str(3)
y = int(3)
z = float(3)

# Get data type by "type()" function
print(type(x))
print(type(z))

"""
String variables can be declared with
single or double quotes. Quotes within 
strings must be different " '' " or ' "" '
"""
x = "John"
y = 'John'
if x == y:
    print("They are the same.")

# Assign multi-line string to a variable 
a = """Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."""
print(a)

# Strings are arrays
a = "Hello World!"
print(a[1])

# Can loop through strings like arrays
for x in "a":
    print(x)

# Can get length of strings like arrays
print(len(a))

# Can check for certain character or character combo with "in"
txt = "The best things in life are free!"
print("free" in txt)

if "free" in txt:
    print("Yes, 'free' is present.")

# Can check for lack of with "not in"
print("expensive" not in txt)

if "expensive" not in txt:
    print("No, 'expensive' is NOT present.")

# Return range of characters with slice syntax
b = "Hello, World!"
print(b[2:5])

print(b[:5]) # Start from beginning to 5
print(b[2:]) # Start from 2 to end

print(b[-5:-2]) # Begin in reverse order

# Change the string to upper- or lowercase -> upper(), lower()
print(b.upper())
print(b.lower())

# Remove whitespaces at beginning and end of string
a = " Hello, World! "
print(a.strip())

# Replace a string with another string
print(a.replace("H", "J"))

# Split a string into substrings -> ['', '', ...]
print(a.split(","))

# Concatenation of strings
a = "Hello"
b = "World"
c = a + " " + b
print(c)

# Use F-string format to combine diffent data in string format
# f"string{placeholder}"
age = 36
txt = f"My name is John, I am {age}"
print(txt)

price = 59
txt = f"The price is {price} dollars."
print(txt)

txt = f"The price is {price:.2f} dollars" # Includes decimal values to two places
print(txt)

txt = f"The price is {20 * 59} dollars." # Can include Python operations

# Use escape characters "\" to insert illegal characters into a string
txt = "We are the so-called \"Vikings\" from the north." 

"""
Escapes; Meanings
\' ; single quote
\\ ; backslash
\n ; new line
\r ; carriage return
\t ; tab
\b ; backspace
\f ; form feed
\ooo ; octal value
\xhh ; hex value
"""

"""
Method	        Description
capitalize()	Converts the first character to upper case
casefold()	    Converts string into lower case
center()	    Returns a centered string
count()	        Returns the number of times a specified value occurs in a string
encode()	    Returns an encoded version of the string
endswith()	    Returns true if the string ends with the specified value
expandtabs()	Sets the tab size of the string
find()	        Searches the string for a specified value and returns the position of where it was found
format()	    Formats specified values in a string
format_map()	Formats specified values in a string
index() 	    Searches the string for a specified value and returns the position of where it was found
isalnum()	    Returns True if all characters in the string are alphanumeric
isalpha()	    Returns True if all characters in the string are in the alphabet
isascii()	    Returns True if all characters in the string are ascii characters
isdecimal() 	Returns True if all characters in the string are decimals
isdigit()	    Returns True if all characters in the string are digits
isidentifier()	Returns True if the string is an identifier
islower()	    Returns True if all characters in the string are lower case
isnumeric() 	Returns True if all characters in the string are numeric
isprintable()	Returns True if all characters in the string are printable
isspace()	    Returns True if all characters in the string are whitespaces
istitle()	    Returns True if the string follows the rules of a title
isupper()	    Returns True if all characters in the string are upper case
join()	        Joins the elements of an iterable to the end of the string
ljust()     	Returns a left justified version of the string
lower()	        Converts a string into lower case
lstrip()	    Returns a left trim version of the string
maketrans()	    Returns a translation table to be used in translations
partition()	    Returns a tuple where the string is parted into three parts
replace()	    Returns a string where a specified value is replaced with a specified value
rfind()	        Searches the string for a specified value and returns the last position of where it was found
rindex()	    Searches the string for a specified value and returns the last position of where it was found
rjust()	        Returns a right justified version of the string
rpartition()	Returns a tuple where the string is parted into three parts
rsplit()	    Splits the string at the specified separator, and returns a list
rstrip()	    Returns a right trim version of the string
split()	        Splits the string at the specified separator, and returns a list
splitlines()	Splits the string at line breaks and returns a list
startswith()	Returns true if the string starts with the specified value
strip()	        Returns a trimmed version of the string
swapcase()	    Swaps cases, lower case becomes upper case and vice versa
title()	        Converts the first character of each word to upper case
translate()	    Returns a translated string
upper()	        Converts a string into upper case
zfill()	        Fills the string with a specified number of 0 values at the beginning
"""

# Legal variable variations only
myvar = "John"
my_var = "John"
_my_var = "John"
myVar = "John"
MYVAR = "John"
myvar2 = "John"

# Assigning multiple variables on a single line
x, y, z = "Orange", "Banana", "Cherry"
print(x)
print(y)
print(z)

# Assigning one value to multiple variables
x = y = z = "Orange"
print(x)
print(y)
print(z)

# Values can be unpacked from tuples or lists, etc.
fruits = ["apple", "banana", "cherry"]
x, y, z = fruits
print(x)
print(y)
print(z)

# Print multiple values by comma-separation
# Includes space after each value
print(x, y, z)

# Print multiple values by addition operator
# Does not include space after each value 
print(x + y + z)

# ------
# Global variables section
x = "awesome" # Global variable

def myfunc():
    x = "fantastic" # Local variable
    print("Python is " + x)

myfunc()

print("Python is " + x)

# Global keyword indicates a variable
# belongs to global scope
def myfunc():
    global x # Global keyword 
    x = "fantastic"

myfunc()

print("Python is " + x)

# Use "global" to change the global value in function
x = "awesome"

def myfunc():
    global x
    x = "fantastic"

myfunc()

print("Python is " + x)

# List -> []
x = ["apple", "banana", "cherry"]
print(type(x))

# Tuple -> ()
x = ("apple", "banana", "cherry")
print(type(x))

# Dictionary -> {"" : "",...}
x = {"name" : "Dylan", "age" : "29"}
print(type(x))

# Boolean -> True, False
x = True
print(type(x))

# ------ 
# Built-in Data types
"""

Text: str                               | x = "Hello World"
Numeric: int, float, complex            | x = 20 ; x = 20.5 ; x = 1j
Sequence: list, tuple, range            | x = [] ; x = () ; x = range(6)
Mapping: dict                           | x = {"" : "", ...}
Set-type: set, frozenset                | x = {"", "", ...} ; x = frozenset({"", "", ...})
Boolean: bool                           | x = True ; x = False
Binary: bytes, bytearray, memoryview    | x = memoryview(bytes(5)) ; x = bytearray(5) ; x = b"Hello"
None: NoneType                          | x = None

""" 
# To specify the data type
"""

str|x = str("Hello World")
int|x = int(20)
float|x = float(20.5)
complex|x = complex(1j)
list|x = list(("apple", "banana", "cherry"))	
tuple|x = tuple(("apple", "banana", "cherry"))	
range|x = range(6)
dict|x = dict(name="John", age=36)
set|x = set(("apple", "banana", "cherry"))
frozenset|x = frozenset(("apple", "banana", "cherry"))	
bool|x = bool(5)	
bytes|x = bytes(5)	
bytearray|x = bytearray(5)	
memoryview|x = memoryview(bytes(5))

"""

# Mathematical conversions
x = 1 # int
y = 2.8 # float
z = 1j # complex ; cannot convert into another number type

# convert from int to float:
a = float(x)

# convert from float to int:
b = int(y)

# convert from int to complex:
c = complex(x)

print(a)
print(b)
print(c)

print(type(a))
print(type(b))
print(type(c))

# Random is a built-in module
import random

print(random.randrange(1, 10, 1))
print(random.randbytes(b"hello"))
print(random.randint(1, 5))

# Boolean values
print(10 > 9) # True
print(10 == 9) # True
print(10 < 9) #True

# Boolean function
print(bool("Hello"))
'''
False Boolean values
bool(False)
bool(None)
bool(0)
bool("")
bool(())
bool([])
bool({})
'''


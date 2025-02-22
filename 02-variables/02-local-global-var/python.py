# In Functions x is not accessable when other x is already declared there, because inside functions both variables are different
x: int = 10

def modify():
    # variable can not be accessed outside function
    x: int = 20  

modify()
print(x)  # Output: 20


# If inside function we want same x as global x then we need to use global keyword to access that
x: int = 10

def modify():
    global x 
    x = 20

modify()
print(x) 
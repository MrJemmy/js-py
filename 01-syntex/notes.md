python

```python

    print("to print in terminal") # after print, other print always start in new line
    print("to print in terminal", end="")  # after print it will not start in new line

    # userinput
    user_input: str = input("Please enter value: ") # input returns value in string type

```

javascript

```javascript

    console.log("to log in terminal(NODE JS) or console(Browser JS)") // after log, other log always start in new line
    /* 
        we can not avoid new line log in console(Browser JS) so to achive that use string concatination and log in string variable
    */

   // in node js we can use this to avoid new line log in console
   process.stdout.write("This is printed without a trailing newline");


    // userinput
    let userInput = prompt("Please enter value: ") // input returns value in string type

```
> Q. If the age is less than 0, print "Invalid age".
> - If the age is between 0 and 12 (inclusive), check:
> - If the person loves toys (boolean value), print "Child who loves toys".
> - Otherwise, print "Child".
> - If the age is between 13 and 19 (inclusive), print "Teenager".
> - If the age is between 20 and 64 (inclusive), print "Adult".
> - If the age is 65 or above, print "Senior".
> - If the age is 18 and the person loves sports (boolean value), print "Special Teenager who loves sports".
> - If the age is 30 and the person is a parent (boolean value), print "Special Adult who is a parent".
> - Demonstrate logical AND and logical OR conditions.
Show that in Python, you can perform chained comparisons like 10 > age > 4, but in JavaScript, you need to separate them like 10 > age && age > 4.

- python

```python

def determine_category(age, loves_toys=False, loves_sports=False, is_parent=False):
    if age < 0:
        print("Invalid age")
    else:
        if age == 18 and loves_sports:
            print("Special Teenager who loves sports")
        elif age == 30 and is_parent:
            print("Special Adult who is a parent")
        elif age <= 12:
            if loves_toys:
                print("Child who loves toys")
            else:
                print("Child")
        elif age <= 19:
            print("Teenager")
        elif age <= 64:
            print("Adult")
        else:
            print("Senior")

    # Demonstrating logical AND and OR
    if 0 < age < 65:
        print("You are not a Senior")
    if not (0 <= age <= 120):
        print("Unrealistic age")

    # Demonstrating chained comparisons
    if 10 > age > 4:
        print("Age is between 4 and 10")

# Test cases
determine_category(10, loves_toys=True)
determine_category(18, loves_sports=True)
determine_category(30, is_parent=True)
determine_category(70)
determine_category(-5)
determine_category(5)
```

- javascript

```javascript
function determineCategory(age, lovesToys = false,  lovesSports = false, isParent = false) {
    if (age < 0) {
        console.log("Invalid age");
    } else {
        if (age === 18 && lovesSports) {
            console.log("Special Teenager who loves sports");
        } else if (age === 30 && isParent) {
            console.log("Special Adult who is a parent");
        } else if (age <= 12) {
            if (lovesToys) {
                console.log("Child who loves toys");
            } else {
                console.log("Child");
            }
        } else if (age <= 19) {
            console.log("Teenager");
        } else if (age <= 64) {
            console.log("Adult");
        } else {
            console.log("Senior");
        }
    }

    // Demonstrating logical AND and OR
    if (age > 0 && age < 65) {
        console.log("You are not a Senior");
    }
    if (age < 0 || age > 120) {
        console.log("Unrealistic age");
    }

    // Demonstrating that chained comparisons are not valid in JavaScript
    // You need to use separate comparisons
    if (10 > age && age > 4) {
        console.log("Age is between 4 and 10");
    }
}

// Test cases
determineCategory(10, true);
determineCategory(18, false, true);
determineCategory(30, false, false, true);
determineCategory(70);
determineCategory(-5);
determineCategory(5);
```
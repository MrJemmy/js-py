- python

```python

# we can use Combined Cases using `| (or)`
user = "Guest"

match user:
      case "admin" | "manager":  print("Full access")
      case "Guest":  print("Limited access")
      case _: print("No access")

# we can use condition inside match cash and we do not need break here to break the case
details = [100,5]

match details:
    case [amt, duration] if 1000<amt<10000 :
        print(amt*10*duration/100)
    case [amt, duration] if amt>=10000:
        print(amt*15*duration/100)
    case [amt]: # the case can be written after conditional match only
        print(amt)
    case _:
        print("amount must be abow 1000")
        

n = 3
match n:
    case 0: print("Monday")
    case 1: print("Tuesday")
    case 2: print("Wednesday")
    case 3: print("Thursday")
    case 4: print("Friday")
    case 5: print("Saturday")
    case 6: print("Sunday")
    case _: print("Invalid day number")
```


- javascript
```javascript
// in javascript we need break statements.
let x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}

```
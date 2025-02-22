- python

```python
for i in range(1, 6):
    print(i)

# in list we get values
cars = ["BMW", "Volvo", "Mini"]
for car in cars:
    print(car)

# array with indexes
colors = ["red", "green", "blue"]
for index, color in enumerate(colors):
    print(f"{index}: {color}")

# in dictionary we get keys
numbersDir = {10:"Ten", 20:"Twenty", 30:"Thirty",40:"Forty"}
for numbersKey in numbersDir:
   print (numbersKey,":",numbersDir[numbersKey])

# using items we get tuple of keys and values 
numbers = {10:"Ten", 20:"Twenty", 30:"Thirty",40:"Forty"}
for x in numbers.items():
   print (x)

# zip helps to create tuple of 2 values
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]
for name, age in zip(names, ages):
    print(f"{name} is {age} years old")
```

- javascript

```javascript
// normal for loop
const cars = ["BMW", "Volvo", "Mini"];
let text = ""

for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

// for in loop (return key in object and return index in array)
const numbers = [45, 4, 9, 16, 25];
let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}

// for of loop (did not work with object directly) and return value in array
const cars = ["BMW", "Volvo", "Mini"];
let text = "";
for (let x of cars) {
  text += x;
}
```
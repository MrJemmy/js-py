- python

```python
for i in range(1, 6):
    print(i)

# in list we get values
cars: list[str] = ["BMW", "Volvo", "Mini"]
for car: str in cars:
    print(car)

# array with indexes
colors: list[str] = ["red", "green", "blue"]
for index: int, color: str in enumerate(colors):
    print(f"{index}: {color}")

# in dictionary we get keys
numbers_dir: dict[int, str] = {10:"Ten", 20:"Twenty", 30:"Thirty",40:"Forty"}
for numbers_key: int in numbers_dir:
   print (numbers_key,":",numbers_dir[numbers_key])

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
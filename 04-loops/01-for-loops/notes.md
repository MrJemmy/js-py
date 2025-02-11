- python

```python
for i in range(1, 6):
    print(i)
```

- javascript

```javascript
// normal for loop
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
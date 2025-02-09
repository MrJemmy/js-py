- Python
     - `False` : empty sequences (lists `[]`, tuples `()`, strings `""`, dictionaries `{}`, sets `set()`), `0`, `None`, `False`

- JavaScript
    - `false` : `false`, `0`, `0n`, `""` (empty string). `null`, `undefined`, `NaN`

    - empty object `{}` and empty array `[]` in javascript is `true`
    - to get false in array and object 
    ```javascript
    function isEmpty(value) {
        if (Array.isArray(value)) {
            return value.length === 0 ? false : value;
        } else if (typeof value === 'object' && value !== null) {
            return Object.keys(value).length === 0 ? false : value;
        } else {
            return value;
        }
    }

    isEmpty([]) // false
    isEmpty({}) // false

    ```


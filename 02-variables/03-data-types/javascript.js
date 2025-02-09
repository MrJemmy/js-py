// Primitive :- it store values it self only
console.log("Number     :", typeof(5.5))
console.log("Boolean    :",typeof(true))

console.log("String     :",typeof("string"))
console.log("undefine   :",typeof(undefined))
console.log("null       :",typeof(null))
console.log("Symbol     :",typeof(Symbol("Symbol")))

// Non-Primitive :- it store all type of data inside
console.log("object     :",typeof({}))
console.log("Array      :",typeof([]))
console.log("function   :",typeof(function(){}))  // function is also object


// OUTPUT:
// 	number     : number
// 	boolean    : boolean
// 	string     : string
// 	undefine   : undefined
// 	null       : object        // null dtpe is object but null is show as object
// 	Symbol     : symbol
// 	object     : object
// 	Array      : object        // Array is also object
// 	function   : function      // function is also object
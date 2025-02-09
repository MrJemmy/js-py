let obj = {
    item: "data",
    func: function(){
        console.log(this.item)
    }
}

let arr = [11, 12, 12, 234]

console.log("item" in obj)
console.log("__proto__" in obj)
console.log(1 in arr)  // 1 is index so return true
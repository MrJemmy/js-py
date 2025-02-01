let x = 10;  // Global variable

if (true) {
    let x = 20;  // Local variable (block-scoped)
    console.log("Local x:", x);  // Output: 20

    // ERROR : there are not any to access global variables in local scope, when we have have same name
    console.log("Global x:", window.x || globalThis.x);  // Output: 10
}

console.log("Outside x:", x);  // Output: 10 (global remains unchanged)
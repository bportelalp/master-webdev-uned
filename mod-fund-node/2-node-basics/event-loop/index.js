const fs = require("fs");
console.log("--- Start Synchronous code ---")
fs.readFile(__filename, () => {
  console.log("this is readFile 1 --> Libuv: I/O queue (4)");
});
process.nextTick(() => console.log("this is process.nextTick 1 --> Microtask queue: nextTick queue (1)"));
Promise.resolve().then(() => console.log("this is Promise.resolve 1 --> Microtask queue: promise queue (2)"));
setTimeout(() => console.log("this is setTimeout 1 --> Libuv: timer queue (3)"), 0);
setImmediate(() => console.log("this is setImmediate 1 --> Libuv: check queue (5)"));

for (let i = 0; i < 2000000000; i++) { }
console.log("--- End synchronous code ---");
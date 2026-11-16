const fs = require("fs");
console.log("1. Program started");
fs.writeFileSync("example.txt", "Hello, Node.js!");
console.log("2. File created and data written");
const data = fs.readFileSync("example.txt", "utf-8");
console.log("3. File data:", data);
fs.appendFileSync(
  "example.txt",
  "\nThis is synchronous programming."
);
console.log("4. Data appended");
const updatedData = fs.readFileSync("example.txt", "utf-8");
console.log("5. Updated file data:");
console.log(updatedData);
console.log("6. Program ended");
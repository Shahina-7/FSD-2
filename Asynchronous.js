const fs = require("fs");
console.log("1. Program started");
fs.writeFile("sample.txt", "Hello, Node.js!", (err)=>{
  if (err) {
    console.error("Error while writing file:", err);
    return;
  }
  console.log("2. File created and data written");
  fs.readFile("sample.txt", "utf-8", (err, data)=>{
    if (err) {
      console.error("Error while reading file:", err);
      return;
    }
    console.log("4. File data:", data);
    console.log("5. Program ended");
  });
});
console.log("3. Program continues");
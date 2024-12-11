const fs = require("fs");

const input = fs.readFileSync('input3.txt').toString();

let result = 0;

const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;

Array.from(input.matchAll(regex))
  .forEach(match => {
  const a = match?.[1];
  const b = match?.[2];
  if (a && b) {
    result += (a * b);
  }
});


console.log(result);
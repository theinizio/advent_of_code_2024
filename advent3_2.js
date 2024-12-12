const fs = require("fs");

const input = fs.readFileSync('input3.txt').toString();

let result = 0;


const regex = /mul\((\d{1,3}),(\d{1,3})\)/gm;

const doCmd = "do()";

// split the input by "don't()",
// look for the most recent "do()" in the each part
// if "do()" is found => apply 3.1 code fpr this part

("do()" + input).split("don't()").forEach(part => {
  const doStartPosition = part.indexOf(doCmd);

  if(doStartPosition === -1) return;

  const codeToExecute = part.substring(doStartPosition + doCmd.length);

  Array.from(codeToExecute.matchAll(regex))
    .forEach(match => {
      const a = match?.[1];
      const b = match?.[2];
      if (a && b) {
        result += (a * b);
      }
    });
});

console.log(result);
const input = global
  .loadInput()
  .lines()
  .map((i) => i.int());

let inc = 0;
let last = input[0];
for (const depth of input.slice(1)) {
  if (depth > last) {
    inc++;
  }
  last = depth;
}

console.log(inc);

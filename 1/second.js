const input = global
  .loadInput()
  .lines()
  .map((i) => i.int());

let inc = 0;
let last = input[0] + input[1] + input[2];
for (let i = 1; i < input.length - 2; i++) {
  const current = input[i] + input[i + 1] + input[i + 2];
  if (current > last) {
    inc++;
  }
  last = current;
}

console.log(inc);

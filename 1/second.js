const input = global
  .loadInput()
  .lines()
  .map((i) => i.int());

let inc = 0;
let last = input.slice(0, 3).sum();
for (let i = 1; i < input.length - 2; i++) {
  const current = input.slice(i, i + 3).sum();
  if (current > last) {
    inc++;
  }
  last = current;
}

print(inc)

const input = global
  .loadInput()
  .lines()
  .map(s => s.split(' '))
  .map(([a, b]) => [a, b.int()])

let h = 0;
let d = 0;
for (const [dir, val] of input) {
  switch (dir) {
    case 'forward':
      h += val;
      break;
    case 'down':
      d += val;
      break;
    case 'up':
      d -= val;
      break;
    default:
      throw 'unreachable';
  }
}

print(h * d);

const input = global
  .loadInput()
  .lines()
  .map(s => s.split(' '))
  .map(([a, b]) => [a, b.int()])

let h = 0;
let d = 0;
let aim = 0;

for (const [dir, val] of input) {
  switch (dir) {
    case 'forward':
      h += val;
      d += aim * val;
      break;
    case 'down':
      aim += val;
      break;
    case 'up':
      aim -= val;
      break;
    default:
      throw 'unreachable';
  }
}

print(h * d);

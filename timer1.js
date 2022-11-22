const args = process.argv.slice(2);

const alarm = num => {
  if (!num) { return; }
  let counter = 0;
  let sorted = num.sort((a, b) => { return a - b; });
  while (counter < sorted.length) {
    if (sorted[counter] < 0) { counter++; continue; }
    if (isNaN(sorted[counter])) { counter++; continue; }
    setTimeout(() => {
      process.stdout.write('\x07');
    }, sorted[counter] * 1000);
    counter++;
  }
};


alarm(args);
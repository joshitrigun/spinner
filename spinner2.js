let t = 10;

const animFrames = ["|", "/", "-", "\\"];
const totaltime = t * animFrames.length;

const spinnerLoop = setInterval(() => {
  for (let i = 0; i < animFrames.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r ${animFrames[i]}`);
    }, t + i);
  }
}, totaltime);

setTimeout(() => {
  clearInterval(spinnerLoop);
  process.stdout.write("\n");
}, 4000);

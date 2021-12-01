let t = 200;

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    process.stdout.write("\r |   ");
  }, t + i * 1000);
  setTimeout(() => {
    process.stdout.write("\r /   ");
  }, 2 * t + i * 1000);
  setTimeout(() => {
    process.stdout.write("\r -   ");
  }, 3 * t + i * 1000);
  setTimeout(() => {
    process.stdout.write("\r \\   ");
  }, 4 * t + i * 1000);
  setTimeout(() => {
    process.stdout.write("\r |   ");
  }, 5 * t + i * 1000);
  setTimeout(() => {
    process.stdout.write("\n");
  }, 6000);
}

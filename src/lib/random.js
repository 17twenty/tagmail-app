export function getRandomInt() {
  const min = Math.ceil(1);
  const max = Math.floor(1000000000);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function notWorking() {
  throw Error('hello');
}

export default function returnHowManyArguments(...args) {
  let count = 0;
  let arg;
  // eslint-disable-next-line no-unused-vars
  for (arg of args) count += 1;
  return count;
}

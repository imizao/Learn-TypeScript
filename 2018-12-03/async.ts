async function myAwesomeFunction (x: number) {
  setTimeout(() => {}, 5000);
  return await 2 + x;
}
const result = myAwesomeFunction(3);
result.then((result) => {
  console.log(result);
})
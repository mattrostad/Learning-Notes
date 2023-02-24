//LOOPS


//FOR IN LOOP
/**
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
 */
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// Expected output:
// "a: 1"
// "b: 2"
// "c: 3"

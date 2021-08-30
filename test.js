const { getGreeting, add } = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
})

// test('add num1, num2', () => {
//   expect(getSum(5,2)).toBe(7);
// });
 test('Return sum of parameter', () => {
  expect(add(5,2)).toEqual(7);
});
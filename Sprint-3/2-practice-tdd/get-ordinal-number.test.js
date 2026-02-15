const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber.

// Continue testing and implementing getOrdinalNumber for additional cases.
// Write your tests using Jest — remember to run your tests often for continual feedback.

// To ensure thorough testing, we need broad scenarios that cover all possible cases.
// Listing individual values, however, can quickly lead to an unmanageable number of test cases.
// Instead of writing tests for individual numbers, consider grouping all possible input values
// into meaningful categories. Then, select representative samples from each category to test.
// This approach improves coverage and makes our tests easier to maintain.

// Case 1: Numbers ending with 1 (but not 11)
// When the number ends with 1, except those ending with 11,
// Then the function should return a string by appending "st" to the number.
test("should append 'st' for numbers ending with 1, except those ending with 11", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(131)).toEqual("131st");
});

// case 2: last two digits ending with 11,12,13 
test("should append 'th' for numbers with last digits 11,12,13", () =>{
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(313)).toEqual("313th")
  expect(getOrdinalNumber(2112)).toEqual("2112th")
})

// Case 3: Numbers ending with 2(but not 12)
test("should append 'nd' for numbers ending with 2, except those ending with 12", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(52)).toEqual("52nd");
  expect(getOrdinalNumber(232)).toEqual("232nd");
});

// Case 4: Numbers ending with 3(but not 13)
test("should append 'rd' for numbers ending with 3, except those ending with 13", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(83)).toEqual("83rd");
  expect(getOrdinalNumber(463)).toEqual("463rd");
});

// case 5: Numbers ending with 4-9 and 0
test("should append 'th' for numbers with last 4-9 and 0", () =>{
  expect(getOrdinalNumber(8)).toEqual("8th");
  expect(getOrdinalNumber(3130)).toEqual("3130th")
  expect(getOrdinalNumber(2119)).toEqual("2119th")
})

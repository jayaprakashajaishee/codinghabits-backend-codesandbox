const Sum = require("./Sum.js");
//import Sum from "./Sum";

test("Adds two numbers", () => {
  expect(Sum(1, 2)).toBe(3);
});

test("Returns a number ", () => {
  expect(typeof Sum(1, 2)).toBe("number");
});

test("Works with negative numbers", () => {
  expect(Sum(2, -4)).toBe(-2);
});

# 💻 Project : Calculator

Build an app that is functionally similar to this: https://javascript-calculator.freecodecamp.rocks/.

[**View on CodePen**](https://codepen.io/alexis-massa/pen/VwoGveP)

- [x] My calculator should contain a clickable element containing an `=` (equal sign) with a corresponding `id="equals"`.
- [x] My calculator should contain 10 clickable elements containing one number each from 0-9, with the following corresponding IDs: `id="zero"`, `id="one"`, `id="two"`, `id="three"`, `id="four"`, `id="five"`, `id="six"`, `id="seven"`, `id="eight"`, and `id="nine"`.
- [x] My calculator should contain 4 clickable elements each containing one of the 4 primary mathematical operators with the following corresponding IDs: `id="add"`, `id="subtract"`, `id="multiply"`, `id="divide"`.
- [x] My calculator should contain a clickable element containing a `.` (decimal point) symbol with a corresponding `id="decimal"`.
- [x] My calculator should contain a clickable element with an `id="clear"`.
- [x] My calculator should contain an element to display values with a corresponding `id="display"`.
- [x] At any time, pressing the `clear` button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of `display`.
- [x] As I input numbers, I should be able to see my input in the element with the id of display.
- [x] In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit =, the correct result should be shown in the element with the id of `display`.
- [x] When inputting numbers, my calculator should not allow a number to begin with multiple zeros.
- [x] When the decimal element is clicked, a `.` should append to the currently displayed value; two `.` in one number should not be accepted.
- [x] I should be able to perform any operation (`+`, `-`, `*`, `/`) on numbers containing decimal points.
- [x] If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (`-`) sign). For example, if `5 + * 7 =` is entered, the result should be `35` (i.e. `5 * 7`); if `5 * - 5 = `is entered, the result should be `-25` (i.e. `5 * (-5)`).
- [x] Pressing an operator immediately following `=` should start a new calculation that operates on the result of the previous evaluation.
- [x] My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like `2 / 7` with reasonable precision to at least 4 decimal places).
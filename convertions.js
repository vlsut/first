// 1. string 'number' will be concatenated with number 3 forming 'number3' string.
// 2. string 'number3' will be concatenated with number 3 forming 'number33' string
'number' + 3 + 3

// when adding null to number 3, null becomes 0 (zero). Result is 0+3=3
null + 3

// both values are implicitly cast to boolean type (5=> true, "qwerty" => true)
// Result is "qwerty" since both values are truthy and operator &&
// returns the last operand in case all of them are truthy.
5 && "qwerty"

//'40' converts the string "40" into the number 40, and +'2' converts the string "2" into the number 2.
// +'40' + +'2' evaluates to 40 + 2, which is 42.
// the result of the addition (42) is concatenated with the string "hillel". Result is "42hillel"
+'40' + +'2' + "hillel"

// '10' is converted into the number 10.
// 10 - 5, which is 5.
// 5 === 6 evaluates to false, since 5 is not equal to 6.
'10' - 5 === 6

// true is converted to 1, and false is converted to 0.
// Result is 1 + 0, which is 1.
true + false


// convert the string '4px' to a number. '4px' is not a valid number, so the conversion results in NaN (Not a Number).
// subtraction operation is then performed.
// the result of '4px' - 3 is NaN.
'4px' - 3

// convert the string '4' to a number so the conversion results is 4
// subtraction operation is then performed.
// the result of 4 - 3 is 1
'4' - 3


// 3 ** 0 evaluates to 1 because any number raised to the power of 0 is 1.
// the concatenation operator (+) is applied to the string '6' and '1'.
// '6' + 1 evaluates to '61'.
'6' + 3 ** 0

// 6 is casted to number
// Result is 12/6=2
12 / '6'

// 5 === 6 evaluates to false.
// '10' + false evaluates to '10false'.
'10' + (5 === 6)

// null does not equal to '' even after type conversion, because null only loosely equal to undefined
// the result of null == '' is false.
null == ''

// 1. 9/3=3
// 2. 3**3=27
3 ** (9 / 3)

// !!'false' evaluates to true because 'false' is a non-empty string
// !!'true' evaluates to true because 'true' is a non-empty string
// true == true evaluates to true.
!!'false' == !!'true'



// '0' coerces to true because it is a non-empty string.
// '0' && 1 evaluates to 1.
// left operand (0) is falsy, so JavaScript evaluates the right operand 1
0 || '0' && 1

// null coerces to 0, and false also coerces to 0.
// (+null == false) evaluates to true
// true coerces to 1
// 1 < 1 evaluates to false
(+null == false) < 1

// false && true = false
// false || true = true
false && true || true

// (false || true) = true
// false && true = false
false && (false || true)

// 1 ** 5 = 1
// null coerces to 0, and false also coerces to 0.
// (+null == false) evaluates to true
// true coerces to 1
// 1 < 1 evaluates to false
(+null == false) < 1 ** 5


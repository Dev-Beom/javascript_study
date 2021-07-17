// 자바스크립트의 변수는 자료형에 관계없이 모든 데이터일 수 있음.
// 따라서 변수는 어떤 순간에 문자열일 수 있고 다른 순간엔 숫자가 될 수도 있음.

// 숫자형엔 일반적인 숫자 외에 Infinity, -Infinity, NaN 같은 특수 숫자 값이 포함됨.
// Infinity는 어떤 숫자보다 더 큰 특수 값, 무한대를 나타냄.
// 어느 숫자든 0으로 나누면 무한대를 얻을 수 있음.

console.log(1 / 0); // infinity

console.log(Infinity); // infinity

// NaN은 계산 중 에러가 발생했다는 것을 나타내주는 값.
// 부정확하거나 정의되지 않은 수학 연산을 사용하면 계산 중에 에러가 발생하는데, 이 때 NaN 반환
console.log("문자열" / 2); // NaN

console.log("문자열" / 2 + 5); // NaN

// BigInt 형은 길이에 상관없이 정수를 나타낼 수 있음.
// 끝에 n 이 붙으면 BigInt형 자료임
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);

let name = "John";

// 변수를 문자열 중간에 삽입
console.log(`Hello, ${name}!`);

// 표현식을 문자열 중간에 삽입
console.log(`the result is ${1 + 2}`);

// boolean
let nameFieldChecked = true;
let ageFieldChecked = false;

let isGreater = 4 > 1;
console.log(nameFieldChecked, ageFieldChecked, isGreater);

// null
let age = null;
console.log(age);

// undefined
let phone;
console.log(phone);
phone = undefined;
console.log(phone);

console.log(typeof undefined); // undefined;
console.log(typeof 0); // number
console.log(typeof 10n); // bigint
console.log(typeof true); // boolean
console.log(typeof "foo"); // string
console.log(typeof Symbol("id")); // symbol
console.log(typeof Math); // object
console.log(typeof null); // object
console.log(typeof alert); // function

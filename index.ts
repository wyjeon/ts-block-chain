const name = 'wyjeon',
  age = 3,
  gender = 'male';

const sayHi = (name, age, gender?) => {
  console.log(`Hello ${name} you are ${age}, you are a ${gender}`);
};

// sayHi(name, age); error TS2554: Expected 3 arguments, but got 2.
sayHi(name, age); // gender? : optional

export {};

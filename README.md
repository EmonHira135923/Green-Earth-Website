#### 7) Create a README file to answer the following question-

#### 1) What is the difference between var, let, and const?

#### 2) What is the difference between map(), forEach(), and filter()?

#### 3) What are arrow functions in ES6?

#### 4) How does destructuring assignment work in ES6?

#### 5) Explain template literals in ES6. How are they different from string concatenation?

<-------------------- Ans to the All of Question ---------------------------->

#### 1) What is the difference between var, let, and const?

<-------------------- Ans to the Q. NO - 01 ---------------------------->

### var – 3 Points

1 --> var can Re-Declare and Re-Assign.

2 --> It has Function Scope.

3 --> It is Hoisted and you can change its value any time.

# var Example :

let FullName = "Emon Hossain Hira";
FullName = "Akram"; -------> Right

# Re-Assign Value Anytime that you want

# Same Varriable Use

let FullName = "Declare"; -----> Right
console.log(FullName);

### Let – 3 Points

1 --> let can Re-Assign but cannot Re-Declare in the same block.

2 --> It has Block Scope.

3 --> It is not usable before declaration.

# let Example :

let FullName = "Emon Hossain Hira";
FullName = "Akram"; -------> Right

# Re-Assign Value Anytime that you want

# Same Varriable Not Use

let FullName = "Not Declare"; -----> Wrong
console.log(FullName);

### Const – 3 Points

1 --> const cannot Re-Declare and cannot Re-Assign.

2 --> It has Block Scope (only inside {} works).

3 --> The variable reference is fixed, but for objects/arrays you can still change their contents.

# const Example

const FirstName = "Emon";
FirstName = "Not Assign";

# Not Change

# Not Use Same Varriable

const FirstName = "Not Declare";

console.log(FullName);

#### 2) What is the difference between map(), forEach(), and filter()?

<-------------------- Ans to the Q. NO - 02 ---------------------------->

### map() – 3 Points

1 --> map() Always Return new array .

2 --> Doesn't Change The Old Array.

3 --> Creates a new array with the results of applying a function to each element.

# map() Example :

const array = [1, 2, 3];

const val = array.map((val) => {
console.log(val \* 3);
});

# Not Change Old Array

console.log("array", array);

### ForEach() – 3 Points

1 --> ForEach() Doesn't Return new array .

2 --> ForEach() Use For Array.

3 --> Doesn't Break When You Use This and Doesn't Change New Array .

# ForEach() Example

const array = [1, 2, 3, 4, 5];
array.forEach((val) => {
console.log(val);
});

### Filter() – 3 Points

1 --> Filter() Return Value If Condition True .

2 --> ForEach() Doesn't Change New Array.

3 --> If Condition True That's Reduce Array Size and Condition False Array Don't Change .

# Filter() Example

const array = [1, 2, 3, 4, 5];
const filtervalue = array.filter((val) => {
return val > 3;
});

console.log(filtervalue);

#### 3) What are arrow functions in ES6?

<-------------------- Ans to the Q. NO - 03 ---------------------------->

# Arrow Function are a new way of writing function introduced in ES6 .

## Doesn't Use Function KeyWord.

### const val = () => {}; this way declare arrow function .

#### this keyword find parents scope.

# Arrow Function Example :::

const val = () => {
let emon;
emon = "emon hossain hira";
console.log(emon);
};

val();

#### 4) How does destructuring assignment work in ES6?

<-------------------- Ans to the Q. NO - 04 ---------------------------->

# Destructuring assignment means taking small pieces out of a big box and putting them in separate boxes.

## Destructuring permission do it all in one line.

### Works With Array,Object,Function.

### Rename Variable.

# Destructuring Example

const person = {
name: "Emon",
age: 22,
};

const { name, age } = person;

console.log({ name, age });

#### 5) Explain template literals in ES6. How are they different from string concatenation?

<-------------------- Ans to the Q. NO - 05 ---------------------------->

# ` ` this keyword called backtics.

## ${} this keyword use for called varriable in backticks keyword.

### You can write multi-line strings without \n.

# template literals Example

const emon = "Emon Hossain Hira";
const person = "I Don't Know";

const templateliterals = `My Name is ${emon}. ${person} this person`;
console.log(templateliterals);

# Template Literals and String Concation some difference

# String Concation

1 ---> + sign use for String Concation

# Template Literals

1 ---> ` ` sign use for backticks

## String Concation

2 ---> Variable Manually create and use + sign String Concation

## Template Literals

2 ---> Variable Automatic create and use ${} sign Template Literals

### String Concation

3 ---> Harder to read with many variables

### Template Literals

3 ---> Cleaner and easier to read

###### Complete Answer

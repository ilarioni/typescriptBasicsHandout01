const a = "1";
// transpile ts file into js

//creating variables
const hello = "world";

// hello = "foo" - Cannot assign to 'hello' because it is a constant.ts(2588)
// when creating variables with let, we can re-assign with the same type

let hey = "sun";
let hey = true;
//Cannot redeclare block-scoped variable 'hey'.ts(2451)

// when can explicitly declare variable
let holla: string = "earth";
holla = 2;  //Type 'number' is not assignable to type 'string'.ts(2322)

//Functions
const getFullName = (name: string, surname: string): string => {
    return name + " " + surname;
};
console.log(getFullName("Monster", "Lessons"));

// run a .ts watch in Terminal with - tsc -w
// specify types every time to make your code safer

// creating objects
const user: { name: string; age: number} = {
    name: "monster",
    age: 31,
};
const user2 = {
    name: "Jack",
};

// or we can write it in other way
interface User {
    name: string;
    age: number;
}
const user3: User = {
    name: "jon",
    age: 30,
};

// if we want to make interface part not mandatory we can use ? sign
interface Part {
    name: string;
    age?: number;
}

console.log(user.) // showing all possible elements name and age

//Union operator
let username: string = "John";

let pageName: string | number = "1";
// or | union operator to assign either number or string value


let errorMessage: string | null = "null";


interface UserInterface {
    name: string;
    surname: string;
}

let user4: UserInterface | null = null; 

let someProp: string | number | null | undefined | string[] | object  // not usable


// Void typescript
const doSomething = (): void => {
    console.log("doSomething");
};

//avoid an use of - any

let meaw: any = "meaw";
console.log(meaw.bar()); //it can be any type of parameter - that's why you should avoid of using any

// never
const makeSomething = (): never => {
    throw "never";
};

// unknown
let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;
let s2: string = vUnknown; // Type 'unknown' is not assignable to type 'string'.ts(2322)

let pageNumber: string = "1";
let numericPageNumber: number = pageNumber as number; // throws an error


//
let page: any = "1";
let pageNewNumber = page as string;

// type assertion
const someElement = document.querySelector(".foo") as HTMLInputElement;

console.log("someElement", someElement.value)
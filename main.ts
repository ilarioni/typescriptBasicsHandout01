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


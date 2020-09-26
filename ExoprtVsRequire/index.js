// import { capitalizeString } from "./string_function";
// const cap = capitalizeString("hello!");
// console.log(cap);

// Use exports to Reuse a Code Block 
const capitalizeString = (String) => {
    return String.charAt(0).toUpperCase() + String.slice(1);
}
export { capitalizeString };

export const foo = "bar";
export const bar = "foo";

// Use * to Import Everthing from a file 

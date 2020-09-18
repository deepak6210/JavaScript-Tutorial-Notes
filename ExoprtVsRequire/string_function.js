// export const capitalizeString = str => str.toUpperCase()

import * as capitalizeString from "index.js";

// Create an Export fallback with export defualt 
export default function subtract(x,y) {return x - y;}

// Import a Defualt Exports 
import subtract from "math_functions";
subtract(7,4);

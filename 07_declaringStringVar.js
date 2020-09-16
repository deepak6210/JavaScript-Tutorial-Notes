//  Example to create a string in js 
var firtName = "Alan";
var lastname = "Turing";

// Escaping literal Quotes in String
var mystr = "I Am a \"Double quoted\" String";
console.log(mystr);

// Quoting Strings with Single Quotes 
var str = 'i am "Double Quots" and i am not throwing the error.';

// Escaping Sequence in String
/*
CODE    OUTPUT
\'      single quote
\"      Double quote
\\      backslash 
\n      newline 
\r      carriage return 
\t      tab 
\b      backspace 
\f      form feed 
 */

var mystr1 = "First lie \n\t\\secound line\nThirdine " 
console.log(mystr1);

// Concatenation Strings with Plus Operators
var ourstring = "I am First " + "I am Secound";
console.log(ourstring);

// Concatenating Strings woth Plus Equals Operator. 
var ourStr = "I come First.";
ourStr += "I Come Secound.";
console.log(ourStr)
  
// Concatenating String in between the already present String 
var ourName = "Deepak";
var ourstr = "Hello, Our name is " + ourName + ",how are you?";
console.log(ourstr);

// Appending Variable TO string 
var someAdj = "Deepak.";
var my_Str = "my name is ";
my_Str += someAdj;
console.log(my_Str);

// Find Length Of string 
var name = "Deepak";
nameLength = name.length;
console.log(nameLength)

// Bracket Notation to Find First Character in String 
FirstName = "Deepak";
firstLetterOfFirstName = FirstName[0];
console.log(firstLetterOfFirstName);

// String Immutability
// String are Immutable This means they can't Be altered Once Created 
var myStr = "Deepak"
myStr[0] = "T";
console.log(myStr)
// To change the Content Already present in the String We need to Overright The Complete String again 

// Bracket Notation to find Nth Character in string 
var firstName = "Deepak";
thirdLetterOfLastName = firstName[2];
console.log(thirdLetterOfLastName)

// Bracket Notation to Find Last Characrter in  String 
var firstName = "Deepak";
var lastLetterOfFirstName = firstName[firstName.length -1]; 
console.log(lastLetterOfFirstName);

// Bracket Notation to Find Nth-to-Last Charcter in String
var lastName = "Sharma";
var SecoundLastLetterOfFirstName = lastName[lastName.length - 2];
console.log(SecoundLastLetterOfFirstName);


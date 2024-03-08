//Extract the last four characters from the string below;"extravaganza"
let a = "extravaganza";
let b = a.substring(0,8);
console.log({ b });

//Insert the following string at the fourth index of the below variable:"eat"const food = "The quick fox jumped over the lazy dog"
const food = "The quick fox jumped over the lazy dog";
const insert = food.slice(0,4) + "eat" + food.slice(4);
console.log({ insert });

//Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"
const story = "The quick brown fox jumps over the lazy dog";
console.log(story.match(/the/g).length);
console.log(story.match(/brown/).length);

//Using JavaScript, find the following words from the following strings:1. "are"const string1 = "The pupils are reading in the library";2. "sitting"const string2 = "The child was sitting on the table before it fell"
const string1 = "The pupils are reading in the library";
const string2 = "The child was sitting on the table before it fell";
let c = string1.search("are");
let d = string2.search("sitting");
console.log({ c });
console.log({ d });

//Convert the following strings into the specified format:1. UpperCase: "wonderful"2. LowerCase: "amazing", "UndERneath"3. Title case "A wonderful world"
let e = "wonderful";
let f = e.toUpperCase();
console.log({ f });

let g = "amazing";
let h = g.toLowerCase();
console.log({ h });

let i = "UndERneath";
let j = i.toLowerCase();
console.log({ j });

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(titleCase("A wonderful world"));


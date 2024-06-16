"use strict";

const num = 22;

if (num < 9) {
    console.log("too low");
} else if (num > 15) {
    console.log("too much");
} else {
    console.log("chotko!!!");
}

switch (num) {
    case 50:
        console.log("false");
        break;
    case 10:
        console.log("false");
        break;
    case 99: 
        console.log("true")
        break;
    default: 
        console.log("ne to");
        break;
}
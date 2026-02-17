let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes

alert( 7.3e9 );  // 7.3 billions (same as 7300000000 or 7_300_000_000)

let mcs = 1e-6; // five zeroes to the left from 1

alert( 0xff ); // 255
alert( 0xFF ); // 255 (the same, case doesn't matter)


let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111

let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

alert( a + b );

function readNumber() {
    let num;

    do {
        num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );

    if (num === null || num === '') return null;

    return +num;
}

alert(`Read: ${readNumber()}`);

let i = 0;
while (i < 11) {
    i += 0.2;
    if (i > 9.8 && i < 10.2) alert( i );
}

function random(min, max) {
    return min + Math.random() * (max - min);
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );
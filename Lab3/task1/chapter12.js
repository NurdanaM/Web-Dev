let i = 0;
while (i < 3) { // shows 0, then 1, then 2
    alert( i );
    i++;
}

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    alert(i);
}

let sum = 0;

while (true) {

    let value = +prompt("Enter a number", '');

    if (!value) break; // (*)

    sum += value;

}

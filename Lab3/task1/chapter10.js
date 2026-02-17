if (1 || 0) { // works just like if( true || false )
    alert( 'truthy!' );
}

let hour = 9;

if (hour < 10 || hour > 18) {
    alert( 'The office is closed.' );
}

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder


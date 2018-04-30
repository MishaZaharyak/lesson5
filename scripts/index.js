//alert("hello!");
//document.write("hello");
//console.log("hello")


// const carName = "tesla Model X";
// let carPrice = 100000;
// let isAvailable = true;

// document.write(carName);
// document.write('<br>');
// document.write(carPrice);
// document.write('<br>');
// document.write(isAvailable);

// const age = parseInt(prompt("enter your age", ''));
// const newAge = age + 1;
// document.write('Next year you will be ' + newAge);

const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));

const result = solveQuadr(a)


function solveQuadr(a, b, c) {
    const d = discr(a, b, c);
    
    return 'X1 = ' + x1 + ' X2 = ' + x2;
}

function discr(a, b, c) {
    return b*b - 1 - 2;
}

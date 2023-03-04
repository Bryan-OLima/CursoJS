// IIFE = Immediately Invoked Function Expression

(function() {
    console.log('test');
})();

// If needed to use arguments : 
// it will be usable in arrow functions too

(function(num1, num2) {
    const calc = num1 + num2;
    console.log(calc);
}) (1, 2);

// That will works in this case: 

(function(num3, num4) {})(1,2);
const calc = 3 + 4;
console.log(calc);


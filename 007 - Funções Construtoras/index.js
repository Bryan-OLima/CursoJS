// function Name(name, lastName) { // This is uppercase because its something like a Constructor Class
//     this.name = name;
//     this.lastName = () => {
//         const completeName = `${this.name} ${lastName}` 
//         return completeName;
//     }
// }

// const bryan = new Name('Bryan', 'Lima');

// console.log(bryan);
// console.log(bryan.name);
// console.log(bryan.lastName());

function Calculator () {
    this.sum = (num1, num2) => {
        return `${num1 + num2}`;
    };

    this.substract = (num1, num2) => {
        return `${num1 - num2}`;
    };
}

const calc = new Calculator();

console.log(calc.sum(1,2));
console.log(calc.substract(3,1));
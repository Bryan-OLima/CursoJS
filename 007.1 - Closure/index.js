// function WhatsYourName(name) {
//     const msg = `O seu nome é:`;

//     function yourName() {
//         return `${msg} ${name}`
//     }
//     return yourName();
// }

// console.log(WhatsYourName('Bryan'));

function Calculator(num1, num2){ 
    const msg = 'Resultado';

    const sum = () => {
        return  `${msg} ${num1 + num2}`
    }

    const substract = () => {
        return  `${msg} ${num1 - num2}`
    }
    
    const mutiply = () => {
        return  `${msg} ${num1 * num2}`
    }

    const divide = () => {
        return  `${msg} ${num1 / num2}`
    }

    return {
        sum: sum(),
        sub: substract(),
        mult: mutiply(),
        div: divide()
    }
}

console.log(Calculator(10,5));
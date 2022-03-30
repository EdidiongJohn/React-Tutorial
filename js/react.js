class ReactJs {

    sortArgs(...args) { //javascript rest
        console.log(args[2]);
        return args;
    }
}

const ReactClass = new ReactJs();
console.log(ReactClass.sortArgs("Sophia", "Anele", "123 Bodija", 12, true));

const numbers = [1, 2, 3];
let new1 = 6;
let new2 = 5;
const newNumbers = [...numbers, new1, new2];
console.log(newNumbers);

const Person = {
    name: "Max",
    age: 54
}

const newPerson = {
    ...Person,
    address: "50 Bodija Estate, Ibadan"
}

console.log(newPerson);

[a,b] = ["Hello","Max"];
console.log(a) //Hello
console.log(b) //Max
let num1, num2, num3;
[num1, num2] = numbers;
console.log(num1, num2);
[num1, ,num3] = numbers;
console.log(num1, num3);
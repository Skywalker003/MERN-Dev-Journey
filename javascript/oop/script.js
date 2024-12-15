// Task 1: Code a Person class
class Person{
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        this.energy += 10;
    }
    doSomethingFun() {
        this.energy -= 10;
    }
}
// Task 2: Code a Worker class
class Worker extends Person{
    constructor( name, age, energy, xp = 0, hourlyWage = 10) {
        super(name, age, energy)
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() {
        this.xp += 10;
    }
}
// Task 3: Code an intern object, run methods
function intern() {
    let emp1 = new Worker("bob", 21, 110, 0, 10);
    emp1.goToWork();
    return emp1;
}

// Task 4: Code a manager object, methods
function manager() {
    let emp2 = new Worker("Alice", 30, 120, 100, 30);
    emp2.doSomethingFun();
    return emp2;
}

//console.log(intern());
//console.log(manager());
const internObj = intern();
console.log(`Intern - Name: ${internObj.name}, Age: ${internObj.age}, Energy: ${internObj.energy}, XP: ${internObj.xp}, Hourly Wage: ${internObj.hourlyWage}`);

const managerObj = manager();
console.log(`Manager - Name: ${managerObj.name}, Age: ${managerObj.age}, Energy: ${managerObj.energy}, XP: ${managerObj.xp}, Hourly Wage: ${managerObj.hourlyWage}`);

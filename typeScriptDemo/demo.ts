class Person{
    name:string;
    age:number;
    gender:string;

    constructor(name:string, age:number, gender:string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    greet(){
        return `${this.name}, ${this.age} years old ${this.gender}, says Hello`
    }

}

let person1: Person = new Person("MIsho", 18, "male");
console.log(person1);
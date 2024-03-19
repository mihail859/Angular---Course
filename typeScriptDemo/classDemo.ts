class Animal{
    name: string;
    type: string;

    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
    }

    introduce(): string{
        return `${this.name} -  ${this.type} is here`
    }
}

class Dog extends Animal{
    breed: string;
    constructor(name: string, breed: string){
        super(name, "dog");
        this.breed = breed;
    }

    introduce(): string{
        return `${super.introduce()}, Hi, I'm ${this.breed}`;
    }

    bark(): string{
        return `Dog ${this.name} barked!!!`
    }
}

const myDog: Dog = new Dog('Buddy', 'Labrador');

console.log(myDog.introduce()); 
console.log(myDog.bark()); 
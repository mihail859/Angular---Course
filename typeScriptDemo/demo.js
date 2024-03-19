var Person = /** @class */ (function () {
    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    Person.prototype.greet = function () {
        return "".concat(this.name, ", ").concat(this.age, " years old ").concat(this.gender, ", says Hello");
    };
    return Person;
}());
var person1 = new Person("MIsho", 18, "male");
console.log(person1);

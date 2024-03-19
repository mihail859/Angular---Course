var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, type) {
        this.name = name;
        this.type = type;
    }
    Animal.prototype.introduce = function () {
        return "".concat(this.name, " -  ").concat(this.type, " is here");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, breed) {
        var _this = _super.call(this, name, "dog") || this;
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.introduce = function () {
        return "".concat(_super.prototype.introduce.call(this), ", Hi, I'm ").concat(this.breed);
    };
    Dog.prototype.bark = function () {
        return "Dog ".concat(this.name, " barked!!!");
    };
    return Dog;
}(Animal));
var myDog = new Dog('Buddy', 'Labrador');
console.log(myDog.introduce());
console.log(myDog.bark());

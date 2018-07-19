var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.print = function () {
        return this.name + this.age;
    };
    return Person;
}());
var person = new Person('yy', 23);
console.log(person.print());

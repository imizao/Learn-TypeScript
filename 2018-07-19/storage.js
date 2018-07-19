var Hello = /** @class */ (function () {
    function Hello() {
    }
    Object.defineProperty(Hello.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hello.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            if (age > 0 && age < 100) {
                console.log("年例在0-100之间"); // 如果在这个范围，无法取age，hello.age为undefiend
                return;
            }
            this._age = age;
        },
        enumerable: true,
        configurable: true
    });
    return Hello;
}());
var hello = new Hello();
hello.name = "mizao";
hello.age = 15;
console.log(hello.name);
console.log(hello.age);

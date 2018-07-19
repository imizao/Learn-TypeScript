var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person1 = /** @class */ (function () {
    function Person1(name, age) {
        this.name = name;
        this.age = age;
    }
    Person1.prototype.tell = function () {
        console.log(this.name + this.age);
    };
    return Person1;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(gender) {
        var _this = _super.call(this, "yy", 23) || this;
        _this.gender = gender;
        return _this;
    }
    Student.prototype.tell = function () {
        console.log(this.name + this.age + this.gender);
    };
    return Student;
}(Person1));
var student = new Student('male');
student.tell();

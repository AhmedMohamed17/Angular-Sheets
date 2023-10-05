"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserName = void 0;
var username = "ahmed ";
console.log(username);
var age = 15;
console.log(age);
var tools = ["php", "node", "Angular"];
console.log(tools);
var userEducation = "Cs";
userEducation = null;
// functions 
function getUserName(Fname, Lname) {
    return Fname + Lname;
}
exports.getUserName = getUserName;
console.log(getUserName("ahmed", "sayed"));
// UNION TYPES  = 2 types 
var usernamee = "ahmed ";
usernamee = "sayed";
usernamee = null;
// var num : number  | string = "ahmed ";
// num = 15 ;
// interface 
var userObj = {
    name: "ahmed ",
    age: 26,
    education: "CS",
    skills: ["php ", "JS", "Ts"],
    isGraduated: true,
};
// ?: optional 
console.log(userObj.name);
// classes 
var Shape = /** @class */ (function () {
    function Shape(height, width) {
        this.height = height;
        this.width = width;
    }
    return Shape;
}());
var shape = new Shape(10, 2);
console.log(shape.width);
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(height, width, name) {
        var _this = _super.call(this, height, width) || this;
        _this.name = name;
        return _this;
    }
    Square.prototype.calculateSquare = function () {
        return "".concat(this.name, " is ").concat(this.height * this.width);
    };
    return Square;
}(Shape));
var square = new Square(10, 3, "square");
console.log(square.calculateSquare());

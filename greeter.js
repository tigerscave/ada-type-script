var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName =
            firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
var greeter = function (person) {
    return "Hello, " + person.fullName;
};
var user = new Student("Ada", "W", "Niya");
console.log(user);
var a = 'foo';
var b = 100;
var f1 = function (arg) {
    if (typeof arg === 'string') {
        console.log("string!!!");
        console.log(arg);
    }
    else {
        console.log("not string ...");
    }
};
f1(a);
f1(b);
var f2 = function (x) {
    var y = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        y[_i - 1] = arguments[_i];
    }
    console.log(x);
    var sum = y.reduce((function (acc, val) { return acc + val; }), 10);
    console.log(sum);
};
f2("hoge", 1, 2, 3);
var Foo50 = /** @class */ (function () {
    function Foo50() {
    }
    Foo50.prototype.method = function (x) {
        console.log(x);
    };
    return Foo50;
}());
var foo50 = new Foo50();
console.log(foo50.method("heyho"));
var obj68 = {
    foo: 5,
    bar: "hoge"
};
console.log("---obj68---");
console.log(obj68);
/*--------------------*/
function func76(x) {
    console.log("type of x is " + typeof x);
    console.log("x is " + x);
}
/*--------------------*/
var func87 = function (x) {
    console.log("type of x is " + typeof x);
    console.log("x is " + x);
};
func87("100");

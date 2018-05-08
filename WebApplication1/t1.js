window.onload = function () {
    var person = new Person("MOMI");
    var momi = document.getElementById("momi");
    momi.innerText = "kaku";
};
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
//# sourceMappingURL=t1.js.map
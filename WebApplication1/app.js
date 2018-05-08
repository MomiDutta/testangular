window.onload = function () {
    var person = new Person(["MD", "ID", 1]);
    var firstdiv = document.getElementById("firstdiv");
    var nameList = person.getNameList();
    //get the name list
    var table = document.createElement("table");
    table.border = "2";
    table.align = "center";
    table.width = "50%";
    table.height = "50%";
    firstdiv.appendChild(table);
    var tableRow = table.insertRow(0);
    var th = document.createElement("th");
    th.innerText = "NameList";
    th.align = "center";
    tableRow.appendChild(th);
    var tableRow1 = table.insertRow(1);
    for (var i = 0; i < nameList.length; i++) {
        var tableCellElement = tableRow1.insertCell(i);
        tableCellElement.innerText = nameList[i];
    }
};
var Person = /** @class */ (function () {
    function Person(nameList) {
        this.nameList = nameList;
    }
    Person.prototype.setNameList = function (nameList) {
        this.nameList = nameList;
    };
    Person.prototype.getNameList = function () {
        return this.nameList;
    };
    return Person;
}());
//# sourceMappingURL=app.js.map
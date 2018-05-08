window.onload = () => {
    let person = new Person(["MD", "ID" , 1]);
    var firstdiv: HTMLElement = document.getElementById("firstdiv");
    var nameList: string[] = person.getNameList();
    //get the name list
    var table: HTMLTableElement = document.createElement("table");
    table.border = "2";
    table.align = "center";
    table.width = "50%";
    table.height = "50%";
    firstdiv.appendChild(table);

    var tableRow: HTMLTableRowElement = table.insertRow(0);

    var th: HTMLTableHeaderCellElement = document.createElement("th");
    th.innerText = "NameList";
    th.align = "center";
    tableRow.appendChild(th);
    var tableRow1: HTMLTableRowElement = table.insertRow(1);
    for (var i = 0; i < nameList.length; i++) {
        var tableCellElement: HTMLTableCellElement = tableRow1.insertCell(i);
        tableCellElement.innerText = nameList[i];
    }
   
    
}
class Person {
    nameList: Array<any>;

    constructor(nameList: Array<any>) {
        this.nameList = nameList;
    }

    setNameList(nameList: string[]) {
        this.nameList = nameList;
    }

    getNameList(): string[]
    {
        return this.nameList;
    }
}
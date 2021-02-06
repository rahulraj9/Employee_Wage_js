class EmpWagePayRoll {

    get Id() {
        return this._empId;
    }
    set Id(empId) {
        this._empId = empId;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        try {
            var pattern = new RegExp("^[A-Z][a-zA-Z]{2,}");
            if (pattern.test(name)) {
                this._name = name;
            } else {
                throw ("Name format is incorrect");
            }
        } catch (error) {
            console.error(error);
        }
    }
    set salary(salary) {
        this._salary = salary;
    }
    get salary() {
        return this._salary;
    }
    get gender() {
        return this._gender;
    }
    set gender(gender) {
        this._gender = gender;
    }
    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        this._startDate = startDate;
    }

    toString() {
        return `id: ${this.empId}\nName : ${this._name}\nSalary: ${this.salary}\nGender: ${this.gender}\nStartDate: ${this.startDate}`;
    }
}

let EmpWagePay = new EmpWagePayRoll();
//console.log(EmpWagePay.toString());

EmpWagePay.empId = 21;
EmpWagePay.salary = 40000
EmpWagePay.gender = "male"
EmpWagePay.startDate = "26jan";
EmpWagePay.name = "Rahul"
console.log("\n\n")
console.log(EmpWagePay.toString());



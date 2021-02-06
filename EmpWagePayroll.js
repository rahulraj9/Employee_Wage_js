class EmpWagePayRoll {

    get Id() {
        return this._Id;
    }
    set Id(Id) {
        try {
            var pattern = new RegExp("^[0-9]*[1-9][0-9]*$");
            if (pattern.test(Id)) {
                this._Id = Id;
            }
            else {
                throw ("ID format is incorrect");
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    get name() {
        return this._name;
    }
    set name(name) {
        try {
            var pattern = new RegExp("^[A-Z][a-zA-Z]{2,}");
            if (pattern.test(name)) {
                this._name = name;
            }
            else {
                throw ("Name format is incorrect");
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    set salary(salary) {
        try {
            var pattern = new RegExp("^[0-9]*[1-9][0-9]*$");
            if (pattern.test(salary)) {
                this._salary = salary;
            }
            else {
                throw ("Salary must be Greater then 0 ");
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    get salary() {
        return this._salary;
    }
    get gender() {
        return this._gender;
    }
    set gender(gender) {
        try {
            var pattern = new RegExp("^(?:m|M|male|Male|f|F|female|Female)$");
            if (pattern.test(gender)) {
                this._gender = gender;
            }
            else {
                throw ("Enter a Valid Gender");
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        this._startDate = startDate;
    }

    toString() {
        return `id: ${this.Id}\nName : ${this._name}\nSalary: ${this.salary}\nGender: ${this.gender}\nStartDate: ${this.startDate}`;
    }
}

let EmpWagePay = new EmpWagePayRoll();

EmpWagePay.Id = 1;
EmpWagePay.salary = 40000
EmpWagePay.gender = "M"
EmpWagePay.startDate = "26jan";
EmpWagePay.name = "Rahul"
console.log("\n\n")

console.log(EmpWagePay.toString());



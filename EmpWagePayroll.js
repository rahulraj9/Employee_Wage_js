class EmpWagePayRoll {


    constructor(empId, name, salary, gender, startDate) {
        this.empId = empId;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = startDate;
    }

    uu = {
        get Id() {
            return this._empId;
        },
        set Id(empId) {
            this._empId = empId;
        },
        get name() {
            return this._name;
        },
        set name(name) {
            this._name = name;
        },
        set salary(salary) {
            this._salary = salary;
        },
        get salary() {
            return this._salary;
        },
        get gender() {
            return this._gender;
        },
        set gender(gender) {
            this._gender = gender;
        },
        get startDate() {
            return this.startDate;
        },
        set startDate(startDate) {
            this._startDate = this.startDate;
        }


    }
    toString() {
        return `id: ${this.empId}\nName : ${this.name}\nSalary: ${this.salary}\nGender: ${this.gender}\nStartDate: ${this.startDate}`;
    }
}

let EmpWagePay = new EmpWagePayRoll(1, "Rahul", 30000, "Male", "26jan");
console.log(EmpWagePay.toString());

EmpWagePay.empId = 21;
EmpWagePay.name = "YOYO"
EmpWagePay.salary = 40000
EmpWagePay.gender = "Female"
EmpWagePay.startDate = "26jan"
console.log("\n\n")
console.log(EmpWagePay.toString());



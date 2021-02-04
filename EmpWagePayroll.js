class EmpWagePayRoll
{
    

    constructor(empId,name,salary)
    {
        this.empId =empId;
        this.name= name;
        this.salary = salary;
    }
    
    uu={
    get Id(){        return this._empId; },
    set Id(empId){   this._empId =  empId; },
    get name(){      return this._name;   },
    set name(name){   this._name = name;  },
    set salary(salary){ this._salary = salary; },
    get salary(){    return this._salary;   }
    
    }
    toString()
    {
        return`id: ${this.empId} \n Name : ${this.name} \n Salary: ${this.salary}` ;
    }
}

let EmpWagePay = new EmpWagePayRoll(1,"Rahul",30000);
console.log(EmpWagePay.toString());

EmpWagePay.empId = 21;
EmpWagePay.name = "YOYO"
EmpWagePay.salary = 40000

console.log(EmpWagePay.toString());



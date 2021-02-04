class EmployeeWAge {

    EMPRATEPERHRS = 20;
    NUMBEROFWORKINGDAYS = 20;
    MAXHRSINMONTH = 100;
    ISFULLTIME = 1;
    ISPARTTIME = 2;


    empHr = 0; 
    empHrs = 0;
    totalWage = 0;
    empWage = 0;
    monthlyWage = 0;
    totalEmpWorkingHrs = 0;
    totalWorkingDays = 0;


    empAttendenceCheck() {
        let isPresent = 1;
        let empCheckAttendence = Math.floor(Math.random() * 10) % 3;
        return empCheckAttendence;
    }
    empWOrkingHrs() {
        switch (this.empAttendenceCheck()) {
            case this.ISFULLTIME:
                this.empHrs = 8;
                break;
            case this.ISPARTTIME:
                this.empHrs = 4;
                break;
            default:
                this.empHrs = 0;
        }
        return this.empHrs;
    }
    empDailyWage() {
        this.empWage = this.empWOrkingHrs() * this.EMPRATEPERHRS;
        return this.empWage;
    }
    empMonthlyWage() {
        for (var days = 1; days <= this.NUMBEROFWORKINGDAYS; days++) {
            this.empDailyWage();
            this.monthlyWage += this.empDailyWage();
        }
        return this.monthlyWage;
    }

    empMonthlyWageUsingArrayHelper()
    {
        let empWageArray = new Array();
        let sum =0;
        while (this.totalEmpWorkingHrs <= this.MAXHRSINMONTH && this.totalWorkingDays < this.NUMBEROFWORKINGDAYS) {
            this.totalWorkingDays++;
            this.empAttendenceCheck();
            this.empHr = this.empWOrkingHrs();
            this.totalEmpWorkingHrs += this.empHr;
            empWageArray.push(this.empDailyWage());
            sum = empWageArray.reduce(function(a, b){return a + b;}, 0);
        }
        console.log(`Total Wage For a Month is ${sum}`);
        return this.totalWorkingDays;
    }
    dayAlongwithDailyWage()
    {
        var empWageArray = new Array();
        var daysArray = new Array();
        var map = new Map();

        while (this.totalEmpWorkingHrs <= this.MAXHRSINMONTH && this.totalWorkingDays < this.NUMBEROFWORKINGDAYS) {
            this.totalWorkingDays++;
            this.empAttendenceCheck();
            this.empHr = this.empWOrkingHrs();
            this.totalEmpWorkingHrs += this.empHr;
            empWageArray.push(this.empDailyWage());
            daysArray.push(this.totalWorkingDays);
       }
       for(var i =0; i<daysArray.length;i++)
       {
          map.set(daysArray[i],empWageArray[i]);
       }
       for (let [day,Wage] of map.entries()) {
        console.log(day + ' = ' + Wage );
    }
    }


}

module.exports = new EmployeeWAge();
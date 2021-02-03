class empWage{

    attendenceCheck()
    {
        let isPresent = 1;
        let empCheckAttendence = Math.floor(Math.random() * 10)%3;
        return empCheckAttendence; 
    }

    CalculateWage()
    {
        const ISPARTTIME = 1;
        const ISFULLTIME = 2;
        const FIXEDWAGEPERHRS = 20;
        let empHrs = 0;
        let empWage = 0;      
        switch(this.attendenceCheck())
        {
            case ISFULLTIME:
                empHrs = 8;
                console.log("Full Time Employee");
                break;
            case ISPARTTIME:
                empHrs =4;
                console.log("Part Time Employee");
                break;
            default :
                console.log("Employee is Absent");
        }
        empWage = empHrs * FIXEDWAGEPERHRS;
        console.log(`Daily Wage:- ${empWage}`);
        return empWage;
    }
    calculateWageForMonth()
    {
        const WORKINGDAYS = 20;
        let monthlyWage = 0;
        for(let days = 1; days <= WORKINGDAYS; days++)
        {
            
            this.CalculateWage();
            monthlyWage = monthlyWage + this.CalculateWage();
        }
        console.log(`Total Monthly wage for 20 Working Days:- ${monthlyWage}`);

    }
}
module.exports = new empWage();
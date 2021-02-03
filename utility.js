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
        return this.empHrs;

    }
    calculateWageForMonthTillWorkingHrs()
    {
        
        const IS_PART_TIME = 1;
        const IS_FULL_TIME = 2;
        const EMP_RATE_PER_HRS = 20;
        const MAX_EMP_WORKING_DAYS_IN_MONTH = 20;
        const EMP_MAX_WORKING_HRS_IN_MONTH = 80;
        let empWage =0, empWorkingHrs =0, totalEmpWorkingHrs = 0, totalWage = 0, totalWorkingDays = 0;
    
            while(totalEmpWorkingHrs <=  EMP_MAX_WORKING_HRS_IN_MONTH && totalWorkingDays < MAX_EMP_WORKING_DAYS_IN_MONTH) {
                
                totalWorkingDays++;
                let EmpPresent = Math.floor(Math.random() * 10) % 3;
                
                switch(EmpPresent){
                    case IS_PART_TIME:
                        console.log("Part Time Work");
                        empWorkingHrs = 4;
                        break;
                    case IS_FULL_TIME:
                        console.log("Full Time Work");
                        empWorkingHrs = 8;
                        break;
                    default:
                        empWorkingHrs = 0;
                        console.log("Employee is not Present");
                }		
                totalEmpWorkingHrs +=empWorkingHrs; 
                console.log(" Days:- " +totalWorkingDays +"\tWorking HRs:- " +empWorkingHrs+"\n");
                totalWage = totalEmpWorkingHrs * EMP_RATE_PER_HRS; 
            }
            
            console.log("Employee TotalWage:\t"+totalWage+"\tEmployee Total Working Hrs:\t"+totalEmpWorkingHrs);
        }
    WageForMonthAndStoreInArray()
    {
        
        const IS_PART_TIME = 1;
        const IS_FULL_TIME = 2;
        const EMP_RATE_PER_HRS = 20;
        const MAX_EMP_WORKING_DAYS_IN_MONTH = 20;
        const EMP_MAX_WORKING_HRS_IN_MONTH = 80;
        let dailyWage =0;
        let wageArry = new Array();
        let empWage =0, empWorkingHrs =0, totalEmpWorkingHrs = 0, totalWage = 0, totalWorkingDays = 0;
    
            while(totalEmpWorkingHrs <=  EMP_MAX_WORKING_HRS_IN_MONTH && totalWorkingDays < MAX_EMP_WORKING_DAYS_IN_MONTH) {
                
                totalWorkingDays++;
                let EmpPresent = Math.floor(Math.random() * 10) % 3;
                
                switch(EmpPresent){
                    case IS_PART_TIME:
                        empWorkingHrs = 4;
                        break;
                    case IS_FULL_TIME:
                        empWorkingHrs = 8;
                        break;
                    default:
                        empWorkingHrs = 0;
                }
            dailyWage = MAX_EMP_WORKING_DAYS_IN_MONTH * empWorkingHrs ;
            wageArry.push(dailyWage);
            }
            wageArry.forEach(element => {console.log(element)});
        }           
}
module.exports = new empWage();
class empWage{

    attendenceCheck()
    {
        let isPresent = 1;
        let empCheckAttendence = Math.floor(Math.random() * 10)%2;
        if(empCheckAttendence == isPresent)
            console.log("Employee is Present");
        else
            console.log("Employee is Absent");
    }

    CalculateWage()
    {
        const ISPARTTIME = 1;
        const ISFULLTIME = 2;
        const FIXEDWAGEPERHRS = 20;
        let empHrs = 0;
        let empWage = 0;
        let employementType= parseInt(Math.floor(Math.random() * 10) % 3);        
        switch(employementType)
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
       console.log("Total Wage:- "+empWage);
    }
}
module.exports = new empWage();
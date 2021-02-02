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
}
module.exports = new empWage();
function CalculateGrade(score){
    if (score < 0 || score > 100) 
    {
        return("Invalid score");
    }
    else if (score >=90){
        return ("A");
    }
    else if (score >=80){
        return ("B");
    }
    else if (score >=70){
        return ("C");
    }
    else if (score >=60){
        return ("D");
    }
    else{
        return ("F")
    }

}

console.log(CalculateGrade (95));
console.log(CalculateGrade (81));
console.log(CalculateGrade (77));
console.log(CalculateGrade (65));
console.log(CalculateGrade (51));
console.log(CalculateGrade (105));
 
function checkAccess(age ,hasTicket){
    if(age >= 20 && hasTicket ===true){
        return true;

    }
    else{
        return false;
    }

}

console.log (checkAccess (20, true));
console.log (checkAccess (20, false));
console.log (checkAccess (15, true));
console.log (checkAccess (16, false));
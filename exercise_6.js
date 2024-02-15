/*
4. Create an account on codwars.com and do the following exercise:
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

*/
function whatQuarterIs(month)
{
    if ((month >= 1) && (month <= 3)) {
        return "1st quarter";
    }
    else if ((month >= 4) && (month <= 6)) {
        return "2nd quarter";
    }
    else if ((month >= 7) && (month <= 9)) {
        return "3rd quarter";
    }
    else if ((month >= 10) && (month <= 12)) {
        return ("4th quarter");
    }
}

console.log(whatQuarterIs(2));
console.log(whatQuarterIs(5));
console.log(whatQuarterIs(8));
console.log(whatQuarterIs(12));

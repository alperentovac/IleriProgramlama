#!/usr/bin/env node

var isLeapYear = function(n) {
    return (n % 4 === 0) && ((n % 400 === 0) || (n % 100 !== 0));
};

var p19 = function() {
    var DAYS_IN_MONTHS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var sundayCount = 0;
    var currentDay = 2; // Jan 1st 1901 is a Tuesday
    for (var year = 1901; year <= 2000; year++) {
        for (var month = 0; month < 12; month++) {
            if (currentDay === 0) {
                sundayCount++;
            }

            if (month === 1 && isLeapYear(year)) {
                currentDay++;
            }
            currentDay = (currentDay + DAYS_IN_MONTHS[month]) % 7;
        }
    }
    return sundayCount;
};

console.log(p19());

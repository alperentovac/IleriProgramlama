#!/usr/bin/env node

var findDivisors = function(n) {
    var divisors = [];
    for (var i = 1; i <= n/2; i++) {
        if (n % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
};

var sum = function(a, b) {
    return a + b;
};

var isAbundant = function(n) {
    return findDivisors(n).reduce(sum) > n;
};

var findAbundantNumbers = function() {
    var abundantNumbers = [];
    for (var n = 12; n <= 28123; n++) {
        if (isAbundant(n)) abundantNumbers.push(n);
    }
    return abundantNumbers;
};

var sumNonAbundantNumbers = function() {
    var abundantNumbers = findAbundantNumbers();
    var abundantNumberSums = [];
    for (var i = 0; i < abundantNumbers.length; i++) {
        for (var j = i, sum = 0;
             j < abundantNumbers.length && (sum = abundantNumbers[i] + abundantNumbers[j]) <= 28123;
             j++) {
             abundantNumberSums[sum] = true;
        }
    }

    var nonAbundantNumberSum = 0;
    for (var k = 1; k < abundantNumberSums.length; k++) {
        if (!abundantNumberSums[k]) {
            nonAbundantNumberSum += k;
        }
    }

    return nonAbundantNumberSum;
};

console.log(sumNonAbundantNumbers());
// Task 1
function convertCurrency(amountUsd, currency) {
    const currencyRates = {
        EUR:0.9,
        UAH:35,
        GPB:0.8,
    };
    const rate = currencyRates[currency];

    if (!rate) {
        return "unknown currency";
    }

    return rate * amountUsd;
}

console.log(convertCurrency(200,"EUR"))



// Task 2
function getDayOfWeek(dayNumber) {
    const dayNumberToName = {
        1:"понеділок",
        2:"вівторок",
        3:"середа",
        4:"четвер",
        5:"п'ятниця",
        6:"субота",
        7:"неділя",
    };
    const dayName = dayNumberToName[dayNumber];

    if (!dayName) {
        return "unknown day number";
    }

    return dayName;
}

console.log(getDayOfWeek(78))


// Task 3
function fibonacci(n) {

    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}


console.log(fibonacci(5));
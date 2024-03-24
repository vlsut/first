//Task 1
function customIsNaN(value) {
    // https://tc39.es/ecma262/multipage/global-object.html#sec-isnan-number (check out Note)
    return +value !== +value;
}

console.log(customIsNaN(NaN) === isNaN(NaN));
console.log(customIsNaN("hello") === isNaN("hello"));
console.log(customIsNaN("123") === isNaN("123"));
console.log(customIsNaN(123) === isNaN(123));
console.log(customIsNaN(undefined) === isNaN(undefined));
console.log(customIsNaN(null) === isNaN(null));

//Task 2
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function checkProbabilityTheory(count) {
    const isCountNaN = customIsNaN(count);
    const isCountLessOrEqualZero = +count <= 0;
    const isCountFloat = +count % 1 !== 0;

    if (isCountNaN || isCountLessOrEqualZero || isCountFloat) {
        console.log('Invalid input')
        return;
    }

    count = +count;
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; ++i) {
        const randomInt = getRandomInt(100, 1000);

        if (randomInt % 2 === 0) {
            ++evenCount;

        } else {
            ++oddCount;
        }

    }
    const evenPercents = (100 * evenCount) / count;
    const oddPercents = (100 * oddCount) / count;
    console.log('Count: ', count);
    console.log('Even: ', evenCount);
    console.log('Odd: ', oddCount);
    console.log('Even percents: ', +evenPercents.toFixed(2));
    console.log('Odd percents: ', +oddPercents.toFixed(2));
}

// Invalid inputs:
checkProbabilityTheory('    ')
checkProbabilityTheory(-11)
checkProbabilityTheory(33.33)
checkProbabilityTheory(0)
checkProbabilityTheory(-0)

// Valid inputs:
checkProbabilityTheory('42')
checkProbabilityTheory(42_000)


//Task 3

function printSumOfNonDivisibleByThree() {
    let sum = 0
    for (let i = 1; i <= 100; ++i) {
        if (i % 3 !== 0) {
            sum += i;
        }
    }
    console.log('Sum of non-divisible by three: ', sum);
}

printSumOfNonDivisibleByThree();



// 1. calculateDifference
function calculateDifference(a, b) {
    return a - b;
}
console.log(calculateDifference(10, 5));
// 2. isOdd
function isOdd(num) {
    return num % 2 !== 0;
}
console.log(isOdd(7));
// 3. findMin
function findMin(numbers) {
    return Math.min(...numbers);
}
console.log(findMin([3, 1, 4, 1, 5]));
// 4. filterEvenNumbers
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4]));
// 5. sortArrayDescending
function sortArrayDescending(numbers) {
    return [...numbers].sort((a, b) => b - a);
}
console.log(sortArrayDescending([3, 1, 4, 1, 5]));
// 6. lowercaseFirstLetter
function lowercaseFirstLetter(str) {
    if (str.length === 0) return str;
    return str[0].toLowerCase() + str.slice(1);
}
console.log(lowercaseFirstLetter("Hello"));
// 7. findAverage
function findAverage(numbers) {
    if (numbers.length === 0) return 0;
    const total = numbers.reduce((sum, num) => sum + num, 0);
    return total / numbers.length;
}
console.log(findAverage([1, 2, 3, 4, 5]));
// 8. isLeapYear
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log(isLeapYear(2024));
var numbers = [1, 2, 6, 9];
numbers[6] = 10;
console.log(numbers);

var numbers = [1, 2, 3, 4];
var sum = 0;
for (num of numbers) {
    sum = sum + num;
}
console.log(sum);


var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (num of numbers) {
    if (num % 2 != 0) {
        console.log(num)
    }
}

numbers.map(function (num) {
    if (num % 2 != 0) {
        console.log(num);
    }
});

var divisibleBy3 = numbers.filter(function (num) {
    if (num % 3 == 0) {
        return true;
    }
});
console.log(divisibleBy3);
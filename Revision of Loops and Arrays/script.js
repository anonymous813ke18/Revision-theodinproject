let arr = [1, 2, 3, 4, 5, 6,]

const sumOfTripledEvens = arr.filter((item => item % 2 == 0))
                             .map((item) => item * 3)
                             .reduce((sum, item) => sum + item, 0)

console.log(sumOfTripledEvens)
function sumTwoSmallestNumbers(numbers){  
    numbers = numbers.sort(function(a, b){return a - b; });
    return numbers[0] + numbers[1];
  };

 let numbers = [23, 54, 3, 55, 1, 17];

  console.log(sumTwoSmallestNumbers(numbers));



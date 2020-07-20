function solve(input) {
    let arrInput = input.split(" ").map(Number);
    let sum = arrInput.reduce((sum, currentValue) => sum += currentValue);
    let averageNumber = sum / arrInput.length;

    arrInput = arrInput.filter(x => x > averageNumber);
    arrInput.sort((a, b) => b - a);

    if (arrInput.length > 0) {
        console.log(arrInput.slice(0, 5).join(" "));
    } else {
        console.log("No");
    }
}

solve('10 20 30 40 50');

// using System;
// using System.Collections.Generic;
// using System.Linq;
// class Program
// {
//     static void Main()
//     {
//         List<int> listNums = Console.ReadLine().Split(' ').Select(int.Parse).ToList();

//         foreach (int number in listNums.OrderByDescending(x => x).Take(5))
//         {
//             if (number > listNums.Average())
//             {
//                 Console.Write(number + " ");
//             }
//         }
//         if (listNums.Max() <= listNums.Average())
//         {
//             Console.WriteLine("No");
//         }
//     }
// }
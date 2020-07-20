using System;

namespace ex5accountBalance
{
    class Program
    {
        static void Main(string[] args)
        {
            int entriesTotal = int.Parse(Console.ReadLine());
            int counterCount = 1;
            double currentSum = 0;

            while (counterCount <= entriesTotal)
            {
                double income = double.Parse(Console.ReadLine());
                if (income < 0)
                {
                    Console.WriteLine("Invalid operation!");
                    break;
                }
                else
                {
                    currentSum = (currentSum + income);
                    Console.WriteLine($"Increase: {income:f2}");
                }
                counterCount++;
            }
            Console.WriteLine($"Total: {currentSum}");
        }
    }
}

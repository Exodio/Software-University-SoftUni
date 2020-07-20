using System;

namespace exSixGodzillaVsKing
{
    class Program
    {
        static void Main(string[] args)
        {
            double budget = double.Parse(Console.ReadLine());
            int peopleCount = int.Parse(Console.ReadLine());
            double suitPrice= double.Parse(Console.ReadLine());

            double decorPrice = budget * 0.1;
            double suitTotalPrice = peopleCount * suitPrice;

            if (peopleCount > 150) 
            {
                suitTotalPrice *= 0.9; //suitTotalPrice * 0.9;
            }

            double totalSum = decorPrice + suitTotalPrice;

            if (budget >= totalSum)
            {
                Console.WriteLine($"Action!");
                Console.WriteLine($"Wingard starts filming with {budget - totalSum:F2} leva left.");
            }
            else
            {
                Console.WriteLine($"Not enough money!");
                Console.WriteLine($"Wingard needs {totalSum - budget:F2} leva more.");
            }

        }
    }
}

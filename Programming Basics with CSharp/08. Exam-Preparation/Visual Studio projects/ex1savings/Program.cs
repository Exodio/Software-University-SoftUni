using System;

namespace examPrep
{
    class Program
    {
        static void Main(string[] args)
        {
            double income = double.Parse(Console.ReadLine());
            int months = int.Parse(Console.ReadLine());
            double expenses = double.Parse(Console.ReadLine());

            double neededAmount = income - (income * 0.7);

            double monthlySaving = income - (expenses + neededAmount);

            double savedMoney = months * monthlySaving;

            double percentage = ((monthlySaving / income) * 100);


            Console.WriteLine($"She can save {percentage:f2}%");
            Console.WriteLine($"{savedMoney:f2}");
        }
    }
}

using System;

namespace ex6trip
{
    class Program
    {
        static void Main(string[] args)
        {
            double budget = double.Parse(Console.ReadLine());
            string season = Console.ReadLine();

            int precentage = 0;
            string destination = "";
            string type = "";

            if (budget <= 100)
            {
                destination = "Bulgaria";
                if (season == "summer")
                {
                    precentage = 30;
                    type = "Camp";
                }
                else if (season == "winter")
                {
                    precentage = 70;
                    type = "Hotel";
                }
            }
            else if (budget <= 1000)
            {
                destination = "Balkans";
                if (season == "summer")
                {
                    precentage = 40;
                    type = "Camp";
                }
                else if (season == "winter")
                {
                    precentage = 80;
                    type = "Hotel";
                }

            }
            else if (budget > 1000)
            {
                destination = "Europe";
                precentage = 90;
                type = "Hotel";
            }

            double totalSum = budget * precentage / 100;

            Console.WriteLine($"Somewhere in {destination}");
            Console.WriteLine($"{type} - {totalSum:F2}");
        }
    }
}

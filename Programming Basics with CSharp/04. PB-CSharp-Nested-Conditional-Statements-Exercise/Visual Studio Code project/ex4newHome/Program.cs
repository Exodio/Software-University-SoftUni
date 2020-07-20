using System;

namespace ComplexConditions
{
    class Program
    {
        static void Main(string[] args)
        {
            string flowerType = Console.ReadLine();
            double count = double.Parse(Console.ReadLine());
            double budget = double.Parse(Console.ReadLine());

            double endPrice = 0;

            double priceRose = count * 5;
            double priceDhalia = count * 3.8;
            double priceLilly = count * 2.8;
            double priceNarcissus = count * 3;
            double priceGladius = count * 2.5;

            if (flowerType == "Roses" && count > 80)
            {
                endPrice = priceRose * 0.9; //10% bonus disscount
            }
            else if (flowerType == "Roses" && count <= 80)
            {
                endPrice = priceRose;
            }
            else if (flowerType == "Dahlias" && count > 90)
            {
                endPrice = priceDhalia * 0.85; //15% bonus disscount
            }
            else if (flowerType == "Dahlias" && count <= 90)
            {
                endPrice = priceDhalia;
            }
            else if (flowerType == "Tulips" && count > 80)
            {
                endPrice = priceLilly * 0.85; //15% bonus disscount
            }
            else if (flowerType == "Tulips" && count <= 80)
            {
                endPrice = priceLilly;
            }
            else if (flowerType == "Narcissus" && count < 120)
            {
                endPrice = priceNarcissus + (priceNarcissus * 0.15); //15% more costs more
            }
            else if (flowerType == "Narcissus" && count >= 120)
            {
                endPrice = priceNarcissus;
            }
            else if (flowerType == "Gladiolus" && count < 80)
            {
                endPrice = priceGladius + (priceGladius * 0.2); //20% more costs more
            }
            else if (flowerType == "Gladiolus" && count <= 80)
            {
                endPrice = priceGladius;
            }

            if (endPrice <= budget)
            {
                double price = Math.Abs(endPrice - budget);
                Console.WriteLine($"Hey, you have a great garden with {count} {flowerType} and {price:F2} leva left.");
            }
            else
            {
                double price = Math.Abs(endPrice - budget);
                Console.WriteLine("Not enough money, you need {0:F2} leva more.", price);
            }         
        }
    }
}



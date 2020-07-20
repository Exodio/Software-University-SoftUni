using System;

namespace PetShop
{
    class Program
    {
        static void Main(string[] args)
        {
            double DogsNumber = int.Parse(Console.ReadLine());
            int OtherAnimal = int.Parse(Console.ReadLine());
            double PriceDogs = DogsNumber * 2.50;
            double PriceOtherAnimal = OtherAnimal * 4;
            double AllPrice = PriceDogs + PriceOtherAnimal;

            Console.WriteLine($"{AllPrice:F2} lv.");
            



        }
    }
}

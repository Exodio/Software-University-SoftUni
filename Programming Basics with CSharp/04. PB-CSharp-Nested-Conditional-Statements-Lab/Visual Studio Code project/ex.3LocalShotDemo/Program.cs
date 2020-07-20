using System;

namespace ex._3LocalShop
{
    class Program
    {
        static void Main(string[] args)
        {
            string productName = Console.ReadLine();
            string town = Console.ReadLine();
            double quantity = double.Parse(Console.ReadLine());
            double price = 0;

            if (town == "Sofia")
            {
                if (productName == "coffe")
                {
                    price = quantity * 0.50;
                }
                else if (productName == "water")
                {
                    price = quantity * 0.80;

                }
                else if (productName == "beer")
                {
                    price = quantity * 1.20;

                }
                else if (productName == "sweets")
                {
                    price = quantity * 1.45;

                }
                else if (productName == "peanuts")
                {
                    price = quantity * 1.60;
                }
                Console.WriteLine(price);

            }
            else if (town == "Plovdiv")
            {
                if (productName == "coffe")
                {
                    price = quantity * 0.40;
                }
                else if (productName == "water")
                {
                    price = quantity * 0.70;

                }
                else if (productName == "beer")
                {
                    price = quantity * 1.15;

                }
                else if (productName == "sweets")
                {
                    price = quantity * 1.45;

                }
                else if (productName == "peanuts")
                {
                    price = quantity * 1.50;
                }
                Console.WriteLine(price);
            }
            else if (town == "Varna")
            {
                if (productName == "coffe")
                {
                    price = quantity * 0.45;
                }
                else if (productName == "water")
                {
                    price = quantity * 0.70;

                }
                else if (productName == "beer")
                {
                    price = quantity * 1.10;

                }
                else if (productName == "sweets")
                {
                    price = quantity * 1.35;

                }
                else if (productName == "peanuts")
                {
                    price = quantity * 1.55;
                }
                Console.WriteLine(price);
            }
        }
    }
}

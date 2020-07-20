using System;

namespace ex3summerWear
{
    class Program
    {
        static void Main(string[] args)
        {
            int degree = int.Parse(Console.ReadLine());
            string type = Console.ReadLine();

            string outfit = "";
            string shoes = "";

            if (degree >= 10 && degree <= 18)
            {
                if (type == "Morning")
                {
                    outfit = "Sweatshirt";
                    shoes = "Sneakers";
                }
                else if (type == "Afternoon")
                {
                    outfit = "Shirt";
                    shoes = "Moccasins";
                }
                else if (type == "Evening")
                {
                    outfit = "Shirt";
                    shoes = "Moccasins";
                }

            }
            else if (degree > 18 && degree <= 24)
            {
                if (type == "Morning")
                {
                    outfit = "Shirt";
                    shoes = "Moccasins";
                }
                else if (type == "Afternoon")
                {
                    outfit = "T-Shirt";
                    shoes = "Sandals";
                }
                else if (type == "Evening")
                {
                    outfit = "Shirt";
                    shoes = "Moccasins";
                }

            }
            else if (degree >= 25)
            {
                if (type == "Morning")
                {
                    outfit = "T-Shirt";
                    shoes = "Sandals";
                }
                else if (type == "Afternoon")
                {
                    outfit = "Swim Suit";
                    shoes = "Barefoot";
                }
                else if (type == "Evening")
                {
                    outfit = "Shirt";
                    shoes = "Moccasins";
                }
            }
            Console.WriteLine($"It's {degree} degrees, get your {outfit} and {shoes}.");

        }
    }
}

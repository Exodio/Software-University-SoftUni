using System;

namespace ex8fruitShop
{
    class Program
    {
        static void Main(string[] args)
        {
            string fruitType = Console.ReadLine();
            string day = Console.ReadLine();
            double quantity = double.Parse(Console.ReadLine());

            double priceFruit = 0;

            if (day == "Monday" || day == "Tuesday" || day == "Wendsday" || day == "Thursday" || day == "Friday" )
            {

                switch (fruitType)
                {
                    case "banana":
                        priceFruit = 2.50; break;
                    case "apple":
                        priceFruit = 1.20; break;
                    case "orange":
                        priceFruit = 0.85; break;
                    case "grapefruit":
                        priceFruit = 1.45; break;
                    case "kiwi":
                        priceFruit = 2.70; break;
                    case "pineapple":
                        priceFruit = 5.50; break;
                    case "grapes":
                        priceFruit = 3.85; break;
                    default:
                        Console.WriteLine("error");break;       
                }
                double totalPrice = priceFruit * quantity;
                Console.WriteLine($"{totalPrice:F2}");
            }
            else if (day == "Saturday" || day == "Sunday")
            {
                switch (fruitType)
                {
                    case "banana":
                        priceFruit = 2.70;break;
                    case "apple":
                        priceFruit = 1.25; break;
                    case "orange":
                        priceFruit = 0.90; break;
                    case "grapefruit":
                        priceFruit = 1.60; break;
                    case "kiwi":
                        priceFruit = 3.00; break;
                    case "pineapple":
                        priceFruit = 5.60; break;
                    case "grapes":
                        priceFruit = 4.20; break;

                    default:
                        Console.WriteLine("error");break;
                }
                double totalPrice = priceFruit * quantity;
                Console.WriteLine($"{totalPrice:F2}");
            }


        }
    }
}

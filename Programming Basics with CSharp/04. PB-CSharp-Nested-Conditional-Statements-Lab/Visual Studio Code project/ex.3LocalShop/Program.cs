﻿using System;

namespace ex._3LocalShop
{
    class Program
    {
        static void Main(string[] args)
        {
            string productName = Console.ReadLine();
            string town = Console.ReadLine();
            double quantity = double.Parse(Console.ReadLine());

            if (town == "Sofia")
            {
                switch (productName)
                {
                    case "coffe": Console.WriteLine(quantity * 0.50);break;
                    case "water": Console.WriteLine(quantity * 0.80);break;
                    case "beer": Console.WriteLine(quantity * 1.20);break;
                    case "sweets": Console.WriteLine(quantity * 1.45);break;
                    case "peanuts": Console.WriteLine(quantity * 1.60);break;
                    default:
                        Console.WriteLine("Wrong product input");
                        break;
                }
            }
            else if (town == "Plovdiv")
            {
                switch (productName)
                {
                    case "coffe": Console.WriteLine(quantity * 0.40);break;
                    case "water": Console.WriteLine(quantity * 0.70);break;
                    case "beer": Console.WriteLine(quantity * 1.15);break;
                    case "sweets": Console.WriteLine(quantity * 1.30); break;
                    case "peanuts": Console.WriteLine(quantity * 1.50);break;
                    default:
                        Console.WriteLine("Wrong product input");
                        break;
                }
            }
            else if (town == "Varna")
            {
                switch (productName)
                {
                    case "coffe":Console.WriteLine(quantity * 0.45);break;
                    case "water":Console.WriteLine(quantity * 0.70);break;
                    case "beer":Console.WriteLine(quantity * 1.10);break;
                    case "sweets":Console.WriteLine(quantity * 1.35);break;
                    case "peanuts":Console.WriteLine(quantity * 1.55);break;
                    default:
                        break;
                }

            }
        }
    }
}

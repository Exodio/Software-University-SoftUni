﻿using System;

namespace ex5coins
{
    class Program
    {
        static void Main(string[] args)
        {
            double coinsInput = double.Parse(Console.ReadLine());
            int coinCount = 0;
            double coins = coinsInput * 100;

            while (coins >= 1)
            {
                coinCount++;

                if (coins >= 200)
                {
                    coins -= 200;
                }
                else if (coins >= 100)
                {
                    coins -= 100;

                }
                else if (coins >= 50)
                {
                    coins -= 50;
                }
                else if (coins >= 20)
                {
                    coins -= 20;
                }
                else if (coins >= 10)
                {
                    coins -= 10;
                }
                else if (coins >= 5)
                {
                    coins -= 5;
                }
                else if (coins >= 2)
                {
                    coins -= 2;
                }
                else if (coins >= 1)
                {
                    coins -= 1;
                }
            }
            Console.WriteLine(coinCount);
        }
    }
}

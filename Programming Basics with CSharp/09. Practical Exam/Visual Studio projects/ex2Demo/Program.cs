using System;

namespace ex2Demo
{
    class Program
    {
        static void Main(string[] args)
        {
            int wonCount = 0; 
            int lossCount = 0;
            int drawCount = 0;

            for (int i = 1; i <= 3; i++)
            {
                string input = Console.ReadLine();
                int left = int.Parse(input.Split(':')[0]);
                int right = int.Parse(input.Split(':')[1]);

                if (left > right)
                {
                    wonCount++;
                }
                else if (right > left)
                {
                    lossCount++;
                }
                else
                {
                    drawCount++;
                }
            }
            Console.WriteLine($"Team won {wonCount} games.");
            Console.WriteLine($"Team lost {lossCount} games.");
            Console.WriteLine($"Drawn games: {drawCount}");
        }
    }
}

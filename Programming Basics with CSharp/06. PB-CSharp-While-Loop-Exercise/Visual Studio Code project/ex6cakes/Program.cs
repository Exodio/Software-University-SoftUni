using System;

namespace ex6cakes
{
    class Program
    {
        static void Main(string[] args)
        {
            int w = int.Parse(Console.ReadLine());
            int h = int.Parse(Console.ReadLine());
            int totalPieces = w * h;

            string input = Console.ReadLine();

            while (input != "STOP")
            {
                int pieces = int.Parse(input);
                totalPieces -= pieces;

                if (totalPieces < 0)
                {
                    break;
                }
                input = Console.ReadLine();
            }
            if (totalPieces < 0)
            {
                Console.WriteLine($"No more cake left! You need {Math.Abs(totalPieces)} pieces more.");
            }
            else
            {
                Console.WriteLine($"{totalPieces} pieces are left.");
            }
        }
    }
}

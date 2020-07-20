using System;
using System.Linq;
namespace examEx2
{
    class Program
    {
        static void Main(string[] args)
        {

            {
                string[] match1 = Console.ReadLine()
                    .Split(":")
                    .ToArray();

                string[] match2 = Console.ReadLine()
                    .Split(":")
                    .ToArray();

                string[] match3 = Console.ReadLine()
                    .Split(":")
                    .ToArray();

                int wonCount = 0;
                int lossCount = 0;
                int drawCount = 0;

                if (int.Parse(match1[0]) > int.Parse(match1[1]))
                {       
                    wonCount++;
                }
                if (int.Parse(match1[0]) < int.Parse(match1[1]))
                {
                    lossCount++;
                }
                if (int.Parse(match1[0]) == int.Parse(match1[1]))
                {
                    drawCount++;
                }
                if (int.Parse(match2[0]) > int.Parse(match2[1]))
                {
                    wonCount++;
                }
                if (int.Parse(match2[0]) < int.Parse(match2[1]))
                {
                    lossCount++;
                }
                if (int.Parse(match2[0]) == int.Parse(match2[1]))
                {
                    drawCount++;
                }
                if (int.Parse(match3[0]) > int.Parse(match3[1]))
                {
                    wonCount++;
                }
                if (int.Parse(match3[0]) < int.Parse(match3[1]))
                {
                    lossCount++;
                }
                if (match3[0] == match3[1])
                {
                    drawCount++;
                }

                Console.WriteLine($"Team won {wonCount} games.");
                Console.WriteLine($"Team lost {lossCount} games.");
                Console.WriteLine($"Drawn games: {drawCount}");
            }
        }
    }
}

using System;

namespace examEx5
{
    class Program
    {
        static void Main(string[] args)
        {
            int width = int.Parse(Console.ReadLine());
            int length = int.Parse(Console.ReadLine());
            int hight = int.Parse(Console.ReadLine());

            int totalVolume = width * length * hight;
            int volumeNeeded = 0;


            string input = Console.ReadLine();

            while (input != "Done")
            {
                volumeNeeded = (volumeNeeded + int.Parse(input));

                if (volumeNeeded > totalVolume)
                {
                    break;
                }

                input = Console.ReadLine();
            }

            if (input == "Done")
            {
                Console.WriteLine($"{totalVolume - volumeNeeded} Cubic meters left.");
            }
            else
            {
                Console.WriteLine($"No more free space! You need {volumeNeeded - totalVolume} Cubic meters more.");
            }
        }
    }
}

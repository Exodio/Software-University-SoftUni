using System;

namespace еx10moving
{
    class Program
    {
        static void Main(string[] args)
        {
            int width = int.Parse(Console.ReadLine());
            int length = int.Parse(Console.ReadLine());
            int higth = int.Parse(Console.ReadLine());

            string command = Console.ReadLine();

            int apartmentVolume = width * length * higth;

            int volume = 0;


            while (command != "Done")
            {
                int commandAsNumber = int.Parse(command);
                volume += commandAsNumber;
                if (volume >= apartmentVolume)
                {
                    Console.WriteLine($"No more free space! You need {volume - apartmentVolume} Cubic meters more.");
                    break;
                }
                command = Console.ReadLine();
            }

            if (volume < apartmentVolue)
            {
                Console.WriteLine($"{apartmentVolume - volume} Cubic meters left.");
            }          
        }
    }
}

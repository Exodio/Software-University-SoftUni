using System;

namespace examEx1
{
    class Program
    {
        static void Main(string[] args)
        {
            double skumriqFishPrice = double.Parse(Console.ReadLine());
            double cacaFishPrice = double.Parse(Console.ReadLine());
            double palamudFishInKG = double.Parse(Console.ReadLine());
            double safridFishInKG = double.Parse(Console.ReadLine());
            double midiInKG = double.Parse(Console.ReadLine());

            double palamudPrice = skumriqFishPrice + (skumriqFishPrice * 0.60);
            double palamudSum = palamudFishInKG * palamudPrice;
            double safridPrice = cacaFishPrice + (cacaFishPrice * 0.80);

            double safridSum = safridFishInKG * safridPrice;
            double midiSum = midiInKG * 7.5;

            double TotalSum = palamudSum + safridSum + midiSum;

            Console.WriteLine($"{TotalSum:f2}");
        }
    }
}

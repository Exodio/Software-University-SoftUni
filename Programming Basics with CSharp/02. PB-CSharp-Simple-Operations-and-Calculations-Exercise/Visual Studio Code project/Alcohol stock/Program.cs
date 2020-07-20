using System;

namespace AlcoholStock
{
    class Program
    {
        static void Main(string[] args)
        {
            double AwhiskeyPriceInLeva = double.Parse(Console.ReadLine());
            double AbeerAmountInLiters = double.Parse(Console.ReadLine());
            double AwineAmountInLiters = double.Parse(Console.ReadLine());
            double ArakiaAmountInLiters = double.Parse(Console.ReadLine());
            double AwhiskeyAmountInLiters = double.Parse(Console.ReadLine());

            double ArakiaPriceInLeva = (AwhiskeyPriceInLeva - (0.5 * AwhiskeyPriceInLeva));
            double AwinePriceInLeva = ArakiaPriceInLeva - (0.4 * ArakiaPriceInLeva);
            double AbeerPriceInLeva = ArakiaPriceInLeva - (0.8 * ArakiaPriceInLeva);

            double ATotalAmountForRakia = ArakiaAmountInLiters * ArakiaPriceInLeva;
            double ATotalAmountForWine = AwineAmountInLiters * AwinePriceInLeva;
            double ATotalAmountForBeer = AbeerPriceInLeva * AbeerAmountInLiters;
            double ATotalAmountForWhiskey = AwhiskeyAmountInLiters * AwhiskeyPriceInLeva;

            double ATotalPriceForAll = ATotalAmountForRakia + ATotalAmountForWine + ATotalAmountForBeer + ATotalAmountForWhiskey;
            Console.WriteLine($"{ATotalPriceForAll:f2}");

            





        }
    }
}

using System;

namespace examEx3
{
    class Program
    {
        static void Main(string[] args)
        {

            string month = Console.ReadLine();
            double spendHours = double.Parse(Console.ReadLine());
            double peopleCount = double.Parse(Console.ReadLine());
            string dayOrNight = Console.ReadLine();

            double dayMM = 10.50;
            double nightMM = 8.40;

            double dayJA = 12.60;
            double nightJAA = 10.20;

            if (peopleCount >= 4)
            {
                dayMM = dayMM - (dayMM * 0.1);
                nightMM = nightMM - (nightMM * 0.1);

                dayJA = dayJA - (dayJA * 0.1);
                nightJAA = nightJAA - (nightJAA * 0.1);
            }
            if (spendHours >= 5)
            {
                dayMM = dayMM - (dayMM * 0.5);
                nightMM = nightMM - (nightMM * 0.5);

                dayJA = dayJA - (dayJA * 0.5);
                nightJAA = nightJAA - (nightJAA * 0.5);
            }


            if (month == "march" || month == "april" || month == "may")
            {

                if (dayOrNight == "day")
                {
                    Console.WriteLine($"Price per person for one hour: {dayMM:f2}");
                    Console.WriteLine($"Total cost of the visit: {((dayMM * spendHours) * peopleCount):f2}");
                }
                else if (dayOrNight == "night")
                {
                    Console.WriteLine($"Price per person for one hour: {nightMM:f2}");
                    Console.WriteLine($"Total cost of the visit: {((nightMM * spendHours) * peopleCount):f2}");
                }
            }
            else if (month == "june" || month == "july" || month == "august")
            {
                if (dayOrNight == "day")
                {
                    Console.WriteLine($"Price per person for one hour: {dayJA:f2}");
                    Console.WriteLine($"Total cost of the visit: {((dayJA * spendHours) * peopleCount):f2}");
                }
                else if (dayOrNight == "night")
                {
                    Console.WriteLine($"Price per person for one hour: {nightJAA:f2}");
                    Console.WriteLine($"Total cost of the visit: {((nightJAA * spendHours) * peopleCount):f2}");
                }
            }
        }
    }
}

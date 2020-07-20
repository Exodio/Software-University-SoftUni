using System;

namespace ex3cruiseShip
{
    class Program
    {
        static void Main(string[] args)
        {
            string cruiseType = Console.ReadLine();
            string cabinType = Console.ReadLine();
            int nightsCount = int.Parse(Console.ReadLine());

            double finalTotalSum = 0;

            if (cruiseType == "Mediterranean")
            {
                if (cabinType == "standard cabin")
                {
                    finalTotalSum = 27.50 * 4 * nightsCount;
                }
                else if (cabinType == "cabin with balcony")
                {
                    finalTotalSum = 30.20 * 4 * nightsCount;

                }
                else if (cabinType == "apartment")
                {
                    finalTotalSum = 40.50 * 4 * nightsCount;

                }
            }
            else if (cruiseType == "Adriatic")
            {
                if (cabinType == "standard cabin")
                {
                    finalTotalSum = 22.99 * 4 * nightsCount;
                }
                else if (cabinType == "cabin with balcony")
                {
                    finalTotalSum = 25.00 * 4 * nightsCount;

                }
                else if (cabinType == "apartment")
                {
                    finalTotalSum = 34.99 * 4 * nightsCount;

                }
            }
            else if (cruiseType == "Aegean")
            {
                if (cabinType == "standard cabin")
                {
                    finalTotalSum = 23.00 * 4 * nightsCount;
                }
                else if (cabinType == "cabin with balcony")
                {
                    finalTotalSum = 26.60 * 4 * nightsCount;

                }
                else if (cabinType == "apartment")
                {
                    finalTotalSum = 39.80 * 4 * nightsCount;

                }
            }
            if (nightsCount > 7)
            {
                Console.WriteLine($"Annie's holiday in the {cruiseType} sea costs {finalTotalSum * 0.75:f2} lv.");
            }
            else
            {
                Console.WriteLine($"Annie's holiday in the {cruiseType} sea costs {finalTotalSum:f2} lv.");
            }
        }
    }
}

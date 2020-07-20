using System;

namespace ex5fishingBoat
{
    class Program
    {
        static void Main(string[] args)
        {
            int budget = int.Parse(Console.ReadLine());
            string seasonType = Console.ReadLine();
            int fishermanCount = int.Parse(Console.ReadLine());

            double springBoatPrice = 3000;
            double summerAndAutumnBoatPrice = 4200;
            double winterBoatPrice = 2600;

            double disscount = 0;

            switch (seasonType)
            {
                case "Spring":
                    if (fishermanCount <=6)
                    {
                        disscount = springBoatPrice * 0.9;
                    }
                    else if (fishermanCount >=7 && fishermanCount <= 11)
                    {
                        disscount = springBoatPrice * 0.85;
                    }
                    else if (fishermanCount > 11)
                    {
                        disscount = springBoatPrice * 0.75;
                    }
                    break;

                case "Summer":
                    if (fishermanCount <= 6)
                    {
                        disscount = summerAndAutumnBoatPrice * 0.9;
                    }
                    else if (fishermanCount >= 7 && fishermanCount <= 11)
                    {
                        disscount = summerAndAutumnBoatPrice * 0.85;
                    }
                    else if (fishermanCount > 11)
                    {
                        disscount = summerAndAutumnBoatPrice * 0.75;
                    }
                    break;

                case "Autumn":
                    if (fishermanCount <= 6)
                    {
                        disscount = summerAndAutumnBoatPrice * 0.9;
                    }
                    else if (fishermanCount >= 7 && fishermanCount <= 11)
                    {
                        disscount = summerAndAutumnBoatPrice * 0.85;
                    }
                    else if (fishermanCount > 11)
                    {
                        disscount = summerAndAutumnBoatPrice * 0.75;
                    }
                    break;

                case "Winter":
                    if (fishermanCount <= 6)
                    {
                        disscount = winterBoatPrice * 0.9;
                    }
                    else if (fishermanCount >= 7 && fishermanCount <= 11)
                    {
                        disscount = winterBoatPrice * 0.85;
                    }
                    else if (fishermanCount > 11)
                    {
                        disscount = winterBoatPrice * 0.75;
                    }
                    break;

                default:break;
            }

            double bonusDisscount = 0;

            if (fishermanCount % 2 == 0 && seasonType != "Autumn")
            {
                bonusDisscount = 0.05;
            }

            double totalPrice = budget - (disscount - disscount * bonusDisscount);

            if (totalPrice >= 0)
            {
                Console.WriteLine($"Yes! You have {totalPrice:F2} leva left.");
            }
            else
            {
                Console.WriteLine($"Not enough money! You need {(totalPrice * -1):F2} leva."); //!
            }
                 

        }
    }
}

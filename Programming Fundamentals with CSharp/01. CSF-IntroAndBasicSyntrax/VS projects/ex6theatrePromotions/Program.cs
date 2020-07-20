using System;

namespace ex6theatrePromotions
{
    class Program
    {
        static void Main(string[] args)
        {
            string dayType = Console.ReadLine();
            int age = int.Parse(Console.ReadLine());
            int ticketPrice = 0;

            if (dayType == "Weekday")
            {
                if (age >= 0 && age <= 18)
                {
                    ticketPrice += 12;
                }
                else if (age > 18 && age <= 64)
                {
                    ticketPrice += 18;
                }
                else if (age > 64 && age <= 122)
                {
                    ticketPrice += 12;
                }
                else
                {
                    ticketPrice += 0;
                    if (ticketPrice == 0)
                    {
                        Console.WriteLine("Error!");
                        return;
                    }
                }
            }
            if (dayType == "Weekend")
            {
                if (age >= 0 && age <= 18)
                {
                    ticketPrice += 15;
                }
                else if (age > 18 && age <= 64)
                {
                    ticketPrice += 20;

                }
                else if (age > 64 && age <= 122)
                {
                    ticketPrice += 15;
                }
                else
                {
                    ticketPrice += 0;
                    if (ticketPrice == 0)
                    {
                        Console.WriteLine("Error!");
                        return;
                    }
                }
            }
            if (dayType == "Holiday")
            {
                if (age >= 0 && age <= 18)
                {
                    ticketPrice += 5;
                }
                else if (age > 18 && age <= 64)
                {
                    ticketPrice += 12;
                }
                else if (age > 64 && age <= 122)
                {
                    ticketPrice += 10;
                }
                else
                {
                    ticketPrice += 0;
                    if (ticketPrice == 0)
                    {
                        Console.WriteLine("Error!");
                        return;
                    }
                }
            }
            Console.WriteLine($"{ticketPrice}$");
        }
    }
}

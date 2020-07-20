using System;

namespace ex2cinema
{
    class Program
    {
        static void Main(string[] args)
        {
            string ticketType = Console.ReadLine();
            int rows = int.Parse(Console.ReadLine());
            int columns = int.Parse(Console.ReadLine());

            double priceForTickets = 0;

            if (ticketType == "Premiere")
            {
                priceForTickets = 12;
            }
            else if (ticketType == "Normal")
            {
                priceForTickets = 7.5;
            }
            else if (ticketType == "Discount")
            {
                priceForTickets = 5;
            }

            int peopleCount = rows * columns;
            double totalPrice = peopleCount * priceForTickets;

            Console.WriteLine($"{totalPrice:f2} leva");


        }
    }
}

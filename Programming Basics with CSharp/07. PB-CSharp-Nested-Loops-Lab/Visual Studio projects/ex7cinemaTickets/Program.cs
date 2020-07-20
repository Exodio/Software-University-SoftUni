using System;

namespace ex7cinemaTickets
{
    class Program
    {
        static void Main(string[] args)
        {
            string movie = Console.ReadLine();

            int totalStudentTickets = 0;
            int totalStandardTickets = 0;
            int totalKidTickets = 0;

            while (movie != "Finish")
            {
                int studentCount = 0;
                int standardCount = 0;
                int kidCount = 0;

                int freePositions = int.Parse(Console.ReadLine());

                for (int currentSeats = 1; currentSeats <= freePositions; currentSeats++)
                {
                    string ticketType = Console.ReadLine();

                    if (ticketType == "student")
                    {
                        standardCount++;
                    }
                    else if (ticketType == "standard")
                    {
                        studentCount++;
                    }
                    else if (ticketType == "kid")
                    {
                        kidCount++;
                    }
                    else if (ticketType == "End")  //Even thought it is not a ticket type we would have to inset it there.
                    {
                        break;
                    }
                }
                totalStudentTickets += studentCount;
                totalStandardTickets += standardCount;
                totalKidTickets += kidCount;
                double totalTicketsType = studentCount + standardCount + kidCount;              

                Console.WriteLine($"{movie} - {(totalTicketsType) / freePositions * 100:F2}% full.");  //We did * 100 since if we don't have it it will not have a result 00.00, but rather 0 only since it is an int and not a double. And atleast one of the two numbers needs to be a double as well.


                movie = Console.ReadLine();
            }

            int totalTickets = totalStudentTickets + totalStandardTickets + totalKidTickets;
            Console.WriteLine($"Total tickets: {totalTickets}");  //In the above we manage to dodge the double by combining the three totalTicketsType under one double. But here in order not to get a result of 00.00 we needed to impelement it.
            Console.WriteLine($"{totalStandardTickets / (double)totalTickets * 100:F2}% student tickets.");
            Console.WriteLine($"{totalStudentTickets / (double)totalTickets * 100:F2}% standard tickets.");
            Console.WriteLine($"{totalKidTickets / (double)totalTickets * 100:F2}% kids tickets.");
        }
    }
}

using System;

namespace ex10skiTrip
{
    class Program
    {
        static void Main(string[] args)
        {
         int days = int.Parse(Console.ReadLine());
         string roomType = Console.ReadLine();
         string feedback = Console.ReadLine();

         int nights = days - 1;
          double sumForNights = 0;

            if (roomType == "room for one person")
            {
                if (nights < 10) //!!!
                {
                 sumForNights = 18 * nights;
                }
                if (nights >= 10 && nights <= 15)
                {
                 sumForNights = 18 * nights;
                }
                if (nights > 15)
                {
                 sumForNights = 18 * nights;
                }
            }
            else if (roomType == "apartment")
            {
                if (nights < 10)
                {
                    sumForNights = (25 * nights) * 0.7;
                }
                else if (nights >= 10 && nights <= 15)
                {
                    sumForNights = (25 * nights) * 0.65;
                }
                else if (nights > 15)
                {
                    sumForNights = (25 * nights) * 0.5;
                }
            }
            else if (roomType == "president apartment")
            {
                if (nights < 10)
                {
                    sumForNights = (35 * nights) * 0.90;  //!
                }
                else if (nights >= 10 && nights <= 15)
                {
                    sumForNights = (35 * nights) * 0.85; //!
                }
                else if (nights > 15)
                {
                    sumForNights = (35 * nights) * 0.80; //!
                }
            }
            if (feedback == "positive")
            {
                sumForNights = sumForNights * 1.25; //!
            }
            else if (feedback == "negative")  //Can be else only as well
            {
                sumForNights = sumForNights * 0.90; //!
            }
            Console.WriteLine($"{sumForNights:F2}");
        }
    }
}

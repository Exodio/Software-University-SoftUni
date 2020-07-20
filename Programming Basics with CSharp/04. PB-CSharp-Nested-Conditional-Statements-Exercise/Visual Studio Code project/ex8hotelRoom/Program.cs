using System;

namespace ex8hotelRoom
{
    class Program
    {
        static void Main(string[] args)
        {
            string month = Console.ReadLine();
            int nightsCount = int.Parse(Console.ReadLine());

            double studioMayAndOct = 50;
            double studioJuneAndSep = 75.20;
            double studioJulyAndAugust = 76;

            double apartmentMayAndOct = 65;
            double apartmentJuneAndSep = 68.70;
            double apartmentJulyAndAugust = 77;

            double priceStudio = 0;
            double priceApartment = 0;

            if (month == "May" || month == "October")
            {
                if (nightsCount <= 7)
                {
                    priceStudio = studioMayAndOct;
                    priceApartment = apartmentMayAndOct;
                }
                else if (nightsCount > 7 && nightsCount <= 14)
                {
                    priceStudio = studioMayAndOct * 0.95;
                    priceApartment = apartmentMayAndOct;

                }
                else if (nightsCount > 14)
                {
                    priceStudio = studioMayAndOct * 0.70;
                    priceApartment = apartmentMayAndOct * 0.9;
                }
                else if (month == "June" || month == "September")
                {
                    if (nightsCount >= 15)
                    {
                        priceStudio = studioJuneAndSep * 0.80;
                        priceApartment = apartmentJuneAndSep * 0.9;
                    }
                    else if (nightsCount < 15)
                    {
                        priceStudio = studioJuneAndSep;
                        priceApartment = apartmentJuneAndSep;
                    }             
                }
                else if (month == "July" || month == "August")
                {
                    if (nightsCount >= 15)
                    {
                        priceStudio = studioJulyAndAugust;
                        priceApartment = apartmentJulyAndAugust * 0.9; 
                    }
                    else if ( nightsCount < 15)
                    {
                        priceStudio = studioJulyAndAugust;
                        priceApartment = apartmentJulyAndAugust;
                    }
                }             
            }
            Console.WriteLine($"Apartment: {(priceApartment * nightsCount):F2} lv");
            Console.WriteLine($"Studio: {(priceStudio * nightsCount):F2} lv");

            //Mistake made on string attachements, refer to the demo version of the same excersise.
        }
    }
}

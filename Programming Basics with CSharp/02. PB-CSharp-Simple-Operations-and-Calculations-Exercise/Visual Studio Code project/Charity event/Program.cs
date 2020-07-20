using System;

namespace Charity_Event
{
    class Program
    {
        static void Main(string[] args)
        {
            int days = int.Parse(Console.ReadLine());
            int cheffs = int.Parse(Console.ReadLine());

            int cakes = int.Parse(Console.ReadLine());
            int goffrette = int.Parse(Console.ReadLine());
            int pancakes =  int.Parse(Console.ReadLine());

            int cakePrice = cakes * 45;
            double wafflesPrice = goffrette * 5.80;
            double pancakesPrice = pancakes * 3.20;

            double totalpriceforoneday = (cakePrice + wafflesPrice + pancakesPrice) * cheffs; 
            double fullcampprice = totalpriceforoneday * days;  //devided by the days and in this case each month has 20 working days

            double diff = fullcampprice /8;  //1/8 will be used to cover the total expenses for the campaign
            double result = fullcampprice - diff;

            Console.WriteLine($"{result:f2}");
        }
    }
}

using System;

namespace Radians_to_gradus
{
    class Program
    {
        static void Main(string[] args)   //Radiant to Gradus is the correct ex. name.
        {

            double rad = double.Parse(Console.ReadLine());
            double degree = Math.Round(rad * 180 / Math.PI);  // or 3.14

            Console.WriteLine(degree);

        }
    }
}

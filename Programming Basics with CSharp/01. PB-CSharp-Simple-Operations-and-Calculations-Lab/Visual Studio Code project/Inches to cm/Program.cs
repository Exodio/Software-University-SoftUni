using System;

namespace SquareArea
{

    class Program
    {
        static void Main(string[] args)
        {

            Console.Write("Inches to cm calculation  ");
            double cm = double.Parse(Console.ReadLine());
            double inches = cm * 2.54;
            Console.WriteLine("You have:" + inches + "cantemeters");

            // OR IT CAN BE LIKE THIS

            double inch = double.Parse(Console.ReadLine());
            double centimeters = inch * 2.54;
            Console.WriteLine(centimeters);

        }
    }
}
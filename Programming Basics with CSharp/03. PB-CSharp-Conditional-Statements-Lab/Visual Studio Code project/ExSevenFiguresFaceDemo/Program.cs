using System;

namespace exSevenFiguresFace
{
    class Program
    {
        static void Main(string[] args)
        {
            string figureType = (Console.ReadLine());
            double figureArea = 0;

            if (figureType == "square")
            {
                double side = double.Parse(Console.ReadLine());
                figureArea = side * side;
            }
            else if (figureType == "rectangle")
            {
                double side1 = double.Parse(Console.ReadLine());
                double side2 = double.Parse(Console.ReadLine());
                figureArea = side1 * side2;
            }
            else if (figureType == "circle")
            {
                double radius = double.Parse(Console.ReadLine());
                figureArea = Math.PI * radius * radius;
                
            }
            else if (figureType == "triangle")
            {
                double side = double.Parse(Console.ReadLine());
                double height = double.Parse(Console.ReadLine());
                figureArea = (side * height) /2;
            }
            Console.WriteLine($"{figureArea:F3}");

        }
    }
}

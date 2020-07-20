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
                double side = double.Parse(Console.ReadLine());
            }
            else if (figureType == "circle")
            {
                double radius = double.Parse(Console.ReadLine());
                double lengh = double.Parse(Console.ReadLine());
                figureArea = radius * lengh;
            }
            else if (figureType == "triangle") 
            {
                double side = double.Parse(Console.ReadLine());
                double height = double.Parse(Console.ReadLine());
            }
            Console.WriteLine($"{figureArea:F3}");
 
        }
    }
}

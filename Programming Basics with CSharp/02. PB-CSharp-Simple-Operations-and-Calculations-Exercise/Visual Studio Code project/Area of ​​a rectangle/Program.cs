using System;

namespace Lice_na_pravougulnik
{
    class Program
    {
        static void Main(string[] args)
        {
            double x1 = double.Parse(Console.ReadLine());
            double y1 = double.Parse(Console.ReadLine());

            double x2 = double.Parse(Console.ReadLine());
            double y2 = double.Parse(Console.ReadLine());

            double duljina = Math.Abs(x1 - x2);
            double shirochina = Math.Abs(y1 - y2);

            double plosht = duljina * shirochina;
            double perimeter = 2 * (shirochina + duljina);

            Console.WriteLine($"{plosht:F2}");
            Console.WriteLine($"{perimeter:F2}");




        }
    }
}

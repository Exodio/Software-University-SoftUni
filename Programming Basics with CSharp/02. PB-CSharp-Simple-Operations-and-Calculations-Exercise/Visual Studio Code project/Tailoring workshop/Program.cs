using System;

namespace ShivashkiCeh
{
    class Program
    {
        static void Main(string[] args)
        {
            int broiprmasi = int.Parse(Console.ReadLine());
            double lengthprmasi = double.Parse(Console.ReadLine());
            double widthprmasi = double.Parse(Console.ReadLine());

            double pokrtotal = broiprmasi * (lengthprmasi + 2 * 0.3) * (widthprmasi + 2 * 0.3);
            double karetotal = broiprmasi * (lengthprmasi / 2) * (lengthprmasi / 2);

            double resultinusd = (pokrtotal * 7) + (karetotal * 9);
            double resultinbgn = resultinusd * 1.85;

            Console.WriteLine($"{resultinusd:f2} USD");
            Console.WriteLine($"{resultinbgn:f2} BGN");

        }
    }
}

using System;

namespace MeterConvertorDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            double number = double.Parse(Console.ReadLine());
            string inputType = Console.ReadLine();
            string outputType = Console.ReadLine();

            double tempValueCm = 0;
            if (inputType == "mm")
            {
                tempValueCm = number / 10;
            }
            else if (inputType == "m")
            {
                tempValueCm = number * 100;
            }
            else if (inputType == "cm") 
            {
                tempValueCm = number;  
            }

            double resultValue = 0;

            if (outputType == "mm")
            {
                resultValue = tempValueCm * 10;
            }
            else if (outputType == "m")
            {
                resultValue = tempValueCm / 100;
            }
            else if (outputType == "cm") 
            {
                resultValue = tempValueCm;
            }

            Console.WriteLine($"{resultValue:F3}");
        }
    }
}

using System;

namespace exFourConvertorForMeasurements
{
    class Program
    {
        static void Main(string[] args)
        {
            double number = double.Parse(Console.ReadLine());  //Real number
            string inputType = Console.ReadLine();  //Entry number
            string outputType = Console.ReadLine();  //Exit number

            double tempValueCm = 0;

            if (inputType == "mm")
            {                                  //10mm=1cm
                tempValueCm = number / 10;
            }                                 // 1cm = 1cm //No need to insert another IF statement.
            else if (inputType == "m")
            {                                //1m = 100cm
                tempValueCm = number * 100;
            }
            else if (inputType == "cm") 
            {
                tempValueCm = number;
            }

            double resultValue = 0;         //Za da kajem che trqbva da suzdadem neshto koeto e prazno.

            if (outputType == "mm")
            {                               //2cm = 20mm.
             resultValue = tempValueCm * 10;
            }
            else if (outputType == "m")
            {                              //200cm = 2cm.
             resultValue = tempValueCm / 100;
            }
            else if (outputType == "cm") 
            {
             resultValue = tempValueCm;
            }
            
)           
            Console.WriteLine($"{resultValue:F3}");







        }
    }
}

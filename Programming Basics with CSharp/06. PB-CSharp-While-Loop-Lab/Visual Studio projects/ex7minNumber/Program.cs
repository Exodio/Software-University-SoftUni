using System;

namespace ex7minNumber
{
    class Program
    {
        static void Main(string[] args)
        {

            int inputNumber = int.Parse(Console.ReadLine());
            int count = 0;
            int min = int.MaxValue;

            while (count < inputNumber)
            {
                int number = int.Parse(Console.ReadLine());
                count++;

                if (number < min)
                {
                    min = number;
                }
            }
            Console.WriteLine(min);
        }
    }
}

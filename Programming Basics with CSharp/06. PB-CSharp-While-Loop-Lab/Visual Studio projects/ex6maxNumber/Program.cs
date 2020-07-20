using System;

namespace ex6maxNumber
{
    class Program
    {
        static void Main(string[] args)
        {
            int inputNumber = int.Parse(Console.ReadLine());
            int count = 0;
            int max = int.MinValue;

            while (count < inputNumber)
            {
                int number = int.Parse(Console.ReadLine());
                count++;
                if (number > max)
                {
                    max = number;
                }
            }
            Console.WriteLine(max);
        }
    }
}

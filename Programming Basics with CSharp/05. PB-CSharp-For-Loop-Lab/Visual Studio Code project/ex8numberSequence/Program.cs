using System;

namespace forLoops
{
    class Program
    {
        static void Main(string[] args)
        {
            int numbers = int.Parse(Console.ReadLine());
            int maxNumber = int.MinValue;
            int minNumber = int.MaxValue;

            for (int i = 0; i < numbers; i++)
            {
                int num = int.Parse(Console.ReadLine());
                if (num > maxNumber)
                {
                    maxNumber = num;
                }         
                if (num < minNumber)
                {
                    minNumber = num;
                }             
            }
            Console.WriteLine($"Max number: {maxNumber}");
            Console.WriteLine($"Min number: {minNumber}");
        }
    }
}

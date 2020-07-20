using System;

namespace ex4sumOfTwoNumbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int startNumber = int.Parse(Console.ReadLine());
            int endNumber = int.Parse(Console.ReadLine());
            int magicalNumber = int.Parse(Console.ReadLine());
            int combination = 0;
            int sum = 0;

            for (int a = startNumber; a <= endNumber; a++)
            {
                for (int b = startNumber; b <= endNumber; b++)
                {
                    sum = a + b;
                    combination++;

                    if (sum == magicalNumber)
                    {
                        Console.WriteLine($"Combination N:{combination} ({a} + {b} = {magicalNumber})");
                        return;
                    }
                }           
            }
            Console.WriteLine($"{combination} combinations - neither equals {magicalNumber}");
        }
    }
}

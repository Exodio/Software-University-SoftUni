using System;

namespace ex2multiplicationTable
{
    class Program
    {
        static void Main(string[] args)
        {
            for (int one = 1; one <= 10; one++)
            {
                for (int two = 1; two <= 10; two++)
                {
                    int result = one * two;
                    Console.WriteLine($"{one} * {two} = {result}");
                }
            }
        }
    }
}

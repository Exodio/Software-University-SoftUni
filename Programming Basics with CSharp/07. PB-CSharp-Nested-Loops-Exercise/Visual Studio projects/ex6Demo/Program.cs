using System;

namespace ex6Demo
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            for (int number = 1111; number <= 9999; number++)
            {
                int a = number % 10 / 1;
                int b = number % 100 / 10;
                int c = number % 1000 / 100;
                int d = number % 10000 / 1000;

                if (a == 0 || b == 0 || c == 0 || d == 0)
                {
                    continue;
                }
                
                if (n % a == 0 && n % b == 0 && n % c == 0 && n % d == 0)
                {
                    Console.Write($"{number} ");
                }
            }
            Console.WriteLine();
        }
    }
}
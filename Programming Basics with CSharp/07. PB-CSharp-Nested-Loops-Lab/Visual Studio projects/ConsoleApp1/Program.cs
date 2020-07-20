using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            for (int i = 1; i <= 3; i++)
            {
                for (int a = 1; a < 3; a++)
                {
                    Console.WriteLine($"i = {i} & a = {a}");
                }
            }

        }
    }
}

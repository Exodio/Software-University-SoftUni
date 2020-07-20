using System;

namespace ex1numbersEndingIn7
{
    class Program
    {
        static void Main(string[] args)
        {
            for (int i = 7; i <= 1000; i+= 10)
            {
                Console.WriteLine(i);
            }
        }
    }
}

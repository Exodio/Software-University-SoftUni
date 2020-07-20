using System;

namespace ComplexConditions1
{
    class Program
    {
        static void Main(string[] args)
        {
            int number = 103;
            switch(number) //Подаваме само стойност на променлива
            {
                case 15: number -= 15; break;
                case 10: number -= 15; break;
                case 20: number -= 15; break;
                default: Console.WriteLine("Error"); break;

                    Console.WriteLine(number);
            }

        }
    }
}

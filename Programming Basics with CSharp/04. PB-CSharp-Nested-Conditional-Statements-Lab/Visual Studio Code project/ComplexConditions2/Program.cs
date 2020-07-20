using System;

namespace ComplexConditions2
{
    class Program
    {
        static void Main(string[] args)
        {
            string number = 15;
            switch(number)
            {
                case 15:
                case 10:
                case 20: number -= 15;break;

                default: Console.WriteLine("Error"); break;
            }
        }
    }
}

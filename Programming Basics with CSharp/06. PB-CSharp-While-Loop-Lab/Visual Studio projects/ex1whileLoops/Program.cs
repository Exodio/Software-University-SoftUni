using System;

namespace WhileLoopsEx
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();

            while (input != "Stop")
            {
                input = Console.ReadLine();
            }
        }
    }
}
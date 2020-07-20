using System;

namespace ex3sumNumbers
{
    class Program
    {
        static void Main(string[] args)
        {
            string numberInput = Console.ReadLine();
            int numberSum = 0;
            
            while (numberInput != "Stop")
            {
                int currentNumber = int.Parse(numberInput);
                numberSum = currentNumber + numberSum;

                numberInput = Console.ReadLine();            
            }
            Console.WriteLine(numberSum);
        }
    }
}

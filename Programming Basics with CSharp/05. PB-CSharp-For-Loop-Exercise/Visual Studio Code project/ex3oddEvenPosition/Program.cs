using System;

namespace ex3oddEvenPosition
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            double evenSum = 0;
            double evenMaxNum = int.MinValue;
            double evenMinNum = int.MaxValue;

            double oddSum = 0;
            double oddMaxNum = int.MinValue;
            double oddMinNum = int.MaxValue;

            for (int i = 1; i <= n; i++)
            {
                double num = int.Parse(Console.ReadLine());

                if (i % 2 == 0)  //Even numbers
                {
                    evenSum += num;

                    if (num > evenMaxNum)
                    {
                        evenMaxNum = num;
                    }

                    if (num < evenMinNum)
                    {
                        evenMinNum = num;
                    }
                }
                else
                {
                    oddSum += num;

                    if (num > oddMaxNum)
                    {
                        oddMaxNum = num;
                    }

                    if (num < oddMinNum)
                    {
                        oddMinNum = num;                                    
                    }

                }
            }
            Console.WriteLine($"EvenSum ={oddSum:F2}, ");
            Console.WriteLine($"EvenMin ={oddMinNum:F2}, ");
            Console.WriteLine($"EvenMax ={oddMaxNum:F2}, ");

            Console.WriteLine($"EvenSum ={evenSum:F2}, ");
            Console.WriteLine($"EvenMin ={evenMinNum:F2}, ");
            Console.WriteLine($"EvenMax ={evenMaxNum:F2}, ");
        }
    }
}

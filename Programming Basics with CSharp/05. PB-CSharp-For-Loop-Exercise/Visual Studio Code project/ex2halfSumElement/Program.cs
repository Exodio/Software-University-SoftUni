using System;

namespace ex2halfSumElement
{
    class Program
    {
        static void Main(string[] args)
        {
            int number = int.Parse(Console.ReadLine());
            int maxNum = int.MinValue;
            int sum = 0;


            for (int i = 0; i < number; i++)
            {
                int currentNum = int.Parse(Console.ReadLine());
                sum += currentNum;

                if (currentNum > maxNum)
                {
                    maxNum = currentNum;
                }
            }
            sum -= maxNum;          
            if (sum ==maxNum)
            {
                Console.WriteLine("Yes");
                Console.WriteLine($"Sum = {sum}");
            }
            else
            {
                Console.WriteLine("No");
                Console.WriteLine($"Diff = {Math.Abs(sum - maxNum)}");
            }
        }
    }
}

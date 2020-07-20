using System;

namespace ex9leftAndRightSum
{
    class Program
    {
        static void Main(string[] args)
        {
            int numbers = int.Parse(Console.ReadLine());
            int leftSum = 0;
            int rightSum = 0;

            for (int i = 0; i < 2 * numbers; i++)
            {
                int num = int.Parse(Console.ReadLine());
                if (i < numbers)
                {
                    leftSum += num;
                }
                else
                {
                    rightSum += num;
                }
            }
            if (rightSum == leftSum)
            {
                Console.WriteLine($"Yes, sum = {leftSum}");
            }
            else
            {
                int diff = Math.Abs(leftSum - rightSum);
                Console.WriteLine($"No, diff = {diff}");
            }
        }
    }
}

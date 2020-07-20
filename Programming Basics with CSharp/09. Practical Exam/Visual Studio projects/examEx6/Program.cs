using System;

namespace pbExam
{
    class Program
    {
        static void Main(string[] args)
        {

            int numOneUpperEnd = int.Parse(Console.ReadLine());
            int numTwoUpperEnd = int.Parse(Console.ReadLine());
            int numThreeUpperEnd = int.Parse(Console.ReadLine());

            for (int i = 1; i <= numOneUpperEnd; i++)
            {
                for (int k = 1; k <= numTwoUpperEnd; k++)
                {
                    for (int j = 1; j <= numThreeUpperEnd; j++)
                    {
                        if (i % 2 == 0 && j % 2 == 0)
                        {
                            if (k == 2 || k == 3 || k == 5 || k == 7)
                            {
                                Console.WriteLine($"{i} {k} {j}");
                            }
                        }
                    }
                }
            }


        }
    }
}

using System;

namespace ex9tradeComissions
{
    class Program
    {
        static void Main(string[] args)
        {
            string city = Console.ReadLine();
            double sales = double.Parse(Console.ReadLine());

            double comission = 0;

             if (city == "Sofia") 
             {
                if (sales > 10000)
                {
                    comission = sales * 0.12;
                }
                else if (sales > 1000)
                {
                    comission = sales * 0.08;
                }
                else if (sales > 500)
                {
                    comission = sales * 0.07;
                }
                else if (sales > 0)
                {
                    comission = sales * 0.05;
                }
                else
                {
                    Console.WriteLine("error");
                }
             }
            else if (city == "Varna")
            {
                if (sales > 10000)
                {
                    comission = sales * 0.13;
                }
                else if (sales > 1000)
                {
                    comission = sales * 0.10;
                }
                else if (sales > 500)
                {
                    comission = sales * 0.075;
                }
                else if (sales > 0)
                {
                    comission = sales * 0.045;
                }
                else
                {
                    Console.WriteLine("error");
                }
            }
            else if (city == "Plovdiv")
            {
                if (sales > 10000)
                {
                    comission = sales * 0.145;
                }
                else if (sales > 1000)
                {
                    comission = sales * 0.12;
                }
                else if (sales > 500)
                {
                    comission = sales * 0.8;
                }
                else if (sales > 0)
                {
                    comission = sales * 0.055;
                }
                else
                {
                    Console.WriteLine("error");
                }
            }
            Console.WriteLine($"{comission:F2}");
        }
    }
}

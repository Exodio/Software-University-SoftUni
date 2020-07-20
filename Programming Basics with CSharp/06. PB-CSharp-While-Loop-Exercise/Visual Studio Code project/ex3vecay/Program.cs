using System;

namespace ex3vecay
{
    class Program
    {
        static void Main(string[] args)
        {
            double neededMoney = double.Parse(Console.ReadLine());
            double balance = double.Parse(Console.ReadLine());
            int daysCount = 0;
            int spendDayCount = 0;

            while (balance < neededMoney)
            {
                string type = Console.ReadLine();
                double money = double.Parse(Console.ReadLine());
                daysCount++;

                if (type == "save")
                {
                    balance += money;
                    spendDayCount = 0;
                }
                else
                {
                    balance -= money;
                    spendDayCount++;

                    if (balance < 0)
                    {
                        balance = 0;
                    }

                    if (spendDayCount == 5)
                    {
                        break;
                    }
                }
            }
            if (balance >= neededMoney)
            {
                Console.WriteLine($"You saved the money for {daysCount} days.");
            }
            if (spendDayCount == 5)
            {
                Console.WriteLine($"You can't save the money.");
                Console.WriteLine(daysCount);
            }

        }
    }
}

using System;

namespace ex11cleverLily
{
    class Program
    {
        static void Main(string[] args)
        {
            int age = int.Parse(Console.ReadLine());
            double wmPrice = double.Parse(Console.ReadLine());
            int toyPrice = int.Parse(Console.ReadLine());

            int toysCount = 0;
            int savedMoney = 0;
            int stolenMoney = 0;
            int initialSavings = 0;

            for (int currentYear = 1; currentYear <= age; currentYear++)
            {
                if (currentYear % 2 == 0)
                {
                    savedMoney += 10;
                    initialSavings = initialSavings + savedMoney;
                    stolenMoney++;
                }
                else
                {
                    toysCount++;
                }
            }
            int totalSavedMoney = initialSavings + (toysCount * toyPrice) - stolenMoney;

            if (totalSavedMoney >= wmPrice)
            {
                Console.WriteLine($"Yes! {totalSavedMoney - wmPrice:F2}");
            }
            else
            {
                Console.WriteLine($"No! {wmPrice - totalSavedMoney:F2}");
            }           
        }       
    }
}

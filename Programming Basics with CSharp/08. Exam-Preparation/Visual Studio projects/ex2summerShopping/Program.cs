using System;

namespace ex2summerShopping
{
    class Program
    {
        static void Main(string[] args)
        {
            int budget = int.Parse(Console.ReadLine());
            double towelPrice = double.Parse(Console.ReadLine());
            int percentDiscount = int.Parse(Console.ReadLine());

            double umbrellaPrice = towelPrice * 2 / 3;
            double flipFloppersPrice = umbrellaPrice * 0.75;
            double beachBagPrice = (flipFloppersPrice + towelPrice) * 1 / 3;

            double totalPrice = towelPrice + umbrellaPrice + flipFloppersPrice + beachBagPrice;

            double totalSumAfterDiscount = totalPrice - (totalPrice * percentDiscount / 100); //Discount after total price summary, only for regular clients. 

            if (budget >= totalSumAfterDiscount)
            {
                Console.WriteLine($"Annie's sum is {totalSumAfterDiscount:F2} lv. She has {(budget - totalSumAfterDiscount):F2} lv. left.");
            }
            else
            {
                Console.WriteLine($"Annie's sum is {totalSumAfterDiscount:F2} lv. She needs {(totalSumAfterDiscount - budget):F2} lv. more.");
            }
        }
    }
}

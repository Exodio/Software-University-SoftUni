using System;

namespace KidsToyShop
{
    class Program
    {
        static void Main(string[] args)
        {
            double travelPrice = double.Parse(Console.ReadLine());
            int puzzelsCount = int.Parse(Console.ReadLine());
            int dollsCount = int.Parse(Console.ReadLine());
            int bearsCount = int.Parse(Console.ReadLine());
            int minionsCount = int.Parse(Console.ReadLine());
            int trucksCount = int.Parse(Console.ReadLine());

            //Сума
            double earnedMoneyBeforeDisscount = puzzelsCount * 2.60 + dollsCount * 3 + bearsCount * 4.10 + minionsCount * 8.20 + trucksCount * 2; //Stoinost predi da proverin broq im i predid da se platai naema
            
            //Брой на играчките
            int totalToysCount = puzzelsCount + dollsCount + bearsCount + minionsCount + trucksCount;

            //Първа отстъпка от 25%
            double moneyAfterFirstDiscountOf25Percent = 0;

            if (totalToysCount >= 50)
            {
             moneyAfterFirstDiscountOf25Percent = earnedMoneyBeforeDisscount * 0.75;
            }

            
            //Остатък след наем от 10%
            double finalPriceAfterPayingTheRentOf10Percent = moneyAfterFirstDiscountOf25Percent * 0.9;


            //Ако крайната цена след всички сметки е по-голяма от цената за пътуване, която по условие във вход е 40.8, то ще се ходи на експурзия!
            if (finalPriceAfterPayingTheRentOf10Percent >= travelPrice)
            {                             //Тука вадим крайната цена след всички одръжки от цената за експурзия, за да видим дали ще има остатък за джобни за да има въобще такава екскурция!
                Console.WriteLine($"Yes! {finalPriceAfterPayingTheRentOf10Percent - travelPrice:F2} lv left.");
            }
            else
            {
                Console.WriteLine($"Not enough money! {travelPrice - finalPriceAfterPayingTheRentOf10Percent:F2} lv needed.");
            }
   
            //Въпрос: Само не разбрах защо използваме 0.75 и 0.9?
            //Отговор: Това са процентите. Ако имаме остъпка 25 % това означава, //че от 100 % (цялата сума) вадим 25 %, което може да се представи и като умножим цялата сума по 0.75(или 0.9 когато вадим 10 %).



        }
    }
}

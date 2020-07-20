using System;

namespace ex6bakingCompetition
{
    class Program
    {

        static void Main(string[] args)
        {
            int participantsCount = int.Parse(Console.ReadLine()); //1st role input.

            int totalBakedGoodsCount = 0; //exit request 1 (input below in the for loop).
            double totalSum = 0; //exit request 2 (input below in the for loop).

            double cookiesPrice = 1.50;
            double cakesPrice = 7.80;
            double wafflesPrice = 2.30;

            for (int i = 0; i < participantsCount; i++) //! In this case [i] is not [<(=)] [participantsCount] as it will have another run after the Stop baking input and it will result in endless loop.
            {
                int cookiesCount = 0;
                int cakesCount = 0;
                int wafflesCount = 0;

                string participantName = Console.ReadLine(); //2nd role input.
                string bakeryType = Console.ReadLine(); //3rd role input.

                while (bakeryType != "Stop baking!")
                {
                    int bakeryCount = int.Parse(Console.ReadLine());  //4th role input.

                    if (bakeryType == "cookies")
                    {
                        cookiesCount = cookiesCount + bakeryCount;
                    }
                    else if (bakeryType == "cakes")
                    {
                        cakesCount = cakesCount + bakeryCount;

                    }
                    else if (bakeryType == "waffles")
                    {
                        wafflesCount = wafflesCount + bakeryCount;

                    }
                    bakeryType = Console.ReadLine();
                }

                Console.WriteLine($"{participantName} baked {cookiesCount} cookies, {cakesCount} cakes and {wafflesCount} waffles."); //exit input 1

                totalBakedGoodsCount = totalBakedGoodsCount + (cookiesCount + cakesCount + wafflesCount); //total baked goods count exit request:1
                totalSum = totalSum +((cookiesCount * cookiesPrice) + (cakesCount * cakesPrice) + (wafflesCount * wafflesPrice)); //total amount gathered for charity exit request:2
            }

            Console.WriteLine($"All bakery sold: {totalBakedGoodsCount}"); //exit input 2   
            Console.WriteLine($"Total sum for charity: {totalSum:F2} lv."); //exit input 3
        }
    }
}

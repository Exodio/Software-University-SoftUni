using System;

namespace ex5travelling
{
    class Program
    {
        static void Main(string[] args)
        {
            string destination = string.Empty;
            double minimalBudget = 0;
            string savings = string.Empty; // We make it as a string here.
            double moneyCount = 0;

            while (true)
            {
                destination = Console.ReadLine();  //!!!Here we use the empty string, this way is easier to be implemented in a while loop.

                if (destination == "End")
                {
                    break;
                }

                minimalBudget = double.Parse(Console.ReadLine());  //!!!We read the total money neded as minimalBudget//

                moneyCount = 0; //Counter in which we save the amount, as current savings are equal in the beginning to 0.

                while (moneyCount < minimalBudget)
                {
                    savings = Console.ReadLine(); //!!!Here we use the empty string.

                    if (savings == "End")
                    {
                        return; //We end the program if there is an "End". 
                    }

                    moneyCount += double.Parse(savings); //!!!Here we Parse the savings because in the beginning of the progam they rae listed as a string. 

                    if (moneyCount >= minimalBudget)
                    {
                        Console.WriteLine($"Going to {destination}!");
                    }
                }
            }
        }
    }
}



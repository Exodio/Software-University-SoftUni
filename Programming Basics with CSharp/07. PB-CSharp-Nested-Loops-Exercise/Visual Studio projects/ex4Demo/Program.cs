using System;

namespace ex4Demo
{
    class Program
    {
        static void Main(string[] args)
        {
            {
                int numberJury = int.Parse(Console.ReadLine());

                double sum = 0;
                double allSum = 0;
                double middleSum = 0;
                int counter = 0;
                string namePresentation = "";

                while (true)
                {
                    namePresentation = Console.ReadLine();

                    if (namePresentation == "Finish")
                    {
                        break;
                    }
                    for (int i = 1; i <= numberJury; i++)
                    {
                        double evaluation = double.Parse(Console.ReadLine());
                        sum += evaluation;
                        allSum = sum / numberJury;
                        counter++;
                    }

                    Console.WriteLine($"{namePresentation} - {allSum:f2}.");
                    middleSum += sum;            
                    sum = 0;
                }

                middleSum /= counter;
                Console.WriteLine($"Student's final assessment is {middleSum:f2}.");
            }
        }
    }
}

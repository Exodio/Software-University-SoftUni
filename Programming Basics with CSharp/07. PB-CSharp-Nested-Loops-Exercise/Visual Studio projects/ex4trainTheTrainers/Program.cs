using System;

namespace ex4trainTheTrainers
{
    class Program
    {
        static void Main(string[] args)
        {
            double numberOfPeople = int.Parse(Console.ReadLine());
            double allScores = 0;
            double counter = 0;

            string nameOfPresentation = Console.ReadLine();
            double sumOfGrades = 0;

            while (true)
            {            
                if (nameOfPresentation == "Finish")
                {
                    double scoreSum = allScores / counter;
                    Console.WriteLine($"Student's final assessment is {scoreSum:F2}.");
                    break;
                }
                for (int i = 0; i < numberOfPeople; i++)
                {
                    double grade = double.Parse(Console.ReadLine());
                    sumOfGrades += grade;
                    allScores += grade;
                    counter++;
                }
                double sumAfter = sumOfGrades / numberOfPeople;
                Console.WriteLine($"{nameOfPresentation} - {sumAfter:F2}.");
            }           
        }
    }
}

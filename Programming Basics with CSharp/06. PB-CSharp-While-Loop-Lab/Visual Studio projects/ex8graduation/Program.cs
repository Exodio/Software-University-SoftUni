using System;

namespace ex8graduation
{
    class Program
    {
        static void Main(string[] args)
        {
            string name = Console.ReadLine();
            int classRank = 1;
            double SumOfGrades = 0;

            while (classRank <= 12)
            {
                double grade = double.Parse(Console.ReadLine());
                if (grade >= 4.00)
                {
                    SumOfGrades += grade;
                    classRank++;                 
                }
                else
                {
                    grade = double.Parse(Console.ReadLine());
                }
            }
            Console.WriteLine($"{name} graduated. Average grade: {SumOfGrades/12:F2}");
        }
    }
}

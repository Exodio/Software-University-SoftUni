using System;

namespace ex2examPrep
{
    class Program
    {
        static void Main(string[] args)
        {
            int limitGrades = int.Parse(Console.ReadLine());

            string problemName = Console.ReadLine();
            int gradeSum = 0;
            int gradeCount = 0;
            int badGradeCount = 0;
            string lastProblemName = "";

            while (problemName != "Enough")
            {
                int grade = int.Parse(Console.ReadLine());
                gradeSum += grade;
                gradeCount++;

                if (grade <= 4)
                {
                    badGradeCount++;
                }

                if (badGradeCount == limitGrades)
                {
                    break;
                }

                lastProblemName = problemName;
                problemName = Console.ReadLine();
            }
            if (badGradeCount == limitGrades)
            {
                Console.WriteLine($"You need a break, {badGradeCount} poor grades.");
            }
            else
            {
                double averageGrade = gradeSum * 1.0 / gradeCount;
                Console.WriteLine($"Average score: {averageGrade:f2}");
                Console.WriteLine($"Number of problems: {gradeCount}");
                Console.WriteLine($"Last problem: {lastProblemName}");        
            }
        }
    }
}

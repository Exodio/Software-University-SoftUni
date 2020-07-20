using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            string name = Console.ReadLine();
            int failures = 0;
            double gradesSum = 0;
            double grades = 1;

            while (grades <= 12)
            {
                double grade = double.Parse(Console.ReadLine());
                if (grade < 4.00)
                {
                    failures++;
                    if (failures > 1)
                    {
                        break;
                    }
                }
                if (grade >= 4.00)
                {
                    gradesSum = gradesSum + grade;
                    grades++;
                }
            }
            if (grades == 13)
            {
                Console.WriteLine($"{name} graduated. Average grade: {gradesSum / 12:f2}");
            }
            else
            {
                Console.WriteLine($"{name} has been excluded at {grades} grade");
            }
        }
    }
}

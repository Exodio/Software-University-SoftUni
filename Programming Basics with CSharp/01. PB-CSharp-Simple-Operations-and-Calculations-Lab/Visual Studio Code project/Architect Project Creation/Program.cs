using System;

namespace Architect_Project_Creation
{
    class Program
    {
        static void Main(string[] args)
        {
            string architectName = Console.ReadLine();
            int ProjectCount = int.Parse(Console.ReadLine());
            int ProjectHours = ProjectCount * 3;

            Console.WriteLine($"The architect {architectName} will need {ProjectHours} hours to complete {ProjectCount} project/s.");

        }
    }
}

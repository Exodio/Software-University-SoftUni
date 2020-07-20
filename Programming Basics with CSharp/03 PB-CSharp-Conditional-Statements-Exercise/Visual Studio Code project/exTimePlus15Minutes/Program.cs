using System;

namespace TimePlus15Minutes
{
    class Program
    {
        static void Main(string[] args)
        {
            int hours = int.Parse(Console.ReadLine());
            int minutes = int.Parse(Console.ReadLine());

            //mintues +=15
            minutes += 15;

            if (minutes >= 60)
            {
                minutes -= 60;
                hours += 1;
            }

            if (hours >= 24)
            {
                hours -= 24;    
            }


            Console.WriteLine($"{hours}:{minutes:D2}");
        
        }
    }
}

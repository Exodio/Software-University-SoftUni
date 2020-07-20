using System;

namespace ex9onTimeForExamSecondOption
{
    class Program
    {
        static void Main(string[] args)
        {
            int examHour = int.Parse(Console.ReadLine());
            int examMinute = int.Parse(Console.ReadLine());
            int arrivalHour = int.Parse(Console.ReadLine());
            int arrivalMinute = int.Parse(Console.ReadLine());

            int totalExamTime = examHour * (60 + examMinute);
            int totalArrivalTime = arrivalHour * (60 + arrivalMinute);
            int diffEarly = totalExamTime - totalArrivalTime;
            int diffLate = totalArrivalTime - totalExamTime;

            int totalEarlyHour = diffEarly / 60;
            int totalEarlyMinute = diffEarly % 60;

            int totalLateHour = diffLate / 60;
            int totalLateMinute = diffLate % 60;

            if (totalExamTime < totalArrivalTime)
            {
                Console.WriteLine("Late");

                if (diffLate < 60)
                {
                    Console.WriteLine($"{totalLateMinute} minutes after the start");
                }
                else if (diffLate >= 60)
                {
                    Console.WriteLine($"{totalLateHour}:{totalLateMinute:D2} hours after the start");
                }
            }
            else if (diffEarly <= 30)
            {
                Console.WriteLine("On Time");
                Console.WriteLine($"{totalEarlyMinute} minutes before the start");
            }
            else if (diffEarly > 30)
            {
                Console.WriteLine("Early");

                if (diffEarly < 60)
                {
                    Console.WriteLine($"{totalEarlyMinute} minutes before the start");
                }
                else if (diffEarly >= 60)
                {
                    Console.WriteLine($"{totalEarlyHour}:{totalEarlyMinute:F2} hours before the start");
                }
            }
          
        }
    }
}

using System;

namespace OnTimeForTheExam
{
    class Program
    {
        static void Main(string[] args)
        {
            int examHour = int.Parse(Console.ReadLine());
            int examMinute = int.Parse(Console.ReadLine());
            int arrivalHour = int.Parse(Console.ReadLine());
            int arrivalMinute = int.Parse(Console.ReadLine());

            int totalExamTime = examHour * 60 + examMinute;
            int totalArrivalTime = arrivalHour * 60 + arrivalMinute;
            int diffEarly = totalExamTime - totalArrivalTime;
            int diffLater = totalArrivalTime - totalExamTime;

            int totalEarlyHour = diffEarly / 60;
            int totalEarlyMin = diffEarly % 60;

            int totalLaterHour = diffLater / 60;
            int totalLaterMin = diffLater % 60;

            if (totalExamTime < totalArrivalTime)
            {
                Console.WriteLine("Late");

                if (diffLater < 60)
                {
                    Console.WriteLine($"{totalLaterMin} minutes after the start");
                }
                else if (diffLater >= 60)
                {
                    Console.WriteLine($"{totalLaterHour}:{totalLaterMin:D2} hours after the start");
                }
            }
            else if (diffEarly <= 30)
            {
                Console.WriteLine("On Time");
                Console.WriteLine($"{totalEarlyMin} minutes before the start");
            }
            else if (diffEarly > 30)
            {
                Console.WriteLine("Early");

                if (diffEarly < 60)
                {
                    Console.WriteLine($"{totalEarlyMin} minutes before the start");
                }
                else if (diffEarly >= 60)
                {
                    Console.WriteLine($"{totalEarlyHour}:{totalEarlyMin:D2} hours before the start");
                }
            }
        }
    }
}
using System;

namespace exSeverWorldSwimmingRecord
{
    class Program
    {
        static void Main(string[] args)
        {
            double recordTime = double.Parse(Console.ReadLine());
            double distanceInMeters = double.Parse(Console.ReadLine());
            double timeInSeconds = double.Parse(Console.ReadLine());

            double totalSeconds = distanceInMeters * timeInSeconds;
            double delaySeconds = Math.Floor(distanceInMeters / 15) * 12.5;

            double totalSeocndsTime = totalSeconds + delaySeconds;

            if (totalSeocndsTime < recordTime)
            {
                Console.WriteLine($"Yes, he succeeded! The new world record is {totalSeocndsTime:F2} seconds.");
            }
            else
            {
                Console.WriteLine($"No, he failed! He was {totalSeocndsTime - recordTime:F2} seconds slower.");
            }

        }
    }
}

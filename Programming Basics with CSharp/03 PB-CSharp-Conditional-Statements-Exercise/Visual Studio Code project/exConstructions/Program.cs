using System;

namespace uslovniKonstrukciiUpr
{
    class Program
    {
        static void Main(string[] args)
        {
            int secondsOne = int.Parse(Console.ReadLine());
            int secondsTwo = int.Parse(Console.ReadLine());
            int secondsThree = int.Parse(Console.ReadLine());

            int totalSeconds = secondsOne + secondsTwo + secondsThree; //124 summary of the three players

            int minutes = totalSeconds / 60; //Minute couts
            int seconds = totalSeconds % 60; //Modulno delenie ot koeto poluchavame ostatuka 

            Console.WriteLine($"{minutes}:{seconds:D2}");
        }
    }
}

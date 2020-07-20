using System;

namespace ex4cruiseGames
{
    class Program
    {
        static void Main(string[] args)
        {
            string playerName = Console.ReadLine();
            int gamesPlayedTotal = int.Parse(Console.ReadLine());

            double totalVolleyballPoints = 0;
            double totalTennisPoints = 0;
            double totalBadmintonPoints = 0;

            double volleyballGamesPlayedCounter = 0;

            double tennisGamesPlayedCounter = 0;

            double badmintonGamesPlayerCounter = 0;

            for (int currentGameCount = 1; currentGameCount <= gamesPlayedTotal; currentGameCount++)
            {
                string gameName = Console.ReadLine();
                double gamePoints = double.Parse(Console.ReadLine());

                if (gameName == "volleyball")
                {
                    gamePoints = gamePoints * 1.07;
                    totalVolleyballPoints += gamePoints;
                    volleyballGamesPlayedCounter++;

                }
                else if (gameName == "tennis")
                {
                    gamePoints = gamePoints * 1.05;
                    totalTennisPoints += gamePoints;
                    tennisGamesPlayedCounter++;
                }
                else if (gameName == "badminton")
                {
                    gamePoints = gamePoints * 1.02;
                    totalBadmintonPoints += gamePoints;
                    badmintonGamesPlayerCounter++;
                }
            }
            double volleyballAveragePoints = totalVolleyballPoints / volleyballGamesPlayedCounter;
            double tennisAveragePoints = totalTennisPoints / tennisGamesPlayedCounter;
            double badmintonAveragePoints = totalBadmintonPoints / badmintonGamesPlayerCounter;

            double averagePointsGamesSum = Math.Floor(totalVolleyballPoints + totalTennisPoints + totalBadmintonPoints); //We combine the total points sum from each game saved in the beginning of the code and not the total sum of each and every average points taken from the games in the end of the code!


            if (volleyballAveragePoints >= 75 && tennisAveragePoints >= 75 && badmintonAveragePoints >= 75)
            {
                Console.WriteLine($"Congratulations, {playerName}! You won the cruise games with {averagePointsGamesSum} points.");
            }
            else
            {
                Console.WriteLine($"Sorry, {playerName}, you lost. Your points are only {averagePointsGamesSum}.");
            }
        }
    }
}

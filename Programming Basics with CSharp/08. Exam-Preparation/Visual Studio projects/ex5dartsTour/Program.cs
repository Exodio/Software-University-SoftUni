using System;

namespace ex5dartsTour
{
    class Program
    {
        static void Main(string[] args)
        {
            int startingPoints = int.Parse(Console.ReadLine());
            int movesCount = 0;

            int currentSectorCount = startingPoints; //!Added to avoid confusion afterwards. We save the current points that are received and later on will be remove, depending on the target sector, that has been hit below.


            while (currentSectorCount > 0)
            {
                movesCount++; //Adding +1 should be here instead of down, since we need +1 in the beginning as it will show one more additional after the program runs.

                string targetSector = Console.ReadLine();   //Target sector.


                if (targetSector == "bullseye")  //We place the if statemnt here, because if there is a bulleye by exercise design the program should terminate (there is more in next sentence).
                {
                    Console.WriteLine($"Congratulations! You won the game with a bullseye in {movesCount} moves!");  // !If we do not paste it here we will get an error in the upcoming: int currentPoints = int.Parse(Console.ReadLine()); due to the fact that it will have to read another number and in our case there won't be one as we already concluded termination.

                    return;
                }


                int currentHitPoints = int.Parse(Console.ReadLine()); //! If there is no bullseye we can continue by checking the points hit.


                if (targetSector == "number section")
                {
                    currentSectorCount = currentSectorCount - currentHitPoints;  //Target sector actions taken and saved in the above currentSectorCount.
                }
                else if (targetSector == "double ring")
                {
                    currentSectorCount = currentSectorCount - (currentHitPoints * 2);
                }
                else if (targetSector == "triple ring")
                {
                    currentSectorCount = currentSectorCount - (currentHitPoints * 3);
                }
            }

            if (currentSectorCount == 0)
            {
                Console.WriteLine($"Congratulations! You won the game in {movesCount} moves!");
            }
            else if (currentSectorCount < 0)  //As we are going to have a negative number as a result here, we would need to use Math.Abs, which will turn a negative number into a postiive one, as required in this exercise.
            {
                Console.WriteLine($"Sorry, you lost. Score difference: {Math.Abs(currentSectorCount)}.");
            }
        }
    }
}

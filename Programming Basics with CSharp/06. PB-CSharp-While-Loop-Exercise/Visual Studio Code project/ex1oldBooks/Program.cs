using System;

namespace ex1oldBooks
{
    class Program
    {
        static void Main(string[] args)
        {
            string bookName = Console.ReadLine();
            int bookCount = int.Parse(Console.ReadLine());

            string currentBookName = Console.ReadLine();
            int counter = 0;

            while (bookName != currentBookName)
            {
                counter++;

                if (counter == bookCount)
                {
                    break;
                }

                currentBookName = Console.ReadLine();
            }
            if (bookName == currentBookName)
            {
                Console.WriteLine($"You checked {counter} books and found it.");

            }
            else
            {
                Console.WriteLine($"The book you search is not here!");
                Console.WriteLine($"You checked {counter} books.");
            }
        }
    }
}

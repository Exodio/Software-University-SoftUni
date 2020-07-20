using System;

namespace ex._2animalClass
{
    class Program
    {
        static void Main(string[] args)
        {
            string animal = Console.ReadLine();

            if (animal == "dog")
            {
                Console.WriteLine("mammal");
            }
            else if (animal == "crocodole")
            {
                Console.WriteLine("reptile");
            }
            else if (animal == "tortoise")
            {
                Console.WriteLine("reptile");
            }
            else if (animal == "snake")
            {
                Console.WriteLine("reptile");
            }
            else
            {
                Console.WriteLine("unknown");
            }
        }
    }
}

using System;

namespace ex2animalClassDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            string animal = Console.ReadLine();

            switch (animal) //we use that as an if
            {

                case "dog": Console.WriteLine("mammal");break; //this is the if statement
                case "crocodile": //those are the else if statements 
                case "tortoise":
                case "snake":
                Console.WriteLine("reptile");break; //since they are all under the same entitlement, we have put only one break for all

                default: //we use that as an else
                Console.WriteLine("unknown");break;
            }

        }
    }
}

using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            string password = "eva123";
            string username = "Welcome back Eva!";
            Console.WriteLine("Please enter your password: ");
            string passowrdInput = Console.ReadLine();
            

            if (password == passowrdInput) 
            {
                Console.WriteLine((username!));
            }
            else 
            {
                Console.WriteLine("Incorrect Password");
            }

           


        }
    }
}

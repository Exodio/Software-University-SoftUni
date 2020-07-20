using System;

namespace exSixGuessThePassword
{
    class Program
    {
        static void Main(string[] args)
        {
            string password = (Console.ReadLine());
            string passwordHint = "s3cr3t!P@ssw0rd";

            if (password == passwordHint)
            {
                Console.WriteLine("Welcome");
            }
            else if (password != passwordHint)
            {
                Console.WriteLine("Wrong password!");

            }
            //You can also execute the below and remove the (else if command).
           // else
           // { 
           //     Console.WriteLine("Wrong password"!); 
           // }




        }
    }
}

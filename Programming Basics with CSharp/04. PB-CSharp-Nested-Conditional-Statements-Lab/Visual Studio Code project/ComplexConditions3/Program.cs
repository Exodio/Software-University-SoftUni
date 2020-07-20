using System;

namespace ComplexConditions3
{
    class Program
    {
        static void Main(string[] args)
        {
            string name = "Ani";
            switch (name) 
            {
                case "Millena":
                case "Atanas":
                case "Georgi":

                    Console.WriteLine("The name is {}");
                    ;break;

                default: Console.WriteLine("Error");break;
            }
        }
    }
}

using System;

namespace ex5foreightLanguage
{
    class Program
    {
        static void Main(string[] args)
        {
            string languageOrigin = Console.ReadLine();

            if (languageOrigin == "England" || languageOrigin == "USA")
            {
                Console.WriteLine("English");
            }
            else if (languageOrigin == "Spain" || languageOrigin == "Argentina" || languageOrigin == "Mexico")
            {
                Console.WriteLine("Spanish");
            }
            else
            {
                Console.WriteLine("unknown");
            }

        }
    }
}

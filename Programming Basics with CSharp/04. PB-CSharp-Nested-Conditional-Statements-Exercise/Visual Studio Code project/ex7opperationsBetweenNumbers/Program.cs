using System;

namespace ex7opperationsBetweenNumbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int numOne = int.Parse(Console.ReadLine());
            int numTwo = int.Parse(Console.ReadLine());
            string opperation = Console.ReadLine();

            if (opperation == "+" || opperation == "-" || opperation == "*")
            {
                int result = 0;               

                if (opperation == "+")
                {
                    result = numOne + numTwo;
                }
                else if (opperation == "-")
                {
                    result = numOne - numTwo;
                }
                else if (opperation == "*")
                {
                    result = numOne * numTwo;
                }

                string evenOrOdd = "";

                if (result % 2 == 0)
                {
                    evenOrOdd = "even";
                }
                else
                {
                    evenOrOdd = "odd";
                }

                Console.WriteLine($"{numOne} {opperation} {numTwo} = {result} - {evenOrOdd}");
            }
            else if (opperation == "/")
            {
                if (numTwo == 0)
                {
                    Console.WriteLine($"Cannot divide {numOne} by zero");
                }
                else
                {
                    Console.WriteLine($"{numOne} / {numTwo} = {(numOne * 1.0) / numTwo:F2}");  //in order to get a double result number, we must * one of the two number's before dividing the two nembers.
                }
            }
            else if (opperation == "%")
            {
                if (numTwo == 0)
                {
                    Console.WriteLine($"Cannot divide {numOne} by zero");
                }
                else
                {
                    Console.WriteLine($"{numOne} % {numTwo} = {numOne % numTwo}");
                }
            }
        }
    }
}

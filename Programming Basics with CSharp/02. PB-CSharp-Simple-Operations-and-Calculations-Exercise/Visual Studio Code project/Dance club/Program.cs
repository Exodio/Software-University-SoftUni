using System;

namespace Dance_Club
{
    class Program
    {
        static void Main(string[] args)
        {
            double lenghtL = double.Parse(Console.ReadLine());
            double widthW = double.Parse(Console.ReadLine());
            double wardrobeSideInMeters = double.Parse(Console.ReadLine());

            double sizehallkvcm = (lenghtL * 100) * (widthW * 100);
            double wardropesize = ((wardrobeSideInMeters *100) * (wardrobeSideInMeters *100));
            double sizeofbench = (sizehallkvcm / 10);

            double freespacetotal = (sizehallkvcm - wardropesize - sizeofbench);

            double totaldancers = freespacetotal / (40 + 7000);

            Console.WriteLine(Math.Floor(totaldancers));


        }
    }
}

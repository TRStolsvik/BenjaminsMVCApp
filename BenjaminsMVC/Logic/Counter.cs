using BenjaminsMVC.Models;

namespace BenjaminsMVC.Logic
{
    public class Counter
    {
        public static string GetValues(Benjamins benjamins)
        {
            string result = "";

            string sValue = benjamins.StartValue;
            string eValue = benjamins.EndValue;

            int startValue = int.Parse(sValue);
            int endValue = int.Parse(eValue);

            List<int> numbers = GenerateNumbers(startValue, endValue);

            return result = DisplayNumbers(numbers);
        }

        public static List<int> GenerateNumbers(int sValue, int eValue)
        {
            List<int> output = new List<int>();

            for (int i = sValue; i <= eValue; i++)
            {
                output.Add(i);
            }

            return output;
        }

        public static string DisplayNumbers(List<int> numbers)
        {
            string templateRows = "";
            string className = "";

            for (int i = 0; i < numbers.Count; i++)
            {
                int number = numbers[i];

                if (number % 2 == 0)
                {
                    className = "even";
                }
                else
                {
                    className = "odd";
                }
                templateRows += $"<tr><td class='{className}'>{number}</td></tr>";
            }

            return templateRows;
        }
    }
}

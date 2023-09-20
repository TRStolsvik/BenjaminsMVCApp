(function (app) {
    'use strict';

    app.benjamins = function () {
        const submitButton = document.getElementById('btnSubmit');
        submitButton.addEventListener('click', getValues);
    };

    function getValues() {
        // Get start and end values from the page.
        let startValue = document.getElementById('startValue').value;
        let endValue = document.getElementById('endValue').value;

        // Convert the strings that come back to integers.
        startValue = Number.parseInt(startValue);
        endValue = Number.parseInt(endValue);

        // Check and verify that the strings are now in fact integers.
        if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
            // Call function generateNumbers with the converted values and store the returned numbers in a variable.
            const numbers = generateNumbers(startValue, endValue);

            // Call function displayNumbers to display the returned array of numbers on the page.
            displayNumbers(numbers);
        }
    }

    function generateNumbers(startValue, endValue) {
        // Declare an empty array called numbers
        let numbers = [];

        // For-loop through the the range specified in the function getValues.
        for (let i = startValue; i <= endValue; i++) {
            // For each iteration, append the result to the array called numbers.
            numbers.push(i);
        }
        // Finally return numbers.
        return numbers;
    }

    function displayNumbers(numbers) {
        // Declare a variable called templateRows and set it to an empty string ''.
        let templateRows = '';

        // Declare a variable called className and set it to an empty string.
        let className = '';

        // For-loop through numbers
        for (let i = 0; i < numbers.length; i++) {
            let number = numbers[i];

            // For each even number, set className to even, else set className to odd.
            if (number % 2 == 0) {
                className = 'even';
            } else {
                className = 'odd';
            }

            // Concatenate (+=) each iteration to the variable called templateRows using string interpolation.
            templateRows += `<tr><td class="${className}">${number}</td></tr>`;
        }

        // Finally, display the results in the html page.
        document.getElementById('results').innerHTML = templateRows;
    }
})((window.app = window.app || {}));

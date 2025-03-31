const calculateButton = document.getElementById('calculate');
        calculateButton.addEventListener('click', calculate);
// little change

        const convertButton = document.getElementById('convert');
        convertButton.addEventListener('click', convertResult);

        var result = '';


        function calculate() {
            const num1 = document.getElementById('num1').value;
            const num2 = document.getElementById('num2').value;
            const operation = document.getElementById('operation').value;

            switch (operation) {
                case '+':
                    result = (parseInt(num1, 2) + parseInt(num2, 2)).toString(2);
                    break;
                case '-':
                    result = (parseInt(num1, 2) - parseInt(num2, 2)).toString(2);
                    break;
                case '*':
                    result = (parseInt(num1, 2) * parseInt(num2, 2)).toString(2);
                    break;
                case '/':
                    if (parseInt(num2, 2) === 0) {
                        result = 'Division by zero error';
                    } else {
                        result = (parseInt(num1, 2) / parseInt(num2, 2)).toString(2);
                    }
                    break;
                case '&':
                    result = (parseInt(num1, 2) & parseInt(num2, 2)).toString(2);
                    break;
                case '|':
                    result = (parseInt(num1, 2) | parseInt(num2, 2)).toString(2);
                    break;
                case '^':
                    result = (parseInt(num1, 2) ^ parseInt(num2, 2)).toString(2);
                    break;
                default:
                    result = 'Invalid operation';
            }
            document.getElementById('result').textContent = 'Result: ' + result;
        }

        function convertResult() {
            const convertToBase = parseInt(document.getElementById('convertToBase').value);
            let convertedResult = parseInt(result, 2);
            convertedResult = convertedResult.toString(convertToBase).toUpperCase();
            document.getElementById('conversionResult').textContent = 'Converted Result: ' + convertedResult;
        }

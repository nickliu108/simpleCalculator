
window.onload= function(){
    var allButtons = document.getElementsByClassName('numberButton');
    var display = document.getElementById('output');
    var operators =  document.getElementsByClassName('operator');
    var equalButton = document.getElementsByClassName('eq')[0];
    var clearButton = document.getElementsByClassName('clear')[0];

    var first,operator, second;
    var operatorClicked = false;
    var firstNumberClick = true;

    function updateOperand(original, newValue) {
        return firstNumberClick ? newValue : original+newValue;
    }

    function numberClick(button){
        if (operatorClicked) {
        second = updateOperand(second, button.innerHTML);
        } else {
        first = updateOperand(first, button.innerHTML);
        }

        display.innerHTML = operatorClicked ? second: first;
        firstNumberClick = false;
    }

    function operatorClick(o){
        display.innerHTML = o.innerHTML;
        firstNumberClick = true;
        operator = o.innerHTML;
        operatorClicked = true;
        firstNumberClick = true;
    }

    function calculate(){
        firstNumberClick = true;
        operatorClicked = false;
        switch (operator) {
            case '+':
                display.innerHTML =  parseInt(first) + parseInt(second);
                break;
            case '-':
                display.innerHTML = parseInt(first) - parseInt(second);
                break;
            case '/':
                display.innerHTML = parseInt(first) / parseInt(second);
                break;
            case '*':
                display.innerHTML = parseInt(first) * parseInt(second);
                break;
        }
    }

    for(var i=0; i<allButtons.length; ++i){
        allButtons[i].addEventListener('click', function(e){
            numberClick(e.target);
        });
    }

    for(var i=0; i<operators.length; ++i){
        operators[i].addEventListener('click', function(e){
            operatorClick(e.target)
        });
    }

    equalButton.addEventListener('click', calculate);

    clearButton.addEventListener('click', function(){
        display.innerHTML = '';
        first = '';
        second = '';
        operator = '';
        operatorClicked = false;
        firstNumberClick = true;
    });
};

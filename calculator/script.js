/*
This is a javascript file for the calculator project.

NOT COMPLETE

issues to address:
    1.  DONE::add a clear function and a clear button on the HTML sheet.
    2.  what if an operation is added first,check the corner case.
    3.  operating on floating point numbers.
    4.  take input from the keyboard.
    5.  DONE::make it pretty.
    6. resolve the two zeroes and text overflow.
*/
// operator function which takes in three arguments of which 
// two are numbers and one is an operation and returns
// the result of the operation based on the values.
function operate(num_1,num_2,operator){
    let num1 = Number(num_1);
    let num2 = Number(num_2);
    switch(operator){
        case "+":
            return num1+num2;
            break;
        case "-":
            return num1-num2;
            break;
        case "*":
            return num1*num2;
            break;
        case "/":
            return num1/num2;
            break;
        default:
            return 0;
    }
}
function process(input){
    console.log(input);
}
function calculator(){
    const button = document.querySelectorAll('button');
    const display = document.querySelector('.display');
    let input = "";
    button.forEach((button)=>{
        button.addEventListener('click',(e)=>{
            if(e.toElement.id==="clear"){
                input = "";
                display.innerHTML = input;
            }else if(e.toElement.id==="equal"){
                let output = process(input);
                display.innerHTML = output;
            }else if(e.toElement.className==="num"){
                let temp = e.toElement.id;
                input += temp;
                display.innerHTML = input;
            }else{
                let temp = e.toElement.id;
                switch(temp){
                    case 'div':
                        input += " / ";
                        display.innerHTML = input;
                        break;
                    case 'mul':
                        input += " * ";
                        display.innerHTML = input;
                        break;
                    case 'plus':
                        input += " + ";
                        display.innerHTML = input;
                        break;
                    case 'minus':
                        input += " - ";
                        display.innerHTML = input;
                        break;
                    case 'dot':
                        input += ".";
                        display.innerHTML = input;
                        break;
                    default:
                        display.innerHTML = input;
                        break;
                }
            }
        });
        // button.addEventListener('mouseover',(e)=>{
        //     button.style.cssText  = "background-color:yellow;";
        // });
    });
}
calculator();
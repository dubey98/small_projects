/*
This is a javascript file for the calculator project.

NOT COMPLETE

issues to address:
    1.  add a clear function and a clear button on the HTML sheet.
    2.  what if an operation is added first,check the corner case.
    3.  operating on floating point numbers.
    4.  take input from the keyboard.
    5.  make it pretty.

*/
// operator function which takes in three arguments of which 
// two are numbers and one is an operation and returns
// the result of the operation based on the values.
function operate(num_1,num_2,operator){
    let num1 = Number(num_1);
    let num2 = Number(num_2);
    switch(operator){
        case "plus":
            return num1+num2;
            break;
        case "minus":
            return num1-num2;
            break;
        case "mul":
            return num1*num2;
            break;
        case "div":
            return num1/num2;
            break;
        default:
            return 0;
    }
}
function calculator(){
// declaring number1 number2 and an operation which has to be performed on them
// the flag decides which number is taking input right now number1 or number2

    const button = document.querySelectorAll('button');
    let num1 = "";
    let num2 = "";
    let operator = "";
    let flag=0;
    let display =  document.querySelector('.display');
    display.textContent = "0";
    // display.textContent = `${operate(num1,num2,operate)}`;
    button.forEach((button)=>{
        button.addEventListener('click',(e)=>{
            let tempString = button.className ;
            // if an operation button is clicked the if() will get executed 
            // or the else condition will get executed if a number is sselected 
            if(tempString[0]==='o'){
                // this switch decides if the number1 value has to be 
                // updated and kept or discarding that and executing the 
                // equal operation.
                switch(tempString.slice(10,)){
                    case "equal":
                        if(operator!==""){
                            display.textContent = `${operate(num1,num2,operator)}`;
                        }else{
                            if(num1===""){
                                display.textContent = "0";
                            }else{
                                display.textContent = `${num1}`;
                            }
                        }
                        num1 = "";
                        num2 = "";
                        operator = "";
                        flag=0;
                        // console.log("equal operated");
                        break;
                    default :
                        if(flag===0){
                            operator = tempString.slice(10,);
                            flag=1;
                            // console.log("operator assigned");
                        }else{
                            operator = tempString.slice(10,);
                            let tempNum = operate(num1,num2,operator);
                            num1 = tempNum;
                            display.textContent = `${num1}`;
                            num2 = "";
                            operator = "";
                            flag=1;
                            // console.log("num1 updated");
                        }
                }
            }
            else{
                if(flag===0){
                    num1 = num1 + tempString.slice(4,);
                    display.textContent = `${num1}`;
                    // console.log("showing num1");
                }else{
                    num2 = num2 + tempString.slice(4,);
                    display.textContent = `${num2}`;
                    // console.log("showing num2");
                }
            }
        });
    });
}
calculator();
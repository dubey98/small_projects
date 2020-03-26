
function randColor(){
    let color = 'rgb('+ Math.floor((Math.random())*255) +','+ 
                 Math.floor((Math.random())*255)+','+
                 Math.floor((Math.random())*255)+')';
    return color;
}

function myFunc(){
    const num = prompt('how many squares on each side ');
    const gamepad = document.querySelector('.gamepad');
    const height = 500/num + 'px';
    const width = 500/num +'px';
    for(let i=0;i<(num*num);i++){
        const content = document.createElement('div');
        content.classList.add('squares');
        content.style.cssText = `height:${height};width:${width}`;
        gamepad.appendChild(content);

        let counter=0;
        content.addEventListener("mouseover",(e)=>{
            counter++;
            if(counter<10){
                content.style.backgroundColor = randColor();
            }else{
                content.style.backgroundColor = 'black';
            }
        });
    }
}

function func() {
    
    const btn = document.querySelector('.btn');
    btn.addEventListener('click',(e)=>{
        const gamepad = document.querySelector('.gamepad');
        while(gamepad.firstChild){
            gamepad.removeChild(gamepad.lastChild);
        }
        myFunc();
    });
}

func();
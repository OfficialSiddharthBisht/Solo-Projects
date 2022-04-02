let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));
// console.log(buttons);
buttons.map(button =>{
    button.addEventListener('click',(event)=>{
        // console.log(event.target.innerText);
        switch(event.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '⇚':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0 , -1);
                }
                break;
            case "=":
                try{
                    display.innerText = eval(display.innerText);
                }catch{
                    display.innerText = "Error!";
                }
                break;
            default:
                display.innerHTML += event.target.innerText;
        }
    });
});
let display = document.querySelector('.display')

let addDisplay = (num)=>{
    display.innerHTML = display.innerHTML+=num;
}
console.log("here")
let clearDisplay = ()=>{
    display.innerHTML = '';
}

let solve = ()=>{ 
    display.innerHTML = eval(display.innerHTML)
}


let display = document.querySelector(".display")
isCalculated = false
let operation = ''
isNumber = true

function displayChanged(){
    console.log("changed")
}

function insert(sender){
    if (sender.className.includes("numbers")){
        if (isCalculated){
            display.textContent = ""
            operation = ''
            isCalculated = false
        }
        isNumber = true
        display.textContent += sender.textContent
    operation += sender.id
    }else if (!isNumber){
        del()
        isCalculated = false
        display.textContent += sender.textContent
        operation += sender.id
    }else{
        isCalculated = false
        isNumber = false
    }
    
}

function del(){
    operation = operation.slice(0,operation.length - 1)
    display.textContent = display.textContent.slice(0, display.textContent.length - 1)
    isNumber = true
}

function clr(){
    operation = ""
    display.textContent = ""
    isCalculated = false
    isNumber = true
}

function calc(){
    display.textContent = eval(operation)
    operation = eval(operation)
    isCalculated = true
}
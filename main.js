let display = document.querySelector(".display")
isCalculated = false
let operation = ''
isNumber = true

function insert(sender){
    if (sender.className.includes("numbers")){
        if (isCalculated){
            display.textContent = ""
            operation = ''
            isCalculated = false
        }
        isNumber = true
    }else if (isNumber){
        isCalculated = false
        isNumber = false
    }else{
        del()
        isCalculated = false
    }
    display.textContent += sender.textContent
    operation += sender.id
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
function dis(val){
    document.getElementById("display").value+=val
}

function calculate(){
    expression = document.getElementById("display").value
    try{
        expression = expression.replace('/√(\d+)g','Math.sqrt($1)')
        res = eval(expression)
        document.getElementById("display").value=res
    }
    catch{
        document.getElementById("display").value="Error"
    }
}

function clearDis(){
    document.getElementById("display").value = ""
}

function del(){
    val = document.getElementById("display").value
    document.getElementById("display").value = val.slice(0,-1)
}
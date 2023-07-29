let temperatura = parseInt(prompt("Qual a sua temperatura?"))

if( temperatura > 7.5){
    alert("Você esta com covid")
}else if( temperatura  >= 7.0 || temperatura == 7.5){
    alert("Você está com supeita de covid")
    
}else {
    alert("Você não esta com covid")
}

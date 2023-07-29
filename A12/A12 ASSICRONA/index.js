let amigoGenteBoa =  prompt("Fale com seu amigo timido")
let numeroInteracao = 0

while(numeroInteracao < 4) {
if(amigoGenteBoa === "oi!!") {
    alert("Oi")
    numeroInteracao++;
}
else if(amigoGenteBoa === "olá!"){
    alert("Oii")
    numeroInteracao++;
}else if (amigoGenteBoa === "bom dia!"){
    alert ("Bom dia")
    numeroInteracao++;

}else if (amigoGenteBoa === "como está?"){
    alert("Bem e você?")
    numeroInteracao++;


}else{
   alert("Desculpe eu não entendi oque você quis dizer")
}
  amigoGenteBoa = prompt("Fale com seu amigo timido novamente")
} 
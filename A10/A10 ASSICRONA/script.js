



numeroSecreto= Math.floor(Math.random()* 50) + 1 ;



let acertou = false 

while(!acertou){
    let chute = parseInt(prompt("Digite um número entre 1 e 50"))
   
    if (chute == numeroSecreto){
      alert("Parabéns,você acertou!")
      acertou = true
    }
    else if( chute > numeroSecreto ){
        alert("O numero inserido é maior que o numero secreto,tente novamente!")

    }
    else if (chute < numeroSecreto){
        alert("O numero inserido é menor que o numero secreto,tente novamente!")
    }

}
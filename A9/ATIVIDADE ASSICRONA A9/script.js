let numeroSecreto = Math.floor(Math.random() * (50 + 1));

let acertou = false;
    while(!acertou){
        let chute = parseInt(prompt("Digite um número entre 1 e 50"), 10);

    if(chute == numeroSecreto){
       alert("Você acertou!");
       acertou = true;
    }
    else if (chute > numeroSecreto){
        alert("Chute errado! o chute é maior que o numero secreto Tente novamente!");
    }
    else if(chute < numeroSecreto) {
        alert("Chute errado! o chute é menor que o numero secreto Tente novamente!");

    }
   
        
        
    }


const player1 = {
    NOME: "luigi",
    VELOCIDADE: 5,
    MANOBRABILIDADE: 6,
    PODER: 4,
    PONTOS: 0,
}

const player2 ={
    NOME: "bowser",
    VELOCIDADE: 6,
    MANOBRABILIDADE: 4,
    PODER: 5,
    PONTOS: 0,
}

async function rollDice(){
    return Math.floor(Math.random() * 10) + 1;
}
async function getRandomBlock(){
    let random = Math.random()
    let result
    switch (true) {
    case random < 0.33:
        result = "RETA"
        break;
    case random < 0.66:
        result = "CURVA"
        break;
    default:
        result = "CONFRONTO"
    }
   return result
}
async function logRollResult(characterName, block, diceResult, atribute){
    console.log(`${characterName} 🎲 rolou um dado ${block} ${diceResult} + ${atribute} = ${diceResult + atribute}`);
}

     async function playRaceEngine(character1, character2){
  for(let round = 1; round <= 5; round++){
    console.log(`🏁 Rodada ${round}`);
       
    let block = await getRandomBlock();
    console.log(`block sorteado: ${block}`);

    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    let TotalTesteSkill1 = 0;
    let TotalTesteSkill2 = 0;

    if(block === "RETA"){
      TotalTesteSkill1 = diceResult1 + character1.VELOCIDADE;
      TotalTesteSkill2 = diceResult2 + character2.VELOCIDADE;

      await logRollResult(character1.NOME,"VELOCIDADE",diceResult1,character1.VELOCIDADE);
      await logRollResult(character2.NOME,"VELOCIDADE",diceResult2,character2.VELOCIDADE);

      if(TotalTesteSkill1 > TotalTesteSkill2){
        console.log(`${character1.NOME} marcou um ponto!`);
        character1.PONTOS++;
      } else if(TotalTesteSkill2 > TotalTesteSkill1){
        console.log(`${character2.NOME} marcou um ponto!`);
        character2.PONTOS++;
      }
    }

    if(block === "CURVA"){
      TotalTesteSkill1 = diceResult1 + character1.MANOBRABILIDADE;
      TotalTesteSkill2 = diceResult2 + character2.MANOBRABILIDADE;

      await logRollResult(character1.NOME,"MANOBRABILIDADE",diceResult1,character1.MANOBRABILIDADE);
      await logRollResult(character2.NOME,"MANOBRABILIDADE",diceResult2,character2.MANOBRABILIDADE);

      if(TotalTesteSkill1 > TotalTesteSkill2){
        console.log(`${character1.NOME} marcou um ponto!`);
        character1.PONTOS++;
      } else if(TotalTesteSkill2 > TotalTesteSkill1){
        console.log(`${character2.NOME} marcou um ponto!`);
        character2.PONTOS++;
      }
    }

    if(block === "CONFRONTO"){
      let powerResult1 = diceResult1 + character1.PODER;
      let powerResult2 = diceResult2 + character2.PODER;

      console.log(`${character1.NOME} confrontou com ${character2.NOME} !🥊`);

      await logRollResult(character1.NOME,"PODER",diceResult1,character1.PODER);
      await logRollResult(character2.NOME,"PODER",diceResult2,character2.PODER);

      if(powerResult1 > powerResult2){
        console.log(`${character1.NOME} venceu o confronto!`);
        character1.PONTOS++;
      } else if(powerResult2 > powerResult1){
        console.log(`${character2.NOME} venceu o confronto!`);
        character2.PONTOS++;
      }
    }

    console.log("___________________________________________");
  }
}
   
             
        console.log("___________________________________________");
        
        
                

     async function declareWinner(character1, character2){
     
        console.log("resultado final:");
        console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
        console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);
     
        if(character1.PONTOS > character2.PONTOS)
     console.log(`\n🏆 ${character1.NOME} é o vencedor! Parabens`);
     else if(character2.PONTOS > character1.PONTOS)
     console.log(`\n🏆 ${character2.NOME} é o vencedor! Parabens`);
     else
     console.log(`\n🤝 A corrida terminou empatada!`);
       
    }
(async function main(){
console.log(
`🏁🚨 corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`
 );
     await playRaceEngine(player1, player2);
     await declareWinner(player1, player2);
     })();
       


    
const prompt = require('prompt-sync')();
/////////////////////////////////////////////
//quantas vezes o usario vai jogar, quantas rodadas ira acontecer no jogo 
let Rodadas = Number(prompt('    Digite quantas rodadas você deseja jogar?  '))
const jogadores = [];
const jgs = Number(prompt('    Digite quantos jogadores iram jogar  :'));
// login name 
for (var i = 1; i <= jgs; i++) { 
    const jogador  = {};
jogador.Nome = prompt(`    Digite o Nome do player ${i}  :`)    
jogador.Resultados = [];
jogadores.push(jogador);
}
// estrutura de rodads e numero aleatorio do random
for (let Ordem in jogadores) { 
    for (let i = 0; i < Rodadas; i++) {  
    jogadores[Ordem].Resultados.push(Math.floor(Math.random() * (5 + 1) + 1));
 }
}
// estrutura de vitoria 
jogadores.sort(function (a,b) {
    if (b.Resultados < a.Resultados){
        return -1;
}else{
        return true
  }
 }
)
for (let i = 0; i < jogadores.length; i++) {
    console.log(jogadores[i])
}
console.log('=============================================================')
console.log(`        O vencedor e o jogador ${jogadores[0].Nome}              `)
console.log('=============================================================')



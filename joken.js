const prompt = require('prompt-sync')();

//contador de pontos, e mensagem para jogar novamente 

console.log("")
console.log('Ola Usario(A), Seja bem vindo(A) Ao jogo jokenpo. ')
console.log("")


var pc = 0;
var usuario = 0 ;
let answer = 'S';

//pontos

function ponto(){
  pc = 0;
  usuario = 0;
}

//codigo para jogar novamente, opções de jogo "pedra papel ou tesoura", numero aleatorio da maquina  

while (answer === 'S'){
  ponto();
  let rodadas = prompt('⚠️   Quantas rodas Você vai querer jogar?');
  console.log('')
do{

var inicio = prompt ('⚠️   Escolha entre Pedra, Papel ou Tesoura:');

let opções = ['papel', 'pedra', 'tesoura'];
let a1 = opções.length;
let random = Math.floor(Math.random() * a1 );
let escolha = opções[random];


//codições da variavel tesoura

if (inicio === 'tesoura' && escolha === 'pedra'){
  (console.log('Você perdeu. A maquina escolheu Pedra'))
  console.log("");
    pc = ++pc;

}else if(inicio === 'tesoura' && escolha === 'papel'){
  console.log('Você ganhou. A maquina escolheu papel')
  console.log("");
  usuario = ++usuario;

}else if (inicio === 'tesoura' && escolha === 'tesoura'){
  console.log('A Maquina escolheu tesoura resultando em um empate')
  console.log("");
}


// condições da variavel pedra


if (inicio === 'pedra' && escolha === 'papel'){
  console.log('Você perdeu. A maquina escolheu Papel')
  console.log("");
   pc = ++pc;

}else if (inicio === 'pedra' && escolha === 'tesoura'){
  console.log('Você ganhou. A maquina escolheu tesoura')
  console.log("");
  usuario = ++usuario;

}else if (inicio === 'pedra' && escolha === 'pedra'){
  console.log('A Maquina escolheu pedra resultando em um empate')
  console.log("");
}

// condições da variavel papel


if (inicio === 'papel' && escolha === 'tesoura'){
  console.log('Você perdeu. A maquina escolheu Tesoura ')
  console.log("");
  pc = ++pc;

}else if (inicio === 'papel' && escolha === 'pedra'){
  console.log('Você ganhou. A maquinha escolheu pedra')
  console.log("");
  usuario = ++usuario;

}else if (inicio === 'papel' && escolha === 'papel'){
  console.log('A Maquina escolheu papel resultando em um empate')
  console.log("");
}

// resultado final, opção jogar novamente 

 rodadas = rodadas - 1;
} while (rodadas > 0);


if (usuario === pc){
  console.log(`Você empatou com a maquinha, com ${pc} ponto(S)`);
  
}else if (pc < usuario){
  console.log(`Você ganhou da maquina obtendo ${usuario} ponto(S) e perdeu ${pc} ponto(S)`);
}else {
  console.log(`Você perdeu para a maquina obtendo ${usuario} ponto(S) contra a maquina que obteve ${pc} ponto(S) `);
} 



    answer = prompt(`Deseja jogar novamente? [S / N]`);
} if (answer = 'N'){
  console.log('Ate uma proxima vez');
}
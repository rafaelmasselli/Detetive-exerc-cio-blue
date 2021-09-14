const prompt = require('prompt-sync')();

//jogo de interação 

// class jogador

let answer = 'S'

class jogador {
    constructor(Nome,Idade ){
        this.Nome = Nome;
        this.Idade = Idade;
    }
}

//class doação de animais


class Gato extends jogador {
    constructor (Nome,Idade,raça,peso){
    super(Nome,Idade)
    this.especie = raça;
    this.peso =peso;
}
}
class Dog extends jogador {

    constructor(Nome,Idade,raça,peso){
    super(Nome,Idade)
    this.especie = raça
    this.peso =peso
}
}

//validar somente numeros inteiros da idade

function Idade(A) {
while (true) {
 if (A % 1 == 0) {
      return A;
}else{
A = parseInt(prompt("Utilize apenas os numeros: "));

};};};

// função das perguntas

function validar(A) {
while (true) {
 if (A % 1 == 0) {
      return A;
}else{
A = parseInt(prompt("Utilize apenas numeros 1 ou 2: "));

};};};

// while para jogar novamente

while(answer === 'S'){


// formulario com loop 

for (var i = 0; i < Infinity; i++) {

let A = String(prompt('Digite o seu nome'));
let B = Idade(parseInt(prompt('Digite a sua idade')));

let usario1 = new jogador(A,B);


console.log(usario1);

let alteração = String(prompt('O seu formulario Esta correto? [S/N]'));
if (alteração == 'S'){
    console.log(`Seja bem vindo(A) ${A}`);
    break;
}else{
    console.log(`Digite novamente o seu forumalario`);
};};


// variavel estatisticas, ponto pra definir o final do game


let felecidade = 10;
let saude = 10;
let cansaço = 20;
let pet  = 0;
let gatinho = 0;
let auau = 0;
let magoas = 0;
let Fpet = 0;
let final1 = 0;
let FinalC = 0;
let Medo = 0;
let Monster = 0;
let gatinho2 = 0;
let auau2 = 0;
let FinalX = 0;

let nome = {};




// começo game

console.log('');
console.log('Você acabou de conseguir um emprego com engenharia civil, e se mudou para yate, reino unido');
console.log('E Você esta muito triste ultimante, muito trabalho e se mudou a pouco tempo e esta praticamente sozinho(a) em um apertamento enorme');
console.log('');
console.log('============================================================================================================');
console.log('Para cada alternativa vai ter uma numeração na frente da alternativa, exemplo vc deseja pesca [1] ou voar [2] ?');
console.log('============================================================================================================');
console.log('');
let A1 = validar(prompt('Hoje e o seu primeiro dia de trabalho, deseja ir caminhando [1] ou deseja pegar um Taxi [2] ?'));
   console.log('=============================================================================================================');
   console.log('');
if (A1 == 1){

// primeira historia

saude ++;
cansaço --;
felecidade ++;

console.log(`

──▒▒▒▒▒▒▒▒───▒▒▒▒▒▒▒▒
─▒▐▒▐▒▒▒▒▌▒─▒▒▌▒▒▐▒▒▌▒
──▒▀▄█▒▄▀▒───▒▀▄▒▌▄▀▒
─────██─────────██
░░░▄▄██▄░░░░░░░▄██▄░░░

`);
}else if(A1 == 2 ){
    console.log('');
}
let A2 = validar(prompt('Você chegou no serviço e pegou um cafe, Deseja tomar para melhorar o seu desempenho? Sim [1] /[2] Não'));
    console.log('============================================================================');
    console.log('');



if(A2 == 1){
    let B1 = validar(prompt('Você engeriu muita cafeina e esta super agitado, voce vai esperar fica menos agitado(a) [1] ou deseja continuar trabalhando [2] ?'));
    console.log('============================================================================');
    console.log('');

// segunda historia

    if(B1 == 2){
        console.log('Você continuou trabalhando e consegue termina todo o seu projeto, mas isso te desgastou muito');
    console.log('=============================================================================');
    console.log('');
        
   cansaço --
   cansaço --
   cansaço --

    }else if (B1 == 1){
    console.log('Você foi para laje para descansar');
    console.log('Você volto para o trabalho e volto com o dolblo de desempenho, e conseguiu termina todo o seu projeto');
    console.log('============================================================================');
    console.log('');

    cansaço --
    felecidade ++

    }
}else if(A2 == 2){ 
    console.log('Você continou a trabalha normalmente e não conseguiu render nada');

felecidade --
felecidade --

    console.log('=============================================================================');
    console.log('');
}   


console.log('Depois de um longo dia de trabalho você volto para seu apartamento');

//terceira historia, mudança de Final

let A4 = validar(prompt('Voltando para casa você passou em frente a uma casinha de animais. E ficou com vontade de adotar um animal, adota [1] ou não [2]?'));

     if(A4 == 1){
    console.log('=============================================================================');
    console.log('');

let Doa = validar(prompt('Deseja adotar um gato(a) [1] ou um cachorro(a) [2]?'));
    console.log('=============================================================================');
    console.log('');

// final gato que tras tres finais    

    if (Doa == 1){
     console.log(`
     ─▄▀▄─────▄▀▄
─────▄█░░▀▀▀▀▀░░█▄
─▄▄──█░░░░░░░░░░░█──▄▄
█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█
     `)
console.log('');

felecidade ++
gatinho ++
pet ++

// nome do gato com class do login principal
     
let A = prompt('Você adotou um gato(a),  Qual o nome vc dara para ele(a)? ');
     met = new Gato (A,1,'persa','4 KG');
console.log(met);

     console.log('=============================================================================');
     console.log('');

// final dog que tras tres finais

}else if (Doa == 2){
    console.log(`

░░░░░░░░░░░░░░░░▄██
░░░░▄████▄▄▄▄▄▄███████
░░▄█▀████████████▀
░▄▀░██▀██▀▀▀▀▀██▀▀▄
░░░░█▄░▀█▄░░░░▀█▄▀▀

    `)
    console.log('');

felecidade ++
auau ++
pet ++

// nome do dog com class do login principal

let B = prompt('Você adotou um cachorro(a), Qual o nome vc dara para ele(a)? ')
    cachorro = new Dog (B,1,'Pastor alemão','30 kg')
console.log(cachorro);


    console.log('=============================================================================');
    console.log('');

}}else if (A4 == 2){
    console.log('Você adotou nenhum pet');
    console.log('=============================================================================');
    console.log('');
    
felecidade --
felecidade --
};

// função para exibir o nome do pet no GAME OVER

function petR (){
  if (pet == 1){    

if(auau == 1){
    console.log(`Nome do seu cachorro(a) ${cachorro.Nome}`);

}else if (gatinho == 1){

   console.log(`Nome do seu gato(a) ${met.Nome}`);

}}else if (pet == 0){

    console.log('Voce não teve nenhum pet')
}}

// parte alternativa para pets 

// quarta e quinta historia

if (pet == 1){
    console.log(`Depois de adotar o seu pet voce comprou varios acessorio caminha e tudo mais para ele(a)`);
    console.log('Chegando no seu apartamento o porteiro te barra e te fala: ""Não e permitido animais dentro do apertamento""');
let A5 = prompt('Tentara conveser o porteiro [1] ou devolvera o seu pet de volta [2]?');
console.log('===============================================================');
console.log('');
   
     if (A5 == 1){
     console.log('Depois de muita conversa voce conseguiu conveser o porteiro');
     console.log('Mas isso tudo em um grande sigilo');
     console.log('===============================================================');
     console.log('');
     
felecidade ++

     }else if (A5 == 2){
        console.log('Você volto para a casinha de animais');
        console.log('Chegando no destino uma mulher negou sua devolução Dizendo que isso e algo desulhumano ...... continuando com um grande sermão');
        console.log('================================================================');
        console.log('');
     
felecidade --
cansaço --

     console.log('Você contou toda a historia para o porteiro, ele lhe disse para manter o abrigo do pet em sigilo se não ele perderia o seu emprego');
     console.log('===========================================================');
     console.log('');
     }
console.log('Você chegou na sua casa a tempo de assistir sua novela das 21, mas esqueceu que voce acabou de adota um pet');
let comida = validar(prompt('Cuida do pet [1] ou assistir novela [2]'));
console.log('================================================================');
console.log('');
  if(comida == 1){
  console.log('Você deu uma comida epecial pro seu pet, E foi dormi');
  console.log('===============================================================');
  console.log('');

    if(gatinho == 1){
      Monster++
      gatinho2 ++

    }else if(auau == 1){
    Monster ++
    auau2 ++

};

  }else if (comida == 2){
  
Fpet ++
felecidade ++

// começo da sexta historia
  
       console.log('Você terminou o seu ultimo ep da novela');
       console.log('Depois e uma boa novela voce caiu em um sono pesado');
       console.log('==============================================================');
       console.log('');
}


}else if (pet == 0){
      console.log('Você esta se setindo meio solitario');
    let magoa = validar(prompt('Deseja passar em algum mercado para comprar algo diferente pra comer ? Sim [1] ou [2] Não'));
      console.log('=============================================================');
      console.log('');

   if (magoa == 1){
let opiciona1 = validar(prompt('Você comprou alguns antesilhos domestico e a sua janta, pretende pegar algum doce [1] ou algo saudavel [2] ?'));
      console.log('=================================================================');
      console.log('');

   if (opiciona1 == 1){

felecidade ++
felecidade ++
FinalX ++

      console.log('Você foi para sua casa com um belo potão de sorvete');
      console.log('==============================================================');
      console.log('');

  }else if(opiciona1 == 2){

      console.log('Você pegou mais verduras e algumas frutas de aperetivo');
      console.log('=============================================================');
      console.log('');
saude ++
saude ++
FinalX ++

};

}else if (magoa == 2){
     console.log('Você não comprou nada. E foi para sua casa direto');
     console.log('=============================================================');
     console.log('');

// GAME OVER FInal ruim

felecidade --
felecidade --
magoas ++
FinalC = 10

    console.log('Ao chegar em casa vc simplesmente caiu em um sono profundo');
    console.log('============================================================');
    console.log('');

};};

// Final da rotina trazendo os finais

console.log('');
console.log('=============================  ROTINA 1  =================================');
console.log('');


// setima historia
//segundo final

if (Fpet == 1){
console.log('Você acordou em uma manhã de sabado e não achou o seu pet.');
console.log('Ele(a) fugiu por um leve descuido de deixar a porta aberta.');
console.log('Uma moradora do predio pegou o seu pet');
console.log('============================================================');
console.log('');

magoas --
magoas --
magoas --
final1 ++

};

//F descuido

if (final1 === 1){
    console.log('Você se sente mal por não ter cuidado direito do pet.');
    console.log('==================================================================');
    console.log('')
for (var i = 0; i < Infinity ; i++){

// oitava historia
// final ruim
// loop infinito com break

  let loopDaMaldade = validar(prompt('Você deseja falar com a moça para pegar o pet [1] ou deseja continuar a vida como se nada tivesse acontecido [2]'));
  if (loopDaMaldade == 1){
      console.log('Você conheceu a mulher que pegou o seu pet e ficou super feliz por estar com ela');
      console.log('Você viu que o pet ficaria bem mais feliz com ela. E deu o pet para ela');
      console.log('================================================================');
      console.log('')

    magoas ++
    FinalC = 10                              
      break;

  }else if(loopDaMaldade == 2){
      console.log('Você ficou com um peso na conciencia. E ficou rodando a mesa como se não houve-se o amanhã');
      console.log('================================================================');
      console.log('');

  FinalC ++
 
  }
   
  if (FinalC == 10){
  
      console.log('Você esquece tudo isso e continua sua vida');
      console.log('================================================================');
      console.log('');
                                        
magoas ++
magoas ++

     break;
    

};};};


// Objetos, estaticas do jogo 

let Result = [];

Result.push(felecidade);
Result.push(saude);
Result.push(cansaço);
Result.push(magoas);
Result.push(nome);

// Função para exibir as estatisticas finais

function estatisticas(){
    console.log(`Felicidade do personagem ${Result[0]}/10`);
    console.log(`Saude do personagem ${Result[1]}/10 `)
    console.log(`Exaustão do personagem ${Result[2]}/20 `);
    console.log(`Erros cometidos durante o game  ${Result[3]}/0 `);
}

// GAME OVER Final ruim

function finalR (){
setTimeout(function () {
console.log(`


                                                 ▄█▀─▄▄▄▄▄▄▄─▀█▄
                                                 ▀█████████████▀
                                                 ────█▄███▄█
                                                 ─────█████
                                                 ─────█▀█▀█

                                                    GAME OVER

    

`)
    estatisticas();

    petR();
  
}, 4000);};


// GAME OVER, Final bom

function finalG(){
    setTimeout(function () {


console.log(`

                                            ░▄░█░░░▄▀▀▀▀▀▄░░░█░▄░
                                            ▄▄▀▄░░░█─▀─▀─█░░░▄▀▄▄
                                            ░░░░▀▄▒▒▒▒▒▒▒▒▒▄▀░░░░
                                            ░░░░░█────▀────█░░░░░
                                            ░░░░░█────▀────█░░░░░
                                                GAME OVER
`);

    estatisticas();

    petR();

},4000);};


// Final depremido

if (FinalC == 10){
    console.log('Voce fica deprimido depois de tudo do que aconteceu');
    console.log('Então voce decide volta para sua terra natal, para ter uma vida mais simples e com os seus velhos amigos');
    console.log(`
    
░░░░░░░░░░█
░░░░░░░░▄▄█▄▄
░░░░▀▀▀██▀▀▀██▀▀▀
▄▄▄▄▄▄▄███████▄▄▄▄▄▄▄
░░█▄█░░▀██▄██▀░░█▄█
    `);

console.log('=============================================================================');
console.log('');
finalR();

}

//Final monster Cachorro

if (Monster == 1){
    
if (auau2 == 1){

console.log('O seu doguinho se transformou em um Demônio');
    console.log(`
    
    ─────▄████▀█▄
───▄█████████████████▄
─▄█████.▼.▼.▼.▼.▼.▼▼▼▼
▄███████▄.▲.▲▲▲▲▲▲▲▲
████████████████████▀▀
    `);
console.log('=============================================================================');
console.log('');

for (var i = 0; i < Infinity ; i++) {

    console.log('Voce sem reação ataca uma cadeira no bixo mas ele não demostrou nehuma reação');
  console.log('=============================================================================');
  console.log('');
  let A5 = validar(prompt('Do alem surge uma fada e te da duas opções. Lutar com o monstro [1] corredor do monstro [2]'));
  console.log('=============================================================================');
  console.log('');

          if(A5 == 1){
console.log('A fada te da uma 38 carregada');  
console.log(`

░▄▌░░░░░░░░░▄
████████████▄
░░░░░░░░▀▐████
░░░░░░░░░░░▐██▌

`);

console.log('=============================================================================');
let tiro = validar(prompt('Voce deseja atirar no monstro [1] ou atacar a arma no monstro [2] ?'));
console.log('=============================================================================');
console.log('');
  
if (tiro == 1){
    console.log('Voce conseguiu abater o monstro');
    console.log('E foi conhecido como o heroi do reino unido');
    console.log('=============================================================================');
    console.log('');

    finalG();
    break;

}else if (tiro == 2){
    console.log(`
    
█▓▒▓█▀██▀█▄░░▄█▀██▀█▓▒▓█
█▓▒░▀▄▄▄▄▄█░░█▄▄▄▄▄▀░▒▓█
█▓▓▒░░░░░▒▓░░▓▒░░░░░▒▓▓█

    `);
    console.log('O monstro virou um homem');
    console.log('E lhe deu toda sabedoria e conhecimento');
    console.log('=============================================================================');
    console.log('');

    finalG();
    break;
 
};

}else if(A5 == 2){
   
    console.log('Você corre do monstro mas ele começa a correr cada vez mais rapido');
Medo ++;

    if (Medo == 3){
    console.log('Você continu correndo mas não conseguiu escapar do monstro');
    console.log('=======================================================================');
    console.log('')
        finalR();
         break;
};};};

   
// Final monster gato



}else if (gatinho2 == 1){

console.log('Você acordou assustado com o seu gato miando as 2 AM na cozinha');
console.log(`
───▄▄─▄████▄▐▄▄▄▌
──▐──████▀███▄█▄▌
▐─▌──█▀▌──▐▀▌▀█▀
─▀───▌─▌──▐─▌
─────█─█──▐▌█

`);
console.log('Você entra na cozinha e ve um monstro que te devora imidiatamente');
console.log('=============================================================================');
console.log('');

finalR();
};};

// Final comida contamiada com lixo radioativo

if (FinalX == 1){
    console.log('Você se sente mal e vai para sua varanda pegar um ar');
    console.log('Você percebe que comeu um alimento contaminado com lixo radioativo');
    console.log('E para teste científico você foi abduzido por alieniginas');
    console.log(`

▒▒▄▀▀▀▀▀▄▒▒▒▒▒▄▄▄▄▄▒▒▒
▒▐░▄░░░▄░▌▒▒▄█▄█▄█▄█▄▒
▒▐░▀▀░▀▀░▌▒▒▒▒▒░░░▒▒▒▒
▒▒▀▄░═░▄▀▒▒▒▒▒▒░░░▒▒▒▒
▒▒▐░▀▄▀░▌▒▒▒▒▒▒░░░▒▒▒▒
    `);
console.log('================================================================');
console.log('');

    finalG();
};


// final while jogar novamente

    answer = prompt('Deseja jogar novamete?[ S / Enter ]');

if (answer == ''){
    console.log('Ate uma proxima vez');
};};

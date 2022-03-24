const prompt = require('prompt-sync')();

//politicos
let Candidato1 = 0;
let Candidato2 = 0;
let Candidato3 = 0;
let VotoN = 0;
let VotoB = 0;
// função para validar numeros inteiros
function validar(A) {
while (true) {
 if (A % 1 == 0) {
      return A;
}else{
A = parseInt(prompt("Opção invalida, Digite novamente  : "));

};};};

function autolizaVoto (Idade)
{
if (Idade >= 18 && Idade <= 69){
   console.log('Voto Obrigatorio');        // Voto maior de idade 18 ate 69

}else if (Idade  >= 16 && Idade <= 17 ){
    console.log('Voto Opicional');          // voto opicional 16 e 17
let opicional1 = prompt('Deseja continuar? [S/N]');

if (opicional1 == 'S'){
    console.log('Vote com conscientização');

}else if (opicional1 == 'N'){
    console.log('Seu voto é importante !!, volte na proxima Eleição');
        return false;
    }                                       
}else if (Idade >= 70 && Idade <= 100){        // voto opcional 70+
    console.log('Voto opicional');

    let opiciona2 = prompt('Deseja continuar? [S/N]');
if (opiciona2 == 'S'){
    console.log('O Voto e sempre muito importate !!');

}else if (opiciona2 == 'N'){
    console.log('Seu voto é importante !!, volte na proxima Eleição');
        return false;                 
  }
 } else {                                    // menor de 16 anos 
    console.log('Voce não pode votar');
        return false;
 }
} 

// Loop, Opçôes Parar ou continuar, Idade 

for (var o = 0; o < Infinity ; o++) {

    console.log('');
let parada = prompt('Parar = [S]  Continuar  = [Enter]  :');
    console.log('');

if(parada == 'S'){
    break;
}
for (var i = 0; i < 1; i++) {
    console.log('');
let idade1 = autolizaVoto(prompt('Digite sua idade  :'));
    console.log('');
if (idade1 < 15){
    console.log('');
    break;
}

// voto dos candidatos

console.log('              =========  Digite o numero do qual candidato voce ira votar ==========                     ');
let voto = validar(parseInt(prompt ('Nelson Mandela = numero 1, Lênin = numero 2, Abraham Lincoln = numero 3, voto Nulo = 4, Voto em branco = 5:   ')));
console.log('');

if (voto === 1){
Candidato1 ++;
}else if (voto === 2){
Candidato2 ++;
}else if (voto === 3){
Candidato3 ++;    
}else if (voto === 4){
VotoN ++;    
}else if (voto === 5){
VotoB ++;  
}else if (voto >= 6){
    console.log('voto invalido tente novamente');
break
};};};

let po = {};
let Politicos = [];
po.Nelson_Mandela = (Candidato1);
po.Lenin = (Candidato2);
po.Abraham_Lincoln = (Candidato3);
Politicos.push(po);

function exibirResultados(){
    
for (let i = 0; i < Politicos.length; i++) {
   
   console.log(Politicos[i]);
   console.log(`Total de votos Nulos ${VotoN} `);
   console.log(`Total de votos em branco ${VotoB}`);

if (Candidato2 < Candidato1 > Candidato3){
    console.log('===================================================');
    console.log(`          O vencedor e o Nelso Mandela             `);
    console.log('===================================================');
}else if (Candidato1 < Candidato2 > Candidato3){
    console.log('===================================================');
    console.log(`           O vencedor e o lênis                    `);
    console.log('===================================================');
}else if (Candidato1 < Candidato3 > Candidato2){
    console.log('===================================================');
    console.log(`           O vencedor e o Abraham Lincoln          `);
    console.log('===================================================');
}else if (Candidato1 == 0 && Candidato2 == 0 && Candidato3 == 0){
    console.log('');
    console.log(`      não teve nenhum voto nos candidatos     `);
    console.log('');
}else if (Candidato1 == Candidato2 == Candidato3) {
    console.log('');
    console.log('      Houve um empate entre os tres candidatos   ');
    console.log('');
}else if (Candidato1 == Candidato2){
    console.log('');
    console.log('      Houve um emapate entre o Nelso Mandela e lênin   ');
    console.log('');
}else if (Candidato1 == Candidato3){
    console.log('');
    console.log('      Houve um emapate entre o Nelso Mandela e Abraham Lincoln    ');
    console.log('');
}else if (Candidato2 == Candidato3){
    console.log('');
    console.log('      Houve um empate  entre o Lênin e Abraham Lincoln    ');
    console.log('');
};};};

console.log(exibirResultados());

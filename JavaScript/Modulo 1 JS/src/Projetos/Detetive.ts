const prompt = require("prompt-sync")();

const perguntas = [
  "Telefonou para a vítima?",
  "esteve no local do crime?",
  "mora perto da vitima?",
  "devia para a vitima?",
  "ja trabalhou com a vitima?'",
];

const respostas = [
  "Entendi",
  "Muito bem",
  "so falta algumas perguntas",
  "okay",
  "Ta",
];

let contador = 0;

function ValidarPergunta(pergunta: string) {
  if (pergunta[0].toLocaleLowerCase() == "s") {
    return contador++;
  } else if (pergunta[0].toLocaleLowerCase() == "n") {
    return console.log("Okay");
  } else {
    contador++;
    return console.log('Responda so com "Sim" ou "Não"');
  }
}

export async function Detetive() {
  console.log(
    "Voce esta sendo interrogado por um assinado que ocorreu, responda com 'sim' ou 'nao' as perguntas que eu irei fazer para voce"
  );

  for (let i = 0; i < perguntas.length; i++) {
    let pergunta = await prompt(perguntas[i]);
    console.clear();
    console.log(respostas[i]);
    ValidarPergunta(pergunta);
  }
  if (contador >= 4) {
    console.clear();
    console.log("Voce e culpado");
  } else if ((contador = 3)) {
    console.clear();
    console.log("Voce e suspeito");
  } else if (contador < 2) {
    console.clear();
    console.log("Voce e inocente");
  }
}

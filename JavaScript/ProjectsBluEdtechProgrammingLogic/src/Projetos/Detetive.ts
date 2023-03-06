import chalk from "chalk";

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

function Validar(resposta: string) {
  while (true) {
    if (
      resposta[0].toLocaleLowerCase() == "s" ||
      resposta[0].toLocaleLowerCase() == "n"
    ) {
      if (resposta[0].toLocaleLowerCase() == "s") {
        contador++;
      } else {
      }
      return resposta;
    } else {
      resposta = prompt(chalk.red("Responda só com 'SIM' ou 'NÃO'"));
    }
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
    Validar(pergunta);
  }
  if (contador >= 4) {
    console.clear();
    console.log("Voce e culpado");
  } else if (contador == 3) {
    console.clear();
    console.log("Voce e suspeito");
  } else if (contador < 2) {
    console.clear();
    console.log("Voce e inocente");
  }
}

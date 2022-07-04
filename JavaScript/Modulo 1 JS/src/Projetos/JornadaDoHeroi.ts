const prompt = require("prompt-sync")();
import chalk from "chalk";

let acerto = 0;

const respostas = [
  " Você falha miseravelmente",
  "Você falha, e nunca achara a poke-bola lendária ",
  "Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.",
  "Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.",
  "Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.",
];

const perguntas = [
  "Um charizard quer entrar no seu time, deseja junta-se a ele?",
  "Voce deseja explora canto para achar a poke-bola lendária? ",
  "Voce achou uma espada amaldiçoada deseja manifestar o poder dela? ",
  "Voce achou uma caverna assombrada deseja entrar? ",
  "Voce achou uma bolsa deseja abri-la?",
];

function RespostaAlternativa(response: number) {
  console.clear();
  if (response == 0) {
    return console.log(
      chalk.red.italic("charizard voa sem destino pelo mundo")
    );
  } else if (response == 1) {
    return console.log(
      chalk.red.italic("Você se condena profundamente de não ter ido ")
    );
  } else if (response == 2) {
    return console.log(
      chalk.red.italic(
        "A espada desaparece logo depois de você sair de perto dela"
      )
    );
  } else if (response == 3) {
    return console.log(
      chalk.red.italic(
        "A caverna desaba logo depois de você sair de perto dela"
      )
    );
  } else if (response == 4) {
    return console.log(chalk.red.italic("Nela estava a poke-bola lendária"));
  } else {
    return;
  }
}

function Validar(resposta: string, length: number) {
  while (true) {
    if (
      resposta[0].toLocaleLowerCase() == "s" ||
      resposta[0].toLocaleLowerCase() == "n"
    ) {
      if (resposta[0].toLocaleLowerCase() == "s") {
        acerto++;
        console.clear();
      } else {
        RespostaAlternativa(length);
      }
      return resposta;
    } else {
      resposta = prompt(chalk.red("Responda só com 'SIM' ou 'NÃO'"));
    }
  }
}

export async function JornadaDoHeroi() {
  console.clear();
  console.log(
    chalk.yellow.italic(
      "Você começou uma jornada em busca da poke-bola lendária"
    )
  );

  let name = prompt(chalk.dim("Me conte o seu nome jogador: "));

  console.log(
    chalk.red("Todas as perguntas devem ser respondidas com 'SIM' ou 'NÃO'")
  );
  console.log("");

  for (let i = 0; i < perguntas.length; i++) {
    let result = prompt(chalk.dim(perguntas[i]));
    Validar(result, i);
  }
  console.clear();
  console.log(`${name} você obteve ${acerto} acertos`);

  if (acerto == 0) {
    console.log(chalk.red(respostas[0]));
  } else if (acerto < 2) {
    console.log(chalk.red(respostas[1]));
  } else if (acerto == 3) {
    console.log(chalk.red(respostas[2]));
  } else if (acerto == 4) {
    console.log(chalk.blue(respostas[3]));
  } else if (acerto >= 5) {
    console.log(chalk.blue(respostas[4]));
  }
}

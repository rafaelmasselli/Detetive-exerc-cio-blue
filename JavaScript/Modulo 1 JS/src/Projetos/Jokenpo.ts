const prompt = require("prompt-sync")();
import chalk from "chalk";

let roundsFished = 0;

let victories = 0;
let victoriesBoot = 0;

let draws = 0;
let again = "s";

export function Jokenpo() {
  const opinions = ["pedra", "papel", "tesoura"];
  console.clear();

  while (again === "s") {
    roundsFished = 0;

    victories = 0;
    victoriesBoot = 0;

    draws = 0;
    again = "s";

    let rounds = parseInt(
      prompt(chalk.yellow("Digite quantas partidas voce deseja jogar")).trim("")
    );

    while (rounds % 1 != 0) {
      rounds = parseInt(prompt(chalk.red("Digite apenas números")));
    }

    do {
      let resultBoot = opinions[Math.floor(Math.random() * 3)];

      let responseUser = prompt(
        chalk.yellow("Escolha entre papel, pedra ou tesoura: ")
      )
        .toLocaleLowerCase()
        .trim("");

      while (!opinions.includes(responseUser)) {
        responseUser = prompt(chalk.red("Escolha so papel pedra ou tesoura"))
          .toLocaleLowerCase()
          .trim("");
      }

      if (
        (responseUser == "pedra" && resultBoot == "tesoura") ||
        (responseUser == "tesoura" && resultBoot == "papel") ||
        (responseUser == "papel" && resultBoot == "pedra")
      ) {
        victories++;
        console.clear();
        console.log(
          chalk.green(
            ` "Voce ganhou"  Voce escolheu ${responseUser} e o robô escolheu ${resultBoot} `
          )
        );
      } else if (responseUser === resultBoot) {
        draws++;
        console.log(chalk.bgMagenta("deu empate"));
      } else {
        victoriesBoot++;
        console.clear();
        console.log(
          chalk.red(
            `"Voce perdeu" Voce escolheu ${responseUser} e o robô escolheu ${resultBoot}`
          )
        );
      }

      roundsFished++;
    } while (roundsFished < rounds);

    if (victories > victoriesBoot) {
      console.log(
        chalk.blue(
          `Voce e o vencedor com ${victories} pontos contra o robô que fez ${victoriesBoot} pontos e ${draws} empates`
        )
      );
    } else if (victories < victoriesBoot) {
      console.log(
        chalk.red(
          `Voce perdeu com ${victories} pontos e ${draws} embates, contra o robô que fez ${victoriesBoot} pontos`
        )
      );
    } else {
      console.log(
        `Houve um embate com ${victories} pontos iguais e ${draws} empates`
      );
    }

    again = prompt(`Deseja jogar novamente? Digite "Sim" ou "Nao"`)
      .toLocaleLowerCase()
      .trim("");
  }
  if (again[0].toLocaleLowerCase() == "n") {
    console.log("Ate uma proxima vez");
  }
}

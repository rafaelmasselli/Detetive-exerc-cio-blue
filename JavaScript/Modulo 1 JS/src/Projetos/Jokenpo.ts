const prompt = require("prompt-sync")();

export function Jokenpo() {
  let roundsFished = 0;
  let victories = 0;
  let victoriesBoot = 0;
  let again = true;

  const opinions = ["pedra", "papel", "tesoura"];
  console.clear();

  do {
    let rounds = parseInt(
      prompt("Digite quantas partidadas voce deseja jogar")
    );

    while (rounds % 1 != 0) {
      rounds = parseInt(prompt("Digite quantas partidadas voce deseja jogar"));
    }

    do {
      let resultBoot = opinions[Math.floor(Math.random() * 3)];

      let responseUser = prompt(
        "Escolha entre papel, pedra ou tesoura: "
      ).toLocaleLowerCase();

      while (!opinions.includes(responseUser)) {
        responseUser = prompt("").toLocaleLowerCase();
      }

      if (
        (responseUser == "pedra" && resultBoot == "tesoura") ||
        (responseUser == "tesoura" && resultBoot == "papel") ||
        (responseUser == "papel" && resultBoot == "pedra")
      ) {
        victories++;
        console.log("Voce ganhou");
        console.log(
          `Voce escolheu ${responseUser} e o robo escolheu ${resultBoot} `
        );
      } else if (responseUser === resultBoot) {
        console.log("deu empate");
      } else {
        victoriesBoot++;
        console.log("voce Perdeu");
        console.log(
          `Voce escolheu ${responseUser} e o robo escolheu ${resultBoot} `
        );
      }

      roundsFished++;
    } while (roundsFished < rounds);

    if ((roundsFished = rounds)) {
      let responseAgain = prompt(
        "Deseja jogar novamente? digite 'Sim' ou 'Não'"
      );
     
    } else if (!again) {
      console.clear();
    }
  } while (again);
}

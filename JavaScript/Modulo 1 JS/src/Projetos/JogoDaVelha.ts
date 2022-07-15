const prompt = require("prompt-sync")();

let again = "s";
let boot = "s";
let spotsXUser = 0;
let spotsXBoot = 0;
let spotsYUser = 0;
let spotsYBoot = 0;
let User = 0;
let User2 = 0;
let Boot = 0;
let atie = 0;
let user = "";
let user2 = "";
let velha = 0;

let Game = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];
velha;
function validateResponse(response: string, text: string) {
  while (response[0] != "s" && response[0] != "n") {
    response = prompt(text).toLocaleLowerCase().trim("");
  }
}

function validateResUser(response: number, text: string) {
  while (response != 1 && response != 2 && response != 3) {
    response = +prompt(
      `Escolha uma colona ${text}, Digite somente numero de 1 a 3`
    );
  }
}
function validateFilledSquare(
  responseY: number,
  responseX: number,
  user: string
) {
  while (
    Game[responseY][responseX] == "X" ||
    Game[responseY][responseX] == "O"
  ) {
    resultGame();
    console.log("Preencha um campo sem estar marcado");

    responseY = prompt("Escolha uma casa em colunas vertical 1 a 3");
    validateResUser(responseY, "vertical");

    responseX = prompt("Escolha uma casa em colunas horizontal 1 a 3");
    validateResUser(responseX, "horizontal");
  }
  Game[responseY][responseX] = user;
}

function validateDiagonal(alternative: string) {
  if (
    Game[0][0] == alternative &&
    Game[1][1] == alternative &&
    Game[2][2] == alternative
  ) {
    return true;
  } else if (
    Game[0][2] == alternative &&
    Game[1][1] == alternative &&
    Game[2][0] == alternative
  ) {
    return true;
  } else {
    return false;
  }
}

function validate(game: boolean) {
  velha++;
  for (let i = 0; i < 3; i++) {
    spotsXUser = 0;
    spotsYUser = 0;
    spotsYBoot = 0;
    spotsXBoot = 0;

    for (let position = 0; position < 3; position++) {
      if (Game[position][i] == "X") {
        spotsYUser++;
      } else if (Game[position][i] == "O") {
        spotsYBoot++;
      }
      if (Game[i][position] == "X") {
        spotsXUser++;
      } else if (Game[i][position] == "O") {
        spotsXBoot++;
      }
    }

    if (spotsXBoot == 3 || spotsYBoot == 3 || validateDiagonal("O")) {
      console.clear();
      resultGame();
      if (boot == "s") {
        Boot++;
        console.log("O boot ganhou")
        return true;
      } else {
        if (game) {
          User2++;
          console.log(`${user2} ganhou`);
        }
        return true;
      }
    } else if (spotsYUser == 3 || spotsXUser == 3 || validateDiagonal("X")) {
      console.clear();
      if (game) {
        User++;
        console.log(`${user} ganhou`);
      }
      return true;
    } else if (velha == 9) {
      console.log("Deu velha!!")
      atie++;
      return true;
    }
  }
  return false;
}

function resultGame() {
  console.log("    1   2   3");
  console.log(`1: [${Game[0][0]}] [${Game[0][1]}] [${Game[0][2]}]`);
  console.log(`2: [${Game[1][0]}] [${Game[1][1]}] [${Game[1][2]}]`);
  console.log(`3: [${Game[2][0]}] [${Game[2][1]}] [${Game[2][2]}]`);
}

export function JogoDaVelha() {
  while (again == "s") {
    Game = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "], []];
    boot = prompt("Deseja jogar com o computador[s] ou com algum player[n] ?");
    validateResponse(
      boot,
      "Deseja jogar com alguém ou com o computador? digite somente 'Sim' ou 'Nao'"
    );
    if (boot == "n") {
      user = prompt("Digite o seu nome player 1: ");
      user2 = prompt("Digite o seu nome player 2: ");
    } else {
      user = prompt("Digite o seu nome jogar: ");
    }
    do {
      if (boot == "s") {
        resultGame();
        let resultUserY = +prompt("Escolha uma casa em colunas vertical 1 a 3");
        validateResUser(resultUserY, "vertical");
        resultUserY--;

        let resultUserX = +prompt(
          "Escolha uma ca;sa em colunas horizontal 1 a 3"
        );
        validateResUser(resultUserX, "horizontal");
        resultUserX--;

        validateFilledSquare(resultUserX, resultUserY, "X");

        let resultBotY = Math.floor(Math.random() * 3);
        let resultBotX = Math.floor(Math.random() * 3);

        while (
          Game[resultBotY][resultBotX] == "X" ||
          Game[resultBotY][resultBotX] == "O"
        ) {
          resultBotX = Math.floor(Math.random() * 3);
          resultBotY = Math.floor(Math.random() * 3);
        }
        Game[resultBotY][resultBotX] = "O";
        console.clear();
      } else if (boot == "n") {
        resultGame();
        let resultUserY = +prompt("Escolha uma casa em colunas vertical 1 a 3");
        validateResUser(resultUserY, "vertical");
        resultUserY--;

        let resultUserX = +prompt(
          "Escolha uma casa em colunas horizontal 1 a 3"
        );
        validateResUser(resultUserX, "horizontal");
        resultUserX--;

        validateFilledSquare(resultUserX, resultUserY, "X");

        resultGame();
        if (!validate(false)) {
          let resultUser2Y = +prompt(
            "Escolha uma casa em colunas vertical 1 a 3"
          );
          validateResUser(resultUser2Y, "vertical");
          resultUser2Y--;

          let resultUser2X = +prompt(
            "Escolha uma casa em colunas horizontal 1 a 3"
          );
          validateResUser(resultUser2X, "horizontal");
          resultUser2X--;

          validateFilledSquare(resultUser2X, resultUser2Y, "O");
          console.clear();
        }
      }
    } while (!validate(true));

    if (boot == "s") {
      console.log();
    } else {
    }

    again = prompt("Deseja jogar novamente?").toLocaleLowerCase().trim("");
    validateResponse(
      again,
      "Deseja jogar novamente? digite somente 'Sim' ou 'Nao'"
    );
  }
  if (again == "n") {
    if (boot == "s") {
      if (User > Boot) {
        console.log(
          `${user} Voce ganhou com ${User} pontos contra o boot que fez ${Boot} pontos e ${atie} empate(s)`
        );
      } else if (User < Boot) {
        console.log(
          `O boot ganhou com ${Boot} pontos e voce obteve ${User} pontos com ${atie} empate(s)`
        );
      } else {
        console.log(`Voce empatou com o boot com ${User} pontos e ${atie} empates
        `);
      }
    } else {
      if (User > User2) {
        console.log(
          `${user} voce ganhou com ${User} pontos e ${atie} empate(s) contra o ${user2} que fez ${User2} ponto`
        );
      } else if (User < User2) {
        console.log(
          `${user2} voce ganhou com ${User2} pontos e ${atie} empate(s) contra o ${user} que fez ${User} ponto`
        );
      } else {
        console.log(`Houve um empate de ${User} e ${atie} empate(s)`);
      }
    }
    console.log("Fim");
  }
}

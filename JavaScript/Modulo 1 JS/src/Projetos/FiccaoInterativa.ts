const prompt = require("prompt-sync")();
import chalk from "chalk";

let user = "";
let day = 0;
let possibleDeaths = 0;
let tumba = false;
let death = false;

// FloxoGrama
// https://miro.com/app/board/uXjVOlW2W80=/?share_link_id=319516052714

function validateResponse(response: string) {
  while (
    response[0].toLocaleLowerCase().trim() != "s" &&
    response[0].toLocaleLowerCase().trim() != "n"
  ) {
    response = prompt(chalk.red("Digite somente sim ou nao: "));
    console.clear();
  }
}

function validateResponseAlternative(
  response: string,
  question1: string,
  question2: string
) {
  while (
    response.toLocaleLowerCase().trim() != question1 &&
    response.toLocaleLowerCase().trim() != question2
  ) {
    response = prompt(
      chalk.red(`Escolha somente entre ${question1} e ${question2}: `)
    )
      .toLowerCase()
      .trim();
    console.clear();
  }
}

function DetailsUser() {
  console.log(chalk.yellow("Status resultado"));
  console.log(chalk.yellow(`Nome: ${user}`));
  console.log(chalk.yellow(`Dias: ${day}`));
  console.log(chalk.yellow(`Possíveis mortes: ${possibleDeaths}`));
  death
    ? console.log(chalk.red("Voce morreu"))
    : console.log(chalk.green("Voce nao morreu"));
}

function Death() {
  death = true;
  console.log("============================================");
  console.log(chalk.red("Voce morreu!!"));
  console.log("============================================");
}

function victory() {
  console.log("============================================");
  console.log(chalk.blue("Voce conseguiu chegar a lua"));
  console.log("============================================");
}

function fight() {
  let damage = 0;

  function skull() {
    console.log("============================================");
    console.log(`
    ███████████████████████████
    ███████▀▀▀░░░░░░░▀▀▀███████
    ████▀░░░░░░░░░░░░░░░░░▀████
    ███│░░░░░░░░░░░░░░░░░░░│███
    ██▌│░░░░░░░░░░░░░░░░░░░│▐██
    ██░└┐░░░░░░░░░░░░░░░░░┌┘░██
    ██░░└┐░░░░░░░░░░░░░░░┌┘░░██
    ██░░┌┘▄▄▄▄▄░░░░░▄▄▄▄▄└┐░░██
    ██▌░│██████▌░░░▐██████│░▐██
    ███░│▐███▀▀░░▄░░▀▀███▌│░███
    ██▀─┘░░░░░░░▐█▌░░░░░░░└─▀██
    ██▄░░░▄▄▄▓░░▀█▀░░▓▄▄▄░░░▄██
    ████▄─┘██▌░░░░░░░▐██└─▄████
    █████░░▐█─┬┬┬┬┬┬┬─█▌░░█████
    ████▌░░░▀┬┼┼┼┼┼┼┼┬▀░░░▐████
    █████▄░░░└┴┴┴┴┴┴┴┘░░░▄█████
    ███████▄░░░░░░░░░░░▄███████
    ██████████▄▄▄▄▄▄▄██████████
    ███████████████████████████
      `);
    console.log("============================================");
  }

  console.log(chalk.yellow("Apareceu o esqueleto na sua frente"));
  console.log(chalk.yellow("Ele esta em ameaço contra voce"));

  for (let i = 0; i < 5; i++) {
    skull();
    let res = prompt(chalk.bgRed("Deseja atacar ou desviar da caveira?"));
    validateResponseAlternative(res, "atacar", "desviar");
    console.clear();

    if (res == "atacar") {
      console.log("============================================");
      console.log(
        chalk.yellow(`
      ──────;──────█
      ───────────███
      ──────────██░██
      ─────────██░▒░██
      ────────██░▒▓▒░██
      ▀████████░▒▓▓▓▒░████████▀
      ──██░▒▒▒▒▒▓▓▓▓▓▒▒▒▒▒░██
      ────██░▒▒▓▓▓▓▓▓▓▒▒░██
      ──────██░▒▓▓▒▓▓▒░██
      ─────██░▒▓▓▒▒▒▓▓▒░██
      ────██░▒▒▒░███░▒▒▒░██
      ───██░▒░██▀───▀██░▒░██
      ──██░░██─────────██░░██
      ─████▀─────────────▀████
      ██▀───────────────────▀██
      `)
      );
      console.log("============================================");
      damage++;
    } else {
      console.log(chalk.blackBright("voce conseguiu desviar da caveira"));
      skull();
    }
  }

  if (damage >= 3) {
    console.clear();
    console.log(chalk.bgGreen("Voce conseguiu matar o esqueleto"));
    skull();
  } else {
    console.log(
      chalk.red(
        "Em uma das suas esquivas voce acabou levando um golpe muito forte e morreu"
      )
    );
    death = true;
    Death();
  }
}

function action() {
  let res1 = prompt(
    chalk.yellow(
      "Voce e um rei pirata que conseguiu todo o tesouro que precisa e queria então voce criou um novo objetivo de explorar fora da terra,Voce teve uma oportunidade de ir para uma templo que achou umas escritas egípcias antiga deseja ir la ver elas?"
    )
  );

  validateResponse(res1);
  console.clear();

  if (res1[0].toLocaleLowerCase() == "s") {
    let res = prompt(
      chalk.yellow(
        "Nas escritas egípcias tem formas de inteligencias no mundo a fora com algumas formas de comunicação com os ets, deseja tentar se comunicar com os ets?"
      )
    );
    validateResponse(res);
    console.clear();
    if (res[0].toLocaleLowerCase() == "n") {
      console.log(
        chalk.red(
          "Voce ficou sentado o dia todo pensando no que fazer mas acabou fazendo nd"
        )
      );
      console.clear();
      return false;
    } else {
      console.log(
        chalk.blue(
          "A comunicação foi um sucesso e eles lhe concediam o desejo de ir para lua"
        )
      );
      console.clear();

      victory();
      return true;
    }
  } else {
    let res = prompt(
      chalk.yellow(
        "Então voce decidiu ir para  o oriente para tentar achar algo que lhe informaria sobre ir para para a lua. No meio do caminho voce achou uma tumba chamada nirvana deseja entrar? "
      )
    );
    validateResponse(res);
    if (res == "n") {
      let res = prompt(
        chalk.yellow(
          "Voce acabou nao indo para a tumba mas achou uma espada de ouro pretende pega-la?"
        )
      );
      validateResponse(res);
      console.clear();
      if (res == "s") {
        console.log(
          chalk.yellow(
            "Ao pegar a espada voce caiu em um buraco nela estava a tumba"
          )
        );
        tumba = true;
      } else {
        console.log(
          chalk.red(
            "Voce ficou sentado o dia todo pensando no que fazer mas acabou fazendo nd"
          )
        );
        return false;
      }
    } else {
      tumba = true;
    }

    if (tumba) {
      let res = prompt(
        chalk.yellow(
          "Na caverna voce achou esqueletos vivos loucos para te mata deseja atacar os esqueletos com a espada de pirata que voce tem ou sair correndo?"
        )
      );
      validateResponseAlternative(res, "atacar", "sair");
      console.clear();

      if (res == "atacar") {
        possibleDeaths++;
        fight();
      } else {
        Death();
        return true;
      }
    }
  }
}
function action2() {
  day++;
  let res = prompt(
    chalk.yellow(
      "Depois de um logo dia sem progredir em nd voce decide ir para china para conseguir alguma resposta, deseja ir para china sul ou china norte?"
    )
  );
  validateResponseAlternative(res, "sul", "norte");
  console.clear();
  if (res == "norte") {
    let res = prompt(
      chalk.yellow("voce encontrou o templo Lhasa deseja entrar nele?")
    );
    validateResponse(res);
    console.clear();

    if (res[0].toLocaleLowerCase() == "s") {
      console.log(chalk.bgGreen("Ao entrar vc sente uma pressão muito forte"));

      let res = prompt(chalk.yellow("Deseja correr ou ficar?"));
      validateResponseAlternative(res, "correr", "ficar");
      console.clear();

      if (res == "correr") {
        console.log(chalk.yellow("Ao correr a pressão te explodiu"));
        return false;
      } else {
        console.log(
          chalk.green(
            "Voce ficou e a pressão levou voce para lua por levitação"
          )
        );
        return true;
      }
    } else {
      let res = prompt(
        chalk.yellow(
          "Voce foi para no sul por protestantes deseja se junta a eles ou continuar sua jornada?"
        )
      );
      validateResponseAlternative(res, "junta", "continuar");
      console.clear();
    }

    let res1 = prompt(
      chalk.yellow(
        "Depois de caminha sem rumo nenhum voce encontrou um cientista com que tava tentando ir a lua com garrafa pet deseja tentar a sorte?"
      )
    );
    validateResponse(res1);
    console.clear();
    if (res1[0].toLocaleLowerCase() == "s") {
      console.log(
        chalk.bgBlue(
          "O cientista era um gênio e conseguiu ir para lua so com garrafas pets mas voces dois morreram com a pressão da lua"
        )
      );
      death = true;
      return true;
    } else {
      console.log(chalk.red("O cientista nao aceitou sua decisão e te matou"));
      death = true;
      return false;
    }
  }
}

export function FiccaoInterativa() {
  user = prompt(chalk.yellow("Digite o seu nome: "));

  while (user.length < 2) {
    user = prompt(chalk.red("O nome deve ter mais do que 2 letra"));
  }

  if (!action()) {
    if (action2()) {
      victory();
    } else {
      Death();
    }
  }
  DetailsUser();
}

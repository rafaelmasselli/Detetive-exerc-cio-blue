const prompt = require("prompt-sync")();

const DetailsUser = [
  {
    user: "",
    spots: 0,
    day: 0,
    
    possibleDeaths: 0,
  },
];

function validateResponse(response: string) {
  let res = response[0].toLocaleLowerCase().trim();
  while (res != "s" && res != "n") {
    response = prompt("Digite somente sim ou nao ");
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
    response = prompt(`Escolha somente entre ${question1} e  ${question2}`)
      .toLowerCase()
      .trim();
  }
}


export function FiccaoInterativa() {
  DetailsUser[0][0] = prompt("Digite o seu nome");

  while (DetailsUser[0][0].length < 2) {
    DetailsUser[0][0] = prompt("O nome deve ter mais do que 2 letra");
  }

  let res1 = prompt(
    "Voce e um rei pirata que conseguiu todo o tesouro que precisa e queria então voce criou um novo objetivo de explorar fora da terra,Voce teve uma oportunidade de ir para uma templo que achou umas escritas egípcias antiga deseja ir la ver elas?"
  );

  validateResponse(res1);

  if (res1[0].toLowerCase() == "s") {
    let res2 = prompt(
      "Na caverna voce achou esqueletos vivos loucos para te mata deseja atacar os esqueletos com a espada de pirata que voce tem ou sair correndo?"
    );

    validateResponseAlternative(res2, "sair", "atacar");
  } else {
    console.log(
      "Então voce decidiu ir para  o oriente para tentar achar algo que lhe informaria sobre ir para para a lua. No meio do caminho voce achou uma tumba chamada nirvana deseja entrar?"
    );
  }
}

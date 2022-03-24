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

for (let i in perguntas) {
  let resposta = prompt(`${perguntas[i]}`);
  let minusculo = resposta.toLowerCase();

  if (contador === 5) {
    return;
  }

  if (minusculo[0] === "s") {
    contador++;
    console.log(`Hmm ${respostas[i]}`);
  } else if (minusculo[0] === "n") {
    console.log(`Hmm ${respostas[i]}`);
  } else {
    console.log("Resposta errada so responda com sim ou nao ");
    return;
  }
}

import express from "express";
import { Detetive } from "./Projetos/Detetive";
import { FiccaoInterativa } from "./Projetos/FiccaoInterativa";
import { JogoDaVelha } from "./Projetos/JogoDaVelha";
import { Jokenpo } from "./Projetos/Jokenpo";
import { JornadaDoHeroi } from "./Projetos/JornadaDoHeroi";

const app = express();

// Projeto detetive
// Detetive()

// Jornada do Heroi
// JornadaDoHeroi();

// Jokenpo
// Jokenpo()

// Jogo da velha
// JogoDaVelha()

// Ficção Interativa
FiccaoInterativa();

app.listen(3000, () => {
  console.log("☕");
});

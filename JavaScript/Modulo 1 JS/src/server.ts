import express from "express";
import { Detetive } from "./Projetos/Detetive";
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

JogoDaVelha()

app.listen(3000, () => {
  console.log("☕");
});

import express from "express";
import { Detetive } from "./Projetos/Detetive";
import { Jokenpo } from "./Projetos/Jokenpo";
import { JornadaDoHeroi } from "./Projetos/JornadaDoHeroi";

const app = express();

// Projeto detetive
// Detetive()

// Jornada do Heroi
// JornadaDoHeroi();

// Jokenpo
Jokenpo()

app.listen(3000, () => {
  console.log("☕");
});

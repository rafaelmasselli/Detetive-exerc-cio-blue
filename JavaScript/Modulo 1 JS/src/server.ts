import express from "express"
import { Detetive } from "./Projetos/Detetive"
import { JornadaDoHeroi } from "./Projetos/JornadaDoHeroi"

const app = express()

// Projeto detetive
Detetive()

// Jornada do Heroi
// JornadaDoHeroi()



app.listen(3000, (() => {
  console.log("☕")
}))
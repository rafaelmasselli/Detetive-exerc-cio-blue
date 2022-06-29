import express from "express"
import { Detetive } from "./Projetos/Detetive"

const app = express()

// Projeto detetive
Detetive()

app.listen(3000, (() => {
  console.log("☕")
}))
//declaração de função - quando eu crio a função
function saudacao(){
    console.log("Olá mundo")
}

// chamando a função (usando ela)
saudacao()
saudacao()

function saudacao_personalizada(melancia) {
    console.log("Olá, " + melancia + ", seja bem-vindo!");
  }

prompt = require("prompt-sync")()  
nomeusuario = prompt("digite seu nome")
nomeamigo = prompt("digite o nome do seu amigo")

saudacao_personalizada("Anderson")
saudacao_personalizada("Turma")
saudacao_personalizada(nomeusuario)
saudacao_personalizada(nomeamigo)
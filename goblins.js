@@ -0,0 +1,91 @@
const input = require('readline-sync')

let vidaPlayer = 150;
let vidaGoblin = 100;

const inventoryPlayer = {
    objeto: "Espada de Ferro", dano: "10", integridade: "100",
    objeto1: "Poção de Vida", regeneration: "20", quantidade: "2"
}

const questionStart = input.question("Voce deseja iniciar?" )
const questionName = input.question("Digite seu nome/usuario: ")

if(questionStart == "Sim") {
    console.log("\nIniciando...")

    gameStarted();
} else {
    console.log("OK! Até Breve.")
}

function gameStarted() {
    console.log(`\nBem vindo, ${questionName} ao nosso game.`)

    if(vidaPlayer && vidaGoblin <= 0) {
        return
    }

    let option = input.question("\nEscolha as opcoes abaixo: \n1 - Atacar \n2 - Defender \n3 - Ver inventário \n4 - Ver métricas do jogo \n5 - Sair")

    switch(option) {
        case "1":
            menuAtaque();
            break;

        case "2":
            defenderṔlayer();
            break;

        case "3":
            abrirInventario();
            break;

        case "4":
            abrirMetricas();
            break;

        case "5":
            console.log("Saindo...")
            break;

        default:
            console.log("Opcao inválida!")
            break;
    }

    function menuAtaque() {
        let arrayArmas = input.question(`nQual arma você deseja usar? Arma 1: ${inventoryPlayer.objeto}, dano: ${inventoryPlayer.dano}, integridade: ${inventoryPlayer.integridade} `)

        switch(arrayArmas) {
            case "1":
                atacarGoblin();
                break;

            default:
                console.log("Opcao Invalida!")
                gameStarted();
                break;
        }
    }

    function atacarGoblin() {
        let danoRealizado = Math.floor(Math.random() * 11) + parseInt(inventoryPlayer.dano);
        vidaGoblin -= danoRealizado;

        console.log(`\nVoce atacou o Goblin com sucesso!`)
        console.log(`\nVida do Goblin: ${vidaGoblin}.`)

        atacarPlayer();
    }

    function atacarPlayer() {
        let danoRealizadoGoblin = Math.floor(Math.random() * 11)
        vidaPlayer -= danoRealizadoGoblin

        console.log(`\n O Goblin atacou voce!`)
        console.log(`Vida restante: ${vidaPlayer}`);

        gameStarted();
    }
}

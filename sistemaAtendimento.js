const input = require('readline-sync')

let filaAtendimento = [];

const user = "user";
const password = "12345"

let userQuestion = input.question("Digite seu usuário: ");
if (userQuestion === user) {
    let passowrdQuestion = input.question("Digite sua senha: ");
    if (passowrdQuestion === password) {
        openDashboard();
    } else {
        console.log("Senha incorreta.")
    }
} else {
    console.log("Usuário incorreto e/ou inexistente.")
}

function esperar(segundos) {
    return new Promise((resolve) => {
        setTimeout(resolve, segundos * 1000);
    })
}

async function openDashboard() {

    let loop = true;

    console.log("\n Abrindo, aguarde...")
    await esperar(5);

    while (loop) {
        console.clear();
        console.log("\n======GESTÃO DE FILA DE ATENDIMENTO======")
        console.log(`\nBem vindo, ${user}!`)

        let option = input.question("\nDigite a opcao desejada: \n1- Adicionar a Fila \n2- Remover da fila, \n3 - Chamar ao guichê \n4- Sair \nDigite aqui: ")

        switch (option) {
            case "1":
                adicionarFila();
                break;

            case "2":
                removerFila();
                break;

            case "3":
                chamarPessoa();
                break;

            case "4":
                console.log("Saindo...")
                await esperar(3);
                loop = false;
                break;

            default:
                console.log("Opcao inválida.")
                break;
        }
    }
}

async function adicionarFila() {
    console.log("\nQuantidade de pessoas na fila: " + filaAtendimento.length)

    let questionAdd = input.question("Quem você deseja adicionar? ")
    console.log("Adicionando...")
    if (filaAtendimento.length >= 5) {
        console.log("\n Há muitas pessoas na fila, aguarde.")
    } else {
        filaAtendimento.push(questionAdd);
        await esperar(4);
        console.log(`${questionAdd} foi adicionado com sucesso!`)

    }
}

async function removerFila() {
    console.log("\nPessoas na fila: " + filaAtendimento)

    let questionRemove = input.question("Quem você deseja remover? ");
    filaAtendimento.splice(questionRemove);

    await esperar(2)

    console.log(`${questionRemove} foi removido com sucesso.`)
}

async function chamarPessoa() {
    console.log("\nPessoas na fila: " + filaAtendimento)
    let questionCall = input.question("\nQuem você deseja chamar?")

    console.log("Chamando...")
    await esperar(3);
    filaAtendimento.splice(questionCall);

    console.log(`\n ${questionCall} foi chamado com sucesso!`)
}

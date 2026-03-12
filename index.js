const input = require('readline-sync');

let filaAtendimento = [];

const user = "554822-SP"
const password = "M123456@a"
const name = "VITOR HUGO ALBINO"
const role = "MÉDICO ESPECIALISTA"
const defaultRole = "MÉDICO"

let questionRole = input.question("Em qual ambito você deseja abrir o dashboard? ")

if (questionRole === defaultRole) {
    let questionUser = input.question("\nDigite seu usuário: ");
    if (questionUser === user) {
        let questionPassword = input.question("\nDigite sua senha: ");
        if (questionPassword === password) {
            abrirDashboard();
        } else {
            console.log("\nSenha Incorreta.")
        }
    } else {
        console.log("\nUsuário incorreto e/ou usuário não cadastrado.")
    }
} else {
    console.log("\n Desculpe! Este acesso ainda é apenas para médicos.")
}

function abrirDashboard() {
    console.log("\n============SISTEMA DE ATENDIMENTO================")

    let rodando = true;

    while (rodando) {

        console.log(`Bem vindo, ${name}! Você está logado como: ${role}.`)

        let option = input.question("\nDigite a opcao que voce deseja: \n1 - Adicionar na fila de atendimento \n2 - Remover da fila de atendimento \n3 - Chamar paciente \n4 - Sair \nDigite aqui: ")

        switch (option) {
            case "1":
                adicionarAFila();
                break;

            case "2":
                removerDaFila();
                break;

            case "3":
                chamarPaciente();
                break;

            case "4":
                console.log("Saindo...")
                break;

            default:
                console.log("Opcao Invalida!")
                return;
        }
    }

    function adicionarAFila() {

        let questionPacient = input.question("Digite o nome do paciente: ")
        if (filaAtendimento.length >= 5) {
            console.log("Aguarde, há muitas pessoas esperando.");
        } else {
            console.log(`O paciente ${questionPacient} foi adicionado com sucesso!`)
            filaAtendimento.push(questionPacient);
        }
    }

    function removerDaFila() {
        console.log(filaAtendimento);
        let questionRemove = input.question("Digite o número do paciente que você deseja remover: ");

        switch (questionRemove) {
            case questionRemove:
                filaAtendimento.splice(0, questionRemove);
                console.log(`O paciente ${questionRemove} foi removido com sucesso!`)
                break;

            default:
                console.log("O paciente não existe ou já foi retirado!");
                break;

        }
    }

    function chamarPaciente() {
        console.log("Paciente entrou em atendimento!")
        filaAtendimento.splice(0, 1);

        console.log(`Pacientes esperando: ${filaAtendimento.length}`);
    }
}
const input = require('readline-sync');

function waitingProcess(seconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds * 1000);
    })
}

function analysisLending(name, age, value) {
    return new Promise((resolve, reject) => {
        if (value < 200) {
            reject(new Error("Epa! Saldo mínimo insuficiente."))
        } else if (age <= 17) {
            reject(new Error("Epa! Menores de idade não podem realizar empréstimos."))
        } else {
            resolve({ status: "Aprovado", valueReleased: "1000" });
        }
    })
}

async function requireLending() {
    console.log("\n=====BANCO DO HUGUITO=====")
    await waitingProcess(2);

    let loop = true;

    while (loop) {

        try {
            console.log("\nAguarde, abrindo sessão de coleta de dados...")
            await waitingProcess(3);

            let questionName = input.question("Ei! Qual é seu nome? ")
            console.log("Armazenando...")
            await waitingProcess(2);

            let questionAge = Number(input.question("E a sua idade? "));
            console.log("Armazenando...")
            await waitingProcess(2);

            let questionSalary = Number(input.question("Por ultimo, qual sua renda? "));
            console.log("Armazenando...")
            await waitingProcess(2);

            let result = await analysisLending(questionName, questionAge, questionSalary);

            console.log("Situação: " + result.status, result.valueReleased);

            break;

        } catch (erro) {
            console.log("Uh, oh! Encontramos um erro.");
            await waitingProcess(5);

            console.log("Erro: " + erro.message);
        }
    }
}

requireLending();

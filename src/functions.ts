import {v4 as uuidv4} from 'uuid';
import fs from 'fs';


export async function generateNumbers() {
    var numberGenerated = [];
    let numbersConfig = {
        maxNumbers: 6,
        lowestNumber: 1,
        highestNumber: 60
    };

    for(var i = 0; i < numbersConfig.maxNumbers; i++) {
        var number = Math.floor(Math.random() * numbersConfig.highestNumber + 1) + numbersConfig.lowestNumber;
        var checkNumber = numberGenerated.find((e) => e == number);
        
        while(checkNumber) {
            number = Math.floor(Math.random() * numbersConfig.highestNumber + 1) + numbersConfig.lowestNumber;
            checkNumber = numberGenerated.find((e) => e == number);
        };

        numberGenerated.push(number);
    };

    return numberGenerated
}

export async function generateBets(quantity: number) {
    var bets = [];
    
    for(var i = 0; i < quantity; i++) {
        const names = ["Lucas Silva","Maria Santos","João Oliveira","Ana Pereira","Pedro Rodrigues","Juliana Costa","Guilherme Fernandes","Luiza Gonçalves","André Almeida","Isabela Carvalho","Rafael Souza","Camila Lima","Gustavo Barbosa","Larissa Castro","Carlos Nunes","Fernanda Santos","Thiago Rocha","Mariana Silva","Matheus Costa","Beatriz Ribeiro","Rodrigo Santos","Laura Pereira","Marcelo Oliveira","Manuela Rodrigues","Alexandre Gomes","Gabriela Fonseca","Daniel Miranda","Sophia Ferreira","Eduardo Martins","Amanda Cardoso","Vinícius Ramos","Clara Barbosa","Gabriel Ferreira","Valentina Gonçalves","Leonardo Campos","Júlia Alves","Renan Medeiros","Isabella Mendes","Victor Moreira","Ana Beatriz Silva","Marcos Torres","Helena Castro","Gustavo Almeida","Lívia Carvalho","Bruno Vieira","Yasmin Ribeiro","Rafaela Santos","Carlos Eduardo Lima","Isadora Pereira","Diego Rodrigues","Laura Vieira","Pedro Henrique Oliveira","Giovanna Fernandes","Lucas Lima","Mariana Costa","Guilherme Barbosa","Nicole Rodrigues","Felipe Alves","Carolina Oliveira","Caio Pereira","Amanda Rocha","João Vitor Ribeiro","Sofia Santos","Matheus Souza","Larissa Cardoso","André Rodrigues","Luana Ferreira","Daniel Silva","Bárbara Gomes","Rodrigo Costa","Bruna Ramos","Gustavo Oliveira","Alice Rodrigues","Eduardo Medeiros","Camila Pereira","Leonardo Barbosa","Ana Clara Castro","Lucas Fernandes","Letícia Gonçalves","Rafael Martins","Fernanda Vieira","Marcelo Carvalho","Marina Lima","Henrique Ribeiro","Júlia Almeida","Pedro Miguel Santos","Isabella Barbosa","Gabriel Torres","Valentina Costa","Davi Silva","Manuela Vieira","Bruno Fernandes","Sophia Oliveira","Rafael Cardoso","Maria Eduarda Rodrigues","Matheus Alves","Laura Medeiros","Lucas Ramos","Gabriela Silva","André Luiz Costa"];
        
        interface BetType {
            name: string,
            id: string,
            numbers: Array<Number>
        }
        
        let numbers = await generateNumbers()
    
        var betInfo:BetType = {
            name: names[Math.floor(Math.random() * names.length)],
            id: uuidv4(),
            numbers: numbers
        };
        
        bets.push(betInfo);
    }

    fs.writeFileSync('bets.json', JSON.stringify(bets));
};
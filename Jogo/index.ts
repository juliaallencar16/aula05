import readline from 'readline-sync';

import { Jogo } from './src/models/Jogo';

console.log("=== SISTEMA DE JOGOS (TYPESCRIPT) ===\n");

// --- 1. CADASTRO DO JOGO ---

console.log(">> Cadastro do Jogo <<");

const tituloInput: string = readline.question("Titulo do jogo: ");

const precoInput: number = readline.questionFloat("Preco do jogo: ");


// Instanciando o objeto Jogo

const jogo = new Jogo(tituloInput, precoInput);


// --- 2. EXIBINDO OS DADOS INICIAIS ---

console.log("\n>> Dados do Jogo <<");

console.log(`Titulo: ${jogo.getTitulo()}`);
console.log(`Preco: R$ ${jogo.getPreco().toFixed(2)}`);


// --- 3. TESTANDO OS GETTERS ---

console.log("\n>> Testando os Getters <<");

console.log(`Titulo atual: ${jogo.getTitulo()}`);
console.log(`Preco atual: R$ ${jogo.getPreco().toFixed(2)}`);


// --- 4. TESTANDO OS SETTERS ---

console.log("\n>> Alterando os dados do jogo <<");

const novoTitulo: string = readline.question("Digite o novo titulo: ");

const novoPreco: number = readline.questionFloat("Digite o novo preco: ");

jogo.setTitulo(novoTitulo);
jogo.setPreco(novoPreco);


// --- 5. EXIBINDO OS DADOS ATUALIZADOS ---

console.log("\n>> Dados atualizados <<");

console.log(`Titulo: ${jogo.getTitulo()}`);
console.log(`Preco: R$ ${jogo.getPreco().toFixed(2)}`);

console.log("\n=== FIM DO SISTEMA ===");
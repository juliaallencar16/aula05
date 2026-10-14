import readline from 'readline-sync';

import { Livro } from './src/models/Livro';

console.log("=== SISTEMA DE LIVROS (TYPESCRIPT) ===\n");

// --- 1. CADASTRO DO LIVRO ---

console.log(">> Cadastro do Livro <<");

const tituloInput: string = readline.question("Titulo do livro: ");

const paginasInput: number = readline.questionInt("Quantidade de paginas: ");


// Instanciando o objeto Livro

const livro = new Livro(tituloInput, paginasInput);


// --- 2. EXIBINDO OS DADOS INICIAIS ---

console.log("\n>> Dados do Livro <<");

console.log(`Titulo: ${livro.getTitulo()}`);
console.log(`Paginas: ${livro.getPaginas()}`);


// --- 3. TESTANDO OS GETTERS ---

console.log("\n>> Testando os Getters <<");

console.log(`Titulo atual: ${livro.getTitulo()}`);
console.log(`Paginas atuais: ${livro.getPaginas()}`);


// --- 4. TESTANDO OS SETTERS ---

console.log("\n>> Alterando os dados do livro <<");

const novoTitulo: string = readline.question("Digite o novo titulo: ");

const novasPaginas: number = readline.questionInt("Digite a nova quantidade de paginas: ");

livro.setTitulo(novoTitulo);
livro.setPaginas(novasPaginas);


// --- 5. EXIBINDO OS DADOS ATUALIZADOS ---

console.log("\n>> Dados atualizados <<");

console.log(`Titulo: ${livro.getTitulo()}`);
console.log(`Paginas: ${livro.getPaginas()}`);

console.log("\n=== FIM DO SISTEMA ===");
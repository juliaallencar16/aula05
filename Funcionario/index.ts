import readline from 'readline-sync';

import { Funcionario } from './src/models/Funcionario';

console.log("=== SISTEMA DE FUNCIONÁRIOS (TYPESCRIPT) ===\n");

// --- 1. CADASTRO DO FUNCIONÁRIO ---

console.log(">> Cadastro do Funcionário <<");

const nomeInput: string = readline.question("Nome do funcionario: ");

const salarioInput: number = readline.questionFloat("Salario do funcionario: ");


// Instanciando o objeto Funcionario

const funcionario = new Funcionario(nomeInput, salarioInput);


// --- 2. EXIBINDO OS DADOS INICIAIS ---

console.log("\n>> Dados do Funcionário <<");

console.log(`Nome: ${funcionario.getNome()}`);
console.log(`Salario: R$ ${funcionario.getSalario().toFixed(2)}`);


// --- 3. TESTANDO OS GETTERS ---

console.log("\n>> Testando os Getters <<");

console.log(`Nome atual: ${funcionario.getNome()}`);
console.log(`Salario atual: R$ ${funcionario.getSalario().toFixed(2)}`);


// --- 4. TESTANDO OS SETTERS ---

console.log("\n>> Alterando os dados do funcionário <<");

const novoNome: string = readline.question("Digite o novo nome: ");

const novoSalario: number = readline.questionFloat("Digite o novo salario: ");

funcionario.setNome(novoNome);
funcionario.setSalario(novoSalario);


// --- 5. EXIBINDO OS DADOS ATUALIZADOS ---

console.log("\n>> Dados atualizados <<");

console.log(`Nome: ${funcionario.getNome()}`);
console.log(`Salario: R$ ${funcionario.getSalario().toFixed(2)}`);

console.log("\n=== FIM DO SISTEMA ===");
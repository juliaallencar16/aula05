export class Funcionario {

    // Atributos privados para aplicar o encapsulamento
    private nome: string;
    private salario: number;

    // Construtor: recebe os dados iniciais do funcionário
    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    // GET: permite que arquivos externos LEIAM o nome
    public getNome(): string {
        return this.nome;
    }

    // GET: permite que arquivos externos LEIAM o salário
    public getSalario(): number {
        return this.salario;
    }

    // SET: permite alterar o nome
    public setNome(novoNome: string): void {
        this.nome = novoNome;
    }

    // SET: permite alterar o salário
    public setSalario(novoSalario: number): void {
        this.salario = novoSalario;
    }
}
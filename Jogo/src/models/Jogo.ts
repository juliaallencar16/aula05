export class Jogo {

    // Atributos privados para aplicar o encapsulamento
    private titulo: string;
    private preco: number;

    // Construtor: recebe os dados iniciais do jogo
    constructor(titulo: string, preco: number) {
        this.titulo = titulo;
        this.preco = preco;
    }

    // GET: permite que arquivos externos LEIAM o título
    public getTitulo(): string {
        return this.titulo;
    }

    // GET: permite que arquivos externos LEIAM o preço
    public getPreco(): number {
        return this.preco;
    }

    // SET: permite alterar o título
    public setTitulo(novoTitulo: string): void {
        this.titulo = novoTitulo;
    }

    // SET: permite alterar o preço
    public setPreco(novoPreco: number): void {
        this.preco = novoPreco;
    }
}
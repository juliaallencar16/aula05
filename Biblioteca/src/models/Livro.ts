export class Livro {

    // Atributos privados para aplicar o encapsulamento
    private titulo: string;
    private paginas: number;

    // Construtor: recebe os dados iniciais do livro
    constructor(titulo: string, paginas: number) {
        this.titulo = titulo;
        this.paginas = paginas;
    }

    // GET: permite que arquivos externos LEIAM o título
    public getTitulo(): string {
        return this.titulo;
    }

    // GET: permite que arquivos externos LEIAM a quantidade de páginas
    public getPaginas(): number {
        return this.paginas;
    }

    // SET: permite alterar o título
    public setTitulo(novoTitulo: string): void {
        this.titulo = novoTitulo;
    }

    // SET: permite alterar a quantidade de páginas
    public setPaginas(novasPaginas: number): void {
        this.paginas = novasPaginas;
    }
}
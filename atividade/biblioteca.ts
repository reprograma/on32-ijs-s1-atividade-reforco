// Local que está importando
import { MaterialLeitura } from "./materialLeitura";
//Classe Livro
class Livro implements MaterialLeitura {
    titulo: string;
    autor: string;
    numeroPagina: number;

    constructor(titulo: string, autor: string, numeroPagina: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.numeroPagina =numeroPagina;
    }
    exibirDetalhes(): void {
        console.log(`Livro: ${ this.titulo}, Autor: ${this.autor}, Número de página: ${this.numeroPagina}`)
    }
}
// Classe Revista
class Revista implements MaterialLeitura {
    titulo: string;
    autor: string;
    edicao: number;

    constructor(titulo: string, autor: string, edicao: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.edicao = edicao;
    }
    exibirDetalhes(): void {
        console.log(`Revista: ${ this.titulo}, Autor: ${this.autor}, Edicao: ${this.edicao}`)
    }
}
// Classe Artigo
class Artigo implements MaterialLeitura {
    titulo: string;
    autor: string;
    dataPublicacao: Date;

    constructor(titulo: string, autor: string, dataPublicacao: Date) {
        this.titulo = titulo;
        this.autor = autor;
        this.dataPublicacao = dataPublicacao;
    }
    exibirDetalhes(): void {
        console.log(`Artigo: ${ this.titulo}, Autor: ${this.autor}, Data de Publicacao: ${this.dataPublicacao.toDateString()}`)
    }
}

const livro = new Livro ("Harry Potter", "J. K. Rowling", 550);
const revista = new Revista ("Scientific Americar", "John Goyer", 15);
const artigo = new Artigo ("Inteligencia Artificial", "Joanna Smith", new Date(2024,6,20))
livro.exibirDetalhes()
revista.exibirDetalhes()
artigo.exibirDetalhes()


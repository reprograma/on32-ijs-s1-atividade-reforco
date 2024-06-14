import { BibliotecaDigital } from "./bibliotecaDigital";

class Livro implements BibliotecaDigital{
    titulo: string;
    autor: string;
    numeroPagina: number;

    constructor(titulo: string, autor: string, numeroPagina: number){
        
        this.titulo = titulo;
        this.autor = autor;
        this.numeroPagina = numeroPagina;

    }

    exibirDetalhes() {
        console.log(`Autor: ${this.autor}, Título: ${this.titulo}, Número de páginas: ${this.numeroPagina}}`);
      }
}

const meuLivro = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 555);

// Chamando o método detalhes para ver as informações do livro digital
console.log(meuLivro.exibirDetalhes());
import { BibliotecaDigital } from "./bibliotecaDigital";

class Revista implements BibliotecaDigital{
    titulo: string;
    autor: string;
    edicao: number;

    constructor(titulo: string, autor: string, edicao: number){
        
        this.titulo = titulo;
        this.autor = autor;
        this.edicao = edicao;

    }

    exibirDetalhes() {
        console.log(`Autor: ${this.autor}, Título: ${this.titulo}, Número de páginas: ${this.edicao}}`);
      }
}

const minhaRevista = new Revista("Black Glamour Junho 2024", "Samy Silva", 120);

console.log(minhaRevista.exibirDetalhes());
import { BibliotecaDigital } from "./bibliotecaDigital";

class Artigo implements BibliotecaDigital{
    titulo: string;
    autor: string;
    dataPublicacao: Date;

    constructor(titulo: string, autor: string, dataPublicacao: Date){
        
        this.titulo = titulo;
        this.autor = autor;
        this.dataPublicacao = dataPublicacao;

    }

    exibirDetalhes() {
        console.log(`Autor: ${this.autor}, Título: ${this.titulo}, Data de Publicação: ${this.dataPublicacao.toDateString()}}`);
      }
}

const meuArtigo = new Artigo("Como Aprender a Programar Sem Procrastinar", "Isabela Silva", new Date("06/05/2024"));

console.log(meuArtigo.exibirDetalhes());
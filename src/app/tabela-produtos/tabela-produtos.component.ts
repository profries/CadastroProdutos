import { Component, OnInit, OnChanges } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent implements OnInit,OnChanges {
  titulo = "Tabela de Produtos";
  preco: number;
  produtos: Produto[] = [];


  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtos = this.produtoService.listar();
  }

  ngOnChanges(){
    console.log("Atualizando lista");
    this.produtos = this.produtoService.listar();
  }

}

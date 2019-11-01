import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {
  titulo = 'Formulário de Produtos';
  produto = new Produto();

  constructor(private service: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log("ID: ",id);

  }

  salvarProduto(){
    this.service.adicionar(this.produto);
    this.produto = new Produto();
    this.router.navigate(["/tabela"])
  }



}

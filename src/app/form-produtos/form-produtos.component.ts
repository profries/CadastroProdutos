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
  id: number;

  constructor(private service: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if(this.id){
      console.log("ID:",this.id);
      this.produto = this.service.buscarPorId(this.id);
    }
    else{
      console.log("não tem id");
      this.produto = new Produto();
    }
  }

  salvarProduto(){
    if(this.id){
      this.service.editar(this.id, this.produto);
    }
    else{
      this.service.adicionar(this.produto);
    }
    this.router.navigate(['/tabela']);
  }

  cancelar(){
    this.router.navigate(['/tabela']);
  }



}

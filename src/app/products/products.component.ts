import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  produtos = [
    { nome: 'Esmalte Rosa Chic', preco: 19.99, descricao: 'Um rosa vibrante para suas unhas.', emEstoque: true },
    { nome: 'Base Matte', preco: 49.99, descricao: 'Base de longa duração para um acabamento perfeito.', emEstoque: false },
    { nome: 'Shampoo Hidratante', preco: 29.99, descricao: 'Mantém seus cabelos hidratados e saudáveis.', emEstoque: true },
  ];
}

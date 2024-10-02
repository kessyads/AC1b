import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component'; // Verifique se o nome do componente está correto
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'produtos', component: ProductsComponent }, // Verifique o nome do componente
  { path: 'sobre', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redireciona para a página inicial se a URL estiver vazia
  { path: '**', redirectTo: '/home' } // Redireciona para a página inicial para URLs não reconhecidas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

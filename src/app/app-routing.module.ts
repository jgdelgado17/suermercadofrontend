import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './componentes/productos/lista-productos/lista-productos.component';
import { RegistarProductosComponent } from './componentes/productos/registar-productos/registar-productos.component';
import { ActualizarProductoComponent } from './componentes/productos/actualizar-producto/actualizar-producto.component';
import { DetallesProductoComponent } from './componentes/productos/detalles-producto/detalles-producto.component';
import { ComprarProductoComponent } from './componentes/productos/comprar-producto/comprar-producto.component';

const routes: Routes = [
  { path: 'products', component: ListaProductosComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'register-products', component: RegistarProductosComponent },
  { path: 'update-product/:id', component: ActualizarProductoComponent },
  { path: 'detail-product/:id', component: DetallesProductoComponent },
  { path: 'buy-product', component: ComprarProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

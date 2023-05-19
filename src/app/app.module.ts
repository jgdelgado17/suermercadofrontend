import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductosComponent } from './componentes/productos/lista-productos/lista-productos.component';
import { RegistarProductosComponent } from './componentes/productos/registar-productos/registar-productos.component';
import { FormsModule } from '@angular/forms';
import { ActualizarProductoComponent } from './componentes/productos/actualizar-producto/actualizar-producto.component';
import { DetallesProductoComponent } from './componentes/productos/detalles-producto/detalles-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    RegistarProductosComponent,
    ActualizarProductoComponent,
    DetallesProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

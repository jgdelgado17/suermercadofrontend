import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Compra } from 'src/app/clases/compra/compra';
import { DetalleCarrito } from 'src/app/clases/compra/detalle-carrito';
import { ProductoCompra } from 'src/app/clases/compra/producto-compra';
import { CompraService } from 'src/app/servicios/compras/compra.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-comprar-producto',
  templateUrl: './comprar-producto.component.html',
  styleUrls: ['./comprar-producto.component.css']
})
export class ComprarProductoComponent {
  compra: Compra = new Compra();
  products: ProductoCompra[] = [];

  constructor(private compraServicio: CompraService, private router: Router) { }

  enviarCompra() {
    const productList = this.compraServicio.obtenerProductos();

    this.compra.products = productList;
    this.products = productList;

    if (this.products.length === 0) {
      swal(`You have not added products to the shopping cart`);
      this.enviarProductoAlaLista();
    } else {
      this.compraServicio.vaciarProductos();

      this.compraServicio.registrarCompra(this.compra).subscribe(data => {
        console.log(data);
        this.enviarProductoAlaLista();
      }, error => swal(`${error.error}`));
    }
  }

  enviarProductoAlaLista() {
    this.router.navigate(['/products']);
  }

  onSubmit() {
    this.enviarCompra();
  }

  eliminarDetalleCompra(index: number){
    this.compraServicio.eliminarProducto(index);
  }

  obtenerProductos(): ProductoCompra[] {
    return this.compraServicio.obtenerProductos();
  }

  obtenerDetalleCompra(): DetalleCarrito[] {
    return this.compraServicio.obtenerDetalleCompra();
  }

  soloNumeros(event) {
    return this.compraServicio.soloNumeros(event);
  }

  aumentarCantidad(id:number){
    this.compraServicio.aumentarCantidad(id);
  }

  disminuirCantidad(id:number){
    this.compraServicio.disminuirCantidad(id);
  }

}

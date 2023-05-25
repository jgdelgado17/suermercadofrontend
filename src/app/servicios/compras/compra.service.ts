import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compra } from 'src/app/clases/compra/compra';
import { DetalleCarrito } from 'src/app/clases/compra/detalle-carrito';
import { ProductoCompra } from 'src/app/clases/compra/producto-compra';
import { Producto } from 'src/app/clases/productos/producto';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  productoCompra: ProductoCompra;
  products: ProductoCompra[] = [];
  detalleCarrito: DetalleCarrito[] = [];
  detalleCompra: DetalleCarrito;

  private baseUrl = "http://localhost:8080/buys";

  constructor(private http: HttpClient) { }

  registrarCompra(compra: Compra): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, compra);
  }

  agregarProducto(producto: Producto, cantidad: number) {
    const existingProduct = this.products.find(product => product.idProduct === producto.id);
    const existingDetalle = this.detalleCarrito.find(product => product.idProducto === producto.id);

    if (existingProduct) {
      var q = existingProduct.quantity;
      var c = existingDetalle.cantidad;
      existingProduct.quantity = parseInt(q.toString()) + parseInt(cantidad.toString());
      existingDetalle.cantidad = parseInt(c.toString()) + parseInt(cantidad.toString());
    }
    else {
      this.productoCompra = new ProductoCompra();

      this.productoCompra.idProduct = producto.id;
      this.productoCompra.quantity = cantidad;
      this.products.push(this.productoCompra);

      this.detalleCompra = new DetalleCarrito();
      this.detalleCompra.idProducto = producto.id;
      this.detalleCompra.nombreProducto = producto.name;
      this.detalleCompra.cantidad = cantidad;
      this.detalleCarrito.push(this.detalleCompra);
    }
  }

  aumentarCantidad(producto: number) {
    const existingProduct = this.products.find(product => product.idProduct === producto);
    const existingDetalle = this.detalleCarrito.find(product => product.idProducto === producto);

    if (existingProduct) {
      var q = existingProduct.quantity;
      var c = existingDetalle.cantidad;
      existingProduct.quantity = parseInt(q.toString()) + 1;
      existingDetalle.cantidad = parseInt(c.toString()) + 1;
    }
  }

  disminuirCantidad(producto: number) {
    const existingProduct = this.products.find(product => product.idProduct === producto);
    const existingDetalle = this.detalleCarrito.find(product => product.idProducto === producto);

    if (existingProduct) {
      var q = existingProduct.quantity;
      var c = existingDetalle.cantidad;
      existingProduct.quantity = parseInt(q.toString()) - 1;
      existingDetalle.cantidad = parseInt(c.toString()) - 1;
    }
  }

  obtenerProductos(): ProductoCompra[] {
    return this.products;
  }

  eliminarProducto(index: number) {
    this.products.splice(index, 1);
    this.detalleCarrito.splice(index, 1);
    // this.products = this.products.filter(producto => producto.idProduct !== idProduct);
    // this.detalleCarrito = this.detalleCarrito.filter(producto => producto.idProducto !== idProduct);
  }

  obtenerDetalleCompra(): DetalleCarrito[] {
    return this.detalleCarrito;
  }

  vaciarProductos() {
    this.products = [];
    this.detalleCarrito = [];
  }

  soloNumeros(event) {
    const keyCode = event.which ? event.which : event.keyCode;
    const esTeclaEspecial = keyCode === 8 || keyCode === 46; // Teclas especiales: retroceso (8) y suprimir (46)
    const esDigito = keyCode >= 48 && keyCode <= 57; // Dígitos del 0 al 9

    return esTeclaEspecial || esDigito;
  }
}

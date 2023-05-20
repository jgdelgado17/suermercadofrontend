import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compra } from 'src/app/clases/compra/compra';
import { ProductoCompra } from 'src/app/clases/compra/producto-compra';
import { Producto } from 'src/app/clases/productos/producto';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  productoCompra: ProductoCompra;
  products: ProductoCompra[] = [];
  prods: Producto[] = [];

  private baseUrl = "http://localhost:8080/buys";

  constructor(private http: HttpClient) { }

  registrarCompra(compra: Compra): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, compra);
  }

  agregarProducto(producto: Producto, cantidad: number) {
    this.productoCompra = new ProductoCompra();

    this.productoCompra.idProduct = producto.id;
    this.productoCompra.quantity = cantidad;
    this.products.push(this.productoCompra);
    this.prods.push(producto);
  }

  obtenerProductos(): ProductoCompra[] {
    return this.products;
  }

  obtenerProds(): Producto[] {
    return this.prods;
  }

  vaciarProductos() {
    this.products = [];
    this.prods = [];
  }
}

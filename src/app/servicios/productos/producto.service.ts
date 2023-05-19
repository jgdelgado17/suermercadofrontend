import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/clases/productos/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseUrl = "http://localhost:8080/products";
  // productos!: string;

  constructor(private http: HttpClient) { }

  // ngOnInit() {
  //   this.http.get(this.baseUrl, { responseType: 'text' }).subscribe((resp: any) => {
  //     this.productos = resp;
  //     console.log(resp);
  //   }),
  //     (error: any) => {
  //       console.log(error);
  //     }
  // }

  registrarProducto(producto: Producto): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, producto);
  }

  obtenerProductoPorId(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.baseUrl}/${id}`);
  }

  obtenerListaDeProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.baseUrl}`);
  }

  actualizarProducto(producto: Producto, id: number): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, producto);
  }

  eliminarProduto(id: number): Observable<Object> {
    return this.http.delete<Producto>(`${this.baseUrl}/${id}`);
  }

}

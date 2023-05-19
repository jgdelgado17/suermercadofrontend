import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/clases/productos/producto';
import { ProductoService } from 'src/app/servicios/productos/producto.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {
  productos: Producto[];

  constructor(private productoServicio: ProductoService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  private obtenerProductos() {
    this.productoServicio.obtenerListaDeProductos().subscribe(list => {
      this.productos = list;
    })
  }

  actualizarProducto(id: number) {
    this.router.navigate(['update-product', id]);
  }

  eliminarProducto(id: number) {
    swal({
      title: 'Are you sure?',
      text: `Confirm that you want to remove product ${id}`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete',
      cancelButtonText: 'No, cancel',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if (result.value) {
        this.productoServicio.eliminarProduto(id).subscribe(data => {
          console.log(data);
          this.obtenerProductos();
          swal(
            'Product removed',
            'Product removed successfully',
            'success'
          )
        })
      }
    })
  }

  detallesProducto(id: number) {
    this.router.navigate(['detail-product', id]);
  }
}

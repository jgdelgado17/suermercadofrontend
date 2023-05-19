import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/clases/productos/producto';
import { ProductoService } from 'src/app/servicios/productos/producto.service';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './../registar-productos/registar-productos.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent {
  accion = 'Update'
  id: number;
  producto: Producto = new Producto();

  constructor(private productoServicio: ProductoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productoServicio.obtenerProductoPorId(this.id).subscribe(data => {
      this.producto = data;
    }, error => console.log(error));
  }

  irAlistaDeProductos() {
    this.router.navigate(['/products']);
  }

  onSubmit() {
    this.productoServicio.actualizarProducto(this.producto, this.id).subscribe(data => {
      this.irAlistaDeProductos();
    },error => console.log(error));
  }
}

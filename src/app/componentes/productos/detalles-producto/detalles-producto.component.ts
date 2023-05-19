import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/clases/productos/producto';
import { ProductoService } from 'src/app/servicios/productos/producto.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.css']
})
export class DetallesProductoComponent {
  id: number;
  producto: Producto;

  constructor(private route: ActivatedRoute, private productoServicio: ProductoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.producto = new Producto();
    this.productoServicio.obtenerProductoPorId(this.id).subscribe(data => {
      this.producto = data;
      swal(`${this.producto.name} product details`)
    });
  }
}

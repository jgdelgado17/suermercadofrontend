import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/clases/productos/producto';
import { ProductoService } from 'src/app/servicios/productos/producto.service';

@Component({
  selector: 'app-registar-productos',
  templateUrl: './registar-productos.component.html',
  styleUrls: ['./registar-productos.component.css']
})
export class RegistarProductosComponent {
  accion = 'Register'
  producto: Producto = new Producto();

  constructor(private productoServicio: ProductoService, private router: Router) { }

  ngOnInit(): void {
  }

  guardarProduto() {
    this.productoServicio.registrarProducto(this.producto).subscribe(data => {
      console.log(data);
      this.enviarProductoAlaLista();
    }, error => console.log(error));
  }

  enviarProductoAlaLista() {
    this.router.navigate(['/products']);
  }

  onSubmit() {
    this.guardarProduto();
  }

}

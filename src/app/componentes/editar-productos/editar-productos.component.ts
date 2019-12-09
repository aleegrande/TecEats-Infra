import { Component, OnInit } from '@angular/core';



import { ProductosService } from '../../services/productos.service';
import { Productos } from 'src/app/models/productos';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize, take } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { async } from 'q';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-productos.component.html',
  styleUrls: ['./editar-productos.component.css']
})
export class EditarProductosComponent implements OnInit {
  productos = [];
  editarProducto: Productos;
  editando: boolean = false;

  constructor(public productService: ProductosService) { }

  ngOnInit() {
    this.productService.getProducto().subscribe(productos => {
    
      this.productos = productos;
    });
  }
  editar(event, productos) {
    this.editarProducto = productos;
    this.editando = !this.editando;

  }
  actualizar() {
    this.productService.actualizarProductos(this.editarProducto);
    this.editarProducto = {} as Productos;
    this.editando = false;
  }

}

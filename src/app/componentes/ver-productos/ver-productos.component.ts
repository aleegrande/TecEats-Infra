import { Component, OnInit } from '@angular/core';


import { ProductosService } from '../../services/productos.service';
import { Productos } from 'src/app/models/productos';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize, take } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { async } from 'q';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ver-productos',
  templateUrl: './ver-productos.component.html',
  styleUrls: ['./ver-productos.component.css']
})
export class VerProductosComponent implements OnInit {
  productos = [];

  constructor(public productService: ProductosService) { }

  ngOnInit() {
    this.productService.getProducto().subscribe(productos => {
      this.productos = productos;
    });
  }

}

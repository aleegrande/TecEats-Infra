import { Component, OnInit } from '@angular/core';



import { ProductosService } from '../../services/productos.service'
import { Productos } from '../../models/productos';
import { Router, ActivatedRoute } from '@angular/router';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators'



@Component({
  selector: 'app-crear-productos',
  templateUrl: './crear-productos.component.html',
  styleUrls: ['./crear-productos.component.css']
})
export class CrearProductosComponent implements OnInit {
  productoss = {} as Productos;
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  correo:String;

  constructor(public productosServicio: ProductosService,
    private storage: AngularFireStorage, private router: Router, ) {
      
  }


  ngOnInit() {
    this.correo=this.productosServicio.correo;
  }



  addProductos() {


    var r = confirm("¿seguro que desea insertar este Producto ?");
    if (r == true) {

      if (this.productoss.nombre != '' && this.productoss.presentacion != '' && this.productoss.precio != null && this.productoss.horario != ''
        && this.productoss.disponibilidad != '' && this.productoss.localizacion != '' && this.productoss.observaciones != '' && this.productoss.link != null) {
        this.productosServicio.addProductos(this.productoss);
        this.productoss = {} as Productos;
        alert("\'Dato Insertado Correctamente....\'");
        this.router.navigateByUrl('/crearProductos');
      }
      else {
        alert("\'Datos No insertado....\'");
      }
    } else {
      alert("\'Inserción rechasada\'");
    }


  }

  onUpload(e) {
    //console.log('subir' ,e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/profile_${id}`;
    const referencia = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.urlImage = referencia.getDownloadURL())).subscribe();


    //minuto 1:13:26
  }

}

import { Injectable } from '@angular/core';


import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { Productos } from '../models/productos';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos: Observable<Productos[]>;
  public  imagen:Observable<string>;
  productosColeccion: AngularFirestoreCollection;
  productosDoc: AngularFirestoreDocument<Productos>;
  public correo:string;
  
  constructor(public db: AngularFirestore) { 
    this.productosColeccion = this.db.collection('productos');
    this.productos = this.productosColeccion.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Productos;
        data.id = a.payload.doc.id;
        return data;

      })
    }));
 
  }
  getProducto() {
    return this.productos;
  }
  addProductos(productos: Productos) {

    this.productosColeccion.add(productos);
  }
  deleteProductos(productos: Productos) {
    if (confirm('Estas seguro de eliminarlo?')) {
      this.productosDoc = this.db.doc(`productos/${productos.id}`);
      this.productosDoc.delete();
    }

  }
  actualizarProductos(productos: Productos) {
    this.productosDoc = this.db.doc(`productos/${productos.id}`);
    this.productosDoc.update(productos);

  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  abrirIniciar()
  {
    this.router.navigate(['/login']);
  }
  abrirHome()
  {
    this.router.navigate(['/home']);
  }
  abrirProducto()
  {
    this.router.navigate(['/productos']);
  }
  abrirPromociones()
  {
    this.router.navigate(['/promociones']);
  }
  abrirAcerca()
  {
    this.router.navigate(['/about']);
  }
  abrirDesBurritos()
  {
    this.router.navigate(['/desburritos']);
  }
  abrirDesAguas()
  {
    this.router.navigate(['/desaguas']);
  }
  abrirDesDonas()
  {
    this.router.navigate(['/desdonas']);
  }
  abrirDesTortas()
  {
    this.router.navigate(['/destortas']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {

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

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-des-donas',
  templateUrl: './des-donas.component.html',
  styleUrls: ['./des-donas.component.css']
})
export class DesDonasComponent implements OnInit {

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

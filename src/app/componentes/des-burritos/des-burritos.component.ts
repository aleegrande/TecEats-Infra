import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-des-burritos',
  templateUrl: './des-burritos.component.html',
  styleUrls: ['./des-burritos.component.css']
})
export class DesBurritosComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
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
  abrirIniciar()
  {
    this.router.navigate(['/login']);
  }
}

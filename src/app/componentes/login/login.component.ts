import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

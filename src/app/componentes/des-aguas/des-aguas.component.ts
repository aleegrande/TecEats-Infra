import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-des-aguas',
  templateUrl: './des-aguas.component.html',
  styleUrls: ['./des-aguas.component.css']
})
export class DesAguasComponent implements OnInit {

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
}

import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';


import { AuthService } from '../../services/auth.service';
import { ProductosService } from '../../services/productos.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User=new User();
  public correo:string;

  constructor(private router:Router,private authSvc:AuthService,
   private authService:AuthService, public servicio:ProductosService) { }

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
  async onLogin(){
    const user=await this.authSvc.onLogin(this.user);
    if(user){
      alert("Felicidades usuario sesion exitosa");
      this.servicio.correo=this.user.email;
      this.router.navigateByUrl('/verProductos');

    }
    else{
      alert("\'Usuario o Contraseña Incorrectos....\'");
 
    }
  }

  async onRegister(){
    const user=await this.authSvc.onRegister(this.user);
    if(user){
      alert("Terminado usuario creado");
      this.servicio.correo=this.user.email;
      this.router.navigateByUrl("/verProductos");
    }
    else{
        alert("\'Usuario o Contraseña Incorractos....\'");   
    }
  }


  onLoginGoogle():void{
    this.authService.loginGoogleUser()
    .then((res)=>{
      this.onLoginRedirect();

    }).catch(err=>console.log("err",err.nessage));
  }
  onLoginGit():void{
    this.authService.loginGitUser()
    .then((res)=>{
      this.onLoginRedirect();

    }).catch(err=>console.log("err",err.nessage));
  }

  onLoginRedirect():void{
    this.servicio.correo=this.user.email;
    this.router.navigate(["/verProductos"]);
  }

  onLoginFacebook():void{
    this.authService.loginFacebook()
    .then((res)=>{
      this.onLoginRedirect();

    }).catch(err=>console.log("err",err.nessage));
  }


  onLoginTwiter():void{
    this.authService.loginTwiter()
    .then((res)=>{
      this.onLoginRedirect();

    }).catch(err=>console.log("err",err.nessage));
  }
}

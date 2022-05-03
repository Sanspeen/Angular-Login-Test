import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userLogged = this.authService.getLoggedUser()
  constructor(private authService:AuthService){

  }

  usuario={
    email:'',
    password:''
  }

  userState = false;

  ingresar(){
    const {email, password} = this.usuario;
    this.authService.register(email, password).then(res => {
      console.log("Resgistrado correctamente", res);
      this.userState = true;

    })
  }

  ingresarConGoogle(){
    const {email, password} = this.usuario;
    this.authService.loginWithGoogle(email, password).then(res => {
      console.log("Resgistrado correctamente", res);
      this.userState = true;
    })
  }

  getLoggedUser(){
    this.authService.getLoggedUser().subscribe(res => {
      console.log(res?.email);      
    });
  }

  logOut(){
    this.authService.logOut();
    this.userState = false;
  }

}

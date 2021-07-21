import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
//import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-logar',
  templateUrl: './logar.component.html',
  styleUrls: ['./logar.component.css']
})
export class LogarComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()
  constructor(
    private auth: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

  }

  logar() {
    this.auth.logar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp
      environment.token = this.userLogin.token
      environment.nome = this.userLogin.nome
      environment.foto = this.userLogin.foto
      environment.id = this.userLogin.id
      environment.tipo = this.userLogin.tipo

      console.log(environment.token)

      console.log(environment.nome)

      console.log(environment.foto)

      console.log(environment.id)

      this.userLogin.foto
      this.router.navigate(['/inicio'])
    }, erro => {
      if (erro.status == 500) {
        console.log(this.userLogin.usuario)
        console.log(this.userLogin.senha)
        this.alertas.showAlertInfo('Usuário ou senha estão incorretos')
      }
    })

  }
}


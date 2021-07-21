
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  usuario: Usuario = new Usuario()
idUser: number
confirmarSenha: string
tipoUsuario: string

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }
    this.idUser = this.route.snapshot.params['id']
    this.findByUser(this.idUser)
  }
 confirmSenha(event: any){
this.confirmSenha = event.target.value

 }
  tipoUser(event: any){

 this.tipoUser = event.target.value
  }

  atualizar(){
    this.usuario.tipo = this.tipoUsuario

      if(this.usuario.senha != this.confirmarSenha){

        this.alertas.showAlertInfo('A senhas estão incorretas.')

      }else{
        this.authService.cadastrar(this.usuario).subscribe((resp:Usuario) =>{
          this.usuario = resp
          this.router.navigate(['/logar'])
          this.alertas.showAlertInfo('Usuário atualizado  com sucesso!')
        })

      }
    }

  findByUser(id: number){
    this.authService.getByUsuario(id).subscribe((resp: Usuario)=>{
      this.usuario = resp
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario:Usuario = new Usuario //talvez seja user
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }
  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value


  }
  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }
  cadastrar(){
    this.usuario.tipo = this.tipoUsuario

    if(this.usuario.senha != this.confirmarSenha){

      alert('A senhas estão incorretas.')

    }else{
      this.authService.cadastrar(this.usuario).subscribe((resp:Usuario) =>{
        this.usuario = resp
        this.router.navigate(['/logar'])
        alert('Usuário cadastrado com sucesso!')
        environment.token =''
        environment.nome = ''
        environment.foto = ''
        environment.id = 0
        this.router.navigate(['/login'])
      })

    }
  }

}

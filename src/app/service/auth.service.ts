import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { UserLogin } from '../model/UserLogin';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  logar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://blogpessoalbackfabi.herokuapp.com/usuarios/logar', userLogin) //   http://localhost:8080/usuarios/logar//

  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://blogpessoalbackfabi.herokuapp.com/usuarios/cadastrar', usuario) //http://localhost:8080/usuarios/ //

  }

  getByUsuario(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`https://blogpessoalbackfabi.herokuapp.com/usuarios/${id}`)
  }
logado(){
  let ok: boolean = false

  if(environment.token != ''){
    ok = true
  }

  return ok
}
adm(){
  let ok: boolean = false

  if(environment.token == 'adm'){
    ok = true
  }

  return ok
}
}

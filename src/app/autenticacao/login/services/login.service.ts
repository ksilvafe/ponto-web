import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { Login } from '../';

@Injectable()
export class LoginService {

  private readonly PATH: string = 'auth';

  constructor(private http: HttpClient) { }

  logar(login: Login): Observable<any> {
    return this.http.post(environment.baseUrl + this.PATH, login);
  }
}

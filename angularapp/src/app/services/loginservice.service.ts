import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/class/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginStatus= false;
  constructor(private httpclient: HttpClient) { }

  checkUserRolebyEmail(email: string): Observable<any>{
    console.log(email);
    const requestOptions: object = {
      responseType: 'text'
    };
    return this.httpclient.get<any>
    (`https://8080-bbccbbbafbbadefeafcdfecbcbddcca.project.examly.io/login/checkUserRole/`+email, requestOptions);
  }

  // login to Admin/User page
  isUserPresent(login: Login): Observable<boolean>{

    return this.httpclient.post<boolean>
    ('https://8080-bbccbbbafbbadefeafcdfecbcbddcca.project.examly.io/user/login', login);
  }

  isAdminPresent(login: Login): Observable<boolean>{

    return this.httpclient.post<boolean>
    ('https://8080-bbccbbbafbbadefeafcdfecbcbddcca.project.examly.io/admin/login', login);
  }
}

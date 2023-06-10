import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/class/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginStatus: boolean = false;
  constructor(private httpclient :HttpClient) { }

  checkUserRolebyEmail(email:String):Observable<any>{
    console.log(email);
    const requestOptions: Object = {
      responseType: 'text'
    }
    return this.httpclient.get<any>(`https://8080-bbccbbbafbbadefeafcdfecbcbddcca.project.examly.io/login/checkUserRole/`+email,requestOptions);
  }

  //login to Admin/User page
  isUserPresent(login: Login):Observable<Boolean>{

    return this.httpclient.post<Boolean>('https://8080-bbccbbbafbbadefeafcdfecbcbddcca.project.examly.io/user/login', login);
  }

  isAdminPresent(login: Login):Observable<Boolean>{

    return this.httpclient.post<Boolean>('https://8080-bbccbbbafbbadefeafcdfecbcbddcca.project.examly.io/admin/login', login);
  }
}

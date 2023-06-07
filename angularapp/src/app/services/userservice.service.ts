<<<<<<< HEAD
import { Injectable } from '@angular/core';
=======
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/class/user';
>>>>>>> b0af86db9945ef6c455067dbd624cb52f6cd06c2

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
<<<<<<< HEAD

  constructor() { }
=======
  
  constructor(private httpclient :HttpClient) { }

  checkEmail(email:String):Observable<Boolean>{
    console.log(email);
    return this.httpclient.get<Boolean>(`https://8080-bbccbbbafbbadefeafcdfecbcbddcca.project.examly.io/user/signup/`+email);
    // return this.httpclient.get<Boolean>(`https://8080-bbccbbbafbbadefeafcdfecbcbddcca.project.examly.io/user/signup/{email}`);
  }

  storeUser(newUser: User):Observable<any>{
    const requestOptions: Object = {
      responseType: 'text'
    }
    return this.httpclient.post('https://8080-bbccbbbafbbadefeafcdfecbcbddcca.project.examly.io/user/signup', newUser, requestOptions);
  }

  storeAdmin(newUser: User):Observable<any>{
    const requestOptions: Object = {
      responseType: 'text'
    }
    return this.httpclient.post('https://8080-bbccbbbafbbadefeafcdfecbcbddcca.project.examly.io/admin/signup', newUser, requestOptions);
  }


  
>>>>>>> b0af86db9945ef6c455067dbd624cb52f6cd06c2
}

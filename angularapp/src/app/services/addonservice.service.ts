import { Injectable } from '@angular/core';
import { addon } from '../class/addon';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddonserviceService {

  private baseUrl = "https://8080-bbccbbbafbbadefeafcdfecbcbddcca.project.examly.io/admin/addAddon";
  private baseUrl2 = "https://8080-bbccbbbafbbadefeafcdfecbcbddcca.project.examly.io/admin/editAddon";
  private baseUrl3 = "https://8080-bbccbbbafbbadefeafcdfecbcbddcca.project.examly.io/admin/getAddon";
  private baseUrl4 = "https://8080-bbccbbbafbbadefeafcdfecbcbddcca.project.examly.io/admin/deleteAddon";

  constructor(private httpclient: HttpClient) { }

    getAddon(): Observable<addon[]>{
      return this.httpclient.get<addon[]>(`${this.baseUrl3}`);
    }

    addAddon(add: addon): Observable<object>{
      return this.httpclient.post(`${this.baseUrl}`, add);
    }

    getAddonId(addOnid: number): Observable<addon>
{
  return this.httpclient.get<addon>(`${this.baseUrl3}/${addOnid}`);
}

  editAddon(addOnid : number, ad : addon): Observable<Object>{
    return this.httpclient.put(`${this.baseUrl2}/${addOnid}`, ad);
  }

  deleteAddon(addOnid : number): Observable<Object>{
    return this.httpclient.delete(`${this.baseUrl4}/${addOnid}`);
  }
}
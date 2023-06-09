import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { bookevent } from '../class/bookevent';

@Injectable({
  providedIn: 'root'
})
export class BookEventService {

  
  private baseUrl = "https://8080-bbccbbbafbbadefeafcdfecbcbddcca.project.examly.io/user/bookTheme";
  private baseUrl2 = "https://8080-bbccbbbafbbadefeafcdfecbcbddcca.project.examly.io/user/editTheme";
  private baseUrl3 = "https://8080-bbccbbbafbbadefeafcdfecbcbddcca.project.examly.io/user/getBookedTheme";
  private baseUrl4 = "https://8080-bbccbbbafbbadefeafcdfecbcbddcca.project.examly.io/user/deleteTheme";

  constructor(private httpclient : HttpClient) { }
  getList(): Observable<bookevent[]>{
    return this.httpclient.get<bookevent[]>(`${this.baseUrl3}`);
  }

  bookEvent(add :bookevent ): Observable<object>{
    return this.httpclient.post(`${this.baseUrl}`,add);
  }
  
    viewEvent(eventid : number): Observable<bookevent>
  {
    return this.httpclient.get<bookevent>(`${this.baseUrl3}/${eventid}`);
  }    

  editEvent(eventid : number, ad : bookevent): Observable<Object>{
    return this.httpclient.put(`${this.baseUrl2}/${eventid}`, ad);
  }

  deleteEvent(eventid : number): Observable<Object>{
    return this.httpclient.delete(`${this.baseUrl4}/${eventid}`);
  }

  
}
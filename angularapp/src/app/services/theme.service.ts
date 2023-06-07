import { Injectable } from '@angular/core';
<<<<<<< HEAD
=======
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Theme } from '../class/theme';
>>>>>>> b0af86db9945ef6c455067dbd624cb52f6cd06c2

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

<<<<<<< HEAD
  constructor() { }
=======
  private baseUrl = "https://8080-bbccbbbafbbadefeafcdfecbcbddcca.project.examly.io/admin/addTheme";
  private baseUrl2 = "https://8080-bbccbbbafbbadefeafcdfecbcbddcca.project.examly.io/admin/editTheme";
  private baseUrl3 = "https://8080-bbccbbbafbbadefeafcdfecbcbddcca.project.examly.io/admin/getTheme";
  private baseUrl4 = "https://8080-bbccbbbafbbadefeafcdfecbcbddcca.project.examly.io/admin/deleteTheme";

  constructor(private httpclient : HttpClient) { }

  getAllTheme(): Observable<Theme[]>{
    return this.httpclient.get<Theme[]>(`${this.baseUrl3}`);
  }

  storeTheme(theme : Theme): Observable<Object>{
    return this.httpclient.post(`${this.baseUrl}`,theme);
  }

  getThemebyId(themeId: number):Observable<Theme>{
    return this.httpclient.get<Theme>(`${this.baseUrl3}/${themeId}`);
  }

  updateTheme(themeId: number,theme : Theme):Observable<Object>{
    return this.httpclient.put(`${this.baseUrl2}/${themeId}`,theme);
  }

  deleteTheme(themeId: number): Observable<Object>{
    return this.httpclient.delete(`${this.baseUrl4}/${themeId}`);
  }
>>>>>>> b0af86db9945ef6c455067dbd624cb52f6cd06c2
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Theme } from '../class/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private baseUrl = 'https://8080-beddbfbbfbabaccccfeafbbadefeafafebddcc.project.examly.io/admin/addTheme';
  private baseUrl2 = 'https://8080-beddbfbbfbabaccccfeafbbadefeafafebddcc.project.examly.io/admin/editTheme';
  private baseUrl3 = 'https://8080-beddbfbbfbabaccccfeafbbadefeafafebddcc.project.examly.io/admin/theme';
  private baseUrl4 = 'https://8080-beddbfbbfbabaccccfeafbbadefeafafebddcc.project.examly.io/admin/deleteTheme';

  constructor(private httpclient: HttpClient) { }

  getTheme(): Observable<Theme[]>{
    return this.httpclient.get<Theme[]>(`${this.baseUrl3}`);
  }

  addTheme(theme: Theme): Observable<object>{
    return this.httpclient.post(`${this.baseUrl}`, theme);
  }

  getThemebyId(themeId: number): Observable<Theme>{
    return this.httpclient.get<Theme>(`${this.baseUrl3}/${themeId}`);
  }

  EditTheme(themeId: number, theme: Theme): Observable<object>{
    return this.httpclient.put(`${this.baseUrl2}/${themeId}`, theme);
  }

  deleteTheme(themeId: number): Observable<object>{
    return this.httpclient.delete(`${this.baseUrl4}/${themeId}`);
  }
}

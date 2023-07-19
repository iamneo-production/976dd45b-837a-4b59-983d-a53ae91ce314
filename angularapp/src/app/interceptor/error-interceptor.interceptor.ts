import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptorInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        let errorMsg= '';
        if(error.error instanceof ErrorEvent){
          errorMsg= `Error: ${error.error.message}`;
        }
        else{
          errorMsg= `Error code: ${error.status}\nMessage: ${error.message}`;
        }
        this.toastr.error('API Endpoints are mismatch / Backend is not working!','Server Error', {
          positionClass: 'toast-center-center' 
       } );
        return throwError(() => errorMsg);
        })
    )
  }
}

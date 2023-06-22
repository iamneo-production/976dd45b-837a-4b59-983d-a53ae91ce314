import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private content1= new BehaviorSubject<string>('Default Text1');
  private content2= new BehaviorSubject<string>('Default Text2');
  private content3= new BehaviorSubject<string>('0');
  private content4= new BehaviorSubject<string>('Default Text4');
  public share1= this.content1.asObservable();
  public share2= this.content2.asObservable();
  public share3= this.content3.asObservable();
  public share4= this.content4.asObservable();
  constructor() { }

  updateData(text1,text2,cost): any{
    this.content1.next(text1);
    this.content2.next(text2);
    this.content3.next(cost);
  }
  storeUserId(text1): any{
    this.content4.next(text1);
  }
}

import { EventEmitter, Injectable, Input, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  @Output() userInfoEmitter = new EventEmitter();

  public sigunFormControle: any = {
    email: '',
    userName: '',
    name: '',
    password: '',
  };
}

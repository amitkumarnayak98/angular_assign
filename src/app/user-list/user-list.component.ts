import { Component, OnInit } from '@angular/core';
import ApplicationMessages from '../../assets/i18n/en.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  appMessages: any;
  data: any = sessionStorage.getItem('signUpObject');
  userInfo: Array<any> =
    this.data === null || this.data === undefined || this.data === ''
      ? []
      : [JSON.parse(this.data)];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.appMessages = ApplicationMessages;
  }

  getEmployeeForm() {
    this.router.navigate(['employee-form']);
  }
}

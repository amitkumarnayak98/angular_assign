import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import ApplicationMessages from '../../../assets/i18n/en.json';
import { Router } from '@angular/router';
import { ProfileOptions, profileMenuOptions } from '../constant';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  appMessages: any;
  blockSignInButton: any;
  profileOptions: Array<ProfileOptions> = profileMenuOptions;
  constructor(private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    this.appMessages = ApplicationMessages;
  }

  getHeaderProfile() {
    const data: any = sessionStorage.getItem('signUpObject');
    const userInfo: Array<any> =
      data === null || data === undefined || data === ''
        ? []
        : [JSON.parse(data)];
    if (userInfo?.length && this.router.url.includes('user-list')) {
      this.blockSignInButton = true;
    } else if (userInfo?.length && this.router.url.includes('employee-form')) {
      this.blockSignInButton = true;
    } else {
      this.blockSignInButton = false;
    }
    return this.blockSignInButton;
  }

  getHeaderNav(name: string | undefined) {
    if (name === profileMenuOptions[0].name) {
      this.router.navigate(['user-list']);
    } else if (name === profileMenuOptions[1].name) {
      const data: any = {};
      sessionStorage.clear();
      this.router.navigate(['/']);
      this.openDialog();
    }
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%',
    });
  }

  openLoginDialog() {
    this.dialog.open(LoginDialogComponent, {
      width: '30%',
    });
  }
}

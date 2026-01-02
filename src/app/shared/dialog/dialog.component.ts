import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from '../services/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import ApplicationMessages from '../../../assets/i18n/en.json';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  actionBtn: string = ApplicationMessages.application.save;
  dialogComponent: any;
  appMessages: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<DialogComponent>,
    private sharedService: SharedService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.appMessages = ApplicationMessages;
    this.actionBtn = this.appMessages.application.save;
    this.dialogComponent = this.dialogRef;
  }

  handleSignUpFormData() {
    sessionStorage.setItem(
      'signUpObject',
      JSON.stringify(this.sharedService.sigunFormControle)
    );

    this.actionBtn = this.appMessages.application.goToLoginRedirection;
  }

  openLoginDialog() {
    this.dialogComponent.close();
    this.dialog.open(LoginDialogComponent, {
      width: '30%',
    });
  }
}

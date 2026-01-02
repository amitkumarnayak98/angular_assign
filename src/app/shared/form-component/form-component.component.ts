import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../services/shared.service';
import ApplicationMessages from '../../../assets/i18n/en.json';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss'],
})
export class FormComponentComponent implements OnInit {
  signUpForm!: FormGroup;
  appMessages: any;
  constructor(
    private formBuilder: FormBuilder,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.appMessages = ApplicationMessages;
    this.signUpForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.appMessages.signUpForm.emailPattern),
        ],
      ],
      userName: [
        '',
        [
          Validators.required,
          Validators.pattern(this.appMessages.signUpForm.userNamePattern),
        ],
      ],
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(this.appMessages.signUpForm.namePattern),
        ],
      ],
      password: ['', [Validators.required]],
    });

    // if (this.signUpForm.valid) {
    this.signUpForm.valueChanges.subscribe((controls: any) => {
      this.sharedService.sigunFormControle.email = controls.email;
      this.sharedService.sigunFormControle.userName = controls.userName;
      this.sharedService.sigunFormControle.name = controls.name;
      this.sharedService.sigunFormControle.password = controls.password;
    });
  }

  ///To implemented for custom validation

  //   nameValidator(control: any) {
  //     const validationData: any = this.checkValidInput(
  //       control.value ?? '',
  //       chamberNameConfigs.type ?? ''
  //     );
  //     if (control.value) {
  //       control.status = validationData.hasError ? INVALID : VALID;
  //       if (validationData.hasError) {
  //         return validationData;
  //       } else {
  //         return null;
  //       }
  //     } else {
  //       if (control.dirty) {
  //         control.status = INVALID;
  //         return validationData;
  //       } else {
  //         return null;
  //       }
  //     }
  //   }
}

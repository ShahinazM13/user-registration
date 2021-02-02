import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReCaptcha2Component } from 'ngx-captcha';

@Component({
  selector: 'app-forgot-pwd-page',
  templateUrl: './forgot-pwd-page.component.html',
  styleUrls: ['./forgot-pwd-page.component.css']
})
export class ForgotPwdPageComponent implements OnInit, AfterViewInit {

  @ViewChild('captchaElem') captchaElem: ReCaptcha2Component;

  public forgotPwdForm: FormGroup;
  public disableSendCodeBtn: boolean = true;
  public theme: 'light' | 'dark' = 'light';
  public size: 'compact' | 'normal' = 'normal';
  public lang = 'en';
  public type: 'image' | 'audio';

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.disableSendCodeBtn = true;
    this.forgotPwdForm = this.formBuilder.group({
      email: ['', Validators.required],
      captcha: ['', Validators.required]
    });
  }

  ngAfterViewInit() {

  }

  onCaptchaSuccess(event) {
    console.log(event);
    this.disableSendCodeBtn = false;
  }

  sendEmail() {
    alert("Password reset link is sent to your email");
  }

}

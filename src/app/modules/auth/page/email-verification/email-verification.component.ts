import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '@core/service/account-service';
import { CustomRouter } from '@shared/service/custom-router.service';
import { SpeekioToastService } from '@shared/service/speekio-toast.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MustMatch } from '@shared/_helper/must-match.validator';
import { UserVerificationModel } from '@core/model/users-model/user-verification.model';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css']
})
export class EmailVerificationComponent implements OnInit {
  emailVerificationForm: FormGroup;
  pictureData: string = null;
  submitted: boolean;
  public verificationFailed: boolean;
  constructor(
    private router: Router,
    private activatedRout: ActivatedRoute,
    private accountService: AccountService,
    private customRouterService: CustomRouter,
    private toastService: SpeekioToastService,
    private formBuilder: FormBuilder,
    public ngxUiLoaderService: NgxUiLoaderService,
    private modalService: NgbModal,
    private sanitizer: DomSanitizer
  ) {

  }

  ngOnInit() {
    this.pictureData = 'assets/img/img_avatar.png';
    // this.verifyUser();
    this.initializeForm();
  }

  initializeForm() {
    this.emailVerificationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: [''],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  //for easy access to form fields
  get f() { return this.emailVerificationForm.controls; }

  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }


  closeResult: string;
  pictureValue: string;
  handleImageInput(event: any) {

    if (event.srcElement.files.length == 0) {
      return false;
    }
    let imageToCrop = event.srcElement.files[0];
    this.ngxUiLoaderService.start("1");

    const reader = new FileReader();
    reader.onload = (event) => {

      let imageRandom = reader.result;

      
    };
    let image = reader.readAsDataURL(imageToCrop);

  }



  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.emailVerificationForm.invalid) {
      return;
    }
    var values = this.emailVerificationForm.value;
    let model = new UserVerificationModel();
    model.firstName = values.firstName;
    model.lastName = values.lastName;
    model.phone = values.phone;
    model.password = values.password;
    model.confirmPassword = values.confirmPassword;
    model.email = this.activatedRout.snapshot.queryParams.email;
    model.token = this.activatedRout.snapshot.queryParams.token;
    model.pictureData = this.pictureData;
    this.verifyUser(model);
  }

  verifyUser(model: UserVerificationModel) {
    this.accountService.verifyUser(model).subscribe(result => {
      let response = result.body;
      if (!response || !response.successful) {
        // this.verificationFailed = false;
        this.toastService.showError(response.message);
        return;
      }
      this.customRouterService.navigateToSibling(this.router, this.activatedRout, 'login');
    });
  }

}

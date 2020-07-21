import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SpeekioToastService } from '@shared/service/speekio-toast.service';
import { BookingService } from '@core/service/booking-service';
import { UserBookingModel } from '@core/model/booking-model/user-booking.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '@shared/_helper/must-match.validator';

@Component({
  selector: 'app-signup-booking-dialog',
  templateUrl: './signup-booking-dialog.component.html',
  styleUrls: ['./signup-booking-dialog.component.css']
})
export class SignupBookingDialogComponent implements OnInit {
  userBookingModel: UserBookingModel; 
  signupVerificationForm: FormGroup;
  constructor(public activeModal: NgbActiveModal,
    private toastService: SpeekioToastService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private bookingService : BookingService) { }

  ngOnInit() {
    this.userBookingModel = new UserBookingModel();
    this.initializeForm();
  }

  initializeForm() {
    this.signupVerificationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: [''],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
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

  
  closeDialog(){
    this.activeModal.dismiss();
  }

  saveUserBooking(form: any){

  }

}

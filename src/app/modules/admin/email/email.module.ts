import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "@shared/shared.module";
import { EmailListComponent } from "./email-list/email-list.component";
import { EmailRoutingModule } from "./email-routing.module";

@NgModule({
    declarations: [EmailListComponent],
    imports: [
      SharedModule,
      CommonModule,
      EmailRoutingModule,
      FormsModule
    ]
  })
  export class EmailModule { }
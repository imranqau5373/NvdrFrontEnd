import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "@shared/shared.module";
import { FaultEmailListComponent } from "./fault-email-list/fault-email-list.component";
import { FaultRoutingModule } from "./fault-routing.module";

@NgModule({
    declarations: [FaultEmailListComponent],
    imports: [
      SharedModule,
      CommonModule,
      FaultRoutingModule,
      FormsModule
    ]
  })
  export class FaultModule { }
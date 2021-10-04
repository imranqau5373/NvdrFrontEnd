import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "@shared/shared.module";
import { NvdrAddComponent } from "./nvdr-add/nvdr-add.component";
import { NvdrListComponent } from "./nvdr-list/nvdr-list.component";
import { NvdrRoutingModule } from "./nvdr-routing.module";




@NgModule({
    declarations: [NvdrListComponent,NvdrAddComponent],
    imports: [
      SharedModule,
      CommonModule,
      NvdrRoutingModule,
      FormsModule
    ]
  })
  export class NvdrModule { }
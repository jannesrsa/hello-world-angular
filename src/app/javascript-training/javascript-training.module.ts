import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavascriptTrainingComponent } from './javascript-training.component';
import { JavascriptTrainingRoutingModule } from './javascript-training-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [JavascriptTrainingComponent],
  imports: [
    CommonModule,
    JavascriptTrainingRoutingModule
  ],
  exports: [RouterModule]
})
export class JavascriptTrainingModule { }

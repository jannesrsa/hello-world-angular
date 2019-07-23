import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapImagesComponent } from './bootstrap-images/bootstrap-images.component';
import { BootstrapTrainingRoutingModule } from './bootstrap-training-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [BootstrapImagesComponent],
  imports: [
    CommonModule,
    BootstrapTrainingRoutingModule
  ],
  exports: [RouterModule]
})
export class BootstrapTrainingModule { }

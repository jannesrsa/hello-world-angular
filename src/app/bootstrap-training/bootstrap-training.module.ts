import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapImagesComponent } from './bootstrap-images/bootstrap-images.component';
import { BootstrapTrainingRoutingModule } from './bootstrap-training-routing.module';
import { RouterModule } from '@angular/router';
import { BootstrapCardsComponent } from './bootstrap-cards/bootstrap-cards.component';



@NgModule({
  declarations: [BootstrapImagesComponent,
    BootstrapCardsComponent
  ],
  imports: [
    CommonModule,
    BootstrapTrainingRoutingModule
  ],
  exports: [RouterModule]
})
export class BootstrapTrainingModule { }

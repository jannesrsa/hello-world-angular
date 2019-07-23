import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapImagesComponent } from './bootstrap-images/bootstrap-images.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      { path: 'bootstraptraining', component: BootstrapImagesComponent },
    ])
  ],
  exports: [RouterModule]
})
export class BootstrapTrainingRoutingModule { }

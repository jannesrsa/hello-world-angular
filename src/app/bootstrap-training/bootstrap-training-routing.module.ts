import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapImagesComponent } from './bootstrap-images/bootstrap-images.component';
import { BootstrapCardsComponent } from './bootstrap-cards/bootstrap-cards.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      { path: 'bootstrapimages', component: BootstrapImagesComponent },
      { path: 'bootstrapcards', component: BootstrapCardsComponent },
    ])
  ],
  exports: [RouterModule]
})
export class BootstrapTrainingRoutingModule { }

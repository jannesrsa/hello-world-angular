import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BootstrapImagesComponent } from './bootstrap-images/bootstrap-images.component';
import { BootstrapCardsComponent } from './bootstrap-cards/bootstrap-cards.component';
import { BootstrapTablesComponent } from './bootstrap-tables/bootstrap-tables.component';
import { BootstrapFormsComponent } from './bootstrap-forms/bootstrap-forms.component';
import { BootstrapJsComponent } from './bootstrap-js/bootstrap-js.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      { path: 'bootstrapimages', component: BootstrapImagesComponent },
      { path: 'bootstrapcards', component: BootstrapCardsComponent },
      { path: 'bootstraptables', component: BootstrapTablesComponent },
      { path: 'bootstrapforms', component: BootstrapFormsComponent },
      { path: 'bootstrapjs', component: BootstrapJsComponent },
    ])
  ]
})
export class BootstrapTrainingRoutingModule { }

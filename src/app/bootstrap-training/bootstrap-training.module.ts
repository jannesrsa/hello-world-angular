import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapImagesComponent } from './bootstrap-images/bootstrap-images.component';
import { BootstrapTrainingRoutingModule } from './bootstrap-training-routing.module';
import { RouterModule } from '@angular/router';
import { BootstrapCardsComponent } from './bootstrap-cards/bootstrap-cards.component';
import { BootstrapTablesComponent } from './bootstrap-tables/bootstrap-tables.component';
import { BootstrapFormsComponent } from './bootstrap-forms/bootstrap-forms.component';

@NgModule({
  declarations: [
    BootstrapImagesComponent,
    BootstrapCardsComponent,
    BootstrapTablesComponent,
    BootstrapFormsComponent
  ],
  imports: [
    CommonModule,
    BootstrapTrainingRoutingModule
  ],
  exports: [RouterModule]
})
export class BootstrapTrainingModule { }

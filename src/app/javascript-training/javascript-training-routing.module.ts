import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JavascriptTrainingComponent } from './javascript-training.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      { path: 'javascripttraining', component: JavascriptTrainingComponent },
    ])
  ]
})
export class JavascriptTrainingRoutingModule { }



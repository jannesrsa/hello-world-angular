import { NgModule } from '@angular/core';
import { ServiceTypesComponent } from './service-types.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ServiceTypesComponent],
  // imports: [
  //   RouterModule.forChild([
  //     { path: '/createsmartobject', component: ServiceTypesComponent }
  //   ])
  // ],
  exports: [RouterModule]
})
export class ServiceTypesModule { }

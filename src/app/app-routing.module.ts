import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServiceTypesComponent } from './service-types/service-types.component';
import { ServiceTypesModule } from './service-types/service-types.module';

@NgModule({
  imports: [
    ServiceTypesModule,
    RouterModule.forRoot([
      { path: 'createsmartobjects', component: ServiceTypesComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ])
  ]
})
export class AppRoutingModule { }

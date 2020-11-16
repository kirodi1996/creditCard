import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditCardInfoComponent } from './credit-card-info/credit-card-info.component';

const routes: Routes = [
  { path: 'payment', component: CreditCardInfoComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

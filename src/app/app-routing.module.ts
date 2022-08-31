import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './components/page1/page1.component';
import { Page3Component } from './components/page3/page3.component';

const routes: Routes = [
  
  {path:"page3",component:Page3Component},
  {path:"**",component:Page1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

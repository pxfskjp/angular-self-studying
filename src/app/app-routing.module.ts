import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoute: Routes = [
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(
      appRoute,
      {enableTracing: true}  
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

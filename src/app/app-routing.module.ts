import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoute: Routes = [
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'crisis-list', component: CrisisListComponent },
  {path: 'hero-list', component: HeroListComponent},
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

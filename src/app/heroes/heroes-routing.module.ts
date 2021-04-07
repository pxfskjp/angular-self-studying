import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';

const heroRoutes: Routes= [
  {
    path: 'heroes',
    component: HeroListComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(heroRoutes)],
  exports: [RouterModule],
  declarations:[
    HeroListComponent,
  ]
})
export class HeroesRoutingModule { }

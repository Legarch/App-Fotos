import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';

const routes: Routes = [
  {
    path: '',
    component: PlacesPage
  },
  {
    path: 'places-details',
    loadChildren: () => import('./places-details/places-details.module').then( m => m.PlacesDetailsPageModule)
  },
  {
    path: 'place-add',
    loadChildren: () => import('./place-add/place-add.module').then( m => m.PlaceAddPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}

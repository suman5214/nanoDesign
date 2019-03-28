import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SelectPageComponent } from './select-page/select-page.component';
const routes: Routes = [{
  path: '',
  component: HomePageComponent
},
  {path: 'select',
  component: SelectPageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AstronomypicDetailComponent } from './astronomypic-detail/astronomypic-detail.component';
import { AstronomypicListComponent } from './astronomypic-list/astronomypic-list.component';

const routes: Routes = [
  { path: '', component: AstronomypicListComponent },
  { path: 'list', component: AstronomypicListComponent },
  { path: 'detail', component: AstronomypicDetailComponent }
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

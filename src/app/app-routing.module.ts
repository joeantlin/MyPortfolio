import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontComponent } from './front/front.component';
import { BackComponent } from './back/back.component';

const routes: Routes = [
    {path: '', component: FrontComponent},
    {path: 'backend', component: BackComponent},
    {path: '**', component: FrontComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
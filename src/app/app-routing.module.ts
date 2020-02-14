import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { TestPageComponent } from './test-page/test-page.component';
import { AuthGuard } from './shared/auth.guard'


const routes: Routes = [
  { path: '', redirectTo: 'test', pathMatch: 'full' },
  {path: 'login', component: AuthFormComponent},
  {path: 'test', component: TestPageComponent, canActivate: [AuthGuard]},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

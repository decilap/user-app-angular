import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListsComponent } from './user-lists/user-lists.component';

const routes: Routes = [
   { path: '', component: UserListsComponent },
   { path: 'users/:userId', component: UserDetailsComponent },
   { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

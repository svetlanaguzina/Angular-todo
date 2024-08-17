import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ToDoWorkComponent } from './to-do-work/to-do-work.component';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  { path: "toDo", component: ToDoWorkComponent },
  { path: "user", component: UserComponent },
  { path: "auth", component: AuthComponent },
  { path: "", redirectTo: "/toDo", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

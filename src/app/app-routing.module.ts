import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {UserComponent} from "./Components/user/user.component";
import {InnerUserComponent} from "./Components/inner-user/inner-user.component";


const routes: Routes = [
  {path: '', component: UserComponent},
  {path: 'user/:id', component: InnerUserComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

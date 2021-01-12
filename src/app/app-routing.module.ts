import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  { path: 'contact-form', component: ContactFormComponent },
  { path: 'contact-list', component: ContactListComponent },
  { path: 'tree', component: TreeComponent },
  { path: '',   redirectTo: '/contact-list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
